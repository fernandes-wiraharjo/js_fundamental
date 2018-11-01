const dataProducts = [
  {
    name: "Nabati Chocolate Wafer",
    price: 20000,
    category: "Food",
    location: "Bandung"
  },
  {
    name: "Adapter Macbook Pro",
    price: 850000,
    category: "Electronics",
    location: "Jakarta"
  },
  {
    name: "Batik Shirt",
    price: 399000,
    category: "Fashion",
    location: "Bandung"
  },
  {
    name: "Boardmarker Snowman",
    price: 25000,
    category: "Office",
    location: "Tangerang"
  }
];

const hitungDiskon = (hargaBarang, kategoriBarang) => {
  let hasil = 0;
  if (kategoriBarang === "Food") {
    hasil = hargaBarang * 0.5;
    return hasil;
  } else {
    return hasil;
  }
};

const hitungOngkir = lokasiPenjual => {
  if (lokasiPenjual === "Bandung") {
    return 20000;
  } else if (lokasiPenjual === "Tangerang") {
    return 15000;
  } else {
    return 10000;
  }
};

const hitungBiayaAdmin = () => 2000;

const hitungHargaTotal = (amount, discount, shippingFee, adminFee) => {
  const hasil = amount - discount + shippingFee + adminFee;
  return hasil;
};

for (i = 0; i < dataProducts.length; i++) {
  let namaProduk = dataProducts[i].name;
  let hargaProduk = dataProducts[i].price;
  let kategoriProduk = dataProducts[i].category;
  let lokasiProduk = dataProducts[i].location;

  let diskonProduk = hitungDiskon(hargaProduk, kategoriProduk);
  let ongkirProduk = hitungOngkir(lokasiProduk);
  let biayaAdminProduk = hitungBiayaAdmin();

  let totalPembayaran = hitungHargaTotal(
    hargaProduk,
    diskonProduk,
    ongkirProduk,
    biayaAdminProduk
  );

  console.log(`Nama Produk: ${namaProduk}`)
  console.log(`Total Harga yang harus dibayar Rp. ${totalPembayaran} ,-`)
  console.log(`\n`)
}
