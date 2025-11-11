Japanese Garden LoL Betting Bot 🎮💰
Motivation
Bu proje, Discord.js v14 tabanlı bir League of Legends bahis botudur. Kullanıcılar, LoL maçları üzerinden bahis yapabilir, liderlik tablosunu görebilir ve oyun sonuçlarına göre ödüller kazanabilirler. Riot API üzerinden canlı maç verileri alınır ve SQLite ile kullanıcı/bahis verileri saklanır.

Quick Start
🚀 Özellikler
Slash Commands desteği (/lolpoll, /leaderboard, /ping)

Riot API entegrasyonu ile canlı maç takibi

Bahis sistemi: kullanıcılar maç sonuçlarına göre Win/Lose tahmini yapar

Balance sistemi: her kullanıcıya başlangıçta 1000 JP verilir

Liderlik tablosu: /leaderboard komutu ile en zengin 10 kullanıcı

SQLite (better-sqlite3) altyapısı ile kalıcı veri saklama

Dinamik butonlar + modal etkileşimleri ile kullanıcı dostu arayüz

📂 Proje Yapısı
text
.
├── commands/         # Slash command klasörü
│   └── utility/      # Leaderboard, lolpoll, ping gibi komutlar
├── db/               # SQLite veri işlemleri
│   ├── db.js
│   ├── betController.js
│   ├── userController.js
│   └── champions.json
├── events/           # Discord.js event handler'lar
│   ├── interactionButton.js
│   ├── interactionCreate.js
│   ├── interactionModal.js
│   └── ready.js
├── util/             # Yardımcı fonksiyonlar
│   └── watchmatch.js
├── riot-api.js       # Riot API entegrasyonu
├── index.js          # Bot giriş noktası
├── deploy-commands.js# Slash komutlarını Discord'a yükleme
├── package.json
├── eslint.config.js
└── README.md
⚙️ Kurulum
Repoyu klonlayın:

text
git clone [https://github.com/akatakan/Discord-Bot.git](https://github.com/akatakan/Discord-Bot.git)
cd Discord-Bot
Bağımlılıkları yükleyin:

text
yarn install
.env dosyası oluşturun ve gerekli bilgileri ekleyin:

text
TOKEN=discord_bot_token
CLIENT_ID=discord_client_id
GUILD_ID=discord_server_id
RIOT_API_KEY=riot_api_key
Slash komutlarını dağıtın:

text
node deploy-commands.js
Botu başlatın:

text
node index.js
🛠 Kullanılan Teknolojiler
discord.js v14 – Discord bot framework

better-sqlite3 – SQLite database yönetimi

axios – Riot API istekleri

dotenv – Ortam değişkenleri

Usage
🎮 Komutlar
/ping → Bot yanıt veriyor mu test eder

/leaderboard → En zengin 10 kullanıcıyı listeler

/lolpoll region:<TR/EUW/NA...> summonername:<İsim#Tag> betamount:<Miktar>

Oyuncu aktif maçtaysa, bahis penceresi açar

Kullanıcılar Win/Lose tahmini yapabilir

📊 Bahis Sistemi Akışı
/lolpoll → Maç bulunup embed paylaşılır

Kullanıcılar bahis butonuna tıklar → Modal açılır

Kullanıcı miktar ve tahmini girer

Maç bitince Riot API’den sonuç alınır → kazananlara ödül verilir

📝 Notlar
Varsayılan bakiye: 1000 JP

Bahis sonrası kullanıcı bakiyesi anında güncellenir

Bahis süresi: maç başladıktan sonra 5 dakika ile sınırlıdır

Contributing
Bu projeye katkıda bulunmak istiyorsanız, lütfen GitHub reposunu fork'layın ve pull request gönderin. Yeni özellikler için commands/ veya events/ klasörlerini genişletin, veritabanı değişiklikleri için db/ altındaki controller'ları güncelleyin. Kod standartları için ESLint'i kullanın (eslint.config.js dosyasına bakın). Herhangi bir hata veya öneri için issues sekmesini açın. Riot API entegrasyonunda rate limit'lere dikkat edin ve .env dosyasındaki anahtarları paylaşmayın.

