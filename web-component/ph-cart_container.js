let distinguish_name = [];

if (localStorage.getItem("key")) {
  console.log("data bna");
  const myObject = JSON.parse(localStorage.getItem("key"));
  console.log("myObjectTitle: ", myObject.title);

  myObject.forEach((item) => {
    distinguish_name.push(item.title);
  });
  console.log(distinguish_name);
} else {
  distinguish_name = [];
}

class PhCartContainer extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = ` <aside class="cart">
        <section class="caption">
          <h2>Таны сагс</h2>
        </section>

        <section class="cart_empty">
          <picture>
            <img src="./aboutUs_image/cart.svg" alt="hooson" />
          </picture>
          <p>Таны сагс хоосон байна</p>
        </section>

        <section class="cart_full">
        </section>

        <section class="order_button">
          <section class="overral_price">
            <p>Нийт</p>
            <p id="total_price">0.00₮</p>
          </section>
          <button type="submit">Захиалах</button>
        </section>
      </aside>`;
  }

  connectedCallback() {
    // Cart-container cmp one-productoos hvseltiig ni awj cart cmp renderlej bna.
    document.addEventListener("addToCart", (event) => {
      const { img, title, price } = event.detail;
      this.renderOrder(title, price);
      this.EmptyCart();
    });

    // niit vnee bodoh
    document.addEventListener("totalPrice", (event) => {
      const { total } = event.detail;
      document.getElementById("total_price").innerHTML = total + ".00₮";
    });

    // localStorage ogogdloo awj bgaa.
    this.children[0].children[2].insertAdjacentHTML(
      "afterend",
      `<ph-localstorage></ph-localstorage>`
    );
  }

  // cart container component ooroo cart component renderlej bna
  renderOrder(title, price) {
    if (distinguish_name.includes(title)) {
      const myCart = document.querySelector("ph-one_cart");
      myCart.checkOverlap(title);
    } else {
      distinguish_name.push(title);
      const cartFullSection = this.getElementsByClassName("cart_full")[0];
      cartFullSection.insertAdjacentHTML(
        "beforeend",
        `<ph-one_cart title="${title}" 
         price="${price}"></ph-one_cart>`
      );

      // localStorage ruu ogogdloo hadgalj bgaa eseh
      const event1 = new CustomEvent("saveLocalStorage", {
        detail: {
          title: title,
          price: price,
        },
      });
      document.dispatchEvent(event1);
    }
  }

  // cartaa  hoosloh vyd:
  EmptyCart() {
    const cart_empty = document.getElementsByClassName("cart_empty")[0];
    cart_empty.style.display = "none";
  }

  disconnectedCallback() {}

  attributeChangedCallback(name, oldVal, newVal) {}

  adoptedCallback() {}
}

window.customElements.define("ph-cart_container", PhCartContainer);
