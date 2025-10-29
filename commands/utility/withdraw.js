const { SlashCommandBuilder } = require('discord.js');
const userService = require('../../db/userController');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('give')
		.setDescription('Give money another player!')
        .addUserOption(option =>
            option.setName('target')
                .setDescription('The user to give money to')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('amount')
                .setDescription('The amount of money to give')
                .setRequired(true)),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
        const amount = interaction.options.getInteger('amount');
        if (amount <= 0) {
            await interaction.reply({ content: 'The amount must be greater than zero!', ephemeral: true });
            return;
        }
        if(user.id === interaction.user.id) {
            await interaction.reply({ content: 'You cannot give money to yourself!', ephemeral: true });
            return;
        }
        const giverBalance = userService.getUserBalance(interaction.user.id);
        if (giverBalance < amount) {
            await interaction.reply({ content: 'You do not have enough money to give that amount!', ephemeral: true });
            return;
        }
        const receiverBalance = userService.getUserBalance(user.id);
        userService.setUserBalance(interaction.user.id, giverBalance - amount);
        userService.setUserBalance(user.id, receiverBalance + amount);
        await interaction.reply({ content: `You have given ${amount} JP to <@${user.id}>!`});
	},
};