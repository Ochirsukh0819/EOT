class PhManyProduct extends HTMLElement {
  constructor() {
    super();
    //
    this.innerHTML = `<section class="products">
        <section class="menu">
          <ul>
            <li class="product1"><a href="#">БАГЦ</a></li>
            <li class="product2"><a href="#">ПИЦЦА</a></li>
            <li class="product3"><a href="#">НЭМЭЛТ</a></li>
            <li class="product4"><a href="#">УНДАА</a></li>
          </ul>
        </section>

        <section id="food">
          <!-- <article>
                  <a href="#">
                      <picture>
                          <img src="./product_image/drink1.jpg" alt="Маханд дурлагдсад">
                      </picture>
                  </a>
                  <h3>Coca Cola 1.25L</h3>
                  <p>6,000₮</p>
                  <button type="submit">Сагсанд нэмэх</button>
              </article>
      
              <article>
                  <a href="#">
                      <picture>
                          <img src="./product_image/drinks9.jpg" alt="Бяслагт">
                      </picture>
                  </a>
                  <h3>Fuze Tea 1.25L</h3>
                  <p>6,000₮</p>
                  <button type="submit">Сагсанд нэмэх</button>
              </article>
      
              <article>
                  <a href="#">
                  <picture>
                      <img src="./product_image/drink2.jpg" alt="Пепперони">
                  </picture>
                  </a>
                  <h3>Sprite 1.25L</h3>
                  <p>6,000₮</p>
                  <button type="submit">Сагсанд нэмэх</button>
              </article>
      
              <article>
                  <a href="#">
                  <picture>
                     <img src="./product_image/drink3.jpg" alt="BBQ тахиа">
                  </picture>
                  </a>
                  <h3>Fanta 1.25L</h3>
                  <p>6,000₮</p>
                  <button type="submit">Сагсанд нэмэх</button>
              </article>
      
              <article>
                  <a href="#">
                      <picture>
                         <img src="./product_image/drinks8.jpg" alt="BBQ тахиа">
                      </picture>
                      </a>
                  <h3>Cola Zero 0.5L</h3>
                  <p>3,000₮</p>
                  <button type="submit">Сагсанд нэмэх</button>
              </article>
      
              <article>
                  <a href="#">
                      <picture>
                         <img src="./product_image/drinks4.jpg" alt="BBQ тахиа">
                      </picture>
                      </a>
                  <h3>Cola Zero 1.25L</h3>
                  <p>6,000₮</p>
                  <button type="submit">Сагсанд нэмэх</button>
              </article>
      
            
              <article>
                  <a href="#">
                      <picture>
                         <img src="./product_image/drinks5.jpg" alt="BBQ тахиа">
                      </picture>
                      </a>
                  <h3>Coca Cola 0.5L</h3>
                  <p>3,000₮</p>
                  <button type="submit">Сагсанд нэмэх</button>
              </article>
      
              <article>
                  <a href="#">
                      <picture>
                         <img src="./product_image/drinks6.jpg" alt="BBQ тахиа">
                      </picture>
                      </a>
                  <h3>Sprite 0.5L</h3>
                  <p>3,000₮</p>
                  <button type="submit">Сагсанд нэмэх</button>
              </article>
              
              <article>
                  <a href="#">
                      <picture>
                         <img src="./product_image/drinks7.jpg" alt="BBQ тахиа">
                      </picture>
                      </a>
                  <h3>Fanta 0.5L</h3>
                  <p>3,000₮</p>
                  <button type="submit">Сагсанд нэмэх</button>
              </article> 
              </section> -->
        </section>
      </section> `;
  }

  connectedCallback() {
    
  }

  disconnectedCallback() {
    //
  }

  attributeChangedCallback(name, oldVal, newVal) {
    //
  }

  adoptedCallback() {
    //
  }
}

window.customElements.define("ph-many_product", PhManyProduct);
