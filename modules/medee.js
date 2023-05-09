class News {
  constructor(news) {
    this.image = news.image;
    this.title = news.title;
    this.content = news.content;
    this.date = news.date;
  }
  // render news
  Render() {  
    return ` <article class="neg_medee">
             <picture>
              <img src="${this.image}" alt="News1">
                </picture>
                <section>
                <h2>${this.title}</h2>
                <p>${this.content}</p>
                    <p class="date">${this.date}</p>
                </section>
            </article>`;
  }
}

export default class Module_News {
  constructor(json_Url) {
    this.json_Url = json_Url;
    this.current_page = 0;
    this.last_page = 0;
  }

  download() {
    const news_id = document.getElementById("medeenvvd");

    fetch(`${this.json_Url}`).then((response) => {
      response.json().then((data) => {
        news_id.innerHTML = ``;
        this.change_index();
        const filterNews = data.record.filter((newsdata, index) => {
          return (
            this.current_page * 4 <= index && index < this.current_page * 4 + 4
          );
        });
        news_id.insertAdjacentHTML(
          "afterbegin",
          filterNews
            .map((newNews) => {
              const news_obj = new News(newNews);
              return news_obj.Render();
            })
            .reduce((prev, cur) => prev + cur, "")
        );
      });
    });
    console.log("Current number: ", this.current_page);
  }

  change_index() {
    document.getElementById("before").addEventListener("click", () => {
      this.sub();
    });
    document.getElementById("after").addEventListener("click", () => {
      this.add();
    });
    for (let i = 0; i < 4; i++) {
      document
        .getElementsByClassName("number")
        [i].addEventListener("click", () => {
          this.change_page(i);
        });
    }
  }

  add() {
    if (this.current_page < 3) {
      this.current_page++;
      this.download();
    }
  }

  sub() {
    if (this.current_page > 0) {
      this.current_page--;
      this.download();
    }
  }

  change_page(number) {
    // tuhain page deer darsan tohioldold current-page iig oorchlood medeellee tatna
    this.current_page = number;
    this.download();
  }
}
