const db = require('quick.db')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (client, message, args) => {
  if(message.author.id !== "754092428557942855") if(message.author.id !== "754092428557942855") return message.channel.send("Üzgünüm Dostum Sen \`Elminstêr\` değilsin!");
  
  let user = client.users.cache.get(args.slice(0).join(' '));
  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir İd Girmelisin!')
  
  db.delete(`memberBadge_${nesne}`, 'onyr')
  
  message.channel.send(` <@${nesne}> adlı kişinin Dev Rozetini başarıyla kaldırdım.`)
if (client.users.cache.get(''+nesne+'').send(` \`Dev  Rozetiniz kaldırıldı.\` `)){
 
} else return
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dev-al'],
  permLevel: 0
};
exports.help = {
  name: 'dev-al',
  description: 'Gold üye ekler',
  usage: 'gold-üye-ekle'
};