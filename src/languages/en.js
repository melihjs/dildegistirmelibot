const emojis = require("../emojis.js");

module.exports = {
  help: {
    title: (botName) => `:books: **${botName}** - Help Menu`,
    description: (prefix) => `The bot's currently prefix: **${prefix}**\n\n   - **${prefix}help** | You will see the help menu!\n   - **${prefix}bot-info** | You see the bot's statistics! \n   - **${prefix}lang** | You change the language in the server!\n   - **${prefix}prefix** | You change the bot prefix in your server!\n   - **${prefix}clear** | You delete some messages!`,
    footer: (userName) => `Requested by ${userName}`
  },
  lang: {
    changed: (userName) => `${emojis.success} The language of this server has been set to **English** :flag_gb: by **${userName}**.`,
    reset: (userName) => `${emojis.success} The language of this server has been reset by **${userName}** and set to **Turkish** :flag_tr:.`,
    permerror: () => `${emojis.error} Sorry, you can't do that. Because you don't have \`Administrator\` permission!`,
    specify: () => `${emojis.error} Please specify a valid language: \`tr\`, \`en (In use)\`\n  - If you want to reset: \`reset\``
  },
  stats: {
    title: () => "Bot's Stats!",
    description: (guildsCount, usersCount, channelsCount) => `:tools: **${guildsCount}** servers!\n:tools: **${usersCount}** users!\n:tools: **${channelsCount}** channels!`
  },
  prefix: {
    changed: (userName, newPrefix) => `${emojis.success} This server's prefix has been changed by **${userName}**, the new prefix is: **${newPrefix}**.`,
    reset: (userName) => `${emojis.success} This server's prefix has been reset by **${userName}**.`,
    permerror: () => `${emojis.error} Sorry, you can't do that. Because you don't have \`Administrator\` permission!`,
    specify: (prefix) => `${emojis.error} Please specify a valid symbol, number or letter: \`${prefix}\`...\n  - If you want to reset: \`reset\``
  },
  clear: {
    cleared: (miktar, channelName) => `${emojis.success} **${miktar}** messages were deleted from **${channelName}**.`,
    specify: () => `${emojis.error} Please specify a valid number: \`31\`...`,
    permerror: () => `${emojis.error} Sorry, you can't do that. Because you don't have \`Manage Messages\` permission!`,
    error: () => `${emojis.error} Error! I can't delete or delete messages before **14** days!`,
    errormsg: () => `${emojis.error} Error! I can't delete more than **100** messages!`,
    errormsg2: () => `${emojis.error} Error! I can't delete less than **1** messages!`
  }
};