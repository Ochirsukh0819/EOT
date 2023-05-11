export default class Order extends HTMLElement {
  constructor() {
    // const name = this.getAttribute("title1");
    // const price = this.getAttribute("price1");
    super();
    this.total = 0;
    this.prices = 0;
    this.cart_count = 0;
  }

  connectedCallback() {
    const close = document.getElementsByClassName("close");
    const button_add = document.getElementsByClassName("button_add");
    const button_sub = document.getElementsByClassName("button_sub");

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
            <p class="value">1</p>
          <button type="submit" class="button_sub">-</button>
        </section>
         <p class="price_atr">${this.getAttribute("price")}₮</p>
    </div>
    </article> `;

    for (let item of close) {
      item.addEventListener("click", () => {
        this.close_button(item);
      });
    }

    this.update();

    // add button click darah vyd event seonsoj bna
    for (let item of button_add) {
      item.addEventListener("click", () => {
        this.add_button(item);
      });
    }

    // sub button click darah vyd event seonsoj bna
    for (let item of button_sub) {
      item.addEventListener("click", () => {
        this.sub_button(item);
      });
    }
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
    }
  }

  add_button(item) {
    const article = item.closest("article");
    const addFoodElement = article.querySelector(".add_food");
    const quantityElement = addFoodElement.querySelector(".value");
    let quantityValue = parseInt(quantityElement.innerText);
    quantityValue++;
    quantityElement.innerHTML = quantityValue;
    let priceElement = article.getElementsByClassName("price_atr")[0];
    this.prices = this.getAttribute("price") * quantityValue;
    console.log(this.prices);
    priceElement.innerHTML = this.prices + "₮";
    console.log(quantityValue);
    this.update();
  }

  sub_button(item) {
    const article = item.closest("article");
    const addFoodElement = article.querySelector(".add_food");
    const quantityElement = addFoodElement.querySelector(".value");

    let quantityValue = parseInt(quantityElement.innerText);
    quantityValue--;
    if (quantityValue < 0) {
      quantityValue = 0;
      article.style.display = "none";
    }
    quantityElement.innerHTML = quantityValue;
    let priceElement = article.getElementsByClassName("price_atr")[0];
    const price = parseFloat(priceElement.innerText.replace("$", ""));
    console.log(price);
    if (price > 0) {
      this.prices = price - this.getAttribute("price");
      console.log(this.prices);
      priceElement.innerHTML = this.prices + "₮";
    }
    this.update();
  }

  close_button(item) {
    const article = item.closest("article");
    article.classList.remove("p_order");
    article.remove();
    const priceElement = article.getElementsByClassName("price_atr")[0];
    const price = parseFloat(priceElement.innerText.replace("$", ""));
    this.total = this.total - price;
    document.getElementById("total_price").innerHTML = this.total + ".00₮";
    this.update();
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
        let quantityValue = parseInt(quantityElement.innerText);
        quantityValue++;
        quantityElement.innerHTML = quantityValue;
        this.update();
      }
    }
  }
}
window.customElements.define("order-component", Order);
