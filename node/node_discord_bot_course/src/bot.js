require("dotenv").config();

const { Client, Intents, Permissions, WebhookClient } = require("discord.js");

const PREFIX = "$";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});

const webhookClient = new WebhookClient({
  id: process.env.WEBHOOK_ID,
  token: process.env.WEBHOOK_TOKEN
});



client.on("ready", () => {
  console.log(`${client.user.username} has logged in`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  // console.log(`[${message.author.tag}]: ${message.content}`);
  // if (message.content === 'hello') {
  //   message.channel.send('hello')
  // }

  if (message.content.startsWith(PREFIX)) {
    const [command_name, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);

    if (command_name === "kick") {
      if (!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS))
        return message.reply("You do not have permissions");

      if (args.length === 0) return message.reply("Please, provide an ID");
      const member = message.guild.members.cache.get(args[0]);
      if (member) {
        member
          .kick()
          .then((member) => {
            message.channel.send(`${member} was kicked.`);
          })
          .catch((err) => {
            message.channel.send(
              `I do not have permissions to kick that user.`
            );
          });
      } else {
        message.channel.send("That member was not found");
      }
      // console.log(member);
    } else if (command_name === 'ban') {
      if (!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS))
        return message.reply("You do not have permissions");

      if (args.length === 0) return message.reply("Please, provide an ID");
    
      try {
        const user = await message.guild.members.ban(args[0]);
        message.channel.send('User was banned.');
      } catch (err) {
        message.channel.send(
          'I do not have permissions to ban that user or smth went wrong.'
        );
      }
    
    } else if (command_name === 'announce') {
      const msg = args.join(' ');
      webhookClient.send(msg);
    }
  }
});

client.on('messageReactionAdd', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  
  if (reaction.message.id === '952622978674356334') {
    switch (name) {
      case ('🍎'):
        member.roles.add(reaction.message.guild.roles.cache.find(r => r.name === 'apple').id);
        break;
      case ('🐍'):
        member.roles.add(reaction.message.guild.roles.cache.find(r => r.name === 'snake').id);
        break;
      default:
        break;
    }
  }
});

client.on('messageReactionRemove', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  
  if (reaction.message.id === '952622978674356334') {
    switch (name) {
      case ('🍎'):
        member.roles.remove(reaction.message.guild.roles.cache.find(r => r.name === 'apple').id);
        break;
      case ('🐍'):
        member.roles.remove(reaction.message.guild.roles.cache.find(r => r.name === 'snake').id);
        break;
      default:
        break;
    }
  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
