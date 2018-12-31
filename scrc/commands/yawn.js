 let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
			"https://lh3.googleusercontent.com/-Tghzzm_moYI/Vpv9Tim48-I/AAAAAAAEHcg/IB_oaMQRHJc/w506-h284/luckyyy%2Bop.gif",
			"https://orig00.deviantart.net/9f06/f/2016/125/e/f/k_on__ritsu_is_bored___gif_animation_by_kyoflameashhylden-da1e0f9.gif",
			"https://media.giphy.com/media/Bw4ECQSe8tkT6/giphy.gif",
			"https://media.giphy.com/media/ib908PKTsuJXi/giphy.gif",
			"https://nekketsunikki.files.wordpress.com/2013/09/prad3-25-wakana-yawning-gif.gif",
			"https://78.media.tumblr.com/d01b8fbef3330601513a0f0eacc83276/tumblr_nymaloSqjh1tydz8to1_500.gif",
			"http://1.bp.blogspot.com/-c7IYwWX2qX0/T2EHko0u50I/AAAAAAAABEM/mO5m86a7B2g/s1600/tumblr_ln2k4nc5VS1qejrr2o1_500_large.gif",
			"http://pa1.narvii.com/5778/1c2cb88920e9ab85168b936d74e81679fd7a2e38_hq.gif",
			"https://media.giphy.com/media/iQHDtnUZ7gxI4/giphy.gif",
			"https://i.giphy.com/media/kgqNxRFENcp0I/giphy.gif",
		"https://media.giphy.com/media/Byzxt2ompZJyE/giphy.gif",
		"https://media1.tenor.com/images/9cef52ce27ab97e0fa9cfac1cdc1007f/tenor.gif?itemid=9525859",
		"https://gifer.com/i/2UvD.gif",
		"https://thumbs.gfycat.com/DentalEnragedHookersealion-size_restricted.gif",
		"https://gifer.com/i/2m6l.gif",
		"https://media.giphy.com/media/TwcK5edEfpNQY/giphy.gif",
		"https://thumbs.gfycat.com/AdorableValuableBronco-size_restricted.gif",
		"https://gifer.com/i/1UaJ.gif",
		"https://media1.tenor.com/images/6b1d8cf7b9880bcfea290eea918b16fc/tenor.gif?itemid=5948549",
		"https://data.whicdn.com/images/22623277/original.gif",
		"http://25.media.tumblr.com/tumblr_lsh29uKhB81qkki6ro1_500.gif",
		"https://i.pinimg.com/originals/7b/c7/6d/7bc76db75a2fe267ad1038bec492be59.gif",
		"https://uploads.disquscdn.com/images/b78ebc75fbbea0323eccc3b51d07737688acd9ed5e3768b0ff96779eedec1019.gif",
		"https://thumbs.gfycat.com/ImprobableSoggyAruanas-size_restricted.gif",
		"https://media.tenor.com/images/4e3475b2f27c4870500389b038ad780b/tenor.gif",
		"https://i.gifer.com/2dc7.gif"
		]
let embed = new Discord.RichEmbed()
      .setDescription(`${user} зевает`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor('RANDOM');
  msg.edit({embed})
});
