const profile = {
  name: "DEF",
  phone: "123456789"
};

switch (profile.phone) {
  case "081234567890":
    console.log("Operator yang anda gunakan adalah Telkomsel Simpati");
    break;

  case "08134567890":
    console.log("Operator yang anda gunakan adalah Telkomsel Hallo");
    break;

  case "08578912345":
    console.log("Operator yang anda gunakan adalah Indosat IM3");
    break;

  default:
    console.log("Silahkan masukkan nomor handphone anda!");
}
