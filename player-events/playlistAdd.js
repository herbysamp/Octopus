const Discord = require('discord.js');
const config = require('../configs/config.json');

module.exports = (client, message, playlist) => {
	const embed = new Discord.MessageEmbed()
	.setTitle('Playlist Add!')
	.setDescription(`${client.emotes.music} - ${playlist.title} has been added to the queue (**${playlist.items.length}** songs) !`)
	.setFooter(client.user.username, "https://cdn.discordapp.com/attachments/795006615401136168/795511303606632468/20210103_035826.gif")
	.setColor(config.embedcolor)
	.setTimestamp();
    message.channel.send(embed);

};