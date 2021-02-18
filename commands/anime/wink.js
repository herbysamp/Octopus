const Discord = require('discord.js');

const config = require('../../configs/config.json');

const superagent = require('superagent');

module.exports = {

    config: {

        name: 'wink',

        description: 'winks others ;)',

        aliases: ["wink"],

        usage: '<user>',

        accessableby: "",

    },

    run: async (client, message, args) => {

        let { body } = await superagent.get(`https://some-random-api.ml/animu/wink`);

        const embed = new Discord.MessageEmbed()

          .setColor(config.embedcolor)

          .setTitle("Here's your Wink 😉 ")

          .setImage(body.link)

          .setTimestamp()

          .setFooter(client.user.username, "https://cdn.discordapp.com/attachments/795006241403306054/800185618239848478/logo1_17_15059.png");

        message.channel.send(embed);

    }

}

