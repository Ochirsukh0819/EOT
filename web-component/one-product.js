let cartItems = [];

let distinguish_name = [];

// product component vvsgeh gj bgaa class
//Product gesen class 
class Product extends HTMLElement {
  constructor() {
    super();
    const imgUrl = this.getAttribute("img"); // damjuulagdaj orj bui attribute
    const title = this.getAttribute("title");
    const price = this.getAttribute("price");

    // Render hiij bgaa heseg damjuulagdaj bui attribute onooj ogj bgaa
    //shuud zurj bgaa
    this.innerHTML = `<article>
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
  //card ruu zuuj bga heseg
  //order componentoor damjuulj title, price
  orderHTML(p_title, p_price) {
    return `<order-component title="${p_title}" 
    price="${p_price}"></order-component>`;
  }

  //hevree darval yu boloh tuhai todorhoilj ugch bga
  connectedCallback() {
    //prodcutiin card dotor baigaa cart full, empty g avch bn 0 gesen n gantshan class bsn uchraas
    const cart_full = document.getElementsByClassName("cart_full")[0];
    //sags hooson hesgiig none hiij dvvrgej bna
    const cart_empty = document.getElementsByClassName("cart_empty")[0];
    //this bol product ehnii huuhdiin 3 dah ruu n yvj bn. Button deer click hiih uyed
    this.children[0].children[3].addEventListener("click", () => {
      // niit vniig bodoj bgaa heseg
      cart_empty.style.display = "none";
      
      //hevree ehnii udaa orj irj bga bol else geer yvaad
      //uur name buyu ymr ch name bhgu uchraas 
      //cartfull dotroo tugsguliin umnu 
      //orderhtml dotor title uniig n avna
      //Dahij yvbal if eer yvna
      //distinguihs bol davhardahguigeer title iig n hadgalsan array
      // distinguish deer bga bol
      //order componentee card deeree zurj bga
      if (distinguish_name.includes(this.getAttribute("title"))) {
        const myCart = document.querySelector("order-component");
        //bhgu bh uyed hah aar zurna
        myCart.hah(this.getAttribute("title"));
      } else {
        distinguish_name.push(this.getAttribute("title"));
        cart_full.insertAdjacentHTML(
          "beforeend",
          this.orderHTML(this.getAttribute("title"), this.getAttribute("price"))
        );
        //turdee end hadgalah gej bga
        const local_object = {
          //this buyu productiin title price iig avj bga
          //card ruu orson bga productaa avj bga
          title: this.getAttribute("title"),
          price: this.getAttribute("price"),
        };
        //sagsnii heseg ruu pushilj bga local obj uudiig
        cartItems.push(local_object);
        //string helbereer
        localStorage.setItem("key", JSON.stringify(cartItems));
      }
    });
  }
}

window.customElements.define("product-component", Product);
