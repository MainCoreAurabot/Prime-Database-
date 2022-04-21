this.config = new Object({
name: "adu",
 version: "0.0.0", 
 hasPermssion: 0, 
 credits: "Core@", 
 description: "", 
 commandCategory: "@Game Core", 
 usages: "", 
 cooldowns: 5,
});
let path = require("path");
let { mkdirSync, writeFileSync, existsSync, createReadStream, readdirSync } = require("fs-extra")
let axios = require("axios")
let fs = require("fs-extra")
this.onLoad = async () => {
    let corefolder = __dirname + `/Core@/Football[Core@Game]/`;
    let corefolder1 = __dirname + `/Core@/Football[Core@Game]/Database`;
    let corefolder2 = __dirname + `/Core@/Football[Core@Game]/Database/User[Database]`;
    let corefolder3 = __dirname + `/Core@/Football[Core@Game]/Common`;
    let corefolder4 = __dirname + `/Core@/Football[Core@Game]/Common/Image`
    if (!existsSync(corefolder)) mkdirSync(corefolder, { recursive: true });
    if (!existsSync(corefolder1)) mkdirSync(corefolder1, { recursive: true });
    if (!existsSync(corefolder2)) mkdirSync(corefolder2, { recursive: true });
    if (!existsSync(corefolder3)) mkdirSync(corefolder3, { recursive: true });
    if (!existsSync(corefolder4)) mkdirSync(corefolder4, { recursive: true }); 
    return;}
