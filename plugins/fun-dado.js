const da = [
  'https://tinyurl.com/gdd01',
  'https://tinyurl.com/gdd02',
  'https://tinyurl.com/gdd003',
  'https://tinyurl.com/gdd004',
  'https://tinyurl.com/gdd05',
  'https://tinyurl.com/gdd006'
];
let handler = async (m, { conn }) => {
await conn.reply(m.chat, '🕧 𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒆𝒔𝒑𝒆𝒓𝒆... 𝒔𝒐𝒚 𝒍𝒆𝒏𝒕𝒐🐢,  𝒔𝒖𝒔 𝒅𝒂𝒅𝒐𝒔 𝒔𝒆 𝒆𝒔𝒕𝒂 𝒄𝒓𝒆𝒂𝒏𝒅𝒐', m)
  conn.sendFile(m.chat, pickRandom(da), 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['dado', 'dados'] 

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

 /*import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 *#on stickers* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 𝘼𝙍𝙀 𝘿𝙄𝙎𝘼𝘽𝙇𝙀𝘿 𝙐𝙎𝙀 *#on stickers* 𝙏𝙊 𝙀𝙉𝘼𝘽𝙇𝙀`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0
 
let nombre = '🐈'
let nombre2 = 'xd'
 
const s = [
'https://media.giphy.com/media/h5cY0X4NcHP2JiFXNG/giphy.gif', 
'https://media.giphy.com/media/SSinJFA7xCih5g9F1c/giphy.gif',
'https://media.giphy.com/media/kBHH2rfm1VHIYgodQx/giphy.gif',
'https://media.giphy.com/media/UpDKR8EYG5zFtYhWNz/giphy.gif',
'https://media.giphy.com/media/h8mwX2Tt1R2oIOhszC/giphy.gif',
'https://media.giphy.com/media/iGeW8L2Pvzzbtf6jII/giphy.gif'

];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
}
handler.help = ['dado']
handler.tags = ['game'] 
handler.command = /^(dado|dados)/
handler.exp = 50
export default handler */
