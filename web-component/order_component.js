export default class Order extends HTMLElement {
  constructor() {
    // const name = this.getAttribute("title1");
    // const price = this.getAttribute("price1");
    super();
    this.total = 0;
    this.prices = 0;
    this.cart_count = 0;
  }
  //
  connectedCallback() {
    //buttonuu daa avch bga
    //buh buttonii close add sub iig avch bga
    const close = document.getElementsByClassName("close");
    const button_add = document.getElementsByClassName("button_add");
    const button_sub = document.getElementsByClassName("button_sub");
    //card dotor zurj bga order comp iig zgr avaachij tavisan bie juulj bga
    this.innerHTML = `<article class="p_order">
    <h2 class="again">${this.getAttribute("title")}</h2>
    <div class="part1">
    <select name="төрөл">
        <option>Том пан</option>
        <option>Том уламжлалт</option>
        <option>Дунд пан</option>
        <option>Дунд уламжлалт</option>
        <option>Жижиг пан</option>
        <option>Жижиг уламжлалт</option>
    </select>
    <section class="close" style="font-size: 25px; margin-right: 1rem; color: gr;">&times;</section>
    </div>
    <div class="part2">
        <section class="add_food">
          <button type="submit" class="button_add">+</button>
            <p class="value">1</p>
          <button type="submit" class="button_sub">-</button>
        </section>
         <p class="price_atr">${this.getAttribute("price")}₮</p>
    </div>
    </article> `;
    
    //close buriig sonsono 
    for (let item of close) {
      item.addEventListener("click", () => {
        this.close_button(item);
      });
    }

    this.update();

    // add button click darah vyd event seonsoj bna
    for (let item of button_add) {
      item.addEventListener("click", () => {
        this.add_button(item);
      });
    }

    // sub button click darah vyd event seonsoj bna
    for (let item of button_sub) {
      item.addEventListener("click", () => {
        this.sub_button(item);
      });
    }
  }

  // sagsand nemeh vyd total hemjee price bolon too hemjeenees hamaarj oorchlogdoj bgaa heseg
  //update bol nemeh hasah uyed price uurchlugduj bga heseg
  update() {
    //total bolon cart countod 0 gej onoono
    this.total = 0;
    this.cart_count = 0;
    //sagsand bga utgiin ehnii baraag avna
    const cartContent = document.getElementsByClassName("cart_full")[0];
    //baraanii article aar n tatan avch article d hiine
    const article = cartContent.getElementsByTagName("article");
    //articliin urtaar davtana
    for (let i = 0; i < article.length; i++) {
      //article element n article iin gishuun bur bolno
      const articleElement = article[i];
      //price buyu uniig n avch bn
      const priceElement =
        articleElement.getElementsByClassName("price_atr")[0];
        //float bolgood $ iig arilgaj bn
      const price = parseFloat(priceElement.innerText.replace("$", ""));
      //add food sectionii hesgiig avch bn
      const addFoodElement = articleElement.querySelector(".add_food");
      //value hesgiig avch bn
      const quantityElement = addFoodElement.querySelector(".value");
      //toog n int bolgon huvruulj bn
      let quantityValue = parseInt(quantityElement.innerText);
      //too n ihsene
      this.cart_count += quantityValue;
      //une n ihesne
      this.total = this.total + price;
      //total price iig nemj bga
      document.getElementById("total_price").innerHTML = this.total + ".00₮";
      document.getElementById("add").innerHTML = `${this.cart_count}`;
    }
  }

  //article iig duudchaad update ee duudsan
  add_button(item) {
    //hamgiin oiriin article iinhaa hamaaraltai gej bn
    const article = item.closest("article");
    //article iin add food class iig avch bn
    const addFoodElement = article.querySelector(".add_food");
    //shirhegiin toog avch bn
    const quantityElement = addFoodElement.querySelector(".value");
    //toog int ruu huvruulj baina
    let quantityValue = parseInt(quantityElement.innerText);
    //too n ihesne
    quantityValue++;
    //toog html ruu bichne
    quantityElement.innerHTML = quantityValue;
    //article iin price iig avch bn
    let priceElement = article.getElementsByClassName("price_atr")[0];
    //this.att(price) buyu neg product iin uniig toogoor n urjuuleed this.price buyu sagsnii une uurchlugduj bga
    this.prices = this.getAttribute("price") * quantityValue;
    console.log(this.prices);
    //html deer price iig bichij baina
    priceElement.innerHTML = this.prices + "₮";
    console.log(quantityValue);
    //update iig duudna
    this.update();
  }

   //article iig duudchaad update ee duudsan
  sub_button(item) {
    //hamgiin oiriin article iig avch bn
    const article = item.closest("article");
     //article iin add food class iig avch bn
    const addFoodElement = article.querySelector(".add_food");
    //shirhgiin toog avch bn
    const quantityElement = addFoodElement.querySelector(".value");
    //toog n int bolgoj huvruulj bn
    let quantityValue = parseInt(quantityElement.innerText);
    //hasaj bui heseg
    quantityValue--;
    //0 ees baga boloh uyed
    if (quantityValue < 0) {
      //0 bolgono
      quantityValue = 0;
      //style iig none bolgono
      article.style.display = "none";
    }
    //toog html ruu bichne
    quantityElement.innerHTML = quantityValue;
    //article iin price iig avch bn article bolgonii neg buriin une
    let priceElement = article.getElementsByClassName("price_atr")[0];
    //price iin $ iig bhgu bolgono price n neg buriin une ym neg productiin neg buriin une
    const price = parseFloat(priceElement.innerText.replace("$", ""));
    console.log(price);
    //price 0 ees ih uyed l uuniig ajilluulna
    if (price > 0) {
      //sagnsii une n 
      this.prices = price - this.getAttribute("price");
      console.log(this.prices);
      priceElement.innerHTML = this.prices + "₮";
    }
    this.update();
  }

  //
  close_button(item) {
    const article = item.closest("article");
    //article iig ustgaj bn
    article.classList.remove("p_order");
    //article iig ustgana
    article.remove();
    //price iig avch bn neg buteegdehuunii
    const priceElement = article.getElementsByClassName("price_atr")[0];
    //int bolson buteegdehuunii price
    const price = parseFloat(priceElement.innerText.replace("$", ""));
    //niit price aas price iig hasch bna
    this.total = this.total - price;
    //total iig update hiilee
    document.getElementById("total_price").innerHTML = this.total + ".00₮";
    this.update();
  }

  //cart nii door huld n price bgag uurchilj bga
  //shineer nemj zurj bga heseg
  //2 udaa darahad boliulj bga heseg?
  hah(title) {
    //sagsand bga utgiin ehnii baraag avna
    const cartContent = document.getElementsByClassName("cart_full")[0];
    //article iig avlaa
    const article = cartContent.getElementsByTagName("article");
    //article iin urtaar element bureer yvna
    for (let i = 0; i < article.length; i++) {
      //article element n article iin gishuun bur bolno
      const articleElement = article[i];
      //title iig avlaa
      const titleElement = articleElement.querySelector(".again");
      //title iin inner text iig n avch bn
      const order_title = titleElement.innerText;
      //hervee orj irsen title n umnuhtei tentsuuu bvl 
      if (title === order_title) {
        //add food iig avlaa
        const addFoodElement = articleElement.querySelector(".add_food");
        //valueg avlaa
        const quantityElement = addFoodElement.querySelector(".value");
        //valueg int bolgoloo
        let quantityValue = parseInt(quantityElement.innerText);
        //valueg nemegduulne
        quantityValue++;
        //inner html deer valueg bichne
        quantityElement.innerHTML = quantityValue;
        //update
        this.update();
      }
    }
  }
}
window.customElements.define("order-component", Order);