this.run = async function ({ api, event, args, Users, Currencies }) {
 let { senderID,messageID,threadID }= event;
 var nameUser = (await Users.getData(senderID)).name;
 let plugin = "";
 const pathData = path.join(__dirname, 'Core@', 'Football[Core@Game]', 'Database', 'User[Database]', `${senderID}.json`);
  /*----------------------------------*/
 if(args[0] == "help"){
 if (!existsSync(pathData)) {
return api.sendMessage({body: `not found data, no signup`},threadID,messageID)}
  api.sendMessage({body:`[ Core@ ]`},threadID,messageID)}
  if(args[0] == "signup"){
  if (!existsSync(pathData)) {
 let obj = new Object({});
let moment = require('moment-timezone');
let getTime = moment().tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY_HH:mm:ss');
 obj.name = nameUser;
 obj.ID = senderID;
 obj.Coin = 0;
 obj.Ruby = 0;
 obj.Diamond = 0;
 obj.Kp = 0;
 obj.timeSign = getTime ;
 writeFileSync(pathData, JSON.stringify(obj, null, 4));
   return api.sendMessage({body: ` successful signup`},threadID,messageID);
  } else api.sendMessage({body: ` you signed up`},threadID,messageID)}
  if(args[0] == "checkCoin"){
   if (!existsSync(pathData)) {
return api.sendMessage({body: `not found data, no signup`},threadID,messageID)}
let coin = require(`./Core@/Football[Core@Game]/Database/User[Database]/${senderID}.json`);
plugin = {body: `${nameUser.toLowerCase()} your coin: ${coin.Coin} coin`};
return api.sendMessage(plugin, threadID,messageID);
  }
  if(args[0] == "checkRuby"){
   if (!existsSync(pathData)) {
return api.sendMessage({body: `not found data, no signup`},threadID,messageID)}
let ruby = require(`./Core@/Football[Core@Game]/Database/User[Database]/${senderID}.json`);
plugin = {body: ` ${nameUser.toLowerCase()} your ruby: ${ruby.Ruby} ruby`};
return api.sendMessage(plugin, threadID,messageID);
  }
  if(args[0] == "checkDiamond"){
   if (!existsSync(pathData)) {
return api.sendMessage({body: `not found data, no signup`},threadID,messageID)}
let diamond = require(`./Core@/Football[Core@Game]/Database/User[Database]/${senderID}.json`);
plugin = {body: `${nameUser.toLowerCase()} your diamond: ${diamond.Diamond} diamond`};
return api.sendMessage(plugin, threadID,messageID);
  }
 if( args[0] == "mdlinfor" || args[0] == "cmdinfor"){
if (!existsSync(pathData)) {
return api.sendMessage({body: `not found data, no signup`},threadID,messageID)}
  plugin= new Object({body:` information\nname: ${this.config.name}\nversion: ${this.config.version}\nauthor: ${this.config.credits}\ncopyright 🔎 2021- 2022 azurateam`});
  return api.sendMessage(plugin, threadID, messageID);}
 if(args[0] == "myinfor" ||args[0] == "my"){
if (!existsSync(pathData)) {
return api.sendMessage({body: `not found data, no signup`},threadID,messageID)}
let infor = require(`./Core@/Football[Core@Game]/Database/User[Database]/${senderID}.json`);
  plugin = new Object({body: `name: ${nameUser} \nid: ${senderID}\ntimesign: ${infor.timeSign}`});
  return api.sendMessage(plugin, threadID, messageID);
 } else if(args[0] == "home"){
if (!existsSync(pathData)) {
return api.sendMessage({body: `not found data, no signup`},threadID,messageID)}
  plugin = {body: `CONFIG FB SYSTEM\n.notification[sy]\n.extras[sy]\n.all key[sy]\nCONFIG FB HOME\n.update...\nCONFIG FB RANK\n.rank sever coin[r]\n.rank sever ruby[r]\n.rank sever diamond[r]\nCONFIG FB STORE\n.pay[s]\n.star pass[s]\n.buy player fball[s]\n.convert[s]\nCONFIG FB EVENT\n.daily warm-up[e]\nCONFIG FB FUNCTION\n.buy gift pack[f]\n.rotation[f]\n.gift code[f]\n.daily login[f]\n.update..\n\nreply message + .method`};
  return api.sendMessage(plugin,threadID, (error, info) => { global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID, type: "maincoreChoose"})},messageID)}
}
this.handleReply = async function({event,api,handleReply,Users,Threads,Currencies}){
 let { threadID, senderID, messageID, body} = event;
 let { type, author } = handleReply;
 let plugin = ``;
 if (author != senderID) return;
 const pathData = path.join(__dirname, 'Core@', 'Football[Core@Game]', 'Database', 'User[Database]', `${senderID}.json`);
 let time = new Date();
 let moment = require('moment-timezone');
let getTime = moment().tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY_HH:mm:ss');
  /*-------------CLASS----------------*/
  class build{
   constructor(msg){
    this.msg = msg;
   } 
   send(){
    api.sendMessage(this.msg,threadID)
   }
   reply(){
    api.sendMessage(this.msg,threadID,messageID)
   }
  }
  /*----------------------------------*/
 switch(type){
  /*-------------Main Choose-------------*/
  case "maincoreChoose":{
   switch(body.toLowerCase()){
   case ".notification[sy]":
     case "notification": {
      if (!existsSync(pathData)) {
return api.sendMessage({body: `not found data, no signup`},threadID,messageID)}
var datanoti = (await axios.get(`https://raw.githubusercontent.com/MainCoreAurabot/Prime-Database-/master/Notification%20/noti.json`)).data;
plugin = {body: `${datanoti.version}`}
return api.sendMessage(plugin,threadID,messageID)
     } break;
    case ".buy gift pack[g]":
     case "buy gift pack":{
     if (!existsSync(pathData)) {
return api.sendMessage({body: `not found data, no signup`},threadID,messageID)}
 plugin = {body:`.buy gift pack folder\nfunction\n.pack 100 coin\nsyntax -> pack100coin\n-10000 kp\n.pack 100 ruby\nsyntax -> pack100ruby\n-400000 kp\n.pack 100 diamond\nsyntax -> pack100diamond\n-400000 kp\n\nreply message + .syntax`};
 return api.sendMessage(plugin,threadID, (error, info) => {
   global.client.handleReply.push({
  name: this.config.name,
  messageID: info.messageID,
 author: event.senderID,
type: "buygiftpackChoose"
 })},messageID);
     } break;
 case ".rotation[g]":
 case "rotation": {
if (!existsSync(pathData)) {
return api.sendMessage({body: `not found data, no signup`},threadID,messageID)};
plugin = {body: `.rotation item\n.rotation player fball`}
return api.sendMessage(plugin,threadID, (error, info) => { global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID, type: "rotationChoose"})},messageID)}
        
       }
 } break;
 /*-----------buygiftpackChoose-----------*/
 case "buygiftpackChoose": {
  switch(body.toLowerCase()){
   case "pack100coin": {
    if (!existsSync(pathData)) {
return api.sendMessage({body: `not found data, no signup`},threadID,messageID)}
let coin = require(`./Core@/Football[Core@Game]/Database/User[Database]/${senderID}.json`);
    let addcoin = coin.Coin;
    addcoin += 100; coin.Coin = addcoin
    writeFileSync(pathData, JSON.stringify(coin, null, 4));
    plugin = {body: `+100 coin\nthoi gian giao dich: ${getTime}\nphi giao dich: 10000 kp`};
    return api.sendMessage(plugin, author)
  } break;
   case "pack100ruby": {
 if (!existsSync(pathData)) {
return api.sendMessage({body: `not found data, no signup`},threadID,messageID)}
let ruby = require(`./Core@/Football[Core@Game]/Database/User[Database]/${senderID}.json`);
    let addruby = ruby.Ruby;
    addruby += 100; ruby.Ruby = addruby
    writeFileSync(pathData, JSON.stringify(ruby, null, 4));
    plugin = {body: `+100ruby \nthoi gian giao dich: ${getTime}\nphi giao dich: 400000 kp`}
    return api.sendMessage(plugin, author)
await Currencies.decreaseMoney(senderID, parseInt(400000));
   } break;
   case "pack100diamond": {
if (!existsSync(pathData)) {
return api.sendMessage({body: `not found data, no signup`},threadID,messageID)}
let diamond = require(`./Core@/Football[Core@Game]/Database/User[Database]/${senderID}.json`);
    let adddiamond = diamond.Diamond;
    adddiamond += 100; diamond.Diamond = adddiamond
    writeFileSync(pathData, JSON.stringify(diamond, null, 4));
    plugin = {body: `+100 diamond\nthoi gian giao dich: ${getTime}\nphi giao dich: 400000 kp`}
    return api.sendMessage(plugin, author)
await Currencies.decreaseMoney(senderID, parseInt(400000));
   }
  }
 }
 /*-----------rotation choose----------*/
 case "rotationChoose":
  switch(body.toLowerCase()){
   case "rotation item":{}break;
   case "rotation player fball":{
 var varane = (await axios.get(``, { responseType: "stream"})).data;
 return api.sendMessage(varane, threadID,messageID)
   }
  }
 }
}

