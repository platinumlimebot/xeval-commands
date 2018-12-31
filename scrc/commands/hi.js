let user = message.author;//меня заставили!!
    let user1 = message.mentions.users.first();//меня заставили!!
    message.channel.send('Загрузка...').then(msg => {//меня заставили!!
        const urls = [//меня заставили!!
"https://orig00.deviantart.net/8d1d/f/2010/319/4/b/hi_____animated_by_0febris0-d2wu3lv.gif",//1//меня заставили!!
"https://steamusercontent-a.akamaihd.net/ugc/1617175662597177927/732757601CDBF2E52C41EF3349035A337BB119D7/",//2//меня заставили!!
"https://image.noelshack.com/fichiers/2018/17/3/1524685070-df0a9rx.gif",//3//меня заставили!!
"https://thumbs.gfycat.com/HatefulBlindFunnelweaverspider-size_restricted.gif",//4//меня заставили!!
"https://thumbs.gfycat.com/AdorableFormalAngwantibo-size_restricted.gif",//5//меня заставили!!
"https://pa1.narvii.com/6505/ad5549ff5f252cd35e393f88c55d474ab83fd46d_hq.gif",//6//меня заставили!!
"http://gifimage.net/wp-content/uploads/2017/10/hi-anime-gif-9.gif",//7//меня заставили!!
"https://kingmarsblog.files.wordpress.com/2016/08/c5612569563abae86b811071616e4c07f5b3aa18_hq.gif?w=882",//8//меня заставили!!
"https://media.tenor.com/images/b96f06f81933f49b6d24577017eb4edd/tenor.gif",//9//меня заставили!!
"https://media.giphy.com/media/yyVph7ANKftIs/giphy.gif",//10//меня заставили!!
"https://media1.tenor.com/images/c2e21a9d8e17c1d335166dbcbe0bd1bf/tenor.gif?itemid=5459102",//11//меня заставили!!
"http://gifimage.net/wp-content/uploads/2017/10/hi-anime-gif-11.gif",//12//меня заставили!!
"https://data.whicdn.com/images/233897767/original.gif",//13//меня заставили!!
"http://i.imgbox.com/AYqk4UJk.gif",//14//меня заставили!!
"https://cdn105.picsart.com/203730462001202.gif?r1024x1024",//15//меня заставили!!
"https://thumbs.gfycat.com/HauntingNeighboringBarracuda-max-1mb.gif",//16//меня заставили!!
"http://pa1.narvii.com/5935/a557baffc06658c5b3c2932eb0bc496cb112d04c_00.gif"//17//меня заставили!!
];//меня заставили!!
let embed = new Discord.RichEmbed()//меня заставили!!
      .setDescription(`${user} Приветствует всех!`)//меня заставили!!
      .setImage(urls[Math.floor(Math.random() * urls.length)])//меня заставили!!
	.setFooter("Команда добавлена по проосьбам пользователей")
      .setColor('RANDOM');//меня заставили!!
  msg.edit({embed})//меня заставили!!
});//меня заставили!!
