import defaultImport from "../modules/medee.js";

const news = new defaultImport("https://api.jsonbin.io/v3/b/642d96f8ebd26539d0a519d6");

news.download();


// class News{

//     constructor(news){
//         this.image = news.image;
//         this.title = news.title;
//         this.content = news.content; 
//         this.date = news.date;
//     }
    
//     // render news
//     Render(){
//         return ` <article class="neg_medee">
//             <picture>
//                 <img src="${this.image}" alt="News1">
//             </picture>
//             <section>
//             <h2>${this.title}</h2>
//             <p>${this.content}</p>
//                 <p class="date">${this.date}</p>
//             </section>
//         </article>`
//     }
// }

// fetch("./json/news.json")

// .then(response => response.json())
// .then(data => {
//     const news = data.map(newsData => new News(newsData));
//     console.log("Map ", news);
//     const newsList = news.map(i => i.Render()).join('');
//     console.log("newsList", newsList);
//     document.getElementById('medeenvvd').innerHTML = newsList;
//     console.log(data);
// })
// .catch(error => console.error(error));





// Version 2 

// fetch("./json/news.json")
// .then(function(response){ return response.json();
// })
// .then(function(news){
    
//     let pl = document.querySelector("#medeenvvd");
//     let out = "";
//     for(let  i of news){
//         out += ` <article class="neg_medee">
//             <picture>
//                 <img src="${i.image}" alt="News1">
//             </picture>
//             <section>
//                 <h2>${i.title}</h2>
//                 <p>${i.content}</p>
//                 <p class="date">${i.date}</p>
//              </section>
//            </article>
//         `; 
//     }
//     console.log(out);
//     pl.innerHTML = out;
// })

