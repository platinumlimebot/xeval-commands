        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Недоступно");
        let new_args = args;
        const chat = new_args.shift();
        if (client.channels.get(chat) === undefined) {
            return message.channel.send('Ошибка отправки сообщения');
        }
        const sayMessage = new_args.join(" ");
        console.log(chat);
        message.guild.channels.get(chat).send(sayMessage).catch(()=>{message.reply('ты ебобо?');});
        message.delete().catch(O_o=>{});
