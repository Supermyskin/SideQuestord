const { Client, IntentsBitField, REST, Routes, Events, GatewayIntentBits, PermissionsBitField } = require('discord.js');
require('dotenv').config();
const fs = require("fs");

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
    const userId = interaction.user.id;

    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        interaction.reply("Pong!")
    }
    else if (interaction.commandName === 'regroles') {
        if (interaction.member.permissions.has(PermissionsBitField.Flags.Administrator) == true) {
            interaction.reply("✅ The roles should be registered, but I have yet to add it as a feture :(");
        }
        else {
            interaction.reply("❌ You must have Administrator privilages to use this command.");
        }
    }
});

client.once("clientReady", () => {
    console.log("SideQuestord is online!");
});