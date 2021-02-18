const Discord = require('discord.js');
const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'announcement',
        description: 'make an announcement using an octopus bot',
        aliases: ["announce", "anc"],
        usage: '[#channel] [message]',
        accessableby: "ADMINISTRATOR",
    },
    run: async (client, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`**${message.author.username}**, you do not have access to use this command`)
      }
    let rChannel = message.mentions.channels.first();
    if (!rChannel)
      return message.channel.send(
        `You did not specify your channel to send the announcement too!`
      );
    console.log(rChannel);
    let msg = args.slice(1).join(" ");
      if (!msg)
      return message.channel.send("Enter the announcement message")
    
    const _ = new Discord.MessageEmbed()
      .setTitle(`Announcement📢`)
      .setDescription(`${msg}`)
      .setTimestamp()
      .setFooter(message.author.username, message.author.displayAvatarURL())
      .setColor("RANDOM");
    rChannel.send(_);
    message.delete();
      
    }
}

