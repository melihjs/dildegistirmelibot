const emojis = require("../emojis.js");

module.exports = {
  yardim: {
    title: (botName) => `:books: **${botName}** - Yardım Menüsü`,
    description: (prefix) => `Botun şu anlık geçerli ön eki: **${prefix}**\n\n   - **${prefix}yardım** | Yardım menüsünü görürsün!\n   - **${prefix}bot-bilgi** | Botun istatistiğini görürsün!\n   - **${prefix}dil** | Sunucu içi dili değiştirirsin!\n   - **${prefix}prefix** | Sunucunuzda botun ön ekini değiştirebilirsiniz!\n   - **${prefix}sil** | Bazı mesajları silersiniz!`,
    footer: (userName) => `${userName} tarafından istendi.`
  },
  dil: {
    degisti: (userName) => `${emojis.success} **${userName}** tarafından bu sunucunun dili **Türkçe** :flag_tr: olarak ayarlandı.`,
    sifirlandi: (userName) => `${emojis.success} **${userName}** tarafından bu sunucunun dili sıfırlandı ve **Türkçe** :flag_tr: olarak ayarlandı.`,
    yetkihatasi: () => `${emojis.error} Maalesef, bunu yapamıyorsun. Çünkü \`Yönetici\` yetkin yok!`,
    belirt: () => `${emojis.error} Lütfen geçerli bir dil belirt: \`tr (Kullanılıyor)\`, \`en\`\n  - Eğer sıfırlamak istiyorsan: \`sıfırla\``
  },
  istatistik: {
    title: () => "Bot İstatistiği!",
    description: (guildsCount, usersCount, channelsCount) => `:tools: **${guildsCount}** sunucu!\n:tools: **${usersCount}** kullanıcı!\n:tools: **${channelsCount}** kanal!`
  },
  onek: {
    degisti: (userName, newPrefix) => `${emojis.success} Bu sunucunun ön eki **${userName}** tarafından değiştirildi, yeni ön ek: **${newPrefix}**.`,
    sifirlandi: (userName) => `${emojis.success} Bu sunucunun ön eki **${userName}** tarafından sıfırlandı.`,
    yetkihatasi: () => `${emojis.error} Maalesef, bunu yapamıyorsun. Çünkü \`Yönetici\` yetkin yok!`,
    belirt: (prefix) => `${emojis.error} Lütfen geçerli bir sembol, sayı veya harf belirt: \`${prefix}\`...\n  - Eğer sıfırlamak istiyorsan: \`sıfırla\``
  },
  sil: {
    silindi: (miktar, channelName) => `${emojis.success} **${channelName}** adlı kanaldan **${miktar}** adet mesaj silindi.`,
    belirt: () => `${emojis.error} Lütfen geçerli bir sayı belirt: \`31\`...`,
    yetkihatasi: () => `${emojis.error} Maalesef, bunu yapamıyorsun. Çünkü \`Mesajları Yönet\` yetkin yok!`,
    hata: () => `${emojis.error} Hata! **14** günden önceki mesajları silemem veya mesaj silme yetkim yok!`,
    hatamsj: () => `${emojis.error} Hata! **100**'den fazla mesaj silemem!`,
    hatamsj2: () => `${emojis.error} Hata! **1**'den az mesaj silemem!`
  }
};