const discord = require("discord.js");
const data = require("quick.db");
const fs = require("fs");
const config = require("./src/config.json");
const client = new discord.Client();
require("./src/handlers/event/Loader.js")(client);
client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.discord = discord;
client.config = config;
client.data = data;
client.logger = console;
client.loader = fs;
client.tr = require("./src/languages/tr.js");
client.en = require("./src/languages/en.js");

client.on('ready', () => {
  client.logger.log(`[BOT]: ${client.user.tag} ismiyle bağlandım!`);
  client.user.setPresence({
    activity: {
      name: `${client.config.bot.prefix}yardım - ${client.guilds.cache.array().length} sunucu!`,
      type: "WATCHING"
    },
    status: "idle"
  });
});

client.loader.readdir('./src/commands/', (err, files) => {
  if(err) client.logger.error(err);
  client.logger.log(`[BOT]: ${files.length} adet komut yüklenecek!`);
  files.forEach(f => {
    let cmd = require(`./src/commands/${f}`);
    client.logger.log(`[BOT]: ${cmd.help.name} komutu yüklendi!`)
    client.commands.set(cmd.help.name, cmd);
    cmd.help.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name)
    });
  });
});

client.on('guildCreate', guild => {
  client.data.set(`lang.${guild.id}`, "tr");
});

client.login(client.config.bot.token).catch(error => { client.logger.error("[BOT]: Token yanlış bruhh!") })
