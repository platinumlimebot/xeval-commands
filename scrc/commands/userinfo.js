message.delete().catch(O_o => {});
						    let ids;
						    let member;
						    ids = message.mentions.members.first()
						    if (ids) {
							    member = ids.user.id;
						    }
						    if (!ids) {
							    member = args[0];
						    }
	    					   if(!args[0]) {
							   member = message.author.id;
						   }
	    let user = client.users.get(member)
        let username = message.author.username
        let avatar = user.avatarURL;
        let verified = "Нет"
        let userStatus = "Оффлайн";
        let userID = user.id;

        if (user.verified == true) {
            verified = "Да"
        }
        if (user.status == "online") {
            userStatus = "Онлайн"
        }
	    if (user.status == "dnd") {
            userStatus = "Не беспокоить"
        }
	    if (user.status == "idle") {
            userStatus = "Нет на месте"
        }
        
        

        const embed = new Discord.RichEmbed()
            .setColor("ff0000")
            .setAuthor(user.tag, user.avatarURl)
            .addField("ID пользователя:", user.id, true)
            .addField("Дискриминатор:", user.discriminator, true)
            .addField("Полный никнейм:", user.tag, true)
            .addField("Создан:", moment(user.createdAt).format('MMMM Do YYYY h:m\:s'), true)
            .setThumbnail(avatar)
            .setFooter("Userinfo")
            .setTimestamp();
        message.channel.send(embed);
