const fetch = require('node-fetch')
exports.module_name='laftel.js'

this.autoComplete = async function(keyword) {
    if(!keyword || keyword == " ") throw new Error('parameter is required')
    const data = await fetch(encodeURI(`https://laftel.net/api/search/v1/auto_complete?keyword=${keyword}`), {
        method: 'GET',
        headers: { 'laftel':'TeJava'  },
    }).then((res)=>res.json())
    return data
}

this.search = async function(keyword) {
    if(!keyword || keyword == " ") throw new Error('parameter is required')
    const data = await fetch(encodeURI(`https://laftel.net/api/search/v1/keyword/?keyword=${keyword}`), {
        method: 'GET',
        headers: { 'laftel':'TeJava'  },
    }).then((res)=>res.json())
    return data
}

this.getItem = async function(productID) {
    if(!productID || productID == " ") throw new Error('parameter is required')
    if(!Number.isInteger(productID)) throw new Error('parameter must be a number')
    const data = await fetch(encodeURI(`https://laftel.net/api/v1.0/items/${productID}/detail/`), {
        method: 'GET',
        headers: { 'laftel':'TeJava'  },
    }).then((res)=>res.json())
    return data
}

this.shop = async function() {
    const data = await fetch(encodeURI('https://laftel.net/api/products/v1/list/?shop=web'), {
        method: 'GET',
        headers: { 'laftel':'TeJava'  },
    }).then((res)=>res.json())
    return data
}

this.hotAnime = async function() {
    const data = await fetch(encodeURI('https://laftel.net/api/v1.0/lists/hot/animation/'), {
        method: 'GET',
        headers: { 'laftel':'TeJava'  },
    }).then((res)=>res.json())
    return data
}

this.getEpisode = async function(productID) {
    if(!productID || productID == " ") throw new Error('parameter is required')
    if(!Number.isInteger(productID)) throw new Error('parameter must be a number')
    const data = await fetch(encodeURI(`https://laftel.net/api/episodes/v1/list/?item_id=${productID}`), {
        method: 'GET',
        headers: { 'laftel':'TeJava'  },
    }).then((res)=>res.json())
    return data
}

this.dailyNew = async function() {
    const data = await fetch(encodeURI(`https://laftel.net/api/search/v1/daily/`), {
        method: 'GET',
        headers: { 'laftel':'TeJava'  },
    }).then((res)=>res.json())
    return data
}

module.exports = {
    search:this.search,
    getItem:this.getItem,
    autoComplete:this.autoComplete,
    shop:this.shop,
    hotAnime:this.hotAnime,
    getEpisode:this.getEpisode,
    dailyNew:this.dailyNew
}