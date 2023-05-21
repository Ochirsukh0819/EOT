class PhProductList extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<section class="products">
        <section class="menu">
          <ul>
            <li class="product1"><a href="#">БАГЦ</a></li>
            <li class="product2"><a href="#">ПИЦЦА</a></li>
            <li class="product3"><a href="#">НЭМЭЛТ</a></li>
            <li class="product4"><a href="#">УНДАА</a></li>
          </ul>
        </section>
        <section id="food">
         
        </section>
      </section> `;
  }

  connectedCallback() {
  }

  disconnectedCallback() {
    //implementation
  }

  attributeChangedCallback(name, oldVal, newVal) {
    //implementation
  }

  adoptedCallback() {
    //implementation
  }
}

window.customElements.define("ph-product_list", PhProductList);
