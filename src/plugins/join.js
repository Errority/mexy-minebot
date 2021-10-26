const mineFlayer = require('mineflayer');


module.exports = bot => {
  bot.once('spawn', () => {
      bot.chat('allo');
  });
};