/*
Needed components
    news

*/

// const url = 'https://myallies-breaking-news-v1.p.rapidapi.com/GetTopNews';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e3276b0b90msh316c195a1c4399cp17a7fajsnaa73fb904586',
// 		'X-RapidAPI-Host': 'myallies-breaking-news-v1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// 'use strict';
// var request = require('request');

// // replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
// var url = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo';

// request.get({
//     url: url,
//     json: true,
//     headers: {'User-Agent': 'request'}
//   }, (err, res, data) => {
//     if (err) {
//       console.log('Error:', err);
//     } else if (res.statusCode !== 200) {
//       console.log('Status:', res.statusCode);
//     } else {
//       // data is successfully parsed as a JSON object:
//       console.log(data);
//     }
//   });


// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://api.webz.io/filterWebContent?q=%28%22stock%20market%22%20OR%20NASDAQ%29%20language%3Aenglish&format=json&sort=crawled&ts=1595156935835&highlight=true&token=ce20533f-49b2-401a-a4cb-b3ecb8d72f86', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));










import { loadHeaderFooter } from "../src/public/js/utilities.mjs";
//src\public\js\utilities.js

loadHeaderFooter()
//this has "https://newapi.org/vw/everything?" + "q=[topic]" + apiKey"
var url = 'https://newsapi.org/v2/everything?' +
          'q=stocks&' +
          'apiKey=e4e21500877041bb915a5f7f49646946';

// let page = 1; // this is the default page where it starts
// createStory(page, articles)


// var req = new Request(url);

// fetch(req)
//     .then( async function(response) {
//         console.log(response)
//         const data =  await response.json();
//         const art = data.articles //length is 100
//         console.log("------------------------",data,"**********************",art[0].description,"\n",art.length)



//     })

//let pageButton = document.querySelectorAll(".pageTurnerButton") // returns a nodelist of the children
// console.log(pageButton)
// for(let i = 0; i < pageButton.length; i++){
//     pageButton[i].addEventListener("click", pressed())
//     console.log(pageButton[i].innerHTML)
//     console.log("a;sldkj;falks\n")
// }



//////////////////////////////////////////////
//these are the page turner buttons
let p1 = document.querySelector("#ptb1")
let p2 = document.querySelector("#ptb2")
let p3 = document.querySelector("#ptb3")
let p4 = document.querySelector("#ptb4")
let p5 = document.querySelector("#ptb5")

p1.addEventListener("click",pressed1)
p2.addEventListener("click",pressed2)
p3.addEventListener("click",pressed3)
p4.addEventListener("click",pressed4)
p5.addEventListener("click",pressed5)

////This is for the stories
var newsUrl = 'https://newsapi.org/v2/everything?' +
          'q=stocks&' +
          'apiKey=e4e21500877041bb915a5f7f49646946';

var newsReq = new Request(newsUrl);
let data 

await fetch(newsReq)
    .then( async function(response) {
        console.log(response)
        const reqData =  await response.json();// const data =  await response.json();
        data = reqData
        const art = data.articles //length is 100
        // console.log("------------------------\n",data,"\n**********************\n",art[0].description,"\n",art.length)



    })
/*
    daily open/close
        close
        open
    TICKERS
        ticker
        name

*/

////Need ticker, name, current value 
////this will get the 'ticker' and 'name'


// let tickersUrl = "https://api.polygon.io/v3/reference/tickers?active=true&apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y"
// let tickers
// //this needs to get the date and ticker name
// let dailyOCUrl = "https://api.polygon.io/v1/open-close/{ticker}/{date here}?adjusted=true&apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y"

// await fetch(tickersUrl)
//     .then(async function (response) {
//         console.log("here is the tickerURL response.....\n",response)
//         const tickerReqData = await response.json();
//         tickers = tickerReqData
//        ///////////so i don't want to make multipole requests because it will burn through my requests for the day
//        //probably will only do name and tickers

//     })



// console.log("here is tickers outside the request\n",tickers)

// async function stockStream(){
//     console.log("////////////////////////////////////")
//     let results = tickers.results
//     console.log("*****************************************\n",results)

//     let divStream = document.querySelector("#stockStream")
//     divStream.setAttribute("id","stockStream")

//     //await fetch()

//     for(let i = 0; i < results.length; i++){
        

//         let divItem = document.createElement("div")
//         divItem.classList.add("stockStreamItem")

//         let divItemDetails = document.createElement("div")
//         divItemDetails.classList.add("stockStreamItemDetails")
//         divItemDetails.setAttribute("id",`stockStreamItemDetails${results[i].ticker}`)

//         let ticker = document.createElement("p")
//         ticker.innerHTML = results[i].ticker

//         let tn = document.createElement("p")
//         tn.innerHTML = results[i].name

//         let addButton = document.createElement("button")
//         addButton.innerHTML = "Add to watchlist"
//         addButton.addEventListener("click", () => {
//                                                                     //when it's ".children" it returns a list
//             let see = document.querySelector(`#stockStreamItemDetails${results[i].ticker}`).children
//             console.log("this ticker has been added to localstorage",see)
//         })

