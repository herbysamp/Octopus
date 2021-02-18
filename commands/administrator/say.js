const Discord = require('discord.js');
const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'say',
        description: ' command bots to give messages without the other person knowing',
        aliases: [""],
        usage: '',
        accessableby: "ADMINISTRATOR",
    },
    run: async (client, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) return;
    let messages = args.join(" ");
    if (!messages)
      return message.channel.send(` Enter a message that the bot will say`);
    message.channel.send(messages);
    message.delete();
    }
}

