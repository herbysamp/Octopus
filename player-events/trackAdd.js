const Discord = require('discord.js');
const config = require('../configs/config.json');

module.exports = (client, message, queue, track) => {
	const embed = new Discord.MessageEmbed()
	.setTitle('Track Added!')
	.setDescription(`${client.emotes.music} - ${track.title} has been added to the queue !`)
	.setFooter(client.user.username, "https://cdn.discordapp.com/attachments/795006615401136168/795511303606632468/20210103_035826.gif")
	.setColor(config.embedcolor)
	.setTimestamp();
    message.channel.send(embed);

};