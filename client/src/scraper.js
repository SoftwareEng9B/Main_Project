const cheerio = require("cheerio");
const axios = require("axios");

let featuredUtil = "";
const utils = new Set();
const contams = new Set();

const fetchData = async (siteURL) => {
  const result = await axios.get(siteURL);
  return cheerio.load(result.data);
};

exports.getUtils = async (zip) => {
    const utilsURL = "https://www.ewg.org/tapwater/search-results.php?zip5="+zip+"&searchtype=zip";
  const $ = await fetchData(utilsURL);  

  $(".search-results-table a").each((index, element) => {
    utils.add({
        name: $(element).text(),
        link: $(element).attr('href')
    });
  });

  featuredUtil = {
    name: $('.utility-info p').first().text(),
    link: $('.featured-utility .primary-btn').attr('href')
   };

  utils.add(featuredUtil);

  return {
    utils: [...utils].sort(),
    featuredUtil,
  };
};

exports.getContams = async (utilID) => {
    const contamsURL = "https://www.ewg.org/tapwater/"+utilID;
  const $ = await fetchData(contamsURL);

  $(".filter-table tbody tr td").each((index, element) => {
      let contam = $(element).text();
      if(!contam.toLowerCase().includes('contaminants')){
        contams.add(contam);
      }
  });

  return {
    contams: [...contams].sort(),
  };
};
