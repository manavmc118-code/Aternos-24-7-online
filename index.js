const bedrock = require('bedrock-protocol');

const SERVER_HOST = 'Poboi6.aternos.me';
const SERVER_PORT = 17733;
const BOT_NAME = 'KhatanaBot';

function createBot() {
  console.log('Connecting bot to Minecraft server...');

  const client = bedrock.createClient({
    host: SERVER_HOST,
    port: Number(SERVER_PORT),
    username: BOT_NAME,
    offline: true,
    // સર્વર સાથે વર્ઝન મેચ કરવા માટે auto/false રાખવું
    version: '1.26.40', 
    skipPing: true,
    connectTimeout: 30000
  });

  client.on('join', () => {
    console.log(`✅ SUCCESS: ${BOT_NAME} joined the server!`);
  });

  client.on('disconnect', (packet) => {
    console.log('❌ Disconnected:', packet);
    console.log('Reconnecting in 15 seconds...');
    setTimeout(createBot, 15000);
  });

  client.on('error', (err) => {
    console.log('⚠️ Error:', err.message);
    setTimeout(createBot, 15000);
  });
}

createBot();
