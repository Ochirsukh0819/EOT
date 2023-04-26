class Order extends HTMLElement {
  constructor() {
    // const name = this.getAttribute("title1");
    // const price = this.getAttribute("price1");
    super();
    this.total = 0;
  }

  connectedCallback() {
    this.innerHTML = `<article>
    <h2>${this.getAttribute("title")}</h2>
    <div class="part1">
    <select name="төрөл" id="">
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
          <button type="submit">+</button>
            <p>1</p>
          <button type="submit">-</button>
        </section>
         <p>${this.getAttribute("price")}</p>
    </div>
    </article> `;
  }

  addTotal(price) {
    this.total += price;
    return this.total;
  }
}
window.customElements.define("order-component", Order);
