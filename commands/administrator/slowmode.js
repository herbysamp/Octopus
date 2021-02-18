const Discord = require('discord.js');
const config = require('../../configs/config.json');
const ms = require('ms')

module.exports = {
    config: {
        name: 'slowmode',
        description: ' set slow mode on the text channel',
        aliases: [""],
        usage: '(#channel) (time {s},{m},{h})',
        accessableby: "ADMINISTRATOR",
    },
    run: async (client, message, args) => {
    if (!message.member.permissions.any(["ADMINISTRATOR", "MANAGE_CHANNELS"])) {
    return message.channel.send("You are not an admin");
  }
  
  let channel = message.mentions.channels.first(),
      time = args.slice(1).join(" ");
  
  if (!channel) time = args.join(" "), channel = message.channel;
  // If the user doesn't includes the channel.
  
  if (message.flags[0] === "off") {
    channel.setRateLimitPerUser(0);
    return message.channel.send(`<#${channel.id}> slowmode has been disabled`);
  }
  
  if (!time) return message.channel.send("input a valid time.");
  
  let convert = ms(time); // This will results the milliseconds.
  let toSecond = Math.floor(convert / 1000); // This will convert the ms to s. (seconds)
  
  if (!toSecond || toSecond == undefined) return message.channel.send("wrong time format!");
  
  if (toSecond > 21600) return message.channel.send("Maximum time is 6 hours");
  else if (toSecond < 1) return message.channel.send("minimum time of 1 second.");
  
  await channel.setRateLimitPerUser(toSecond);
  return message.channel.send(`Channel: <#${channel.id}>  has been in the slow mode setting :**${ms(ms(time), {long: true})}**.`);
}
}