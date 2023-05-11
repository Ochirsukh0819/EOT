class PhLocalStorage extends HTMLElement {
  constructor() {
    super();

    const cart_empty = document.getElementsByClassName("cart_empty")[0];

    //sags hooson hesgiig none hiij dvvrgej bna
    if (localStorage.getItem("key") != null) {
      cart_empty.style.display = "none";
      const cart_full = document.getElementsByClassName("cart_full")[0];

      const myObject = JSON.parse(localStorage.getItem("key"));
      console.log(myObject);
      console.log(localStorage.getItem("key"));
      console.log("******");
      myObject.forEach((item) => {
        console.log("#####");
        cart_full.insertAdjacentHTML(
          "beforeend",
          `<order-component title="${item.title}"
                     price="${item.price}"></order-component>`
        );
      });
    }
  }

  connectedCallback() {
    console.log("localstorage******************");
  }

  disconnectedCallback() {}

  attributeChangedCallback(name, oldVal, newVal) {}

  adoptedCallback() {}
}

window.customElements.define("ph-localstorage", PhLocalStorage);
