let fetch = require("node-fetch")

let handler = async (m, { conn }) => {
  let res = await fetch('https://zenzapi.xyz/api/random/couples?apikey=YAUDAH IYA')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  await conn.sendFile(m.chat, json.result.male, '', 'cowo', m)
  await conn.sendFile(m.chat, json.result.female, '', 'cewe', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['anime']
handler.command = /^(pp(cp|couple))$/i

module.exports = handler
