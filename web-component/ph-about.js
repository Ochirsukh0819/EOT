class PhAbout extends HTMLElement {
  constructor() {
    super();

    const image = this.getAttribute("image");
    const title = this.getAttribute("title");
    const content = this.getAttribute("content");
    const date = this.getAttribute("date");
    const shadowRoot = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");

    template.innerHTML = `
    <style>
      
    .neg_medee {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  
    .neg_medee > picture img {
    width: 15rem;
    height: auto;
    aspect-ratio: initial;
  }
  
   .neg_medee > section {
    width: var(--information_width);
    margin-left: var(--information_margin_left);
    display: flex;
    flex-direction: column;
  }
  
   .neg_medee h2 {
    margin-bottom: var(--information_margin_bottom);
    font-family: var(--header_footer_font_family);
    font-size: 1.25rem;
  }
  
 > .neg_medee p {
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
              <img src="${image}" alt="News1">
                </picture>
                <section>
                <h2>${title}</h2>
                <p>${content}</p>
                    <p class="date">${date}</p>
                </section>
            </article>`;
    const t_content = template.content.cloneNode(true);
    shadowRoot.appendChild(t_content);
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
