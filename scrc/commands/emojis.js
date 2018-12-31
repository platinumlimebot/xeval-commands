message.channel.send(message.guild.emojis.map(e => `${e.toString()}`).join(" "), {split: "\n"}) //сплит позволяет скинуть все эмодзи даже если их овер много
