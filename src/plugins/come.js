const { owner } = require('../../config')
const mineflayer = require('mineflayer')
const { Movements } = require('mineflayer-pathfinder')
const { GoalNear } = require('mineflayer-pathfinder').goals

/**
 * 
 * @param {mineflayer.Bot} bot 
 */
module.exports = bot => {
bot.once('spawn', () => {

    const mcData = require('minecraft-data')(bot.version)
    const defaultMove = new Movements(bot, mcData)

    bot.on('chat', function(username, message) {
        if (username === bot.username || username != owner) return

        const target = bot.players[username] ? bot.players[username].entity : null
        if (message === 'come') {
            if (!target) {
                bot.chat('ich sehe dich nicht')
                return
                
            }
            const p = target.position

            bot.pathfinder.setMovements(defaultMove)
            bot.pathfinder.setGoal(new GoalNear(p.x, p.y, p.z, 1))
        }
    })

})
}


