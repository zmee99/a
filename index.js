const express = require('express');
const app = express();

app.listen(() => console.log('Server started'));

app.use('/ping', (req, res) => {
	res.send(new Date());
});

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/index.html');
});

const Discord = require('discord.js-v11-fixes');
const cmd = require("node-cmd");
const ffmpeg = require('ffmpeg');
const ffmpegstatic = require('ffmpeg-static');

const client = new Discord.Client();

const serverid = "1100791152506048666" // id server
const channelid = "1100791385273159690" // id channel

client.on('ready',async () => {
  console.log("Starting..");
    let g = client.guilds.get(`${serverid}`);
    let c = g.channels.get(`${channelid}`);
      if(c.type === 'voice') {
       c.join();
      setInterval(() => {
        if(g.me.voiceChannel && g.me.voiceChannelID !== c.id || !g.me.voiceChannel) c.join();
    }, 1);
      } else {
    console.log('Failed To Join: \n The Channel Type isn "Listening."')
  }
});

client.login(process.env.token);
