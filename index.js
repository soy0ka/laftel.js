const BASE_URL = 'https://laftel.net/api'
const OPTION = { headers: { laftel: 'TeJava' } }

const fetch = require('node-fetch')
const fetcher = async (path) => await fetch(BASE_URL + path, OPTION).then((res) => res.json())

module.exports = class Laftel {
    static autoComplete (keyword = '') {
        if (keyword.trim?.().length < 1) throw new Error('parameter is required')
        if (typeof keyword !== 'string') throw new Error('parameter must be a string')
        return fetcher(`/search/v1/auto_complete?keyword=$${encodeURIComponent(keyword)}`)
    }

    static search (keyword = '') {
        if (keyword.trim?.().length < 1) throw new Error('parameter is required')
        if (typeof keyword !== 'string') throw new Error('parameter must be a string')
        return fetcher(`/search/v1/keyword/?keyword=${encodeURIComponent(keyword)}`)
    }

    static getItem (productID = '') {
        if (productID.trim?.().length < 1) throw new Error('parameter is required')
        if (Number.isNaN(parseInt(productID))) throw new Error('parameter must be a number')
        return fetcher(`/v1.0/items/${encodeURIComponent(productID)}/detail/`)
    }

    static getEpisode (productID = '') {
        if (productID.trim?.().length < 1) throw new Error('parameter is required')
        if (Number.isNaN(parseInt(productID))) throw new Error('parameter must be a number')
        return fetcher(`/episodes/v1/list/?item_id=${productID}`)
    }

    static shop = () => fetcher('/products/v1/list/?shop=web')
    static hotAnime = () => fetcher('/v1.0/lists/hot/animation/')
    static dailyNew = () => fetcher('/search/v1/daily/')
}
