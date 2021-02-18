const Discord = require('discord.js');
const config = require('../../configs/config.json');
const moment = require("moment");
require('moment-duration-format')


module.exports = {
    config: {
        name: 'uptime',
        description: 'Shows bot uptime',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (bot, message, args) => {
        const prefix = config.prefix
        if (!message.content.startsWith(prefix)) return;

        let uptime = moment.duration(bot.uptime).format("D [ days] h[ hours] m[ minutes] s[ seconds]")

        const duration = moment.duration(bot.uptime)
    let bicon = bot.user.displayAvatarURL()
    const botembed = new Discord.MessageEmbed()
        .setTitle(`<a:CvC_GreenVerif:807483980198313994>${bot.user.username}`)
        .setColor(config.embedcolor)
        .setDescription(`<a:CvC_GreenVerif:807483980198313994>**${bot.user.username} has been active for** \`${uptime}\`. \n<a:CvC_GreenVerif:807483980198313994>**The ping is currently** \`${bot.ws.ping} ms\`. \n\n  ❗  **__Attention!__** **${bot.user.username} is restarting himself after \`10 to 15 hours\` for a good quality and lagless sound!**`)
        .setTimestamp()
        .setFooter(bot.user.username, "https://cdn.discordapp.com/attachments/795006241403306054/800185618239848478/logo1_17_15059.png")
        .setThumbnail(bicon);
 message.react ('727551598640889896')
    message.channel.send(botembed);
    }
}

