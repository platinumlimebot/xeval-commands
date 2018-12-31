let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"https://media1.tenor.com/images/41ca1498e20e7983bfb5be3a3c12d588/tenor.gif?itemid=10003402",//1
"https://media1.tenor.com/images/878b7d53a6b04bf09a222e9175a06b72/tenor.gif?itemid=10003333",//2
"https://i.pinimg.com/originals/90/0d/40/900d4092592c8c76514825702e0b1871.gif",//3
"https://i.gifer.com/ITNl.gif",//4
"https://media1.tenor.com/images/e38a9e8fe558bf48893f4c0069aa2b44/tenor.gif?itemid=5554691",//5
"https://gifer.com/i/CIaV.gif",//6
"http://37.media.tumblr.com/7b0291d11e0d7cd705d46a361606bd89/tumblr_n8vbqjY3sg1r11qslo2_500.gif",//7
"https://media.giphy.com/media/SCCjSLGQKfu6I/giphy.gif",//8
"https://gifer.com/i/DWbF.gif",//9
"https://data.whicdn.com/images/219385340/original.gif",//10
"https://i.pinimg.com/originals/b4/84/5c/b4845c9057251890188a121bdc9fa7f5.gif",//11
"https://i.imgur.com/Vg8BJBb.gif",//12
"https://rinscribble.files.wordpress.com/2016/09/tumblr_mlig9kpqkk1s55xs5o1_500.gif",//13
"https://cdn157.picsart.com/219546902011202.gif?r1024x1024",//14
"https://gifer.com/i/w3f.gif",//15
"https://data.whicdn.com/images/298743211/original.gif",//16
"https://media.giphy.com/media/OGzFu4KQuZ2/giphy.gif"//17
];
let embed = new Discord.RichEmbed()
      .setDescription(`${user} Выпил(а) кофе`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor('RANDOM');
  msg.edit({embed})
});
