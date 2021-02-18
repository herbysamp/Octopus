const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { stripIndents } = require("common-tags");
const { embedcolor } = require("../../configs/config.json");
const { prefix } = require('../../configs/config.json');

module.exports = {
    config: {
        name: "help",
        aliases: ["h"],
        usage: "[command name] (optional)",
        category: "info",
        description: "Displays all commands that the Octopus has.",
        accessableby: "everyone"
    },
    run: async (client, message, args) => {

        const embed = new MessageEmbed()
            .setColor(embedcolor)
            .setAuthor(`${message.guild.me.displayName}`, message.guild.iconURL())
            .setThumbnail(client.user.displayAvatarURL())

        if (!args[0]) {

            embed.setDescription(`**${client.user.username}'s Prefix Is \`${prefix}\`\n\nFor Help Related To A Particular Command Type -\n\`${prefix}help [command name] Or ${prefix}help [alias]\`**`)
            embed.setFooter(`${message.guild.me.displayName} | Total Commands - ${client.commands.size - 1} Loaded`, client.user.displayAvatarURL());
            embed.addField(`${client.emotes.info} Info [8] - `, '`botinfo`, `help`, `info`, `invite`, `uptime`, `warnings`, `userinfo`, `level`')
            embed.addField(`${client.emotes.anime} Anime [5] - `, '`hug`, `pat`, `waifu`, `wink`, `poke`')
            embed.addField(`${client.emotes.chatbot} Chatbot [3] - `, '`chatbot`, `disableChatbotchannel`, `setChatbotchannel`')
            embed.addField(`${client.emotes.fun} Fun [14] - `, '`binary`, `clyde`, `comment`, `eject`, `emojify`, `github`, `iq`, `npm`, `osu`, `ping`, `reddit`, `weather`, `zalgo`, `ascii`')
            embed.addField(`${client.emotes.image} Image [11] - `, '`fire`, `respect`, `rip`, `scary`, `trash`, `triggered`, `beautiful`, `affect`, `delete`, `jail`, `gay`')
            embed.addField(`${client.emotes.administrator} Moderation [11] - `, '`ban`, `kick`, `mute`, `unmute`, `say`, `slomode`, `setnickname`, `announcement`, `say-embed`, `warn`, `resetwarn`')
            embed.addField(`${client.emotes.music1} Music [13] - `, '`clear-queue`, `filter`, `filters`, `loop`, `np`, `pause`, `lyrics`, `play`, `queue`, `resume`, `shuffle`, `skip` `stop`, `volume`')
            embed.addField(`${client.emotes.other} Other [8] -`, '`avatar`, `serverinfo`, `snipe`, `urban`, `wiki`, `addemoji`, `youtube`,`wallpaper`')
            if(message.channel.nsfw) {
                embed.addField(`${client.emotes.nsfw} NSFW [5] - `, '`anal`, `blowjob`, `cum`, `2danal`, `2dboobs`')
            } else 
            embed.setFooter(`© Octopus `, `https://cdn.discordapp.com/attachments/795006241403306054/800185618239848478/logo1_17_15059.png`)
            embed.setImage('https://cdn.discordapp.com/attachments/795006241403306054/801705729139671050/20210121_135211.jpg')
            embed.setTimestamp()

            return message.channel.send(embed)
        } else {
            let command = client.commands.get(client.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
            if (!command) return message.channel.send(embed.setTitle("**Invalid Command!**").setDescription(`**Do \`${prefix}help\` For the List Of the Commands!**`))
            command = command.config

            embed.setDescription(stripIndents`**${client.user.username} Prefix Is \`${prefix}\`**\n
            ** Command -** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\n
            ** Description -** ${command.description || "No Description provided."}\n
            ** Usage -** ${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : "No Usage"}\n
            ** Needed Permissions -** ${command.accessableby || "everyone can use this command!"}\n
            ** Aliases -** ${command.aliases ? command.aliases.join(", ") : "None."}`)
            embed.setFooter(message.guild.name, message.guild.iconURL())

            return message.channel.send(embed)
        }
    }
};
