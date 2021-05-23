exports.run = async (client, message, args) => {
  let lang = client.data.fetch(`lang.${message.guild.id}`);
  if(lang == "tr") {
    message.channel.send(new (require("discord.js")).MessageEmbed().setTitle(client.tr.istatistik.title()).setDescription(client.tr.istatistik.description(client.guilds.cache.array().length, client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), client.channels.cache.array().length)).setColor(client.config.color.stats));
  } else if(lang == "en") {
    message.channel.send(new (require("discord.js")).MessageEmbed().setTitle(client.en.stats.title()).setDescription(client.en.stats.description(client.guilds.cache.array().length, client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), client.channels.cache.array().length)).setColor(client.config.color.stats));
  };
};

exports.help = { name: "botInfo", aliases: ["botinfo", "bot-info", "botbilgi", "botBilgi", "i", "s", "stats", "istatistik", "bot-bilgi"] };