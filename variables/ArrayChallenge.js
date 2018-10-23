//Perulangan / Iterasi / Looping

//Lv 1
const ratingProduct = '*'
// *
console.log(ratingProduct)
console.log("====")


//Lv 2
let star = ''
const ratingProductGame = 2
// * *
for(let i=0; i < ratingProductGame; i++){
    star += "* ";
}
console.log(`${star}`)
console.log("====")

//Lv 3
const totalMaxStars = 5
for(let i=0; i < totalMaxStars; i++){
    let star2 = '';
    for(let b=0; b <= i; b++){
        star2 += "* ";
    }
star2 += "\n";
console.log(star2)
}
console.log("====")

//Lv 4
const products = [
    {
        name: "Uncharted 4",
        price: "Rp. 550.000",
        category: "Action",
        transaction: "25",
        rating: 9
    },
    {
        name: "GTA V",
        price: "Rp. 650.000",
        category: "RPG",
        transaction: "134",
        rating: 8
    },
    {
        name: "FIFA 2019",
        price: "Rp. 850.000",
        category: "Sport",
        transaction: "5",
        rating: 7
    }
]

for(let i=0; i < products.length; i++){
    let star3 = '';
    for(let b=0; b < products[i].rating; b++){
        star3 += "* ";
    }
    console.log(`Game: ${products[i].name}, Transaction: ${products[i].transaction}, Rating: ${star3}`)
}