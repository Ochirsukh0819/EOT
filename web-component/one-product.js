// product component vvsgeh gj bgaa class
let total = 0;
let i = 0;
class Product extends HTMLElement {
  constructor() {
    super();
    const imgUrl = this.getAttribute("img"); // damjuulagdaj orj bui attribute
    const title = this.getAttribute("title");
    const price = this.getAttribute("price");

    // Render hiij bgaa heseg damjuulagdaj bui attribute onooj ogj bgaa
    this.innerHTML = `
    <article>
            <a href="#">
                <picture>
                    <img src="${imgUrl}" alt="Маханд дурлагдсад">
                 </picture>
            </a>
                    <h3>${title}</h3>
                    <p>${price}</p>
                    <button type="submit">Сагсанд нэмэх</button>
                </article> `;
  }

  connectedCallback() {
    const cart_full = document.getElementsByClassName("cart_full")[0];
    this.children[0].children[3].addEventListener("click", () => {
      // niit vniig bodoj bgaa heseg
      total += parseInt(this.getAttribute("price"));

      //sags hooson hesgiig none hiij dvvrgej bna
      const cart_empty = document.getElementsByClassName("cart_empty")[0];

      cart_empty.style.display = "none";

      // order component vvsgej attribute damjuulj bna
      const orderHTML = `<order-component title="${this.getAttribute("title")}" 
      price="${this.getAttribute("price")}"></order-component>`;

      localStorage.setItem("key", JSON.stringify({ html: orderHTML }));

      cart_full.insertAdjacentHTML("beforeend", orderHTML);

      document.getElementById("add").innerHTML = ++i;
      document.getElementById("total_price").innerHTML = "$ " + total + ".00 ";
    });

    // if (localStorage.getItem("key") != null) {
    //   cart_full.insertAdjacentHTML(
    //     "beforeend",
    //     JSON.parse(localStorage.getItem("key"))
    //   );
    // }
  }
}

window.customElements.define("product-component", Product);
