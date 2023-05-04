import a from "../modules/product.js";

const product = new a("https://api.jsonbin.io/v3/b/64526e169d312622a356b3ac");

const queryParams = new URLSearchParams(window.location.search);

const category = queryParams.get("category");

switch (category) {
  case "drink":
    product.download(category);
    break;
  case "deals":
    product.download(category);
    break;
  case "sides":
    product.download(category);
    break;
  case "pizzas":
    product.download(category);
    break;
  default:
    product.download("deals");
    break;
}
