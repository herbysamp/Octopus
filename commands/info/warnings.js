const db = require('quick.db');
const Discord = require('discord.js');
const config = require('../../configs/config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: 'warnings',
        description: 'see your warning on the server ',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    const user = message.mentions.members.first() || message.author
    
  
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    
    if(warnings === null) warnings = 0;
    let embed = new Discord.MessageEmbed()
    .setTitle('⚠️Warnings⚠️')
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(message.author.displayAvatarURL())
    .setColor(`#FF0000`)
    .setTimestamp()
    .setDescription(`**Name** : ${user} \n**Total Warnings** : ${warnings}`);
    
    message.channel.send(embed)
  
  
  }
}

