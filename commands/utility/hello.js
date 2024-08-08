const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('hi')
		.setDescription('Replies with Hello!'),
	async execute(interaction) {
		await interaction.reply('Hello!');
	},
};
