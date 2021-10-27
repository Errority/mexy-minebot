const mineflayer = require('mineflayer')
const { owner } = require('../../config')



/**
 * 
 * @param {mineflayer.Bot} bot 
 */
module.exports = bot => {
    bot.once('spawn', () => {
        mcdata = require('minecraft-data')(bot.version)
        bot.on('chat', function(username, message) {
            const args = message.split(' ');
             if (args[0] !== 'drop' || username != owner) return;
             const targetBlock = mcdata.itemsByName[args[1]];
             bot.toss(targetBlock.id);
                
            

             

        })
       
    })
}