const embed = new Discord.RichEmbed()
            .setTitle('Приглашение бота на ваш сервер.')
            .setColor("#0000ff")
            .setDescription("Ссылка на бота https://discordapp.com/oauth2/authorize?&client_id=${client.user.id}&scope=bot&permissions=8 \nЕсли вы не желаете давать боту права администратора то перейдите по данной ссылке: \nhttps://discordapp.com/oauth2/authorize?&client_id=${client.user.id}&scope=bot&permissions=0")
            .setFooter(message.channel.guild.name)
            .setTimestamp(); message.react("✅"); console.log(`${message.author} использовал invite`)
        message.channel.send({embed});
