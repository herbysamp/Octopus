const Discord = require('discord.js');
const config = require('../../configs/config.json');
const figlet = require('figlet');

module.exports = {
    config: {
        name: 'ascii',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
    if(!args[0]) return message.channel.send('**Berikan Sebuah Kata**');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('**Kesalahan**');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Teks Maksimal Adalah 2000 teks')

            message.channel.send('```' + data + '```')
        })
    }
}

