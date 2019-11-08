const Example = require('../models/examples.server.model.js')

const scraper = require("./scraper");

// const api_helper = require('./API_helper');
// const jsdom = require('jsdom');
// const {JSDOM} = jsdom;

exports.scrape = async function(req, res) {
    //TODO: input zip code from user/UI
    let zip = '33325';
    const utilData = await scraper.getUtils(zip);
    //TODO: output/display utils to user/UI
    //TODO: input util selection from user/UI
    let util = utilData.featuredUtil.link;
    const contamData = await scraper.getContams(util)
    res.json(contamData);
};

// exports.scrape = function(req, res) {

//     //change hard-coded zip code to allow for changes
//     api_helper.make_API_call('https://www.ewg.org/tapwater/search-results.php?zip5=' + '33549' + '&searchtype=zip')
//     .then(response => {
//         const dom = new JSDOM(response);
//         res.json(dom.window.document.querySelectorAll('tr'));
//     })
//     .catch(error => {
//         res.send(error)
//     })    
// };