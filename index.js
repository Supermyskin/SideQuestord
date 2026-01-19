const { Client, IntentsBitField, REST, Routes, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMembers,
    ],
});

client.login(process.env.DISCORD_BOT_TOKEN);

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        interaction.reply('Pong!');
    }
});

client.once("clientReady", () => {
  console.log("SideQuestord is online!");
});
