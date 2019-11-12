const cheerio = require("cheerio");
const axios = require("axios");

let featuredUtil = "";

const fetchData = async (siteURL) => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const result = await axios.get(proxyurl+siteURL,{
    // crossdomain: true,
    // method: 'GET',
    // mode: 'no-cors',
    // headers: {
    //   'Access-Control-Allow-Origin': 'http://localhost:5000',
    //   'Content-Type': 'application/json',
    // }
  });
  return cheerio.load(result.data);
};

export async function getUtils(zip) {
  const utils = new Set();
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

export async function getContams(utilID){
  const contams = new Set();
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

export default getUtils;