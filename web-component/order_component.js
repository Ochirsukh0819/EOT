export default class Order extends HTMLElement {
  constructor() {
    // const name = this.getAttribute("title1");
    // const price = this.getAttribute("price1");
    super();
    this.total = 0;

    this.value = this.getAttribute("title");
    this.prices =
      JSON.parse(localStorage.getItem(this.value))?.prices ||
      this.getAttribute("price");
    console.log(">>>>>>>>>>>>>>>>>>>....", this.prices);
    this.quantityValue =
      JSON.parse(localStorage.getItem(this.value))?.quantityValue || 1;
    this.priceValue = this.getAttribute("price");
    this.cart_count = 0;
    this.innerHTML = `<article class="p_order">
      <h2 class="again">${this.getAttribute("title")}</h2>
      <div class="part1">
      <select name="төрөл">
          <option>Том пан</option>
          <option>Том уламжлалт</option>
          <option>Дунд пан</option>
          <option>Дунд уламжлалт</option>
          <option>Жижиг пан</option>
          <option>Жижиг уламжлалт</option>
      </select>
      <section class="close" style="font-size: 25px; margin-right: 1rem; color: gr;">&times;</section>
      </div>
      <div class="part2">
          <section class="add_food">
            <button type="submit" class="button_add">+</button>
              <p class="value">${this.quantityValue}</p>
            <button type="submit" class="button_sub">-</button>
          </section>
          <p class="price_atr">${this.prices}₮</p>
      </div>
      </article> `;
  }

  connectedCallback() {
    const close = document.getElementsByClassName("close");

    // add button
    this.children[0].children[2].children[0].children[0].addEventListener(
      "click",
      () => {
        const addFoodElement = this.querySelector(".add_food");
        const quantityElement = addFoodElement.querySelector(".value");
        this.quantityValue++;
        quantityElement.innerHTML = this.quantityValue;
        // localStorage.setItem(this.value, this.quantityValue);
        let priceElement = this.getElementsByClassName("price_atr")[0];
        this.prices = this.getAttribute("price") * this.quantityValue;
        console.log(this.prices);
        priceElement.innerHTML = this.prices + "₮";

        const local_object = {
          prices: this.prices,
          quantityValue: this.quantityValue,
        };
        localStorage.setItem(this.value, JSON.stringify(local_object));
        this.update();
      }
    );

    //sub button
    this.children[0].children[2].children[0].children[2].addEventListener(
      "click",
      () => {
        const addFoodElement = this.querySelector(".add_food");
        const quantityElement = addFoodElement.querySelector(".value");

        this.quantityValue--;
        if (this.quantityValue < 0) {
          this.quantityValue = 0;
        }
        quantityElement.innerHTML = this.quantityValue;
        localStorage.setItem(this.value, this.quantityValue);
        let priceElement = this.getElementsByClassName("price_atr")[0];
        const price = parseFloat(priceElement.innerText.replace("$", ""));
        if (price > 0) {
          this.prices = price - this.getAttribute("price");
          priceElement.innerHTML = this.prices + "₮";
        }
        const local_object = {
          prices: this.prices,
          quantityValue: this.quantityValue,
        };
        localStorage.setItem(this.value, JSON.stringify(local_object));
        this.update();
      }
    );

    // delete button

    this.children[0].children[1].children[1].addEventListener("click", () => {
      this.remove();
      const priceElement = this.getElementsByClassName("price_atr")[0];
      const cart_full = document.getElementsByClassName("cart_full")[0];
      const cart_empty = document.getElementsByClassName("cart_empty")[0];
      const price = parseFloat(priceElement.innerText.replace("$", ""));
      this.total = this.total - price;
      document.getElementById("total_price").innerHTML = this.total + ".00₮";
      localStorage.clear();
      if (cart_full.childElementCount === 0) {
        cart_empty.style.display = "flex";
        document.getElementById("total_price").innerHTML = 0 + ".00₮";
        document.getElementById("add").innerHTML = 0;
      }
      this.update();
    });

    // for (let item of close) {
    //   item.addEventListener("click", () => {
    //     this.close_button(item);
    //   });
    // }
    this.update();
  }

  // sagsand nemeh vyd total hemjee price bolon too hemjeenees hamaarj oorchlogdoj bgaa heseg
  update() {
    this.total = 0;
    this.cart_count = 0;
    const cartContent = document.getElementsByClassName("cart_full")[0];
    const article = cartContent.getElementsByTagName("article");
    for (let i = 0; i < article.length; i++) {
      const articleElement = article[i];
      const priceElement =
        articleElement.getElementsByClassName("price_atr")[0];
      const price = parseFloat(priceElement.innerText.replace("$", ""));
      const addFoodElement = articleElement.querySelector(".add_food");
      const quantityElement = addFoodElement.querySelector(".value");
      let quantityValue = parseInt(quantityElement.innerText);
      this.cart_count += quantityValue;
      this.total = this.total + price;
      document.getElementById("total_price").innerHTML = this.total + ".00₮";
      document.getElementById("add").innerHTML = `${this.cart_count}`;
      localStorage.setItem("cart_counter", this.cart_count);
    }
  }

  hah(title) {
    const cartContent = document.getElementsByClassName("cart_full")[0];
    const article = cartContent.getElementsByTagName("article");
    for (let i = 0; i < article.length; i++) {
      const articleElement = article[i];
      const titleElement = articleElement.querySelector(".again");
      const order_title = titleElement.innerText;

      if (title === order_title) {
        const addFoodElement = articleElement.querySelector(".add_food");
        const quantityElement = addFoodElement.querySelector(".value");
        this.quantityValue++;
        console.log("Counter: ", this.quantityValue);
        quantityElement.innerHTML = this.quantityValue;
        const local_object = {
          prices: this.prices,
          quantityValue: this.quantityValue,
        };
        localStorage.setItem(order_title, JSON.stringify(local_object));
        this.update();
      }
    }
  }
}
window.customElements.define("order-component", Order);
