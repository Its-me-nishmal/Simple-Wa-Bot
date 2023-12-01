const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client();

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('authenticated', (session) => {
  console.log('Authenticated');
});

client.on('ready', () => {
  console.log('Client is ready');
});

client.on('message', (message) => {
  if (message.body.toLowerCase() === 'hello') {
    message.reply('Hi there!');
  }
});

client.initialize();
