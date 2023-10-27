const Redis = require('ioredis');
const client = new Redis();
const readline = require('readline');

client.on('error', (err) => {
  console.error(err);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function formatMessage(user, message) {
  const actualTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
  return `[${actualTime}] [${user}]: ${message}`;
}

function sendMessage(user) {
  rl.question('Digite a mensagem: ', (message) => {
    const formattedMessage = formatMessage(user, message);
    client.publish('chat', formattedMessage);
    sendMessage(user);
  });
}

rl.question('Digite seu nome de usuário: ', (user) => {
  sendMessage(user);
});
