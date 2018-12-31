      let user = message.author;
				      message.channel.send('Загрузка...').then(msg => {
					      const urls = [
			"https://media.giphy.com/media/b7l5cvG94cqo8/giphy.gif",
			"https://media.giphy.com/media/euMGM3uD3NHva/giphy.gif",
			"https://media.giphy.com/media/9gxhLXyJXqAhi/giphy.gif",
			"https://media.giphy.com/media/1448TKNMMg4BFu/giphy.gif",
			"https://media.giphy.com/media/11lxCeKo6cHkJy/giphy.gif",
			"https://media.giphy.com/media/U4CH4BYqpxlEQ/giphy.gif",
			"http://media.indiedb.com/cache/images/groups/1/1/84/thumb_620x2000/02-OP-2.gif",
			"http://media.giphy.com/media/EAOTD2L0qyvhm/giphy.gif",
			"http://media.giphy.com/media/938JXzfcl714I/giphy.gif",
			"https://media.giphy.com/media/TF1Az4ZjffK80/giphy.gif",
			"https://media.giphy.com/media/roym7Gv1DVK0/giphy.gif",
			"http://3.bp.blogspot.com/-VfIDEBGn9Gw/TaBUrYAWUZI/AAAAAAAAAmM/awcUvfHyPUE/s1600/Hayate_no_Gotoku_-_Caramelldansen.gif",
			"https://img.buzzfeed.com/buzzfeed-static/static/2014-01/enhanced/webdr06/29/10/anigif_enhanced-31738-1391010205-4.gif",
			"https://pa1.narvii.com/6115/a1ed9d29332a87ff81c373106db45d61df7fbbf6_hq.gif",
			"http://i0.kym-cdn.com/photos/images/newsfeed/001/153/506/bcd.gif",
			"https://img.gifmagazine.net/gifmagazine/images/677019/original.gif",
			"https://media1.tenor.com/images/b3ee0c82bf87b4cfce2067ebfa658828/tenor.gif"
		]; // может кто свернуть все это в трубочку?
		     let embed = new Discord.RichEmbed()
                        .setDescription(`${user} начал(а) танцевать`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setColor('RANDOM');
                    msg.edit({embed})
        });
