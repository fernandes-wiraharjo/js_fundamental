// const peopleName = "Fernandes";
// const peopleAge = 17;

// console.log("Hello " + peopleName + ", his age is " + peopleAge);

// //template string
// console.log(`Hello ${peopleName}, his age is ${peopleAge}`); //the using of 'template string' is much simpler

// const hero = {
//   heroName: "Spiderman", //key - value
//   heroAlias: "Spidey",
//   heroColor: "Red-Blue",
//   heroGender: "Male"
// }; 
//heroName sampai heroGender adalah property

// console.log(`Favourite hero : ${hero.heroName}`);

// const shops = {
//     shop_name: "Telkomsel"
// }
// console.log(`Favourite provider: ${shops.shop_name}`)

const shops = [{
    shop_name: "Telkomsel"
},
{
    shop_name: "XL"
}]

// for (var i = 0; i < shops.length; i++) {
//     console.log(`List name: ${shops[i].shop_name}`)
// }

shops.forEach(function(shop){
    console.log(`List name: ${shop.shop_name}`) 
})

