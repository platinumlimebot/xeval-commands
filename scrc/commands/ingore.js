let user = message.author;
    let user1 = message.mentions.users.first();
	    if(!user1) return message.channel.send("вы хотите игнорировать воздух?");
    message.channel.send('Загрузка...').then(msg => {
	    const urls = [
			"https://media1.tenor.com/images/112c2abcf585b37e6c6950ebc3ab4168/tenor.gif",
			"https://media.giphy.com/media/rFvtiIevmj0zu/giphy.gif",
			"http://i0.kym-cdn.com/photos/images/original/000/906/455/51f.gif",
			"https://78.media.tumblr.com/eb90caf5fe561e609dd5a9040e34186f/tumblr_nq2cvgKtjZ1un9vr1o2_500.gif",
			"https://i.imgur.com/dtHhUx3.gif",
		    "https://data.whicdn.com/images/227934384/original.gif",
		    "https://media1.tenor.com/images/96c460d18d3f7fc9bad84a87cfef6512/tenor.gif?itemid=8033041",
		    "http://media.giphy.com/media/11bY8RQnSLHwc0/giphy.gif",
		    "https://em.wattpad.com/9dac4f1619ba670b8e758a788733234ec4c4b203/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f68325f6d595933445057616330673d3d2d3336322e313461633733646530666532623736393434373538383333343932352e676966?s=fit&w=720&h=720",
		    "http://24.media.tumblr.com/ff8c7f318c39daa3d4f169ba216a4c41/tumblr_mtabimunhJ1sg0ygjo1_500.gif"
		]
	    let embed = new Discord.RichEmbed()
.setDescription(`${user} ингнорирует ${user1}`)
.setImage(urls[Math.floor(Math.random() * urls.length)])
.setColor('RANDOM');
msg.edit({embed})
});
