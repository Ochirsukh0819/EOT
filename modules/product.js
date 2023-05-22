const url = new URL(window.location.href);
//
class Product {
  //
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
  //jsonurl irj bga
  constructor(json_url) {
    this.json_url = json_url;
  }

  download(element) {
    const products = document.getElementById("food");
    const deals = document.getElementsByClassName("product1")[0];
    const pizza = document.getElementsByClassName("product2")[0];
    const sides = document.getElementsByClassName("product3")[0];
    const drink = document.getElementsByClassName("product4")[0];

    //json irsen ugugdliig ugugdul n jsonbga
    fetch(`${this.json_url}`).then((response) => {
      //data bolgono shirheg shirhgeer n object bolj bga
      response.json().then((data) => {
        //filterdene
        //product n category toi tentseh uyed filterddeg
        const filteredProducts = data.filter((product) => {
          //handsan url category toi tentsuu baival vutsaana
          //uur ymaar handah bolomjtoi uchraas yg tentsuu bh uyed haruulna
          return product.category === element;
        });
        //food id tai section dotor zurj bgaa many-product dotor bga
        products.insertAdjacentHTML(
          //dunguj ehleh uyed filterdsen productaa hiine
          "afterbegin",
          filteredProducts
            .map((newproduct) => {
              const new_obj = new Product(newproduct);
              //filtered productiin product bolgon deer guigeed product bolgoniigoo new_obj ruu hiigeed renderlene
              return new_obj.Render();
            })
            .join("")
        );
        
        //deals deer daranguut category iig this bolgoj baigaa
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
