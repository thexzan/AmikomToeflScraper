const axios = require("axios");
const cheerio = require("cheerio");

const scraper = {
  getData: async () => {
    const response = await axios.get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSumovlj0o3Bzd2S0nR3AdusPC1qm2AEKvfo8bpfvjwxOGVew1b_OUKKg-QAV08J1yGSUTp8X-iA29s/pubhtml?gid=0&single=true&widget=false&headers=false&chrome=false"
    );
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
