/*
Needed components for stock info

daily open/close

previous close
let selectedTicker = [provided by user]
let tickersUrl = `https://api.polygon.io/v3/reference/tickers?ticker=${selectedTicker}&active=true&apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y`

Ticker details v3: the response will be na object 
/v3/reference/tickers/{ticker}
    ticker
    name
    locale
    currency_name
    description
    branding: {
        "logo_url"
        "lcon_url"
    }
    website?
example response 
{
    "request_id": "05ae9fa0c8dea527e47d82a41ac97b85",
    "results": {
        "ticker": "PRG",
        "name": "PROG Holdings, Inc.",
        "market": "stocks",
        "locale": "us",
        "primary_exchange": "XNYS",
        "type": "CS",
        "active": true,
        "currency_name": "usd",
        "cik": "0001808834",
        "composite_figi": "BBG00VSH86G4",
        "share_class_figi": "BBG00VSH86H3",
        "market_cap": 1504639241.28,
        "phone_number": "(385) 351-1369",
        "address": {
            "address1": "256 W. DATA DRIVE",
            "city": "DRAPER",
            "state": "UT",
            "postal_code": "84020"
        },
        "description": "PROG Holdings Inc is a financial technology holding company that provides transparent and competitive payment options to consumers. The Company has two reportable segments: (i) Progressive Leasing, an in-store, app-based, and e-commerce point-of-sale lease-to-own solutions provider; and (ii) Vive Financial (Vive), an omnichannel provider of second-look revolving credit products. The majority of the revenue of the company is earned through the progressive leasing segment.",
        "sic_code": "7359",
        "sic_description": "SERVICES-EQUIPMENT RENTAL & LEASING, NEC",
        "ticker_root": "PRG",
        "homepage_url": "https://www.progholdings.com",
        "total_employees": 1606,
        "list_date": "1984-09-07",
        "branding": {
            "logo_url": "https://api.polygon.io/v1/reference/company-branding/cHJvZ2hvbGRpbmdzLmNvbQ/images/2024-03-01_logo.png"
        },
        "share_class_shares_outstanding": 43690000,
        "weighted_shares_outstanding": 43688712,
        "round_lot": 100
    },
    "status": "OK"
}







Ticker news
let tickerNewsResponse = `https://api.polygon.io/v2/reference/news?ticker=${tickerName}&apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y`
let tickerNew = tickerNewsResponse.Results //this has all the news related to the ticker




Results example
{
    "results": [
        {
            "id": "-SoRgJ8O-OfF4a3_wJJjNeyv6T4XbCcK1B2adckGguo",
            "publisher": {
                "name": "The Motley Fool",
                "homepage_url": "https://www.fool.com/",
                "logo_url": "https://s3.polygon.io/public/assets/news/logos/themotleyfool.svg",
                "favicon_url": "https://s3.polygon.io/public/assets/news/favicons/themotleyfool.ico"
            },
            "title": "3 Beaten-Up Stocks",
            "author": "newsfeedback@fool.com (Motley Fool Staff)",
            "published_utc": "2024-03-14T17:11:45Z",
            "article_url": "https://www.fool.com/investing/2024/03/14/3-beaten-up-stocks/",
            "tickers": [
                "NYCB",
                "SFIX",
                "PRG"
            ],
            "image_url": "https://g.foolcdn.com/editorial/images/768514/mfm_05.jpg",
            "description": "We've also got some tips for travelers.",
            "keywords": [
                "investing"
            ]
        },
        {
            "id": "McwRegYutg3RBWXHjzujqv2f1MGwQtvYMTh-54oRMto",
            "publisher": {
                "name": "Zacks Investment Research",
                "homepage_url": "https://www.zacks.com/",
                "logo_url": "https://s3.polygon.io/public/assets/news/logos/zacks.png",
                "favicon_url": "https://s3.polygon.io/public/assets/news/favicons/zacks.ico"
            },
            "title": "Infosys (INFY) to Implement AI Solutions for PROG Holdings",
            "author": "Zacks Equity Research",
            "published_utc": "2024-03-04T14:52:00Z",
            "article_url": "https://www.zacks.com/stock/news/2235370/infosys-infy-to-implement-ai-solutions-for-prog-holdings",
            "tickers": [
                "INFY",
                "DELL",
                "BL",
                "PRG"
            ],
            "amp_url": "https://www.zacks.com/amp/stock/news/2235370/infosys-infy-to-implement-ai-solutions-for-prog-holdings",
            "image_url": "https://staticx-tuner.zacks.com/images/articles/main/d3/848.jpg",
            "description": "Infosys (INFY) and PROG Holdings collaborate to improve the latter's operations by implementing solutions based on cloud and artificial intelligence."
        },
        {
            "id": "Z52Z7Clcjny9jmyt6lVKnxxoVYcO19MDUn4wDB3GcPk",
            "publisher": {
                "name": "Seeking Alpha",
                "homepage_url": "https://seekingalpha.com/",
                "logo_url": "https://s3.polygon.io/public/assets/news/logos/seekingalpha.svg",
                "favicon_url": "https://s3.polygon.io/public/assets/news/favicons/seekingalpha.ico"
            },
            "title": "Berkshire's Q4 Earnings: Why I Nearly Doubled My Stake",
            "author": "A.J. Button",
            "published_utc": "2024-03-02T06:31:11Z",
            "article_url": "https://seekingalpha.com/article/4675435-berkshire-q4-earnings-nearly-doubled-my-stake",
            "tickers": [
                "AAPL",
                "BRK.A",
                "PRG",
                "BRK.B"
            ],
            "image_url": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/184769358/image_184769358.jpg?io=getty-c-w1536",
            "description": "Berkshire put out its latest stock holdings (13F), a new letter to shareholders, and an earnings release, all within two weeks. Learn why BRK.B stock is a strong value today because."
        },
        {
            "id": "gk60IPlsVrGu5SQGV1Im_Gg-ok_MUh1UfyeE6zvPNtw",
            "publisher": {
                "name": "Zacks Investment Research",
                "homepage_url": "https://www.zacks.com/",
                "logo_url": "https://s3.polygon.io/public/assets/news/logos/zacks.png",
                "favicon_url": "https://s3.polygon.io/public/assets/news/favicons/zacks.ico"
            },
            "title": "These 2 Finance Stocks Could Beat Earnings: Why They Should Be on Your Radar",
            "author": "Zacks Equity Research",
            "published_utc": "2024-02-15T13:50:06Z",
            "article_url": "https://www.zacks.com/stock/news/2226696/these-2-finance-stocks-could-beat-earnings-why-they-should-be-on-your-radar",
            "tickers": [
                "PRG",
                "SLG"
            ],
            "amp_url": "https://www.zacks.com/amp/stock/news/2226696/these-2-finance-stocks-could-beat-earnings-why-they-should-be-on-your-radar",
            "image_url": "https://staticx-tuner.zacks.com/images/default_article_images/default20.jpg",
            "description": "Investors looking for ways to find stocks that are set to beat quarterly earnings estimates should check out the Zacks Earnings ESP."
        },
        {
            "id": "4KNRMk8u7WYitCnE9vb4im0arUiiR5IyhoR1ZrB5lNk",
            "publisher": {
                "name": "Zacks Investment Research",
                "homepage_url": "https://www.zacks.com/",
                "logo_url": "http



*/
import { loadHeaderFooter } from "./utilities.mjs"
loadHeaderFooter()


