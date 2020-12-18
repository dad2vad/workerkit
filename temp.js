 var fetch = require('isomorphic-unfetch')

 const res = async () => {

    let u = JSON.parse(
            await (await fetch('https://vsamaru.firebaseio.com/*.json')).text()
        )
         const receiver = "iwnyTCYmL3dNSCDDJmvA0A=="
     var data = {
         'type': 'text',
         'text': JSON.stringify(u),
         'receiver': receiver
     }
     let uu = await fetch('https://chatapi.viber.com/pa/send_message', {
         "method": 'POST',
         "headers": { 'X-Viber-Auth-Token': '4ae0995b6f67d10d-dd36b04c65262134-adf72625e8e168aa' },
         "body": JSON.stringify(data)
     })
     return u//Promise.resolve(u)
 }

res()


var SAMPLE_KEYBOARD = {
    "Type": "keyboard",
    "ButtonsGroupColumns": 6,
    "ButtonsGroupRows": 1,
    "Buttons": [{
        "ActionBody": "Y",
        "ActionType": "reply",
        "TextVAlign": "top",
        "Text": "<b><font color=\"#78fee0\">ЗБЕРЕГТИ?</b></font>",
        "BgColor": "#555555",
     
        "Columns": 6
    }]
}
var START = {
    "Type": "keyboard",
    "ButtonsGroupColumns": 6,
    "ButtonsGroupRows": 1,
    "Buttons": [{
        "ActionBody": "Y",
        "ActionType": "reply",
        "TextVAlign": "top",
        "Text": "<b><font color=\"#78fee0\">???/b></font>",
        "BgColor": "#555555",
        "Columns": 6
    }]
}
var KEYBOARD = {
    "Type": "keyboard",
    "ButtonsGroupColumns": 6,
    "ButtonsGroupRows": 1,
    "Buttons": [{
        "ActionBody": "Y",
        "ActionType": "reply",
        "TextVAlign": "top",
        "Text": "<b><font color=\"#78fee0\">ЩЄ-</b></font>",
        "BgColor": "#555555",
        "Columns": 6
    }]
}
var TEL = {
        "Type": "keyboard",
        "ButtonsGroupColumns": 6,
        "ButtonsGroupRows": 1,
        "Buttons": [{
            "ActionBody": 'Kyiv',
            "ActionType": "share-phone",
            "TextVAlign": "top",
            "TextHAlign": "center",
            "Text": "<b><font color=\"#ff80c0\">KYIV</b></font>",
            "BgColor": "#555555",
            "Silent": true,
            "Columns": 2
        }, {
            "ActionBody": 'Oblast',
            "ActionType": "share-phone",
            "TextVAlign": "top",
            "TextHAlign": "center",
            "Text": "<b><font color=\"#555555\">OBLAST</b></font>",
            "BgColor": "#c7fff2",
            "Silent": true,
            "Columns": 2
        },{
            "ActionBody":"viber://pa?chatURI=zaec",
            "ActionType":"open-url",
            "Silent": true,
            "TextSize": "large",
            "TextVAlign":"top",
           "TextHAlign":"center",
           "Text":"<b><font color=\"#ff80c0\">RESET</b></font>",
            "BgColor":"#555555",
            "Columns":2
         }]
    }

    
function ev(upd) {
    const event = upd.event
    const from = upd.sender || upd.user || upd || ''
    const USER_ID = from.id || from.user_id || ''
    const msg = upd.message || ''
    const type = msg.type || ''
    var text = msg.text || ''
    let u = getUrl(text)
    let url = u[0]
    let ref = u[1]
    let contact = msg.contact || ''
        // var e = await E(text)[0] || '�'
    var DATA = {
        'type': 'text',
        'min_api_version': 6,
        'text': JSON.stringify(upd, null, 4),
        'receiver': USER_ID
    }
    try {
        if (text === "del") {
            throw ''
        }
        DATA.tracking_data = JSON.parse(msg.tracking_data)
    } catch (e) {
        DATA.tracking_data = {
            day: d(),
            id: USER_ID.replace(/[\W\d]+/gi, '').slice(0, 5)
        }
    }
    if (contact) {
        DATA.tracking_data.tel = contact.phone_number
        DATA.tracking_data.from = text
        DATA.tracking_data.name = from.name
    }
    if (DATA.tracking_data.url && text && !url && !contact && text != "Kyiv" && text != "Oblast") {
        DATA.tracking_data.ref = text
    }
    if (url) {
        DATA.tracking_data.url = url
        if (ref.length > 2) {
            DATA.tracking_data.ref = ref
        }s
    }
    
    DATA.text = DATA.tracking_data
    DATA.tracking_data = JSON.stringify(DATA.tracking_data, null, 4)
    DATA.keyboard = TEL
    return JSON.stringify(DATA, null, 4)
}
function s(z) {
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    var arr = str.split('')
    var val = ''
    var l = arr.length - 1
    z = z || 3
    for (var i = 0; i < z; i++) {
        var x = Math.round(Math.random() * l)
        var y = arr[x]
        val += y
    }
    return val + "-" + r4abc()
}

