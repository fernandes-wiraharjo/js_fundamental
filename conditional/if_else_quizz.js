const rapor = {
  math: 80,
  english: 85,
  physics: 99,
  bahasa: 55,
  computer: 100,
  accounting: 67,
  chemistry: 35
};

const hasil_akhir =
  (rapor.math +
    rapor.computer +
    rapor.english +
    rapor.bahasa +
    rapor.accounting +
    rapor.chemistry +
    rapor.physics) /
  7;
const hasil_akhir_pembulatan = Math.round(hasil_akhir);
console.log(hasil_akhir_pembulatan);

if (hasil_akhir_pembulatan >= 95) {
  console.log("Selamat! You are the greatest!");
} else if (hasil_akhir_pembulatan >= 80 && hasil_akhir_pembulatan < 95) {
  console.log("Congratulations! Kamu hebat!");
} else if (hasil_akhir_pembulatan >= 60 && hasil_akhir_pembulatan < 80) {
  console.log("Coba lagi!");
} else if (hasil_akhir_pembulatan >= 40 && hasil_akhir_pembulatan < 60) {
  console.log("Kurangi main game!");
} else {
  console.log("Tolong panggil orang tuamu!");
}

//iterate object
let a = 0;
let b = 0;
for (var prop in rapor) {
  a += rapor[prop];
  b++;
}
const c = Math.round(a / b);
console.log(c);
