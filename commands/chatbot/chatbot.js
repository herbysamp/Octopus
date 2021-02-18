const Discord = require('discord.js');

const config = require('../../configs/config.json');

const db = require('quick.db')

module.exports = {

    config: {

        name: 'chatbot',

        description: 'Shows ChatBot\'s config',

        aliases: ["chatbot"],

        usage: '',

        accessableby: "",

    },

    run: async (client, message, args) => {

      

        const embedd = new Discord.MessageEmbed()

        .setThumbnail(client.user.avatarURL())

        .setDescription(

          `**рџ‘‹ Hey!\n Type \`${config.prefix}setchatbotchannel\` - To Set a Channel \n Type \`${config.prefix}disablechatbotchannel\` - To Disable a Channel.**\n **ChatBot Channel Set - None.** `

        )

       .addField(

          "Support Link: ",

          `**[Click Here!](https://discord.gg/bc9h3MMAaC)**`,

          true

        )

        .addField(

          "Vote Link:",

          `**[Click Here!](https://discordbotlist.com/bots/octopus-8162/upvote)**`,

          true

        )

        .setTimestamp()

        .setFooter(

          client.user.username,

          "https://cdn.discordapp.com/attachments/795006241403306054/800185618239848478/logo1_17_15059.png"

        )

        .setColor(config.embedcolor);

      

       let channel1 = db.fetch(`chatbot_${message.guild.id}`);

      if(!channel1) return message.channel.send(embedd)

      var sChannel = message.guild.channels.cache.get(channel1);

      let embedvch = "<#" + sChannel.id + ">"

      

      const embed = new Discord.MessageEmbed()

      

        .setThumbnail(client.user.avatarURL())

        .setDescription(

          `**${client.user.username} Project** \n\n**рџ‘‹ Hey!\n Type \`${config.prefix}setchatbotchannel\` - To Set a Channel \n Type \`${config.prefix}disablechatbotchannel\` - To Disable a Channel.**\n **ChatBot Channel Set as - ${embedvch}**` 

        )

       .addField(

          "Support Link: ",

          `**[Click Here!](https://discord.gg/bc9h3MMAaC)**`,

          true

        )

        .addField(

          "Vote Link:",

          `**[Click Here!](https://discordbotlist.com/bots/octopus-8162/upvote)**`,

          true

        )

        .setTimestamp()

        .setFooter(

          client.user.username,

          "https://cdn.discordapp.com/attachments/795006241403306054/800185618239848478/logo1_17_15059.png"

        )

        .setColor(config.embedcolor);

      message.channel.send(embed);

    }

}