//         divItemDetails.appendChild(ticker)
//         // divItemDetails.appendChild(tn)

//         divItem.appendChild(divItemDetails)
//         divItem.appendChild(addButton)

//         divStream.append(divItem)
//         // let headerSection = document.querySelector("#headerSection")
//         // headerSection.append(divStream)
        
//     };

   
    



// }

// stockStream()

//let art = await data.articles
// console.log("------------------------\n",data,"\n**********************\n",art[0].description,"\n",art.length)
console.log("------------------------\n",data,)
let articles = data.articles
let page = 1; // this is the default page where it starts
createStory(page,articles)
p1.setAttribute("disabled","")


//These group of functions change the page number and calls the creation of the stories on those pages
 function pressed1() {
    buttonReset()
    console.log("1 got pressed\nhere is the page number...")
    page = 1
    console.log(page)
    removeStories()
    console.log("all stories are gone")
    console.log("adding new stories")
    createStory(page, articles)
    p1.setAttribute("disabled","")
}

function pressed2() {
    buttonReset()
    // console.log("2 got pressed\nhere is the page number...")
    page = 2
    // console.log(page)
    removeStories()
    // console.log("all stories are gone")
    createStory(page, articles)
    p2.setAttribute("disabled","")
}
function pressed3() {
    buttonReset()
    // console.log("3 got pressed\nhere is the page number...")
    page = 3
    // console.log(page)
    removeStories()
    // console.log("all stories are gone")
    createStory(page, articles)
    p3.setAttribute("disabled","")
}
function pressed4() {
    buttonReset()
    // console.log("4 got pressed\nhere is the page number...")
    page = 4
    // console.log(page)
    removeStories()
    // console.log("all stories are gone")
    createStory(page, articles)
    p4.setAttribute("disabled","")
}

function pressed5(){
    buttonReset()
    // console.log("5 got pressed")
    page = 5
    // console.log(page)
    removeStories()
    // console.log("all stories are gone")
    createStory(page, articles)
    p5.setAttribute("disabled","")
}
// pageButton.addEventListener("click", async () => {
//     await console.log("i have been pressed")
// })

function createStory(pageNumber, stories){
    let newPage = pageNumber
    let topStory // this represents the first story of the set by index
    let bottomStory // this represents the last story of the set by index
    let storiesContainer = document.querySelector("#stories") // holds all the stories
   

    switch(newPage){
        case 1:
            topStory = 0;
            bottomStory = 9;
            break;
        case 2:
            topStory = 10;
            bottomStory=19;
            break;
        case 3:
            topStory = 20;
            bottomStory = 29;
            break;
        case 4:
            topStory = 30;
            bottomStory = 39
            break;
        case 5:
            topStory = 40;
            bottomStory = 49;
            break;
          
    }

    for(let i = topStory; i <= bottomStory; i++){
        let article = document.createElement('article')//single story container
        article.classList.add("storyArticle");


        let img = document.createElement('img')//holds story image
        img.setAttribute("src", stories[i].urlToImage)//"https://placehold.co/200x200")//"[set the image url here")
        img.setAttribute("alt", `A photo belonging to the following story: ${stories[i].title}`)//"[set alt for url image]")

        let title = document.createElement('h2') // title under image
        title.innerHTML =`${stories[i].title}`

        let desc = document.createElement('p')// description under title
        desc.innerHTML = `${stories[i].description}` //

        let link = document.createElement('a') // link to more if you want to know more
        link.setAttribute("href", `${stories[i].url}`)
        link.innerHTML = "Click here for more"

        article.appendChild(img)
        article.appendChild(title)
        article.appendChild(desc)
        article.appendChild(link)
        
        storiesContainer.appendChild(article)// appends this to the 'stories' div

    }



}

function removeStories() {
    let allStories = document.querySelectorAll(".storyArticle")
    allStories.forEach(story => {
        story.remove()
    })
    //allStories.remove()
}

function buttonReset(){
    p1.removeAttribute("disabled")
    p2.removeAttribute("disabled")
    p3.removeAttribute("disabled")
    p4.removeAttribute("disabled")
    p5.removeAttribute("disabled")

}




////////////////////

let article = document.createElement('article')//single story container
let section = document.createElement('section')
let img = document.createElement('img')//holds story image
let desc = document.createElement('p')// description under title
let title = document.createElement('h2') // title under image
let link = document.createElement('a') // link to more if you want to know more
console.log("hello from new.js")


// // componetns ="https://api.polygon.io + daily open/close + stockTicker + adjusted (this is optional) + apikey"
// let stockUrl ="https://api.polygon.io/v1/open-close/AAPL/2024-03-06?adjusted=true&apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y"

// let req1 = new Request(stockUrl)
// fetch(req1)
//     .then(async function (response){
//         const data = await response.json()
//         console.log("/*/*/*/*/*/*8/**'\n",data)
//     })