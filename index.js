const mineflayer = require('mineflayer');

const SERVER_HOST = 'Poboi6.aternos.me';
const SERVER_PORT = 17733; // તમારો Java/Geyser Port
const BOT_NAME = 'KhatanaBot';

function createBot() {
  console.log('Attempting connection via Mineflayer...');

  const bot = mineflayer.createBot({
    host: SERVER_HOST,
    port: Number(SERVER_PORT),
    username: BOT_NAME,
    checkTimeoutInterval: 60000
  });

  bot.on('spawn', () => {
    console.log(`✅ SUCCESS: ${BOT_NAME} connected and spawned in server!`);
  });

  bot.on('end', (reason) => {
    console.log('❌ Bot disconnected. Reason:', reason);
    console.log('Reconnecting in 15 seconds...');
    setTimeout(createBot, 15000);
  });

  bot.on('error', (err) => {
    console.log('⚠️ Error occurred:', err.message);
    setTimeout(createBot, 15000);
  });
}

createBot();
