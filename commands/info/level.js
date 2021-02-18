const db = require('quick.db')
const { getInfo } = require("../../handlers/xp.js")
const canvacord = require("canvacord");
const Discord = require("discord.js");

module.exports = {
    config: {
        name: 'rank',
        description: 'see your level in server',
        aliases: [
          "rank", 
          "level",
          "top",
          "lvl"
        ],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    
    if(user.id === client.user.id) { //IF BOT
      return message.channel.send("😉 | I am on level 100")
    }
    
    if(user.bot) {
      return message.channel.send("Bot do not have levels")
    }
    
    let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0;
    
    const {level, remxp, levelxp} = getInfo(xp);
    
const rank = new canvacord.Rank()
    .setAvatar(user.displayAvatarURL({dynamic: false,  format: 'png'}))
    .setCurrentXP(remxp)
    .setRequiredXP(levelxp)
    .setLevel(level)
    .setStatus(user.presence.status)
    .setProgressBar("#00FFFF", "COLOR")
    .setUsername(user.username)
    .setDiscriminator(user.discriminator)
    .setRank(1, "a", false)
    .setBackground("IMAGE", "https://cdn.discordapp.com/attachments/797889657853313024/809729015320936468/Spanduk_Poster_Neon_Fantasi_Kreatif_Kreatif_Mimpi_Neon_Muzik_Bar_Ballroom_Parti_Poster_Pengiklanan_B.jpeg");

rank.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "rank.png");
        message.channel.send(attachment);
    });   
    
    
    
    
  }
}
