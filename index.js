const scraper = require("./scraper");
const fs = require("fs");

(async () => {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSumovlj0o3Bzd2S0nR3AdusPC1qm2AEKvfo8bpfvjwxOGVew1b_OUKKg-QAV08J1yGSUTp8X-iA29s/pubhtml?gid=0&single=true&widget=false&headers=false&chrome=false";

  const data = await scraper.getData(url);
  // data.reverse();

  let baris = "";
  data.forEach(item => {
    baris =
      baris +
      `\n"${item.kode}","${item.nim}","${item.nama}","${item.skor}","${item.tanggalTest}"`;
  });
  fs.appendFileSync("data.csv", baris);
})();
