let cartItems = [];

let distinguish_name = [];

// product component vvsgeh gj bgaa class
class Product extends HTMLElement {
  constructor() {
    super();
    const imgUrl = this.getAttribute("img"); // damjuulagdaj orj bui attribute
    const title = this.getAttribute("title");
    const price = this.getAttribute("price");

    // Render hiij bgaa heseg damjuulagdaj bui attribute onooj ogj bgaa
    this.innerHTML = `<article>
      <a href="#">
          <picture>
          <img src="${imgUrl}" alt="Маханд дурлагдсад">
          </picture>
      </a>
          <h3>${title}</h3>
          <p>${price}₮</p>
          <button type="submit">Сагсанд нэмэх</button>
      </article> `;
  }

  orderHTML(p_title, p_price) {
    return `<order-component title="${p_title}" 
    price="${p_price}"></order-component>`;
  }

  connectedCallback() {
    const cart_full = document.getElementsByClassName("cart_full")[0];
    //sags hooson hesgiig none hiij dvvrgej bna
    const cart_empty = document.getElementsByClassName("cart_empty")[0];

    this.children[0].children[3].addEventListener("click", () => {
      // niit vniig bodoj bgaa heseg
      cart_empty.style.display = "none";

      if (distinguish_name.includes(this.getAttribute("title"))) {
        const myCart = document.querySelector("order-component");
        myCart.hah(this.getAttribute("title"));
      } else {
        distinguish_name.push(this.getAttribute("title"));
        cart_full.insertAdjacentHTML(
          "beforeend",
          this.orderHTML(this.getAttribute("title"), this.getAttribute("price"))
        );

        const local_object = {
          title: this.getAttribute("title"),
          price: this.getAttribute("price"),
        };

        cartItems.push(local_object);
        localStorage.setItem("key", JSON.stringify(cartItems));
      }
    });
  }
}

window.customElements.define("product-component", Product);
