const dataProducts = [
  {
    name: "Red Dead Redemption 2",
    price: "850000",
    category: "RPG",
    rating: "10",
    location: "Jakarta"
  },
  {
    name: "Ghost of Tsushima",
    price: "745000",
    category: "Action",
    rating: "9",
    location: "Bandung"
  },
  {
    name: "Spiderman",
    price: "750000",
    category: "Humor",
    rating: "8",
    location: "Tangerang"
  },
  {
    name: "Shadow of The Tomb Raider",
    price: "680000",
    category: "Adventure",
    rating: "7",
    location: "Batam"
  }
];

let ongkir = 0;
// if (dataProducts[3].location == "Batam") ongkir = 35000;

// console.log(`Game Name: ${dataProducts[3].name}
// Price: Rp. ${dataProducts[3].price}
// Category: ${dataProducts[3].category}
// Rating: ${dataProducts[3].rating}
// Rp. ${ongkir}`);

for (let i = 0; i < dataProducts.length; i++) {
  if (dataProducts[i].location == "Jakarta") ongkir = 10000;
  else if (dataProducts[i].location == "Tangerang") ongkir = 15000;
  else if (dataProducts[i].location == "Bandung") ongkir = 20000;
  else ongkir = 35000;

  console.log(`Game Name: ${dataProducts[i].name}
Price: Rp. ${dataProducts[i].price}
Category: ${dataProducts[i].category}
Rating: ${dataProducts[i].rating}
Ongkos Kirim: Rp. ${ongkir}
`);
}
