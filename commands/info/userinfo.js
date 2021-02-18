const Discord = require('discord.js');
const config = require('../../configs/config.json');
const moment = require('moment');

module.exports = {
    config: {
        name: 'userinfo',
        description: '',
        aliases: ["whois"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    let user;

    if (!args[0]) {
      user = message.member;
    } else {


   


      user = message.mentions.members.first() || await message.guild.members.fetch(args[0]).catch(err => { return message.channel.send(":x: Unable to find this Person") })
    }

    if (!user) {
      return message.channel.send(":x: Didn't find the person")
    }


    //OPTIONS FOR STATUS

    let stat = {
      online: "https://emoji.gg/assets/emoji/9166_online.png",
      idle: "https://emoji.gg/assets/emoji/3929_idle.png",
      dnd: "https://emoji.gg/assets/emoji/2531_dnd.png",
      offline: "https://emoji.gg/assets/emoji/7445_status_offline.png"
    }

    //NOW BADGES
    let badges = await user.user.flags
    badges = await badges ? badges.toArray() : ["None"]

    let newbadges = [];
    badges.forEach(m => {
      newbadges.push(m.replace("_", " "))
    })

    let embed = new Discord.MessageEmbed()
      .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))

    //ACTIVITY
    let array = []
    if (user.user.presence.activities.length) {

      let data = user.user.presence.activities;

      for (let i = 0; i < data.length; i++) {
        let name = data[i].name || "None"
        let xname = data[i].details || "None"
        let zname = data[i].state || "None"
        let type = data[i].type

        array.push(`**${type}** : \`${name} : ${xname} : ${zname}\``)

        if (data[i].name === "Spotify") {
          embed.setThumbnail(`https://cdn.discordapp.com/attachments/797889657853313024/809671521978548254/PngItem_1487614.png`)
        }

        embed.setDescription(array.join("\n"))

      }
    }

      //EMBED COLOR BASED ON member
      embed.setColor(user.displayHexColor === "#000000" ? "#ffffff" : user.displayHexColor)

      //OTHER STUFF 
      embed.setAuthor(user.user.tag, user.user.displayAvatarURL({ dynamic: true }))

      //CHECK IF USER HAVE NICKNAME
      if (user.nickname !== null) embed.addField("Name", user.nickname)
      embed.addField("Join Server At :", moment(user.joinedAt).format("LLLL"))
        .addField("Account Create : ", moment(user.user.createdAt).format("LLLL"))
        .addField("User Info :", `ID: \`${user.user.id}\`\nDiscriminator : ${user.user.discriminator}\nBot: ${user.user.bot}\nDeleted User: ${user.deleted}`)
        .addField("Badge : ", newbadges.join(", ").toLowerCase() || "None")
        .setFooter(user.user.presence.status, stat[user.user.presence.status])
        


      return message.channel.send(embed).catch(err => {
        return message.channel.send("Error : " + err)
      })


    }
}

