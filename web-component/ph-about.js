class PhAbout extends HTMLElement {
  constructor() {
    super();

    const mode = this.getAttribute("mode");
    console.log(mode, " ***********************");
    this.attachShadow({ mode: "open" });

    // const image = this.getAttribute("image");
    // const title = this.getAttribute("title");
    // const content = this.getAttribute("content");
    // const date = this.getAttribute("date");

    // this
    // const shadowRoot = this.attachShadow({ mode: "open" });
    // const template = document.createElement("template");

    //     template.innerHTML = `
    //     <style>

    //     .neg_medee {
    //     display: flex;
    //     flex-direction: row;
    //     justify-content: space-evenly;
    //   }

    //     .neg_medee > picture img {
    //     width: 15rem;
    //     height: auto;
    //     aspect-ratio: initial;
    //   }

    //    .neg_medee > section {
    //     width: var(--information_width);
    //     margin-left: var(--information_margin_left);
    //     display: flex;
    //     flex-direction: column;
    //   }

    //    .neg_medee h2 {
    //     margin-bottom: var(--information_margin_bottom);
    //     font-family: var(--header_footer_font_family);
    //     font-size: 1.25rem;
    //   }

    //  > .neg_medee p {
    //     text-align: justify;
    //     font-weight: normal;
    //     font-family: var(--header_footer_font_family);
    //   }

    //   .neg_medee > section > .date {
    //     margin-top: 1rem;
    //     display: flex;
    //     justify-content: flex-end;
    //   }

    //     </style>
    //         <article class="neg_medee">
    //              <picture>
    //               <img src="${image}" alt="News1">
    //                 </picture>
    //                 <section>
    //                 <h2>${title}</h2>
    //                 <p>${content}</p>
    //                     <p class="date">${date}</p>
    //                 </section>
    //             </article>`;
    //     const t_content = template.content.cloneNode(true);
    //     shadowRoot.appendChild(t_content);
    this.render(mode);
  }

  render(mode) {
    console.log("Orloooooooooooooooooooooooooooo");
    let template;
    if (mode == "mode1") {
      template = `
          <style>   
          .neg_medee {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
        }
         .neg_medee > section {
          
          width: var(--information_width);
          margin-left: var(--information_margin_left);
          display: flex;
          flex-direction: column;
        }
        
         .neg_medee > section > h2 {
          margin-bottom: var(--information_margin_bottom);
          font-family: var(--header_footer_font_family);
          font-size: 1rem;
        }
    
        .neg_medee p {
          text-align: justify;
          font-weight: normal;
          font-family: var(--header_footer_font_family);
        }
        
        .neg_medee > section > .date {
          margin-top: 1rem;
          display: flex;
          justify-content: flex-end;
        }
          </style>
              <article class="neg_medee">
                <picture>
                  <slot name="image"></slot> 
                </picture>
                <section>
                  <h2> <slot name="title"></slot> </h2>
                  <p> <slot name="content"></slot></p>
                  <p class="date"> <slot name="date"></slot></p>
                </section>
              </article>`;
    } else if (mode == "mode2") {
      template = `
       <style>

      .main_objective {
        width: 23rem;
        height: 14rem;
        background-color: var(--about_bgcolor);
        margin: 10% 0 10% 0;
        padding: 0.5rem;
        border-radius: 1rem;
        color: var(--about_text_color);
      }
      .main_objective > section {
        display: flex;
        justify-content: center;
      }
      
      .main_objective h2 {
        display: flex;
        justify-content: center;
        font-size: 1rem;
        font-family: var(--header_footer_font_family);
      }
      
      .main_objective p {
        padding-top: 3%;
        text-align: justify;
      }
       </style>

       <article class="main_objective">
         <section>
          <a href="#"><slot name="image"></slot> </a>
         </section>
         <h2> <slot name="title"></slot> </h2>
         <p>
          <slot name="content"></slot>
         </p>
        </article>
      `;
    }
    this.shadowRoot.innerHTML = template;
  }

  connectedCallback() {
    //
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

window.customElements.define("ph-about", PhAbout);
