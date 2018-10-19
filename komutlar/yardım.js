const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = 'b!';

exports.run = (client, message) => {
  {
    let kategoriEmbed = new Discord.RichEmbed()
    
      .setTitle("__YARDIM__")
      .setThumbnail(message.author.displayAvatarURL)
      .setColor("#4286f4")
      .setDescription(
                      "**r!eğlence** - Eğlence ve Kulanıcı komutlarını gösterir. \n" +
                      "**r!anakomutlar** - Ana komutları Gösterir. \n" +
                      "**r!yetkili** - Yetkili komutlarını gösterir. \n" +
                      "**r!müzik** - Müzik komutlarını gösterir. \n"
                     )
      .addField(" Bağlantılar", "[Bot Destek Sunucusu](https://discord.gg/RrFkB2P) | [Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=488354119908851712&scope=bot&permissions=401976383) | ")
    message.channel.send(kategoriEmbed)  
    
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y','komutlar','k'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};