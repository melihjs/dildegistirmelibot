exports.run = async (client, message, args) => {
  let lang = client.data.fetch(`lang.${message.guild.id}`);
  if(!message.member.hasPermission("ADMINISTRATOR")) {
    if(lang == "tr") {
      message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(client.tr.sil.yetkihatasi()).setColor(client.config.color.error));
    } else if(lang == "en") {
      message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(client.en.clear.permerror()).setColor(client.config.color.error));
    };
  };
  let miktar = args[0];
  if(!miktar) {
    if(lang == "tr") {
      return message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(client.tr.sil.belirt()).setColor(client.config.color.error))
    } else if(lang == "en") {
      return message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(client.en.clear.specify()).setColor(client.config.color.error))
    };
  };
  if(isNaN(miktar)) {
    if(lang == "tr") {
      return message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(client.tr.sil.belirt()).setColor(client.config.color.error))
    } else if(lang == "en") {
      return message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(client.en.clear.specify()).setColor(client.config.color.error))
    };
  };
  if(miktar > 100) {
    if(lang == "tr") {
      return message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(client.tr.sil.hatamsj()).setColor(client.config.color.error))
    } else if(lang == "en") {
      return message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(client.en.clear.errormsg()).setColor(client.config.color.error))
    };
  };

  if(miktar < 1) {
    if(lang == "tr") {
      return message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(client.tr.sil.hatamsj2()).setColor(client.config.color.error))
    } else if(lang == "en") {
      return message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(client.en.clear.errormsg2()).setColor(client.config.color.error))
    };
  };
  if(miktar) {
    if(lang == "tr") {
      message.channel.bulkDelete(miktar).then((mse) => { message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(client.tr.sil.silindi(miktar, message.channel.name)).setColor(client.config.color.success))}).catch(error => { message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(client.tr.sil.hata()).setColor(client.config.color.error))});
    } else if(lang == "en") {
      message.channel.bulkDelete(miktar).then((mse) => { message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(client.en.clear.cleared(miktar, message.channel.name)).setColor(client.config.color.success))}).catch(error => { message.channel.send(new (require("discord.js")).MessageEmbed().setDescription(client.en.clear.error()).setColor(client.config.color.error))});
    };
  };
};

exports.help = { name:"clear", aliases:["sil", "temizle","purge"]};