let user = message.author;
    let user1 = message.mentions.users.first();
	    if(!user1) return message.channel.send("вы боитесь воздуха?");
    message.channel.send('Загрузка...').then(msg => {
	    const urls = [
			"https://media.giphy.com/media/hhX3ARsqy9bYQ/giphy.gif",
			"https://media.giphy.com/media/1ZXfnXk2F7Zio/giphy.gif",
			"https://i.pinimg.com/originals/90/6d/61/906d61263992beb3000e6beab2d860aa.gif",
			"https://78.media.tumblr.com/a1ec7a76d2c55d0e9ba5bcf14004bab0/tumblr_n4gagcXigK1tyunbro1_500.gif",
			"https://i.giphy.com/media/UCdYMxha6iemA/giphy.gif",
			"https://pa1.narvii.com/6329/21cf4fb4b212bfbe3ebe8fbebc59f49eabdd09f6_hq.gif",
			"https://media.giphy.com/media/OGC76skhmPixi/giphy.gif"
		];
		let embed = new Discord.RichEmbed()
.setDescription(`${user} боится ${user1}`)
.setImage(urls[Math.floor(Math.random() * urls.length)])
.setColor('RANDOM');
msg.edit({embed})
});
