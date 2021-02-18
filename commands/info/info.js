const mapping = {
    " ": "  ",
    "0": ":zero:",
    "1": ":one:",
    "2": ":two:",
    "3": ":three:",
    "4": ":four:",
    "5": ":five:",
    "6": ":six:",
    "7": ":seven:",
    "8": ":eight:",
    "9": ":nine:",
    "!": "!",
    "?": "?",
    "#": "#",
    "*": "*"
  };
  const Discord = require('discord.js');
  const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'info',
        description: 'Information about bot',
        aliases: ["info"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
        "abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
            mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
          });
            let guilds;
            let channels;
            let users;
          setTimeout(()=>{
            guilds = 
                `${client.guilds.cache.size}`
                .split("")
                .map(c => mapping[c] || c)
                .join("")
            channels = 
                `${client.channels.cache.size}`
                .split("")
                .map(c => mapping[c] || c)
                .join("")
            let sayy = 0;
            client.guilds.cache.forEach(x =>{
               
               sayy+= x.memberCount
               
             })
             users = 
                
                
                 
                 `${sayy}`
                .split("")
                .map(c => mapping[c] || c)
                .join("")
          
             },200)
            //let kullanicisayi = donustur()
          setTimeout(()=>{
            const embed = new Discord.MessageEmbed()
            .setImage("https://cdn.discordapp.com/attachments/795006615401136168/795511243875287050/tenor.gif ")
          .setThumbnail(client.user.avatarURL())
          .setDescription("**Octopus Project.**"+"\n\n<a:CvC_InfoBlue:807483359861145610> **Number of servers serviced :** " + guilds +
          "\n<a:CvC_InfoBlue:807483359861145610> **Number of channels served : ** " + channels +
          "\n<a:CvC_InfoBlue:807483359861145610> **Number of users served : ** " + users +
          "\n\n<:Verif:807863095157981204>**Developers:**\n <@710347286961717258>")
          .addField("Invite Link: ",`**[Click Here!](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)**`, true)
          .addField("Support Link: ",`**[Click Here!](https://discord.gg/bc9h3MMAaC)**`, true)
          .addField("Vote Link:",`**[Click Here!](https://discordbotlist.com/bots/octopus-8162/upvote)**`, false)
          .setTimestamp()
          .setFooter(client.user.username, "https://cdn.discordapp.com/attachments/795006241403306054/800185618239848478/logo1_17_15059.png")
          .setColor(config.embedcolor);
           message.react ('<a:CvC_lonceng:807483934156914739>')
          message.channel.send(embed)
                     },500)
    }
}

