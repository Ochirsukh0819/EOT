class News{

    constructor(news){
        this.image = news.image;
        this.title = news.title;
        this.content = news.content; 
        this.date = news.date;
    }
    
    // render news
    Render(){
        return ` <article class="neg_medee">
            <picture>
                <img src="${this.image}" alt="News1">
            </picture>
            <section>
            <h2>${this.title}</h2>
            <p>${this.content}</p>
                <p class="date">${this.date}</p>
            </section>
        </article>`
    }
}

export default class Module_News{
    constructor(json_Url){
        this.json_Url = json_Url;
        this.current_page = 0;
    }
    
    download(){
        fetch(`${this.json_Url}`    
        )
        .then(response => {
            response.json()
            .then(data => {
                console.log("DATA", data);
                // const obj_data = JSON.parse(data);
                const news_id = document.getElementById('medeenvvd');
                const filterNews = data.record.filter((news, index) => { return this.current_page * 4 <= index && index < this.current_page * 4 + 4});
                news_id.insertAdjacentHTML("afterbegin", 
                    filterNews.map(newNews => {
                        const news_obj = new News(newNews);
                        return news_obj.Render();
                    }).join('')
                    );
            })
        })
        .catch(err => console.log(err));
    }
}