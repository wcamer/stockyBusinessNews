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












//this has "https://newapi.org/vw/everything?" + "q=[topic]" + apiKey"
var url = 'https://newsapi.org/v2/everything?' +
          'q=stocks&' +
          'apiKey=e4e21500877041bb915a5f7f49646946';

// var req = new Request(url);

// fetch(req)
//     .then( async function(response) {
//         console.log(response)
//          const data =  await response.json();
//          const art = data.articles
//          console.log("------------------------",data,"**********************",art[0].description)
//     })

let article = document.createElement('article')//single story container
let section = document.createElement('section')
let img = document.createElement('img')//holds story image
let desc = document.createElement('p')// description under title
let title = document.createElement('h2') // title under image
let link = documen.createElement('a') // link to more if you want to know more



// // componetns ="https://api.polygon.io + daily open/close + stockTicker + adjusted (this is optional) + apikey"
// let stockUrl ="https://api.polygon.io/v1/open-close/AAPL/2024-03-06?adjusted=true&apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y"

// let req1 = new Request(stockUrl)
// fetch(req1)
//     .then(async function (response){
//         const data = await response.json()
//         console.log("/*/*/*/*/*/*8/**'\n",data)
//     })