let selectedTicker = document.querySelector("#selectedStock")
// = [provided by user]
//check if all caps and no numbers
let searchStockButton = document.querySelector("#selectedStockButton")
searchStockButton.addEventListener("click",() =>{
    let sTFormatted = selectedTicker.value.toUpperCase()
    // console.log(selectedTicker.value)
    console.log(sTFormatted)
    resetDetailsAndNews()
    getTicker(sTFormatted)

})

// console.log()s

function resetDetailsAndNews() {
   
    let details = document.querySelectorAll(".stockDetail")

    if(details){
        console.log("here are details",details)
        for(let i = 0; i < details.length; i++){
            details[i].remove()
        }
    }else{
        console.log("nothing to remove")
    }

    let stories = document.querySelectorAll(".storyArticle")

    if(stories){
        // stories.remove()
        console.log("here are stories",stories)
        for(let i = 0; i < stories.length; i++){
            stories[i].remove()
        }
    }

  
}

async function getTicker(givenTicker){
    resetDetailsAndNews()
   
    //this will get the ticker, name, locale, description, website information
                    //https://api.polygon.io/v3/reference/tickers?ticker=${giventicker}&active=true&apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y
                    //https://api.polygon.io/v3/reference/tickers/${givenTicker}?apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y
    // let tickersUrl = `https://api.polygon.io/v3/reference/tickers?ticker=${givenTicker}&active=true&apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y`
    let tickersUrl = `https://api.polygon.io/v3/reference/tickers/${givenTicker}?apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y`
    let tickerInfo
    await fetch(tickersUrl)
        .then( async function(response) {
            console.log(response)
            const reqData =  await response.json();// const data =  await response.json();
            tickerInfo = reqData

        })

    let tickerData = tickerInfo.results.ticker
    let nameData = tickerInfo.results.name
    let localeData = tickerInfo.results.locale
    let descriptionData = tickerInfo.results.description
    let websiteData = tickerInfo.results.homepage_url



    let ticker = document.createElement('p')
    let name = document.createElement('p')
    let locale = document.createElement('p')
    let description = document.createElement('p')
    let website = document.createElement('a')

    ticker.innerHTML = tickerData
    name.innerHTML = nameData
    locale.innerHTML = localeData
    description.innerHTML = descriptionData
    website.setAttribute("href", websiteData)
    website.innerHTML = `<p>${websiteData}</p>`

   

    //this gets the daily open and close
                //https://api.polygon.io/v3/reference/tickers/PRG?apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y
    let docUrl = `https://api.polygon.io/v1/open-close/${givenTicker}/2024-04-03?adjusted=true&apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y`
    let docData
    await fetch(docUrl)
        .then( async function(response) {
            console.log(response)
            const reqData =  await response.json();// const data =  await response.json();
            docData = reqData

        })
    let high = document.createElement('p')
    let low = document.createElement('p')
    let close = document.createElement('p')

    high.innerHTML = docData.high
    low.innerHTML = docData.open
    close.innerHTML = docData.close


    //put all the information together
    let stockDetails = document.querySelector("#stockDetails")

    let listSections = ["Ticker","Name","Locale","Daily High","Daily Low","Close","Description","Website"]
    let list = [ticker,name,locale,high,low,close,description,website]
    for(let i = 0; i < list.length; i++){
        console.log("here is the section header...",listSections[i],"\nHere is the section data...",list[i])
        let sec = document.createElement("section")
        sec.classList.add("stockDetail")
        let h3 = document.createElement("h3")
        h3.innerHTML = listSections[i]
        sec.appendChild(h3)
        sec.appendChild(list[i])
        stockDetails.appendChild(sec)

         

    }
    
    


    
    //put all the information together
    // let stockDetails = document.querySelector("#stockDetails")
    // stockDetails.appendChild(ticker)
    // stockDetails.appendChild(name)
    // stockDetails.appendChild(locale)
    // stockDetails.appendChild(high)
    // stockDetails.appendChild(open)
    // stockDetails.appendChild(close)
    // stockDetails.appendChild(description)
    // stockDetails.appendChild(website)



    //ticker news
                       //https://api.polygon.io/v3/reference/tickers/PRG?apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y
    let tickerNewsUrl = `https://api.polygon.io/v2/reference/news?ticker=${givenTicker}&apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y`
    //let tickerNew = tickerNewsResponse.Results //this has all the news related to the ticker
    let tickerNews
    await fetch(tickerNewsUrl)
    .then( async function(response) {
        console.log(response)
        const reqData =  await response.json();// const data =  await response.json();
        tickerNews = reqData

    })

    console.log("here is tickerNews......",tickerNews)

    let stockStoriesHolder = document.querySelector("#stockStories")

    for(let i = 0; i < (tickerNews.results).length; i++){
        console.log("here is tickernews.resuts....\n",tickerNews.results,"\nhere is the length...",(tickerNews.results).length)
        let article = document.createElement('article')//single story container
        article.classList.add("storyArticle");


        let img = document.createElement('img')//holds story image
        img.setAttribute("src", tickerNews.results[i].image_url)//"https://placehold.co/200x200")//"[set the image url here")
        img.setAttribute("alt", `A photo belonging to the following story: ${tickerNews.results[i].title}`)//"[set alt for url image]")

        let title = document.createElement('h4') // title under image
        title.innerHTML =`${tickerNews.results[i].title}`

        let desc = document.createElement('p')// description under title
        desc.innerHTML = `${tickerNews.results[i].description}` //

        let link = document.createElement('a') // link to more if you want to know more
        link.setAttribute("href", `${tickerNews.results[i].article_url}`)
        link.innerHTML = "Click here for more"

        article.appendChild(img)
        article.appendChild(title)
        article.appendChild(desc)
        article.appendChild(link)
        
        stockStoriesHolder.appendChild(article)// appends this to the 'stories' div


    }

    





}











