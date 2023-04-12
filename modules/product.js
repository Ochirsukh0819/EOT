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
                console.log(window.location);
                
                const products = document.getElementById('food');

                // if(window.location.hostname == '/product.html'){
                products.insertAdjacentHTML("afterbegin",
                     data.record.drink.map(newproduct => {
                         const new_obj = new Product(newproduct);
                         return new_obj.Render();
                     }).join('')
                     );
              //  }

                if(window.location.pathname == '/product_nemelt.html'){
                    products.insertAdjacentHTML("afterbegin",
                         data.record.sides.map(newproduct => {
                             const new_obj = new Product(newproduct);
                             return new_obj.Render();
                         }).join('')
                         );
                    }

             })
        })
        .catch(err => console.log(err));
    }
}