////coded by : Ln,Rá3d ♔#1000 - Ln,Muziky#8956
const express = require("express");
const app = express();

app.listen(() => console.log("ready"));

const Discord = require("discord.js"), NIRO = new Discord.Client(), { server_id, bot_token } = require("./Bot_Config/BOT_CONFIG.json"), { channel_id_1, channel_id_2, channel_id_3 } = require("./Bot_Config/BOT_CHANNELS.json"), { pic_1, pic_2, pic_3 } = require("./Bot_Config/BOT_PICTURE.json");

NIRO.on("ready", () => {
  console.log(` ${NIRO.user.username}`);
  NIRO.user.setActivity(`just type any thing in <@#${channel_id_1}> , <@#${channel_id_2}> , <@#${channel_id_3}>`);
  NIRO.user.setStatus("dnd");
}).on("message", async message => {
  if (message.guild.id != `${server_id}`) return;
  if (message.channel.id != `${channel_id_1}`) return;
  if (message.author.id === NIRO.user.id) return;
  if (message.author.send) {
    message.channel.send({ files: [`${pic_1}`] })
  }
}).on("message", async message => {
  if (message.guild.id != `${server_id}`) return;
  if (message.channel.id != `${channel_id_2}`) return;
  if (message.author.id === NIRO.user.id) return;
  if (message.author.send) {
    message.channel.send({ files: [`${pic_2}`] })
  }
}).on("message", async message => {
  if (message.guild.id != `${server_id}`) return;
  if (message.channel.id != `${channel_id_3}`) return;
  if (message.author.id === NIRO.user.id) return;
  if (message.author.send) {
    message.channel.send({ files: [`${pic_3}`] })
  }
});



NIRO.login(bot_token)