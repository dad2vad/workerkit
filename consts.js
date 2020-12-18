var emj = ['🎃', '🍪', '🍩', '⚽️', '🏀', '🥎', '🎱', '📀', '💣', '🧿', '🍏', '🍎', '🍀', '🍁', '🍄', '🍋', '🍓', '🍍', '🥥', '🥝', '🥑', '🎲', '💎', '🎁', '🍐', '🌸', '🦀']
var blk = ["🅲", "🅳", "🅴", "🅵", "🅶", "🅷", "🅸", "🅹", "🅺", "🅻", "🅼", "🅽", "🆀", "🆁", "🆂", "🆃", "🆄", "🆅", "🆆", "🆇", "🆈", "🆉"]
var _123 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var AB = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var chat = ["986940575","-1001431294521",  "-1001161709623","-1001433099398"]
var date = new Date()
    .toISOString()
    .replace(/T/, '')
    .replace(/2020-/, '')
    .replace(/\..+/, '')
    .replace(/:|-/g, '')
    .slice(4)
    
//date = +date 
// console.log(date)
// date = (date + 30000)

module.exports.emj = emj
module.exports.blk = blk
module.exports._123 = _123
module.exports.abc = abc
module.exports.AB = AB 
module.exports.date = date
module.exports.chat = chat