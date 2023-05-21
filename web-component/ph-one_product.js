class OneProduct extends HTMLElement {
  constructor() {
    super();

    // Render hiij bgaa hesegtee  damjuulagdaj bui attribute onooj ogj bgaa
    this.innerHTML = `
    <article>
      <a href="#">
          <picture>
          <img src="${this.getAttribute("img")}" alt="Маханд дурлагдсад">
          </picture>
      </a>
          <h3>${this.getAttribute("title")}</h3>
          <p>${this.getAttribute("price")}₮</p>
          <button type="submit">Сагсанд нэмэх</button>
      </article> `;
  }

  connectedCallback() {
    // Sansand nemeh button darah vyd
    this.children[0].children[3].addEventListener("click", () => {
      const event = new CustomEvent("addToCart", {
        detail: {
          img: this.getAttribute("img"),
          title: this.getAttribute("title"),
          price: this.getAttribute("price"),
        },
      });
      document.dispatchEvent(event);
    });
  }

  disconnectedCallback() {
    //
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "title") {
      this.querySelector("h3").innerHTML = newVal;
    }
    if (name === "price") {
      this.querySelector("p").innerHTML = newVal;
    }
  }
  static get observedAttributes() {
    return ["title", "price"];
  }

  adoptedCallback() {
    //
  }
}

window.customElements.define("ph-one_product", OneProduct);
