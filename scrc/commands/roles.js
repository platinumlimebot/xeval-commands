        let roles = [];
        message.guild.roles.forEach((role, num, roles_all) => {
            roles[roles_all.size-role.position] = role.name.replace(/`/g, "`" + String.fromCharCode(8203))
        });
	          let output = roles.join('\n')
            message.channel.send(`${output}`, {split:"\n", code:"json"});
