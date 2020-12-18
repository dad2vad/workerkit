var L = require('./index')
var l = new L()

// var o = {
//     "update_id": 185726837,
//     "message": {
//         "message_id": 2885,
//         "from": {
//             "id": 528494103,
//             "is_bot": false,
//             "first_name": "антон",
//             "last_name": "палкин",
//             "username": "anton_palkin",
//             "language_code": "ru"
//         },
//         "chat": {
//             "id": 528494103,
//             "first_name": "антон",
//             "last_name": "палкин",
//             "username": "anton_palkin",
//             "type": "private"
//         },
//         "date": 1593989787,
//         "location": {
//             "latitude": 50.434462,
//             "longitude": 30.641856
//         }
//     }
// }
var o = {
 "update_id": 383926543,
  "message": {
  "message_id": 376,
        "from": {
            "id": 528494103,
            "is_bot": false,
            "first_name": "антон",
            "last_name": "палкин",
            "username": "anton_palkin",
            "language_code": "ru"
        },
        "chat": {
            "id": 528494103,
            "first_name": "антон",
            "last_name": "палкин",
            "username": "anton_palkin",
            "type": "private"
        },
  "date": 1571308894,
  "photo": [
   {
    "file_id": "AgADAgADMKwxG7Y4QEnEZzSKML0XcuzOuQ8ABAEAAwIAA20AA-n9AwABFgQ",
    "file_size": 30072,
    "width": 240,
    "height": 320
   },
   {
    "file_id": "AgADAgADMKwxG7Y4QEnEZzSKML0XcuzOuQ8ABAEAAwIAA3gAA-r9AwABFgQ",
    "file_size": 163369,
    "width": 600,
    "height": 800
   },
   {
    "file_id": "AgADAgADMKwxG7Y4QEnEZzSKML0XcuzOuQ8ABAEAAwIAA3kAA-f9AwABFgQ",
    "file_size": 183435,
    "width": 640,
    "height": 854
   }
  ]
 }
}
 /*
 var o = {
    "event": "message",
    "timestamp": 1595121707263,
    "chat_hostname": "SN-CHAT-19_",
    "message_token": 5465446258895272000,
    "sender": {
        "id": "2A0smYCfVQAFcUM2HiHbrw==",
        "name": "di",
        "language": "ru",
        "country": "UA",
        "api_version": 8
    },
    "message": {
        "text": "https://www.google.com.ua/maps/place/50%C2%B026'04.5%22N+30%C2%B038'29.8%22E/@50.4344688,30.6415439,21z/data=!4m5!3m4!1s0x0:0x0!8m2!3d50.434569!4d30.641619",
        "type": "text"
    },
    "silent": false
} 
var o2 = {
    "event": "message",
    "timestamp": 1595122097548,
    "chat_hostname": "SN-CHAT-19_",
    "message_token": 5465447895873402000,
    "sender": {
        "id": "2A0smYCfVQAFcUM2HiHbrw==",
        "name": "di",
        "language": "ru",
        "country": "UA",
        "api_version": 8
    },
    "message": {
        "text": "44455",
        "type": "text"
    },
    "silent": false
}
*/
async function te() {
    
let re = await l.RND()

console.log(re)
return re
}
te()