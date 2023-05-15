const url = new URL(window.location.href);
class Product {
  constructor(product) {
    this.image = product.image;
    this.title = product.title;
    this.price = product.price;
  }

  Render() {
    // return `<article>
    //     <a href="#">
    //         <picture >
    //             <img src="${this.image}"  alt="Маханд дурлагдсад">
    //         </picture>
    //     </a>
    //     <h3>${this.title}</h3>
    //     <p>${this.price}</p>
    //     <button type="submit">Сагсанд нэмэх</button>
    // </article>`;
    return ` <product-component img=${this.image} title="${this.title}" price=${this.price}></product-component> `;
  }
}

export default class Module_Product {
  constructor(json_url) {
    this.json_url = json_url;
    console.log(this.json_url);
  }

  download(element) {
    const products = document.getElementById("food");
    const deals = document.getElementsByClassName("product1")[0];
    const pizza = document.getElementsByClassName("product2")[0];
    const sides = document.getElementsByClassName("product3")[0];
    const drink = document.getElementsByClassName("product4")[0];

    fetch(`${this.json_url}`).then((response) => {
      response.json().then((data) => {
        console.log("DATAAAA", data);
        const filteredProducts = data.json_agg.filter((product) => {
          console.log(product.image);
          return product.category === element;
        });
        products.insertAdjacentHTML(
          "afterbegin",
          filteredProducts
            .map((newproduct) => {
              const new_obj = new Product(newproduct);
              return new_obj.Render();
            })
            .join("")
        );

        deals.addEventListener("click", () => {
          url.searchParams.set("category", "deals");
          window.location.href = url.toString();
        });
        pizza.addEventListener("click", () => {
          url.searchParams.set("category", "pizza");
          window.location.href = url.toString();
        });
        sides.addEventListener("click", () => {
          url.searchParams.set("category", "sides");
          window.location.href = url.toString();
        });
        drink.addEventListener("click", () => {
          url.searchParams.set("category", "drink");
          window.location.href = url.toString();
        });
      });
    });
  }
}
