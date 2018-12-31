  message.delete();
	const urls = ['https://avatars.mds.yandex.net/get-pdb/477388/69159794-3747-48d7-933d-e77c888eae22/orig','https://media1.tenor.com/images/83271613ed73fd70f6c513995d7d6cfa/tenor.gif?itemid=4915753','https://i.gifer.com/L1lz.gif','https://i.kym-cdn.com/photos/images/newsfeed/001/093/845/d72.gif','https://media1.tenor.com/images/2440ac6ca623910a258b8616704850f0/tenor.gif?itemid=7922565','http://gifimage.net/wp-content/uploads/2017/09/anime-bite-gif-7.gif', 'http://gifimage.net/wp-content/uploads/2017/09/anime-bite-gif-4.gif','http://i.imgur.com/YCAzLzh.gif','https://image.myanimelist.net/ui/uf6p6rEk2dlZoh8DIyYQTScPXcYWVkorZzR5QFff8DxXSVE36h19EcKvk3qWN8Qjz6wjzP1DvxcR9h-KIPhFblLuqgwER_AAddaI6tZVr6nk8lQiKT87JfEEq9USDPxcaCEQQ04R3UP5hio6lAMZ3g','https://vignette.wikia.nocookie.net/narutofanon/images/7/76/CanineBite.gif/revision/latest?cb=20160613052106','https://media1.tenor.com/images/a74770936aa6f1a766f9879b8bf1ec6b/tenor.gif?itemid=4676912','https://38.media.tumblr.com/a8facaed7dbb8aa75aac7cc81b144520/tumblr_mibcsb1zPZ1s4xyu5o1_500.gif', 'https://i.gifer.com/MHg3.gif'];
        let user = message.author;
        let user1 = message.mentions.users.first();
		const selfbite = new Discord.RichEmbed()
                        .setDescription(`${user} **укусил(а)** себя`)
                        .setImage("https://78.media.tumblr.com/bbea36e4585df159eb4a339efc97313a/tumblr_ormo8ikFnO1wn2b96o1_500.gif")
                        .setColor('RANDOM');
        if (!user1 || user1.id === user.id) return message.channel.send(selfbite);
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} **укусил(а)** ${user1}`)
                        .setImage((urls[Math.floor(Math.random() * urls.length)]))
                        .setColor('RANDOM');
                        message.channel.send(embed)
