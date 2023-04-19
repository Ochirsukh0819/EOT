class Product{

    constructor(product){

        this.image = product.image;
        this.title = product.title;
        this.price = product.price;
    }

    Render(){
        return `  <article>
        <a href="#">
            <picture>
                <img src="${this.image}" alt="Маханд дурлагдсад">
            </picture>
        </a>
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button type="submit">Сагсанд нэмэх</button>
    </article>`
    }
}


export default class Module_Product{

    constructor(json_url){
        this.json_url = json_url;
    }
    
    download(){
        fetch(`${this.json_url}`)
        .then(respone =>{
            respone.json()
        .then(data =>{
                console.log("DATA", data);
                const products = document.getElementById('food');

                const sides = document.getElementsByClassName('product3')[0];
                const  drink = document.getElementsByClassName('product4')[0];
                const pizza = document.getElementsByClassName('product2')[0];
                const deals = document.getElementsByClassName('product1')[0];


                sides.addEventListener("click",() => {
                    if (products.hasChildNodes()) {
                        while (products.firstChild) {
                            products.removeChild(products.firstChild);
                        }
                      }
                        products.insertAdjacentHTML("afterbegin",
                         data.record.sides.map(newproduct => {
                             const new_obj = new Product(newproduct);
                             return new_obj.Render();
                         }).join('')
                         );
                });

                drink.addEventListener("click",() => {
                    if (products.hasChildNodes()) {
                        while (products.firstChild) {
                            products.removeChild(products.firstChild);
                        }
                      }
                    products.insertAdjacentHTML("afterbegin",
                     data.record.drink.map(newproduct => {
                         const new_obj = new Product(newproduct);
                         return new_obj.Render();
                     }).join('')
                     );
            });

            pizza.addEventListener("click",() => {
                if (products.hasChildNodes()) {
                    while (products.firstChild) {
                        products.removeChild(products.firstChild);
                    }
                  }
                    products.insertAdjacentHTML("afterbegin",
                     data.record.pizzas.map(newproduct => {
                         const new_obj = new Product(newproduct);
                         return new_obj.Render();
                     }).join('')
                     );
            });

            deals.addEventListener("click",() => {
                if (products.hasChildNodes()) {
                    while (products.firstChild) {
                        products.removeChild(products.firstChild);
                    }
                  }
                    products.insertAdjacentHTML("afterbegin",
                     data.record.deals.map(newproduct => {
                         const new_obj = new Product(newproduct);
                         return new_obj.Render();
                     }).join('')
                     );
            });
    
                
                products.insertAdjacentHTML("afterbegin",
                     data.record.drink.map(newproduct => {
                         const new_obj = new Product(newproduct);
                         return new_obj.Render();
                     }).join('')
                     );
               

                // if(window.location.pathname == '/product_nemelt.html'){
                //     products.insertAdjacentHTML("afterbegin",
                //          data.record.sides.map(newproduct => {
                //              const new_obj = new Product(newproduct);
                //              return new_obj.Render();
                //          }).join('')
                //          );`
                //     }

             })
        })
        .catch(err => console.log(err));
    }
}