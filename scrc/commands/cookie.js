        let user = message.author;
        let user1 = message.mentions.users.first();
        message.channel.send('Загрузка...').then(msg => {
            const urls = [
"http://36.media.tumblr.com/7bd24d753128822e0652319b385f68ed/tumblr_notv05MRNm1s9pgrdo1_1280.jpg",
"https://thumbs.gfycat.com/GoodPlasticEyelashpitviper-max-1mb.gif",
"https://media.giphy.com/media/SKiPNljqH8Ub6/giphy.gif",
"https://media.giphy.com/media/O8XZwrrU4NQC4/giphy-facebook_s.jpg",
"https://www.1999.co.jp/itbig35/10358248.jpg",
"https://honeysanime.com/wp-content/uploads/2015/09/sailor-moon-usagi-cookie--560x377.png",
"http://4.bp.blogspot.com/-fkkpC6FFETQ/T8S0ro_WHeI/AAAAAAAAA8E/q95UOz7jDQg/s1600/anime+cookiess_15.jpg",
"http://i.imgur.com/u4HdC.jpg",
"http://dessertrecipescorner.com/wp-content/uploads/2017/01/crunchy-and-adorable-checkerboar.jpg",
"https://blog.manga.tv/wp-content/uploads/2013/02/Cookie-Totoro-cookies-mon-voisin-my-neighbour-ghibli-miyazaki-anime-online-streaming-manga-tv-legal-gratuit-8.jpg",
"https://data.whicdn.com/images/72988865/large.png",
"https://data.whicdn.com/images/276671856/original.gif",
"http://favim.com/media/uploads/images/orig/140321/anime-food-Favim.com-1522596.gif",
"https://i.pinimg.com/originals/c5/d0/ab/c5d0ab213a38c377d1139ee57fa62e32.jpg",
"http://farm3.staticflickr.com/2894/9330100800_8535169e0f_b.jpg",
"http://i.imgur.com/E1AWI.jpg",
"https://itadakimasuanime.files.wordpress.com/2013/03/checkerboard-cookies-saint-seiya.jpg"
];
		const selfcookie = new Discord.RichEmbed()
.setDescription(`${user} сьел печенье`)
.setImage(urls[Math.floor(Math.random() * urls.length)])
		.setFooter("Команда добавлена по проосьбам пользователей")
.setColor('RANDOM');
		if(!user1) return message.channel.send(selfcookie);
let embed = new Discord.RichEmbed()
.setDescription(`${user} Дал(а) печение ${user1}`)
.setImage(urls[Math.floor(Math.random() * urls.length)])
.setColor('RANDOM');
msg.edit({embed})
});
