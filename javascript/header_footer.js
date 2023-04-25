class Header extends HTMLElement{
    constructor(){
        super();

        this.innerHTML =  `<header>
        <a href="index.html">
          <picture class="logo">
              <!-- <source srcset="" media="(min-width:900px)" width="10px" heigth="80px"> -->
              <img src="data:image/png;base64,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" alt="Pizza Hut Logo" width="100px" height="94px">
          </picture>
      </a>
          <nav class="head_menu">
              <ul>
                  <li><a href="index.html">Нүүр хуудас</a></li>
                  <li><a href="product.html">Бүтээгдэхүүнүүд</a></li>
                  <li><a href="order.html">Захиалга</a></li>
                  <li><a href="aboutUs.html">Бидний тухай</a></li>
                  <li><a href="delivery.html">Хүргэлтийн бүс</a></li>
              </ul>
  
              <section class="header_cart">
                  <i class="fa-solid fa-cart-shopping" id="cart" style="font-size:20px;"></i>
                  <button type="submit">Захиалга</button>
              </section>
              <section class="menu_bar"><i class="fa-solid fa-bars"></i></section>
  
          </nav>
         
      </header> 
       `
    }

    connectedCallback(){

    }
    
    disconnectCallback(){

    }

    attributeChangedCallback(attrName, oldVal, newVal) {

    }
}

window.customElements.define('header-part', Header);


class Footer extends HTMLElement{

   constructor(){
        super();
        this.innerHTML = ` <footer>
        <section class="footer_top_section">
        <section class="footer_logo">
            <picture>
                <!-- <source srcset="path/to/image-large.jpg" media="(min-width: 800px)">
                <source srcset="path/to/image-medium.jpg" media="(max-width: 500px)"> -->
                <a href="#"><img src="./homePage_image/footerLogo.png" alt="Pizza Hut Logo" width="70%"></a>
            </picture>
        </section>
        <article class="about_us">
            <p>БИДНИЙ ТУХАЙ</p>
            <ul>
                <li>
                    <a href="#">Бидний тухай</a>
                </li>
                <li>
                    <a href="#">Нийгмийн хариуцлага</a>
                </li>
                <li>
                    <a href="#">Dine-in</a>
                </li>
            </ul>
        </article>
            <article class="about_us">
                <p>ТУСЛАМЖ ҮЙЛЧИЛГЭЭ</p>
                <ul>
                    <li>
                        <a href="#">Илчлэгийн мэдээлэл</a>
                    </li>
                    <li>
                        <a href="#">Холбоо барих</a>
                    </li>
                    <li>
                        <a href="#">Салбар хайх</a>
                    </li>
                </ul>
            </article>
            <address class="join_us">
                <p>БИДЭНТЭЙ НЭГДЭХ</p>
                <ul>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-facebook"></i>
                            <p>Facebook</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-instagram"></i>
                            <p>Instagram</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa-brands fa-youtube"></i>
                            <p>Youtube</p>
                        </a>
                    </li>
                   
                </ul>
            </address>
            <section class="comment">
                <h3>САНАЛТ ХҮСЭЛТ</h3>
                <form>
                    <section class="input1">
                        <div>
                            <label for="email">Эмайл</label>
                            <input type="email" name="mail" placeholder="Ochirsukh@email.com">
                            <br>
                        </div>
                        <div>
                            <label for="phone">Утас</label>
                            <input type="text" name="mail" placeholder="+976 ########">
                            <br>
                        </div>
                    </section>
                   
                    <section class="input_text">
                        <div>
                        <label for="message">Мессеж</label>
                        <textarea name="message" id="message" class="texting"></textarea>
                        </div>
                    <div class="button">
                        <input type="submit" value="Илгээх">
                    </div>
                    </section>
               
                </form>
                
            </section>
        </section>
        <section class="footer_bottom_section">
            <p>
                © 2023  Оожоо Эрхэмээ Тэмүүлэн  ХХК. Зохиогчийн эрх хуулиар хамгаалагдсан Developed by <a href="#">Tavanbogd Cubix LLC </a>
            </p>    
        </section>
    </footer>
    `
   }
}

window.customElements.define('footer-part', Footer);