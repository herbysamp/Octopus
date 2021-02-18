const Discord = require('discord.js');
const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'invite',
        description: 'Link to invite me',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setThumbnail(client.user.avatarURL())
    .setDescription(
      `**Octopus Bot Project** \n\n**👋 Hey!\n Do you want Invite me? [Click Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot) to Invite me!\nThanks for supporting me.** ❤️`
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
    message.channel.send(embed)
    }
}

