let localstorageArr = [];
class PhLocalStorage extends HTMLElement {
  constructor() {
    super();

    document.addEventListener("saveLocalStorage", (event) => {
      const { title, price } = event.detail;
      const local_object = {
        title: title,
        price: price,
      };
      // herwee local storage dotor ogogdol bvl dataString ogogdliig avna esreg vyd hooson bna
      const dataString = localStorage.getItem("key");
      let cartItems = dataString ? JSON.parse(dataString) : [];
      cartItems.push(local_object);
      localStorage.setItem("key", JSON.stringify(cartItems));
      console.log("Sagsand nem geed bnaaa");
    });

    //sags hooson hesgiig none hiij dvvrgej bna
    if (
      localStorage.getItem("key") != null &&
      localStorage.getItem("cart_counter") != null
    ) {
      const myCart = document.querySelector("ph-cart_container");
      myCart.EmptyCart();
      const cart_full = document.getElementsByClassName("cart_full")[0];
      const myObject = JSON.parse(localStorage.getItem("key"));

      myObject.forEach((item) => {
        cart_full.insertAdjacentHTML(
          "beforeend",
          `<ph-one_cart title="${item.title}"
                     price="${item.price}"></ph-one_cart>`
        );
      });
    }
  }

  connectedCallback() {}

  disconnectedCallback() {}

  attributeChangedCallback(name, oldVal, newVal) {}

  adoptedCallback() {}
}
window.customElements.define("ph-localstorage", PhLocalStorage);
