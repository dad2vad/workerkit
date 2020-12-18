var fetch = require('node-fetch')
class L {
    constructor(name) {
        this.name = name
    }
    TG(x, id) {
        id = id || consts.chat[0]
        return _TG(x, id)
    }
    RND() {
        return r4abc()
    }
    ROM(x) {
        return rom(x)
    }
    TRSL(x) {
        return tra(x)
    }
    PARSE(o) {
        return parsebody(o)
    }
}

function r4abc() {
    const consts = require("./consts")
    var arr = consts.AB
    var val = ''
    var l = arr.length - 1
    for (var i = 0; i < 2; i++) {
        var x = Math.round(Math.random() * l)
        var y = arr[x]
        val += y
    }
    return val + "-" + consts.date
}
async function img(x) {
    var path = await fetch(`https://api.imgbb.com/1/upload?key=33612f7751537f4f27c5253f56edbf16&name=${r4abc()}&image=${x}`)
    path = await path.json()
    path = path.data.url
    return path
}

function tra(x) {
    const hasOwnProperty = Object.prototype.hasOwnProperty
    const a = Object.create(null,
        { Ё: { value: 'Yo', }, Й: { value: 'I', }, Ц: { value: 'Ts', }, У: { value: 'U', }, К: { value: 'K', }, Е: { value: 'E', }, Н: { value: 'N', }, Г: { value: 'G', }, Ш: { value: 'Sh', }, Щ: { value: 'Sch', }, З: { value: 'Z', }, Х: { value: 'H', }, Ъ: { value: '', }, ё: { value: 'yo', }, й: { value: 'i', }, ц: { value: 'ts', }, у: { value: 'u', }, к: { value: 'k', }, е: { value: 'e', }, н: { value: 'n', }, г: { value: 'g', }, ш: { value: 'sh', }, щ: { value: 'sch', }, з: { value: 'z', }, х: { value: 'h', }, ъ: { value: '', }, Ф: { value: 'F', }, Ы: { value: 'I', }, В: { value: 'V', }, А: { value: 'a', }, П: { value: 'P', }, Р: { value: 'R', }, О: { value: 'O', }, Л: { value: 'L', }, Д: { value: 'D', }, Ж: { value: 'Zh', }, Э: { value: 'E', }, ф: { value: 'f', }, ы: { value: 'i', }, в: { value: 'v', }, а: { value: 'a', }, п: { value: 'p', }, р: { value: 'r', }, о: { value: 'o', }, л: { value: 'l', }, д: { value: 'd', }, ж: { value: 'zh', }, э: { value: 'e', }, Я: { value: 'Ya', }, Ч: { value: 'Ch', }, С: { value: 'S', }, М: { value: 'M', }, И: { value: 'I', }, Т: { value: 'T', }, Ь: { value: '', }, Б: { value: 'B', }, Ю: { value: 'Yu', }, я: { value: 'ya', }, ч: { value: 'ch', }, с: { value: 's', }, м: { value: 'm', }, и: { value: 'i', }, т: { value: 't', }, ь: { value: '', }, б: { value: 'b', }, ю: { value: 'yu', }, ґ: { value: 'g', }, ї: { value: 'i', }, є: { value: 'e', }, і: { value: 'i', }, Ґ: { value: 'G', }, Ї: { value: 'I', }, Є: { value: 'E', }, І: { value: 'I', } }
    )

    function mapWords(char) {
        return hasOwnProperty.call(a, char) ? a[char] : char
    }

    function transliterate(word) {
        return word.split('').map(mapWords).join('')
    }
    return transliterate(x)
}

function rom(num) {
    if (isNaN(num))
        return NaN
    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"
        ],
        roman = "",
        i = 3
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman
    return Array(+digits.join("") + 1).join("M") + roman
}
async function _TG(x, id) {
    x = typeof x != 'string' ? JSON.stringify(x, null, 4) : x
    let T = await fetch(`https://api.telegram.org/bot1068309359:AAHBqpIpwDcanS-XNfbWh-uPctjouz9rjDw/sendMessage?chat_id=${id}&text=` + x)
    return T
}
async function imgtg(e) {
    var l = (e.length - 1)
    var pic = e[l].file_id
    var token = "716677107:AAFjp6xjD6vTn5KMg2myT2ukDrR1I6SR5sc"
    var getfile = await fetch('https://api.telegram.org/bot' + token + '/getFile?file_id=' + pic)
    getfile = await getfile.json()
    var file = 'https://api.telegram.org/file/bot' + token + '/' + getfile.result.file_path
    pic = await img(file)
    return pic
}
async function parsebody(e) {
    function getUrl(input) {
        var urlRegex = /(https?:\/\/[^ ]*)/
        if (input.match(urlRegex)) {
            var url = input.match(urlRegex)[1]
        } else {
            var url = ''
        }
        return url
    }
    e = typeof e != 'object' ? JSON.parse(e) : e
    var E = {}
    if (e.event) {
        const from = e.sender || e.user || e || ''
        var id = from.id || from.user_id || ''
        E.id = id.replace(/\//g, '_')
        const msg = e.message || ''
        if (msg.media) E.pic = await img(encodeURIComponent(msg.media))
        let text = msg.text || ''
        let url = getUrl(text)
        if (url) {
            E.url = url
        }
    } else if (e.update_id) {
        var type = Object.keys(e)[1]
        var msg = e[type]
        var f = msg.from || msg.chat || ''
        E.id = String(f.id) || ''
        E.usr = f.username || f.title || f.first_name + '_' + f.last_name || ''
        E.txt = msg.text || msg.data || msg.query || msg.caption || ''
        if (msg.photo) E.pic = await imgtg(msg.photo)
        if (msg.location) E.geo = msg.location.latitude.toFixed(5) + "," + msg.location.longitude.toFixed(5)
    }
    Object.keys(E).forEach(k => (!E[k] && E[k] !== undefined) && delete E[k])
    return E
}
module.exports = L