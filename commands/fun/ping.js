const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'ping',
        description: 'Shows bot latency',
        aliases: ["ping"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    
        const embed = new MessageEmbed()
      .setColor(config.embedcolor)
      .setThumbnail("https://media.discordapp.net/attachments/747094092596510841/767079159977082910/2102a19ea556e1d1c54f40a3eda0d775.gif")
      .setDescription(`**${message.author.tag}**  🏓`)
      .addField(`<a:JamPasir:810021949349953567> Ping :`, `\`${Math.round(client.ws.ping)} ms\``, true)
      .setTimestamp()
      .setFooter(client.user.username, "https://cdn.discordapp.com/attachments/795006241403306054/800185618239848478/logo1_17_15059.png")
    message.channel.send(embed);

    }
}

