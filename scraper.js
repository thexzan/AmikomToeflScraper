const axios = require("axios");
const cheerio = require("cheerio");

const scraper = {
  getData: async url => {
    // THIS ONLY GET THE WEBPAGE
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    $("tbody tr").each((i, element) => {
      const kode = $(element).find("td").eq(0).text();
      debugger;
    });

    debugger;
    let result = {};
    return result;
  }
};

module.exports = scraper;
