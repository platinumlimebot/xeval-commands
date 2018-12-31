let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
			"https://media1.tenor.com/images/bd5e4f3a51515ed0ed3e41378f71d503/tenor.gif",
			"https://media1.tenor.com/images/0ffa8ec3da79658d13d3531ab94381a0/tenor.gif",
			"https://pa1.narvii.com/5672/8f859353df86ac2a58698006f435e1d7aba1f63e_hq.gif",
			"http://i.giphy.com/4xYhMRFqGjoFG.gif",
		"https://media.giphy.com/media/3Cm8cxtSHqu6Q/giphy.gif",
		"https://media1.tenor.com/images/0f9847a5f258da9a3bdccc3860f91eb5/tenor.gif?itemid=9188246",
		"https://media.tenor.com/images/559aa39a13635744c3c3ecd32b2aeb60/tenor.gif",
		"https://i.kym-cdn.com/photos/images/original/001/103/137/7d4.gif",
		"https://media1.tenor.com/images/29dc5102d126b8dc3970f71c0a1e99d5/tenor.gif?itemid=5959844",
		"https://thumbs.gfycat.com/BrilliantScaryAmethystsunbird-size_restricted.gif",
		"https://i.imgur.com/he3uUsy.gif",
		"https://media0.giphy.com/media/dwe0zLhdweo8/200.gif",
		"https://data.whicdn.com/images/174338423/original.gif",
		"https://i.pinimg.com/originals/14/7b/ba/147bba012d5781ead622f9c2a4a02be2.gif",
		"https://media.tenor.com/images/d93523c4db7e20254c4dcd512029d51e/tenor.gif",
		"https://data.whicdn.com/images/174338297/original.gif",
		"https://media1.tenor.com/images/7706dded712d1e0f6ddb38d0f6352c95/tenor.gif?itemid=6014343",
		"https://cdn72.picsart.com/186168594000202.gif?r1024x1024",
		"https://gifer.com/i/FPU2.gif",
		"https://media.giphy.com/media/lDYHk3Okrag7K/giphy.gif",
		"https://gifer.com/i/Vzg7.gif",
		"https://media1.tenor.com/images/4e0a400d7621b5452854bcae00d9a98e/tenor.gif?itemid=5723668",
		"https://i.pinimg.com/originals/31/c6/70/31c670df6249a955fecc9aea0814422b.gif",
		"https://gifer.com/i/3TMr.gif",
		"http://gifimage.net/wp-content/uploads/2017/07/anime-happy-gif-16.gif",
		"https://gifer.com/i/VEGI.gif",
		"https://pa1.narvii.com/6476/e7a05d97f12160e195e28faadff82becf28c54d7_hq.gif",
		"https://gif-free.com/uploads/posts/2017-05/1493788658_happy-anime-hearts.gif",
		"https://i.pinimg.com/originals/ff/41/c6/ff41c68ec0fdd1a48ce29c2a2846f5dd.gif",
		"http://gifimage.net/wp-content/uploads/2017/06/happy-anime-gif-15.gif"
		];
let embed = new Discord.RichEmbed()
      .setDescription(`${user} радуется`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor('RANDOM');
  msg.edit({embed})
});
