//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : CHXSE
// @author : CHXSE
// @telegram : http://t.me/MatriXXXXXXXXX
// @github : Matrix1999
// @whatsapp : +233593734312

//----------------------[ CHXSE ]----------------------//

const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'QUEEN-ADIZA~iVIx2ZQL#jco7xnAgdAFVCf5Xsj5HrCeJx2GEU1FjjUprcIFkThI' 
//Enter your Adiza session id here; must start with QUEEN~ADIZA~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'CHXSE' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '2349099351445' 

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'CHXSE' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "CHXSE" 

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "CHXSE" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://www.instagram.com/thechx53"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "® CHXSE⚡"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©CHXSE', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ CHXSE ]----------------------//
