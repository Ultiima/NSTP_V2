const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberUpdate', (oldMember, newMember) => {
  if (oldMember.roles.cache.has('1033160349731520562') === false && newMember.roles.cache.has('1033160349731520562') === true) {
    const channel = client.channels.cache.get('1069881479989051462');
    channel.send(`Congratulations, ${newMember.user.username} has just been given the role ${newMember.guild.roles.cache.get('1033160349731520562').name}!`);
  }
});

client.login(token);
