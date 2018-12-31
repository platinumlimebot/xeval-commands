let large = message.channel.guild.large
        if (message.channel.guild.large == true) {
            large = "Да"
        }
        if (message.channel.guild.large == false) {
            large = "Нет"
        }
        if (message.channel.guild.region == "russia") {
            message.channel.guild.region = "Россия"
        }
        let i = 0;
  message.guild.members.forEach(member => {
      if(!member.user.bot) i = i + 1;
  });
	let dnd = 0;
  message.guild.members.forEach(member => {
      if(member.user.status === 'dnd') dnd = dnd + 1;
  });
	let idle = 0;
  message.guild.members.forEach(member => {
      if(member.user.status === 'idle') idle = idle + 1;
  });
        let b = 0;
  message.guild.members.forEach(member => {
      if(member.user.bot) b = b + 1;
      });       
let voice = 0;
	        message.guild.channels.filter(chan => chan.type === 'voice').forEach((channel) => {voice += channel.members.size});
                const embed = new Discord.RichEmbed()
                embed.setAuthor(message.author.tag, message.author.avatarURl)
                embed.setTitle('Информация об сервере', message.channel.guild.name)
                embed.setColor("ff0000")
                embed.setThumbnail(message.channel.guild.iconURL)
                embed.addField('ID', message.channel.guild.id, true)
                embed.addField('Owner', message.channel.guild.owner, true)
                embed.addField('Owner ID', message.channel.guild.ownerID, true)
                embed.addField('Уровень верификации', message.channel.guild.verificationLevel, true)
                embed.addField('Количество пользователей', message.channel.guild.memberCount , true)
	              embed.addField('Количество ботов', b, true)
		            embed.addField('Количество людей', i, true)
                embed.addField('Количество ролей', message.channel.guild.roles.size, true)
                embed.addField('Количество эмодзи', message.channel.guild.emojis.size, true)
                embed.addField('Количество каналов', message.channel.guild.channels.size, true)
	              embed.addField('Пользователи в голосовых каналах (всего)', voice, true)
                embed.addField('Сервер большой?', large, true)
                embed.addField('Системный канал', message.channel.guild.systemChannel !== null ? message.channel.guild.systemChannel : 'Нету.', true)
                embed.addField('ID Системного канала', message.channel.guild.systemChannelID !== null ? message.channel.guild.systemChannelID : 'Нету.', true)
                embed.addField('Имя сервера', message.channel.guild.name, true)
                embed.addField('Сокращеное имя сервера', message.channel.guild.nameAcronym, true)
                embed.addField('Высшая роль', message.channel.guild.roles.sort((a, b) => a.position - b.position || a.id - b.id).last().name, true)
                embed.addField('AFK канал', message.channel.guild.afkChannel !== null ? message.channel.guild.afkChannel : 'Нету.', true)
                embed.addField('ID AFK канала', message.channel.guild.afkChannelID !== null ? message.channel.guild.afkChannelID : 'Нету.', true)
                embed.addField('Регион', message.channel.guild.region, true)
                embed.addField('Дата создания', message.channel.guild.createdAt, true)
                embed.setFooter(`requested by ${message.author.username}`)
                embed.setTimestamp(); message.react("✅");
            message.channel.send({embed});
