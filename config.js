const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/27b3d5e5f20bd9d2cecff.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94753122502";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_16_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI4LFxuICAgICAgICA5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDksXG4gICAgICAgIDk3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzLFxuICAgICAgICA2NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzLFxuICAgICAgICA1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDYsXG4gICAgICAgIDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDM3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI4LFxuICAgICAgICA2OCxcbiAgICAgICAgODMsXG4gICAgICAgIDExLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMixcbiAgICAgICAgODcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDczLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDY1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMixcbiAgICAgICAgMTE1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgODEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDYxLFxuICAgICAgICA4NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVOMzEvQnZhbFB5RXdWV0hsa2xaZHRwRVZOMGowLy81TXZzL1owdWk0SzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIktvUWZTUXlLUi0yQTdQdE93dy14OGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDAxZDJjZDctMWFkYy00NjljLThmOWMtMzZjOGY0MGRiZWY5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDExNyxcbiAgICAgIDc4LFxuICAgICAgNDUsXG4gICAgICAzNSxcbiAgICAgIDE5NyxcbiAgICAgIDE0OSxcbiAgICAgIDE2OSxcbiAgICAgIDk0LFxuICAgICAgMTI4LFxuICAgICAgNixcbiAgICAgIDM2LFxuICAgICAgNTksXG4gICAgICA2MyxcbiAgICAgIDIzMSxcbiAgICAgIDMyLFxuICAgICAgMTAxLFxuICAgICAgMTUzLFxuICAgICAgNzksXG4gICAgICAxOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgMjE2LFxuICAgICAgMTcsXG4gICAgICAyMjgsXG4gICAgICAxMDYsXG4gICAgICAyMTMsXG4gICAgICAyMTYsXG4gICAgICAzNCxcbiAgICAgIDUyLFxuICAgICAgNjAsXG4gICAgICAxNjcsXG4gICAgICA1NCxcbiAgICAgIDE4NixcbiAgICAgIDE2OSxcbiAgICAgIDE1NCxcbiAgICAgIDE5MCxcbiAgICAgIDIzNyxcbiAgICAgIDIyOSxcbiAgICAgIDk4LFxuICAgICAgMTgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZSUlBLNE44XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc1MzEyMjUwMjo4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk1ODc2NjgxMTY2OTU5OjgzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04vYWhQa0RFS3FIcExVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQitHN0k5NXNEc1h0amtrWmZwa0paRktncmRiU0lqdC9iYm9IejBaNjFIdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1cGJMRDVUOFhtZVNTVDJ0RTIxQkZpcnFXS2JVZWxDMktKSy9HWmwzbmxrWUxIdVBqekw0TTJnai9NNjd6SUthTlBMOWxjbzZES3ZMKzRVZjhlVGFEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIL0xoUnBmU3J0TCtpSXlaRTdnVzlVcXkwa0tFOEx2UlBWOUdWNUwzSFRkWTg3S2RJZ0V2V2dkTVZic24vQTlnTFhQTUNSYjBtSWFHYUJsNHV1LzJpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc1MzEyMjUwMjo4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIzNTI1NTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLUXlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtReS5qc29uIjogIntcImtleURhdGFcIjpcIk8yUE83ZHE5OHBnT0FKR1FXVDdjSWtzdzVCdTZrQlNDNVRLU3BIQ0xNRHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA1OTEzODkwOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "SURA",
  botname : process.env.BOT_NAME  || "SUNETH-MD",
  ownername:process.env.OWNER_NAME|| "SUNETH",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
