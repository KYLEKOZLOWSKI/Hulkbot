module.exports.run = (bot, message, args, suffix, discord) => {
	let au = message.author.id
	let oid = process.env.oid
  let fields = [
    {
      name: ":gear: Prefix:",
      value: `\`h!\``,
      inline: true
    },
    {
      name: ":hammer_pick: Moderation:",
      value: `mute, unmute, kick, ban, auth, purge, perms, filteroff, and filteron.`,
      value: `\`\`\`ini\nauth = "Authorize Yourself!"\nban = "Need to ban someone?"\nfilteron = "Turns on the language filter!"\nfilteroff = "Turns off the language filter!"\nkick = "Need to kick someone?"\nmute = "Mute someone in chat!"\nunmute = "Unmute someone from chat!"\npurge = "Delete Messages from Chat!"\`\`\``,
    },
    {
      name: ":robot: Bot:",
      value: `\`\`\`ini\njoinserver = "Join the Support Server!"\ninvite = "Want to invite the bot?"\ninfo = "Know more about the bot!"\nping = "Pong?"\nuptime = "See how long the bot has been alive!"\`\`\``,
    },
           {
      name: ":lollipop: Fun:",
      value: `\`\`\`ini\navatar = "Fetches an HD Image of a user!"\nbork = "Bork someone for fun!"\ncoinflip = "Heads or Tails!"\nsay = "Want me to say something?"\nmyid = "Need your own ID?"\nserverid = "Need the Server's ID?"\nyomomma = "YOMOMMA!"\nknockknock = "I'll get you a knockknock joke."\`\`\``,
    },
    {
      name: "Need More Help?",
      value: `[Click Here!](https://bot.hulkbot.ml/commands)`,
    }
  ];
    if(au == oid) {
      embed_fields.push({
        name: ":medal: Owner:",
	value: `\`\`\`ini\nshutdown = "Shutdown the Bot!"\nchangegame = "useless"\`\`\``,
        inline: false
      });
    } else {
      return;
    };
  message.channel.send({
    embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Help Message!",
    url: "https://discord.gg/XvMA2rJ",
    fields: fields,
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: ""
    }
  }
})
}

module.exports.help = {
  name: "help"
}
