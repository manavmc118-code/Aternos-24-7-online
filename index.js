const bedrock = require('bedrock-protocol');

// તમારું અટેરનોસ સર્વર IP અને Port
const SERVER_HOST = 'Poboi6.aternos.me'; 
const SERVER_PORT = 17733;                      
const BOT_NAME = 'KhatanaBot';

function createBot() {
  console.log('Connecting bot to Minecraft server...');

  const client = bedrock.createClient({
    host: SERVER_HOST,
    port: SERVER_PORT,
    username: BOT_NAME,
    offline: true // Aternos Offline/Cracked મોડ માટે
  });

  client.on('join', () => {
    console.log(`✅ ${BOT_NAME} Successfully connected!`);
  });

  // જો સર્વર કે બોટ ડિસકનેક્ટ થાય તો 10 સેકન્ડમાં ઓટો-રીકનેક્ટ થશે
  client.on('disconnect', (reason) => {
    console.log('Disconnected:', reason);
    setTimeout(createBot, 10000);
  });

  client.on('error', (err) => {
    console.log('Error occurred:', err.message);
    setTimeout(createBot, 10000);
  });
}

createBot();
