class Objective {
  constructor(item) {
    this.image = item.image;
    this.title = item.title;
    this.content = item.content;
  }

  Render() {
    // return `<article class="main_objective">
    //      <section>
    //        <a href="#"><img src="${this.image}" alt="${this.title}" /></a>
    //      </section>
    //      <h2>${this.title}</h2>
    //      <p>
    //       ${this.content}
    //      </p>
    //    </article>`;
    return `<ph-about mode = "mode2">
            <img slot="image" src="${this.image}" alt="${this.title}">
            <h2 slot="title">${this.title}</h2>
            <p slot="content">${this.content}</p>
           </ph-about>`;
  }
}

const objective_id = document.getElementById("objective_part");

fetch("https://api.jsonbin.io/v3/b/64643e5cb89b1e22999f362f").then((response) =>
  response.json().then((data) => {
    console.log("Object", data);
    objective_id.insertAdjacentHTML(
      "afterbegin",
      data.record
        .map((newData) => {
          const new_obj = new Objective(newData);
          return new_obj.Render();
        })
        .join("")
    );
  })
);
