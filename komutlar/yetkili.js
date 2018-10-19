const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message) => {
  {

    let kategoriEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username ,message.author.displayAvatarURL)
      .setTitle("__YETKİLİ__")
      .setThumbnail(client.user.displayAvatarURL)
      .setColor("#4286f4")
      .setDescription(
        "❯ **r!kick** = İstediğiniz kişiyi sunucudan atar.\n"
        +                        
        "❯ **r!ban** = İstediğiniz kişiyi sunucudan banlar.\n"
        +                        
        "❯ **r!unban** = İstediğiniz kişinin banını açar. \n"        
        +
        "❯ **r!temizle** =  Belirttiğiniz kadar mesaj siler. \n"
        +
        "❯ **r!duyuru** = Güzel bir duyuru görünümü sağlar. \n"
        +
        "❯ **r!oylama** = Oylama Açar \n"        
        +     
        "❯ **r!sustur** = @Kişi sustur. \n"
        +
        "❯ **r!kilit** = Yazı kanalını istediğiniz süre boyunca dondurur. \n"
        +
        "❯ **r!duyuru** = Güzel bir duyuru görünümü sağlar. \n"
        +
        "❯ **r!uyar** = Belirtiğiniz kişiyi Uyarır \n"
        +
        "❯ **r!geçici-sustur** = @Kişi istediğiniz süre boyunca susturur. \n"
        )
      .addField(" Bağlantılar", "[Bot Destek Sunucusu](https://discord.gg/RrFkB2P) | [Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=488354119908851712&scope=bot&permissions=393329727) | ")
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
  name: 'yetkili',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili'
};
