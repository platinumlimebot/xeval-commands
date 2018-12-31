let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
			"https://i.giphy.com/media/atyNuQv4pUOxG/giphy.gif",
			"https://78.media.tumblr.com/6ab3f8e5cb874ab702815cd9514cdd79/tumblr_n92pljJGak1s5mgubo1_500.gif",
			"https://erisischanadventure.files.wordpress.com/2015/05/shocked.gif",
		"https://media.giphy.com/media/3ohjV3eA4uG9r0hv0I/giphy.gif",
		"https://gifer.com/i/8gh.gif",
		"https://media1.tenor.com/images/d91ea878a27bd20d5482bbf45bbdea3f/tenor.gif?itemid=546669",
		"https://media1.tenor.com/images/d91ea878a27bd20d5482bbf45bbdea3f/tenor.gif?itemid=5466695",
		"https://media.giphy.com/media/1FpxFCobvJra/giphy.gif",
		"https://i.pinimg.com/originals/4b/44/1e/4b441e12fe0bc2af2763a43a261adf73.gif",
		"http://gifimage.net/wp-content/uploads/2017/09/anime-shock-gif-10.gif",
		"https://78.media.tumblr.com/fa98cd4b05512232fbb13083d5522ce1/tumblr_op6m23wz9B1vviqkjo1_500.gif",
		"http://gifimage.net/wp-content/uploads/2017/09/anime-shock-gif-1.gif",
		"https://media1.tenor.com/images/31eb560d6398ba696405d6719cb4e582/tenor.gif?itemid=7922528",
		"https://i.kym-cdn.com/photos/images/newsfeed/001/250/784/d46.gif",
		"https://media.giphy.com/media/pkIuMNLQZcO4g/giphy.gif"
		]
let embed = new Discord.RichEmbed()
      .setDescription(`${user} в шоке`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor('RANDOM');
  msg.edit({embed})
});
