let user = message.author;
    let user1 = message.mentions.users.first();
	    if(!user1) return message.channel.send("вы хотите полизать воздух?");
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"https://gifer.com/i/72M.gif",
"https://media.giphy.com/media/ky2p36qednUu4/giphy.gif",
"https://i.kym-cdn.com/photos/images/original/001/084/805/287.gif",
"https://uploads.disquscdn.com/images/03f4bb0f623dc57b57ed251a0be34a36eda64367c6a2d59e88e0ac9211c2a910.gif",
"https://vignette.wikia.nocookie.net/the-kennel/images/9/9a/Ichigo_Mickey_lick.gif/revision/latest?cb=20141202220346",
"http://images.pandaapp.com/android/2011/06/20/Kanamemo-7-1-licking.gif",
"https://orig00.deviantart.net/20c8/f/2013/215/8/d/lick_2_by_anime_wolfz-d6gi186.gif",
"https://i.kym-cdn.com/photos/images/original/001/230/497/04d.gif",
"http://mrwgifs.com/wp-content/uploads/2013/04/Snuggling-Cuddling-Anime-Girls-Gif-.gif",
"https://img1.ak.crunchyroll.com/i/spire1/92b3653029e9196cfbedfd6a5ff3dc881488421004_full.gif",
"https://vignette.wikia.nocookie.net/the-kennel/images/7/7a/Tsundere_Lick_Gif.gif/revision/latest?cb=20130828004256",
"https://vignette.wikia.nocookie.net/the-kennel/images/7/79/Haruka_dog_lick.gif/revision/latest?cb=20170206183035",
"https://media.giphy.com/media/12MEJ2ArZc23cY/source.gif",
"http://gifimage.net/wp-content/uploads/2017/09/anime-lick-gif-12.gif",
"https://media1.tenor.com/images/783188d1592d16bcc83f52639fad8fcb/tenor.gif?itemid=10816601",
"https://33.media.tumblr.com/0fc51db3ee68263bfac91dcfa9c3ebb6/tumblr_nwsmfzIbio1sfyp69o1_500.gif",
"https://media1.tenor.com/images/0ce34500facf2ada86307bb740a03dfd/tenor.gif?itemid=5567738"
];
let embed = new Discord.RichEmbed()
.setDescription(`${user} Лизнул(а) ${user1}`)
.setImage(urls[Math.floor(Math.random() * urls.length)])
.setColor('RANDOM');
msg.edit({embed})
});
