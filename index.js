const Discord = require('discord.js');

const client = new Discord.client();

const prefix = 'choose your own';

client.once('ready', () =>{
    console.log('your bot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(Prefix) || message.author.bot) return;
    const args = message.content.slice(Prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'your question to the bot'){
        message.channel.send('the bot replies');
    }else if(command == 'your question to the bot'){
        message.channel.send('the bot replies');
    }
});
// to continue write the else if command on the curly bracket :)
client.login('your token code here!');