const Example = require('../models/examples.server.model.js')

const scraper = require("./scraper");

exports.scrape = async function(req, res) {
    //TODO: input zip code from user/UI
    let zip = req.body.zipcode;
    //let zip = '33325';
    const utilData = await scraper.getUtils(zip);
    //TODO: output/display utils to user/UI
    //res.json(utilData);
    //TODO: input util selection from user/UI
    let util = req.body.utilselection;
    //let util = utilData.featuredUtil.link;
    const contamData = await scraper.getContams(util)
    res.json(contamData);
    };