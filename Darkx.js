//Buatan Darkx jangan hapus lah tod🗿
//sc ori sansekai

const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys");
const { modul } = require('./module');
const { axios, baileys, child_process, moment, ms} = modul;
const fs = require("fs");
const speed = require('performance-now');
const os = require('os');
const util = require("util");
const chalk = require("chalk");
const { Configuration, OpenAIApi } = require("openai");
let setting = require('./openKey.json');
const { formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, } = require('./myfunc')

module.exports = bang = async (client, dark, chatUpdate, store) => {
  try {
    var body =
      dark.mtype === "conversation"
        ? dark.message.conversation
        : dark.mtype == "imageMessage"
        ? dark.message.imageMessage.caption
        : dark.mtype == "videoMessage"
        ? dark.message.videoMessage.caption
        : dark.mtype == "extendedTextMessage"
        ? dark.message.extendedTextMessage.text
        : dark.mtype == "buttonsResponseMessage"
        ? dark.message.buttonsResponseMessage.selectedButtonId
        : dark.mtype == "listResponseMessage"
        ? dark.message.listResponseMessage.singleSelectReply.selectedRowId
        : dark.mtype == "templateButtonReplyMessage"
        ? dark.message.templateButtonReplyMessage.selectedId
        : dark.mtype === "messageContextInfo"
        ? dark.message.buttonsResponseMessage?.selectedButtonId || dark.message.listResponseMessage?.singleSelectReply.selectedRowId || dark.text
        : "";
    var budy = typeof dark.text == "string" ? dark.text : "";
    // var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/"
    var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";
    const isCmd2 = body.startsWith(prefix);
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = dark.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = dark.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);

    const from = dark.chat;
    const reply = dark.reply;
    const sender = dark.sender;
    const mek = chatUpdate.messages[0];

    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };

    // Group
    const groupMetadata = dark.isGroup ? await client.groupMetadata(dark.chat).catch((e) => {}) : "";
    const groupName = dark.isGroup ? groupMetadata.subject : "";

    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;

        if (setting.autoAI) {
            // Push Message To Console && Auto Read
            if (argsLog && !dark.isGroup) {
            client.readMessages([dark.key])
            console.log(chalk.black(chalk.bgGreen('[ CMD ]')), color(argsLog, 'turquoise'), chalk.magenta(`[ ${dark.sender.replace('@s.whatsapp.net', '@s.whatsapp.net')} ]`))
            } else if (argsLog && dark.isGroup) {
            // client.sendReadReceipt(dark.chat, dark.sender, [dark.key.id])
            console.log(chalk.black(chalk.bgGreen('[ CMD ]')), color(argsLog, 'turquoise'), (`[ ${dark.sender.replace('@s.whatsapp.net', '@s.whatsapp.net')} ]`), chalk.blueBright('| Goup :'), chalk.magenta(groupName))
            }
        } else if (!setting.autoAI) {
            if (isCmd2 && !dark.isGroup) {
                console.log(chalk.black(chalk.bgGreen('[ CMD ]')), color(argsLog, 'turquoise'), chalk.blue(`[ ${dark.sender.replace('@s.whatsapp.net', '@s.whatsapp.net')} ]`))
                } else if (isCmd2 && dark.isGroup) {
                console.log(chalk.black(chalk.bgGreen('[ CMD ]')), color(argsLog, 'turquoise'), chalk.magenta(`[ ${dark.sender.replace('@s.whatsapp.net', '')} ]`), chalk.blueBright('| Group :'), chalk.yellow(groupName))
                }
        }
        
            if (setting.autoAI) {
        if (budy) {
            try {
            if (setting.keyopenai === 'BUATAN DARKX ') return reply('ISI_APIKEY_Di_openKey.js')
            const configuration = new Configuration({
              apiKey: setting.keyopenai, 
            });
            const openai = new OpenAIApi(configuration);
            
            const response = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: budy,
              temperature: 0.3,
              max_tokens: 3000,
              top_p: 1.0,
              frequency_penalty: 0.0,
              presence_penalty: 0.0,
            });
            dark.reply(`${response.data.choices[0].text}\n\n`)
            } catch(err) {
                console.log(err)
                dark.reply('Ada yg lg eror bwang maap ye!')
            }
        }
    }


    if (isCmd2) {
      switch (command) {
        case "help":
        case "menu":
          dark.reply(`*𝗪hatsapp 𝗕ot 𝗢pen𝗔𝗜*
            
*「𝗖𝙷𝙰𝚃𝗚𝗣𝗧」*
𝙲𝙼𝙳: ${prefix}ai 
Tanyakan apa saja kepada AI. 

*「𝗗𝗔𝗟𝗟-𝗘」*
𝙲𝙼𝙳: ${prefix}img
Membuat gambar dari teks

「𝗢𝗧𝗛𝗘𝗥」
𝙲𝙼𝙳: ${prefix}ping
𝙲𝙼𝙳: ${prefix}runtime
𝙲𝙼𝙳: ${prefix}up
Menampilkan speed respond dan uptime 𝗕𝗢𝗧 𝗢𝗽𝗲𝗻𝗔𝗶

「𝗼𝘄𝗻𝗲𝗿」
𝙲𝙼𝙳: ${prefix}owner
Author saya ini kakak bantu donate ya :)
via DANA: 082285357346`)
          break;
        case "ai": case "openai": 
          try {
            if (setting.keyopenai === "BUATAN_DARKX") return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
            if (!text) return reply(`Chat dengan AI.\n\nContoh:\n${prefix}${command} Apa itu resesi`);
            const configuration = new Configuration({
              apiKey: setting.keyopenai,
            });
            const openai = new OpenAIApi(configuration);

            const response = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: text,
              temperature: 0.3,
              max_tokens: 2000,
              top_p: 1.0,
              frequency_penalty: 0.0,
              presence_penalty: 0.0,
            });
            dark.reply(`${response.data.choices[0].text}`);
          } catch (err) {
            console.log(err);
            dark.reply("Maaf, sepertinya ada yang error :" + err);
          }
          break;
case 'ping':
case 'runtime':
case 'up':{
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
respon = `
Speed Responden Bot ${latensi.toFixed(4)} _Second_ \nRuntime : ⎇  ${runtime(process.uptime())}
⎉ Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
`
dark.reply(respon)
}
          break;
          case 'owner':{
          ownerku = 'my mastah ygy =>> wa.me/6282285357346?text=Halo_bang'
dark.reply(ownerku)}
          break;
        case "img": case "ai-img": case "image": case "images":
          try {
            if (setting.keyopenai === "BUATAN_DARX") return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
            if (!text) return reply(`Mencari gambar/foto dari AI.\n\nContoh:\n${prefix}${command} PP Darkx/PP couple`);
            const configuration = new Configuration({
              apiKey: setting.keyopenai,
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
            //console.log(response.data.data[0].url)
            client.sendImage(from, response.data.data[0].url, text, mek);
          } catch (err) {
            console.log(err);
            dark.reply("Maaf, sepertinya ada yang error :"+ err);
          }
          break;
        default: {
          if (isCmd2 && budy.toLowerCase() != undefined) {
            if (dark.chat.endsWith("broadcast")) return;
            if (dark.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if (argsLog || (isCmd2 && !dark.isGroup)) {
              // client.sendReadReceipt(dark.chat, dark.sender, [dark.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));
            } else if (argsLog || (isCmd2 && dark.isGroup)) {
              // client.sendReadReceipt(dark.chat, dark.sender, [dark.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));
            }
          }
        }
      }
    }
  } catch (err) {
    dark.reply(util.format(err));
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
