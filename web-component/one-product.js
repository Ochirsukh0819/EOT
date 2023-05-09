// product component vvsgeh gj bgaa class
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

      cart_full.insertAdjacentHTML(
        "beforeend",
        this.orderHTML(this.getAttribute("title"), this.getAttribute("price"))
      );

      // document.getElementById("total_price").innerHTML = "$ " + total + ".00 ";

      // const local_object = {
      //   title: this.getAttribute("title"),
      //   price: this.getAttribute("price"),
      //   cart_count: i,
      //   total: total,
      // };
      // localStorage.setItem("key", JSON.stringify(local_object));
    });

    // if (localStorage.getItem("key") != null) {
    //   cart_empty.style.display = "none";

    //   const myObject = JSON.parse(localStorage.getItem("key"));

    //   cart_full.insertAdjacentHTML(
    //     "beforeend",
    //      this.orderHTML(myObject.total, myObject.price)
    //   );
    //   document.getElementById("add").innerHTML = myObject.cart_count;
    //   document.getElementById("total_price").innerHTML =
    //     "$ " + myObject.total + ".00 ";
    // }
  }
}

window.customElements.define("product-component", Product);
