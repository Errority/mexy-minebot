const mineFlayer = require('mineflayer');


module.exports = bot => {
  bot.on('spawn', () => {
      bot.chat('allo');
  });
};