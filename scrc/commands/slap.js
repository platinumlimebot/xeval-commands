        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/slap', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle('>:{')
                        .setDescription(`${user} дал(а) пощёчину ${user1}`)
                        .setImage(arr['url'])
                        .setColor('#ff0000')
			                  .setFooter("powered by nekos.life");
                    msg.edit(`${user1}`, {embed});
                } catch (e) {console.log(e)}
            });
        });
