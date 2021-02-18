const client = require('nekos.life');

const Discord = require('discord.js')

const neko = new client();

module.exports = {

    config: {

        name: '2danal',

        description: 'anime anal sex images',

        aliases: [""],

        usage: '',

        accessableby: "",

    },

    run: async (client, message, args) => {

    

  //Checks channel for nsfw

  var errMessage = "Channel Not Activating `NSFW`";

  if (!message.channel.nsfw) {

      message.react('рџ”ћ');

      return message.reply(errMessage)

      .then(msg => {

      msg.delete({ timeout: 3000 })

      })

      

  }

        async function work() {

        let owo = (await neko.nsfw.anal());

        const anal = new Discord.MessageEmbed()

        .setTitle("2D Anal Gif")

        .setImage(owo.url)

        .setThumbnail(client.user.displayAvatarURL())

        .setFooter(client.user.username, client.user.displayAvatarURL())

        .setColor(`#FF0000`)

        .setURL(owo.url);

        message.channel.send(anal);

}

      work();

}

                };