function iid(id) {
    let u = id.replace(/[\W\d]+/gi, '').slice(0, 4)
    return u
}

function getUrl(input) {
    var urlRegex = /(https?:\/\/[^ ]*)/;
    if (input.match(urlRegex)) {
        var url = input.match(urlRegex)[1]
        var ref = input.split(url).join(' ')
    } else {
        var url = ''
    }
    return [url, ref]
}

function fb_id(id) {
    let u = id.replace(/[\W]+/gi, '').slice(0, 4)
    let usr = fetch(`https://vsamaru.firebaseio.com/*/${u}.json`)
        .then(r => r.json())
        .then(data => {
            return data
        })
}

function toFb(x) {
    x = x.replace(/[\W]+/gi, '')
    return x
}

function fb(id, q) {
    id = id || d()
    var dbData = {}
    dbData[toFb(id)] = q
    var RTDB_URL = "https://vsamaru.firebaseio.com/U/"
    var token = '1hZvfs5Uu4ZEErSivsaq12OY9zluoSt2PlVW8Xs1'
    var url = RTDB_URL + "/" + ".json?secret=" + encodeURIComponent(token)
    var response = fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(dbData)
        }).then(r => r.json())
        .then(data => {
            return data
        }).catch(e => console.error(e))
}

//      if(body.message.location) {//�
             
//          E[0] = body.message.location.latitude+","+body.message.location.longitude
//          if (E[1]) {
//   let re = await  tgph(E)
 
//  console.info(re)
//  E = []
//  var del1 = await fetch("https://api.telegram.org/bot1021234601:AAEepwGyh-rmP0uo8TqsvgyC-5F5q0vOFew/deleteMessage?chat_id=465081843&message_id="+(body.message.message_id-1))

//  var getfile = await fetch("https://api.telegram.org/bot1021234601:AAEepwGyh-rmP0uo8TqsvgyC-5F5q0vOFew/deleteMessage?chat_id=465081843&message_id="+body.message.message_id)

//   }
//         }

//                    if (body.message.photo) {//�
//    //                           var l = (body.message.photo.length-1);//debug(l)
//    // var pic = body.message.photo[l].file_id;
//    // var getfile = await fetch('https://api.telegram.org/bot' + token + '/getFile?file_id=' + pic)
//    // getfile = await getfile.json()
   
//    // var file = 'https://api.telegram.org/file/bot' + token + '/' + getfile.result.file_path
//            var l = (body.message.photo.length-1);//debug(l)
//    var pic = body.message.photo[l].file_id;
    
// var getfile = await fetch('https://api.telegram.org/bot' + token + '/getFile?file_id=' + pic)
// getfile = await getfile.json()

// var path = await fetch('https://api.imgbb.com/1/upload?key=33612f7751537f4f27c5253f56edbf16&image=https://api.telegram.org/file/bot' + token + '/' + getfile.result.file_path);
// path = await path.json()
// var file = path.data.url

//          E[2] = file
//  E[1] = body.message.caption
//  E[3] = await fb(body.message.from.id) 
// if (E[0]) {
//   let re = await  tgph(E)
  
//  console.info(re)
//  E = []
//  var del1 = await fetch("https://api.telegram.org/bot1021234601:AAEepwGyh-rmP0uo8TqsvgyC-5F5q0vOFew/deleteMessage?chat_id=465081843&message_id="+(body.message.message_id-1))

//  var getfile = await fetch("https://api.telegram.org/bot1021234601:AAEepwGyh-rmP0uo8TqsvgyC-5F5q0vOFew/deleteMessage?chat_id=465081843&message_id="+body.message.message_id)

//   }