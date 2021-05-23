exports.run = async (client, message, args) => {
  let lang = await client.data.fetch(`lang.${message.guild.id}`);
  let newPrefix = args[0];
  let degisti = client.tr.onek.degisti(message.author.username, newPrefix);
  let sifirlandi = client.tr.onek.sifirlandi(message.author.username);
  let changed = client.en.prefix.changed(message.author.username, newPrefix);
  let yetkihatasi = client.tr.onek.yetkihatasi();
  let permerror = client.en.prefix.permerror();
  let reset = client.en.prefix.reset(message.author.username);
  let belirt = client.tr.onek.belirt(client.config.bot.prefix);
  let specify = client.en.prefix.specify(client.config.bot.prefix);
  if(!message.member.hasPermission("ADMINISTRATOR")) {
    if(lang == "tr") {
      message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(yetkihatasi).setColor(client.config.color.error));
    } else if(lang == "en") {
      message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(permerror).setColor(client.config.color.error));
    };
  };
  if(!newPrefix) {
    if(lang == "tr") {
      message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(belirt).setColor(client.config.color.error));
    } else if(lang == "en") {
      message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(specify).setColor(client.config.color.error));
    };
  } else if(newPrefix == "sıfırla") {
      message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(sifirlandi).setColor(client.config.color.success));
      await client.data.delete(`prefix.${message.guild.id}`);
    } else if(newPrefix == "reset") {
      message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(reset).setColor(client.config.color.success));
      await client.data.delete(`prefix.${message.guild.id}`);
  } else if(newPrefix) {
    if(lang == "tr") {
      message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(degisti).setColor(client.config.color.success));
      await client.data.set(`prefix.${message.guild.id}`, newPrefix);
    } else if(lang == "en") {
      message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(changed).setColor(client.config.color.success));
      await client.data.set(`prefix.${message.guild.id}`, newPrefix);
    };
  };
};

exports.help = { name: "prefix", aliases: [] };