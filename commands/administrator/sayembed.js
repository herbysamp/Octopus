const Discord = require('discord.js');
const config = require('../../configs/config.json');
const { MessageEmbed } = require('discord.js');


module.exports = {
    config: {
        name: 'say-embed',
        description: ' Say anything using a bot',
        aliases: ["say-embed"],
        usage: ` message`,
        accessableby: "",
    },
    run: async (bot, message, args) => {
      try {
        if (args.leght === 0)
          return message.channel.send('Please enter a word')
        message.delete({ timeout: 500 })
        
        const embed = new MessageEmbed()
        .setDescription(args.join(' '))
        .setTimestamp()
        .setColor(`#00F2FF`);
        
      message.channel.send(embed)
      } catch (e) {
        throw e;
      };
    }
};