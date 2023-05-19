let localstorageArr = [];
class PhLocalStorage extends HTMLElement {
  constructor() {
    super();

    const cart_empty = document.getElementsByClassName("cart_empty")[0];

    //sags hooson hesgiig none hiij dvvrgej bna
    if (
      localStorage.getItem("key") != null &&
      localStorage.getItem("cart_counter") != null
    ) {
      cart_empty.style.display = "none";
      const cart_full = document.getElementsByClassName("cart_full")[0];
      const myObject = JSON.parse(localStorage.getItem("key"));

      myObject.forEach((item) => {
        cart_full.insertAdjacentHTML(
          "beforeend",
          `<order-component title="${item.title}"
                     price="${item.price}"></order-component>`
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
