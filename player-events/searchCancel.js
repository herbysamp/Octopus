const Discord = require('discord.js');
const config = require('../configs/config.json');

module.exports = (client, message, query, tracks) => {
	const embed = new Discord.MessageEmbed()
	.setTitle('Search Cancelled!')
	.setDescription(`${client.emotes.error} - You did not provide a valid response ... Please send the command again !`)
	.setFooter(client.user.username, "https://cdn.discordapp.com/attachments/795006615401136168/795511303606632468/20210103_035826.gif")
	.setColor(config.embedcolor)
	.setTimestamp();
    message.channel.send(embed);

};