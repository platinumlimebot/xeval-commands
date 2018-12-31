      message.delete();
	    const user = args[0];
	    args.shift();
	    const mss = args.join(" ");
      client.users.get(user).send(mss).catch(err => message.channel.send(err));
