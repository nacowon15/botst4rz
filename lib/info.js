exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah info pada bot ini!✨



exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ MENU DONASI ${ERROR404} ]----- 🔰
  
Hi, ${id.split("@s.whatsapp.net")[0]} 👋

⚠️ ${tampilTanggal}
⚠️ ${tampilWaktu}


✅ SIGUEME EN INSTAGRAM (@TRAPY_TOMOJADO)

⚠️ INFORMACIÓN SOBRE COVID19!

⚠️ POSITIVOS: ${corohelp.confirmed.value}
⚠️ SANOS: ${corohelp.recovered.value}
⚠️ EN EL GULAG: ${corohelp.deaths.value}
⚠️ UPDATE: ${corohelp.lastUpdate}


  
🔰 -----[ POWERED BY NACOWON ]----- 🔰`
}
