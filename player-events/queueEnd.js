const Discord = require('discord.js');
const config = require('../configs/config.json');

module.exports = (client, message, queue) => {
	const embed = new Discord.MessageEmbed()
	.setTitle('Queue End!')
	.setDescription(`${client.emotes.error} - Music stopped as there is no more music in the queue !`)
	.setFooter(client.user.username, "https://cdn.discordapp.com/attachments/795006615401136168/795511303606632468/20210103_035826.gif")
	.setColor(config.embedcolor)
	.setTimestamp();
    message.channel.send(embed);

};