const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message) => {
  {

    let kategoriEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username ,message.author.displayAvatarURL)
      .setTitle("__Ana Komutlar__")
      .setThumbnail(client.user.displayAvatarURL)
      .setColor("#4286f4")
      .setDescription(
        "❯ **r!tavsiye** = Botun sahibine tavsiyede bulanabilirsiniz. \n"
        +                        
        "❯ **r!kullanıcıbilgim** = Kullanıcı Bilgini Gösterir. \n"
        +                        
        "❯ **r!döviz** = Döviz Durumunu Gösterir. \n"
        +                        
        "❯ **r!sayaç** = Sayaç Adlı Kanal Açmanız Gerekir. \n"
        +                        
        "❯ **r!topla** = ÖRN: r!topla 1 1 \n"
        +                        
        "❯ **r!çıkar** = ÖRN: r!çıkar 1 1 \n"
        +                        
        "❯ **r!çarp** = ÖRN: r!çarp 1 1 \n"
        +                        
        "❯ **r!böl**= ÖRN: r!böl 1 1 \n"
        )
      .addField(" Bağlantılar", "[Bot Destek Sunucusu](https://discord.gg/ZzZZfxb) | [Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=494194181653397514&scope=bot&permissions=536329279) | ")
    message.channel.send(kategoriEmbed)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e'],
  permLevel: 0
};

exports.help = {
  name: 'anakomutlar',
  description: 'Tüm komutları gösterir.',
  usage: 'anakomutlar'
};