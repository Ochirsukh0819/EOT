import defaultImport from "../web-component/order_component.js";

const full_cart = document.getElementsByClassName("full_cart")[0];
console.log("lalalla");

if (localStorage.getItem("key") != null) {
  const myObject = JSON.parse(localStorage.getItem("key"));
  console.log(myObject);
  myObject.forEach((item) => {
    const orderComponent = new defaultImport();
    orderComponent.setAttribute("title", item.title);
    orderComponent.setAttribute("price", item.price);
    full_cart.insertAdjacentElement("beforeend", orderComponent);
  });
}
