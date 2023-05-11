class PhCart extends HTMLElement {
  constructor() {
    super();
    //
    this.innerHTML = `  <aside class="cart">
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
          <!-- <article>
                            <h2>Маханд дурлагсад ба пепперони</h2>
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
                                 <p>99'999₮</p>
                            </div>
                        </article>  -->
          <!-- <article>
                            <h2>Маханд дурлагсад ба пепперони</h2>
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
                                 <p>99'999₮</p>
                            </div>
                        </article>
        
                        <article>
                            <h2>Маханд дурлагсад ба пепперони</h2>
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
                                 <p>99'999₮</p>
                            </div>
                        </article>  -->
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
    //
    console.log(this.children[0].children[2]);
    this.children[0].children[2].insertAdjacentHTML(
      "afterend",
      `<ph-localstorage></ph-localstorage>`
    );
  }

  disconnectedCallback() {
    //
  }

  attributeChangedCallback(name, oldVal, newVal) {
    //
  }

  adoptedCallback() {
    //
  }
}

window.customElements.define("ph-cart", PhCart);
