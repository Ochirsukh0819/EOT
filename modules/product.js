//Product class renderlej delgetsend zurah heseg
class Product {
  constructor(product) {
    this.image = product.image;
    this.title = product.title;
    this.price = product.price;
  }

  Render() {
    return `  <article>
        <a href="#">
            <picture>
                <img src="${this.image}" alt="Маханд дурлагдсад">
            </picture>
        </a>
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button type="submit">Сагсанд нэмэх</button>
    </article>`;
  }
}

// module helbereer json url awj json bolgood render hesegtee damjuulj bH
export default class Module_Product {
  // baiguulagcjiin damjuulj url awj bgaa heseg
  constructor(json_url) {
    this.json_url = json_url;
  }

  download() {
    // jsonoo duudaj bgaa
    fetch(`${this.json_url}`)
      .then((respone) => {
        respone.json().then((data) => {
          // json object helbert shiljsen
          console.log("DATA", data);

          // class ner bolon id geer barij bgaa heseg
          const products = document.getElementById("food");
          const sides = document.getElementsByClassName("product3")[0];
          const drink = document.getElementsByClassName("product4")[0];
          const pizza = document.getElementsByClassName("product2")[0];
          const deals = document.getElementsByClassName("product1")[0];

          // nemelt heseg deer darah vyd event medrej bgaa
          sides.addEventListener("click", () => {
            //herwee food hesegt ymr negen json vvssen bol tsewerlej bgaa heseg
            if (products.hasChildNodes()) {
              while (products.firstChild) {
                products.removeChild(products.firstChild);
              }
            }

            // food dotor json renderlej oruulj bna
            products.insertAdjacentHTML(
              "afterbegin",
              // jsonbin ees irsen jsonoo zowhon sides hesgeer dawtaltaar gvih vydee Product classiin object vvsgej render hiih vydee utgiig ogj view heseg haruulj bgaa
              data.record.sides
                .map((newproduct) => {
                  const new_obj = new Product(newproduct);
                  return new_obj.Render();
                })
                .join("") // , bolon aldaag zasaj json bvree neg bvtetsend oruulj bga
            );
          });

          // drink heseg deer event sonsoj bna
          drink.addEventListener("click", () => {
            //herwee food hesegt ymr negen json vvssen bol tsewerlej bgaa heseg
            if (products.hasChildNodes()) {
              while (products.firstChild) {
                products.removeChild(products.firstChild);
              }
            }
            products.insertAdjacentHTML(
              "afterbegin",
              // jsonbin ees jsonoosoo zowhon drink hesgiig map ashiglaj dawtaltaar gvij render hesegtee damjuulj view heseg haruulj bna
              data.record.drink
                .map((newproduct) => {
                  const new_obj = new Product(newproduct);
                  return new_obj.Render();
                })
                .join("")
            );
          });

          pizza.addEventListener("click", () => {
            if (products.hasChildNodes()) {
              while (products.firstChild) {
                products.removeChild(products.firstChild);
              }
            }
            products.insertAdjacentHTML(
              "afterbegin",
              data.record.pizzas
                .map((newproduct) => {
                  const new_obj = new Product(newproduct);
                  return new_obj.Render();
                })
                .join("")
            );
          });

          deals.addEventListener("click", () => {
            if (products.hasChildNodes()) {
              while (products.firstChild) {
                products.removeChild(products.firstChild);
              }
            }
            products.insertAdjacentHTML(
              "afterbegin",
              data.record.deals
                .map((newproduct) => {
                  const new_obj = new Product(newproduct);
                  return new_obj.Render();
                })
                .join("")
            );
          });

          products.insertAdjacentHTML(
            "afterbegin",
            data.record.drink
              .map((newproduct) => {
                const new_obj = new Product(newproduct);
                return new_obj.Render();
              })
              .join("")
          );
        });
      })
      .catch((err) => console.log(err));
  }
}
