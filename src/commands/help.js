exports.run = async (client, message, args) => {
  let prefix = client.data.fetch(`prefix.${message.guild.id}`) || client.config.bot.prefix;
  let lang = client.data.fetch(`lang.${message.guild.id}`);
  if(lang == "tr") {
    message.channel.send(new (require("discord.js")).MessageEmbed().setTitle(client.tr.yardim.title(client.user.username)).setDescription(client.tr.yardim.description(prefix)).setFooter(client.tr.yardim.footer(message.author.username), message.author.displayAvatarURL({dynamic:true})).setColor(client.config.color.help));
  } else if(lang == "en") {
    message.channel.send(new (require("discord.js")).MessageEmbed().setTitle(client.en.help.title(client.user.username)).setDescription(client.en.help.description(prefix)).setFooter(client.en.help.footer(message.author.username), message.author.displayAvatarURL({dynamic:true})).setColor(client.config.color.help));
  };
};

exports.help = { name: "help", aliases: ["h", "yardım", "y"] }