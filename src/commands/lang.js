exports.run = async (client, message, args) => {
  let degisti = `${client.tr.dil.degisti(message.author.username)}`;
  let changed = `${client.en.lang.changed(message.author.username)}`;
  let sifirlandi = `${client.tr.dil.sifirlandi(message.author.username)}`;
  let reset = `${client.en.lang.reset(message.author.username)}`;
  let yetkihatasi = `${client.tr.dil.yetkihatasi()}`;
  let permerror = `${client.en.lang.permerror()}`;
  let belirt = `${client.tr.dil.belirt()}`;
  let specify = `${client.en.lang.specify()}`;
  let lang = client.data.fetch(`lang.${message.guild.id}`);
  let la = args[0];
  if(!message.member.hasPermission("ADMINISTRATOR")) {
    if(lang == "tr") {
      message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(yetkihatasi).setColor(client.config.color.error));
    } else if(lang == "en") {
      message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(permerror).setColor(client.config.color.error));
    };
  } else if(!la) {
    if(lang == "tr") {
      message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(belirt).setColor(client.config.color.error));
    } else if(lang == "en") {
      message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(specify).setColor(client.config.color.error));
    };
  } else if(la == "tr") { 
    message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(degisti).setColor(client.config.color.success));
    await client.data.set(`lang.${message.guild.id}`, "tr");
  } else if(la == "en") {
    message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(changed).setColor(client.config.color.success));
    await client.data.set(`lang.${message.guild.id}`, "en");
  } else if(la == "sıfırla") {
    message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(sifirlandi).setColor(client.config.color.success));
    await client.data.set(`lang.${message.guild.id}`, "tr");
  } else if(la == "reset") {
    message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(reset).setColor(client.config.color.success));
    await client.data.set(`lang.${message.guild.id}`, "tr");
  };
};

exports.help = { name: "lang", aliases: ["language", "dil"] };