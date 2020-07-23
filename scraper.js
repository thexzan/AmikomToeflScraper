const axios = require("axios");
const cheerio = require("cheerio");

const scraper = {
  getData: async url => {
    // THIS ONLY GET THE WEBPAGE
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    let result = [];
    $("tbody tr").each((i, element) => {
      const kode = $(element).find("td").eq(0).text();
      const nim = $(element).find("td").eq(1).text();
      const nama = $(element).find("td").eq(2).text();
      const skor = $(element).find("td").eq(3).text();
      const tanggalTest = $(element).find("td").eq(4).text();
      result.push({ kode, nim, nama, skor, tanggalTest });
    });

    return result;
  }
};

module.exports = scraper;
