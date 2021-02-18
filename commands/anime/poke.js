const Discord = require('discord.js');
const config = require('../../configs/config.json');
const client = require('nekos.life');
const neko = new client();
const utils = require('../../utils');

module.exports = {
    config: {
        name: 'poke',
        description: 'Poke people using animated gifs',
        aliases: [""],
        usage: '@user',
        accessableby: "",
    },
    run: async (client, message, args) => {
    
      const user = message.mentions.users.first();
        if(!user)
        return message.reply('Mention someone to poke');

        async function work() {
        let owo = (await neko.sfw.poke());

        const pokeembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You have been poked ")
        .setDescription((user.toString() + " got poked by " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#00FFFD`)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setURL(owo.url);
        message.channel.send(pokeembed);
      
    }
      work();
}

}