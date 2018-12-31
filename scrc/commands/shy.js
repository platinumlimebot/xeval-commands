let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
			"https://media.giphy.com/media/1gbQIeNzZxcSk/giphy.gif",
			"https://media.giphy.com/media/BkqSYWqv8Zfva/giphy.gif",
			"https://media.giphy.com/media/12DrHDhr5dTjgs/giphy.gif",
			"https://media.giphy.com/media/eNVI4Ue1MpjWg/giphy.gif",
			"https://vignette.wikia.nocookie.net/degrassi/images/d/d7/Tsugumi_precious.gif",
			"https://thumbs.gfycat.com/AfraidMistyGreatwhiteshark-max-1mb.gif",
			"https://media.giphy.com/media/dkvGrfQ6ryIAU/giphy.gif",
			"http://i.imgur.com/fxZdy3h.gif",
			"https://media1.tenor.com/images/c271e69eaeaab17fb096ccb3c7fedb6d/tenor.gif",
			"https://media.giphy.com/media/NPcbTHBxD7dAY/source.gif",
			"https://media.giphy.com/media/tQWT183CTqHYI/source.gif",
		"https://media1.tenor.com/images/71de7826ad02a908a1c3e572f50e6901/tenor.gif?itemid=5755233",
		"https://media3.giphy.com/media/6CBGoJnEBbEWs/giphy.gif",
		"https://media2.giphy.com/media/UrPxdGW62TDtS/giphy.gif",
		"https://media1.tenor.com/images/9d417ab4391009a5999d5ffe3d2444f1/tenor.gif?itemid=9194392",
		"https://data.whicdn.com/images/272630927/original.gif",
		"https://media2.giphy.com/media/fARFPMuspJRx6/200.gif",
		"http://gifimage.net/wp-content/uploads/2017/08/shy-anime-gif-12.gif",
		"https://gifer.com/i/9O2r.gif",
		"https://media1.tenor.com/images/d5acfb3df99f08e1d0c9df2d95bad99e/tenor.gif?itemid=6015968",
		"https://i.pinimg.com/originals/f0/ef/6f/f0ef6feafada1ee18e2ad46a2563ab75.gif",
		"https://78.media.tumblr.com/d2a8d6ba156c11aa2b5ee9a65b2e9176/tumblr_owepwelyXg1vviqkjo1_500.gif",
		"http://gifimage.net/wp-content/uploads/2017/08/shy-anime-gif-3.gif",
		"https://i.gifer.com/8VKY.gif",
		"https://cdn51.picsart.com/170690980000202.gif?r1024x1024"
		]
let embed = new Discord.RichEmbed()
      .setDescription(`${user} смущается`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor('RANDOM');
  msg.edit({embed})
});
