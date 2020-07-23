const scraper = require("./scraper");
const fs = require("fs");

(async () => {
  const outputfile = "data.csv";

  const data = await scraper.getData();
  // data.reverse();

  // CHECK IF OUTPUT FILE IS NOT EXIST
  if (!fs.existsSync(outputfile)) {
    // WRITE HEADER OF OUTPUT FILE
    fs.writeFileSync(outputfile, `"kode","nim","nama","skor","tanggal_test"`);
  }

  // IF OUTPUT FILE EXIST JUST APPEND NEW DATA
  // DONT NEED NEW HEADER
  let baris = "";
  data.forEach(item => {
    baris += `\n"${item.kode}","${item.nim}","${item.nama}","${item.skor}","${item.tanggalTest}"`;
  });
  fs.appendFileSync(outputfile, baris);
})();
