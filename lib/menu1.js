exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
¡Estas son algunas de las características de este bot!✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Command / Comandos :
   
=> *1.MAQUINA DE STICKERS*
_${BotName} enviará su pegatina con la leyenda #sticker!_
Mando: #sticker
Ejemplo: envía una imagen con la leyenda #sticker

=> *2.ESCRITURA AUTOMÁTICA*
_${BotName} enviará la escritura en el libro de acuerdo con lo que envió!_
Mando: #nulis [dijo]
Ejemplo: #nulis me vale 3 pingos

=> *3.RIMAS*
_${BotName} enviará una rima aleatoria!_
Mando: #pantun
Ejemplo: #pantun

=> *4.DOWNLOADER YOUTUBE*
_${BotName} enviará el video desde yt de acuerdo con su comando!_
Mando: #yt [link]
Ejemplo: #yt https://youtu.be/blablabla

=> *5.CARACTERÍSTICAS DE LAS COTIZACIONES*
_${BotName} enviará una palabra de sabiduría al azar!_
Mando: #quotes
Ejemplo: #quotes

=> *6.ACTUALIZADOR DE LA LÍNEA DE TIEMPO*
_${BotName} enviará la imagen cogan / cecan de acuerdo con lo que envió!_
Mando: #ptl [cewek/cowok]
Ejemplo: #ptl cewek

=> *7.ANIME*
_${BotName} enviará imágenes de anime al azar!_
Mando: #randomanime
Ejemplo: #randomanime

=> *8.CAMBIADOR DE VOZ DE GOOGLE*
_${BotName} enviará la voz vn de google de acuerdo con el comando que envíe!_
Mando: #ttsid [kata]
Ejemplo: #ttsid bintang ganteng

=> *9.CARACTERÍSTICAS DEL CORÁN*
_${BotName} enviará versos del Corán al azar!_
Mando: #quran
Ejemplo: #quran

=> *10.INFORMACIÓN DEL BOT*
_${BotName} enviará información sobre el bot!_
Mando: #info
Ejemplo: #info

=> *11.DIGA CARACTERÍSTICAS*
_${BotName} enviará las palabras según lo que envíes!_
Mando: #say [kata]
Ejemplo: #say halo puto

=> *12.YOUTUBE MP3 DOWNLOADER*
_${BotName} enviará la canción de acuerdo con el comando que envió!_
Mando: #ytmp3 [link]
Ejemplo: #ytmp3 https://youtu.be/WTHfrkhG44k

=> *13.INSTAGRAM VIDEO/FOTO DOWNLOADER*
_${BotName} enviará video / foto ig de acuerdo con el pedido que envíe!_
Mando: #ig [link]
Ejemplo: #ig https://www.instagram.com/p/CHp1S-aD9r8/?igshid=ont6an9pa9xf

=> *14.FACEBOOK VIDEO/FOTO DOWNLOADER*
_${BotName} enviará el video / foto fb de acuerdo con el pedido que envíe!_
Mando: #fb [link]
Ejemplo: #fb https://facebook.com/xxxx

=> *15.TWITTER VIDEO/FOTO DOWNLOADER*
_${BotName} enviará un video / foto de Twitter de acuerdo con el comando que envíe!_
Mando: #twt [link]
Ejemplo: #twt https://twitter.com/xxxx

=> *16.WIKIPEDIA*
_${BotName} enviará los resultados de wikipedia de acuerdo con el comando que envíe!_
Mando: #wiki [query]
Ejemplo: #wiki anjing

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
