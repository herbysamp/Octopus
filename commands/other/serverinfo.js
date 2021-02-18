const Discord = require('discord.js');
const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'serverinfo',
        description: 'Shows informations about server',
        aliases: ["sinfo",],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    
        const onlineUsers = {
            online: message.guild.presences.cache.filter(presence => presence.status === "online").size,
            idle: message.guild.presences.cache.filter(presence => presence.status === "idle").size,
            dnd: message.guild.presences.cache.filter(presence => presence.status === "dnd").size,
          };
    
          const embed = new Discord.MessageEmbed()
            .setColor(config.embedcolor)
            .setTitle(`${message.guild.name}`)
            .setThumbnail(message.guild.iconURL)
            .addField(`<:online:795060341607890954> **Online Users**`, `≫ \`${onlineUsers.online}\``, true)
            .addField(`👤 **Total Users**`,  `≫ \`${message.guild.memberCount}\``, true)
            .addField(`📜 **Roles**`, `≫ \`${message.guild.roles.cache.size}\``, true)
            .addField(`💬 **Text Channels**`, `≫ \`${message.guild.channels.cache.size}\``, true)
            .addField(`🌍 **Server Region**`, `≫ \`${message.guild.region}\``, true)
            .addField(`😎 **Emotes**`, `≫ \`${message.guild.emojis.cache.size}\``, true)
            .setTimestamp()
            .setFooter(client.user.username, "https://cdn.discordapp.com/attachments/795006241403306054/800185618239848478/logo1_17_15059.png")
    
          message.channel.send(embed);
    }
}

