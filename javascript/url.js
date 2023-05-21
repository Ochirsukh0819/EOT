import a from "../modules/product.js";

const product = new a("http://localhost:3000");

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
