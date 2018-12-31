let user = message.author;
				      message.channel.send('Загрузка...').then(msg => {
					      const urls = ['https://media1.tenor.com/images/0d78943ec2d800847bfe98c0a5e03cd3/tenor.gif?itemid=11081269','https://thumbs.gfycat.com/DrearyDenseFlicker-size_restricted.gif','https://i.pinimg.com/originals/24/3e/2f/243e2f0cf4ad9ef9fb9def7594ec2c85.gif','https://thumbs.gfycat.com/SadWiltedHackee-small.gif','https://media.tenor.com/images/9bbd2789c5eaf20198205ca4976dda75/tenor.gif','https://data.whicdn.com/images/233322524/original.gif','https://gifer.com/i/8hQS.gif','http://gifimage.net/wp-content/uploads/2018/05/sleep-anime-gif-4.gif','https://media1.tenor.com/images/6f04cbe23fa862cd1e7da987c2b0308e/tenor.gif?itemid=9187874','https://i.pinimg.com/originals/92/8c/d7/928cd76c937e2f4c6d998651c2c88d58.gif','https://vignette.wikia.nocookie.net/kancolle/images/0/08/Umaru_sleeping.gif/revision/latest?cb=20161209020902','https://gifer.com/i/WDf.gif','https://i.imgur.com/Sb8Wls5.gif','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7Otqu-VpJAr92BOMTtSJkJLxMWBD_l6Yd41tCkxKzDxUWOCB9g','https://i.kym-cdn.com/photos/images/original/001/115/759/095.gif'];//12321312312
					      let embed = new Discord.RichEmbed()
                        .setDescription(`${user} пошел(шла) спать`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setColor('RANDOM');
                    msg.edit({embed})
        });
