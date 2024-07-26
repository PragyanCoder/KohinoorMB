/*
*/

const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "support",
  description: "Get support server link",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const supportServerLink = "https://discord.gg/h7mVSg3W";
      const githubLink = "https://github.com/AnnayanX";
      const replitLink = "https://replit.com/@VasudevKrishnaX";
      const youtubeLink = "https://www.youtube.com/@VasudevKrishnaX";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://graph.org/file/3d5497a6186f2c2e15d0b.jpg', 
              url: 'https://discord.gg/h7mVSg3W'
          })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- GitHub - ${githubLink}\n- Replit - ${replitLink}\n- YouTube - ${youtubeLink}`)
            .setImage('https://graph.org/file/3d5497a6186f2c2e15d0b.jpg')
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};

/*
*/
