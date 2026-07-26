module.exports = {
  nom: "bonjour",
  categorie: "fun",

  async execute(sock, message) {
    await sock.sendMessage(message.key.remoteJid, {
      text: "👋 Bonjour ! Je suis ton bot KnightBot."
    });
  }
};
