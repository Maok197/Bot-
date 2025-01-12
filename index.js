const mineflayer = require('mineflayer');

// Tạo một bot mới kết nối tới server Minecraft
const bot = mineflayer.createBot({
  host: 'localhost',  // Địa chỉ server Minecraft
  port: 25565,        // Cổng của server (mặc định là 25565)
  username: 'BotUser' // Tên người chơi của bot
});

bot.on('spawn', () => {
  console.log('Bot has spawned!');
});

bot.on('chat', (username, message) => {
  if (message === 'hi') {
    bot.chat('Hello! How can I help you?');
  }
});

bot.on('error', (err) => {
  console.log('Error: ', err);
});

bot.on('end', () => {
  console.log('Bot has disconnected');
});
