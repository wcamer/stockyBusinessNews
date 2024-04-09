export function renderWithTemplate(template, parentElement, data, callBack) {
  
    parentElement.insertAdjacentHTML("afterbegin",template);
    if(callBack){
      callBack(data);
    }
  
   
  
  }

async function loadTemplate(path){
    const html = await fetch(path).then((response)=>{return response.text()});
    const template = document.createElement("template")
    template.innerHTML = html 
    return template.innerHTML
  
  }
//import hed from "../partials"

export async function loadHeaderFooter(){
    //Making the header piece
    let headerSection = document.querySelector("#headerSection") //grabbing our header section in the DOM
    let hPathTemplate = await loadTemplate("/src/public/partials/header.html")
 
    renderWithTemplate(hPathTemplate, headerSection)
    
    
    //Making the footer piece
    let footerSection = document.querySelector("#footerSection") //grabbing our footer section in the DOM
    let fPathTemplate = await loadTemplate("/src/public/partials/footer.html")
    renderWithTemplate(fPathTemplate, footerSection)
  
    stockStream()
  
  }







async function stockStream(){
    let tickersUrl = "https://api.polygon.io/v3/reference/tickers?active=true&apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y"
    let tickers
    // //this needs to get the date and ticker name
    // let dailyOCUrl = "https://api.polygon.io/v1/open-close/{ticker}/{date here}?adjusted=true&apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y"

    await fetch(tickersUrl)
        .then(async function (response) {
            //console.log("here is the tickerURL response.....\n",response)
            const tickerReqData = await response.json();
            tickers = tickerReqData
        ///////////so i don't want to make multipole requests because it will burn through my requests for the day
        //probably will only do name and tickers

        })

    console.log("////////////////////////////////////")
    let results = tickers.results
   // console.log("*****************************************\n",results)

    let divStream = document.querySelector("#stockStream")
    divStream.setAttribute("id","stockStream")

    //await fetch()

    for(let i = 0; i < results.length; i++){
        

        let divItem = document.createElement("div")
        divItem.classList.add("stockStreamItem")

        let divItemDetails = document.createElement("div")
        divItemDetails.classList.add("stockStreamItemDetails")
        divItemDetails.setAttribute("id",`stockStreamItemDetails${results[i].ticker}`)

        let ticker = document.createElement("p")
        ticker.innerHTML = results[i].ticker

        let tn = document.createElement("p")
        tn.innerHTML = results[i].name

        let addButton = document.createElement("button")
        addButton.innerHTML = "Add to watchlist"
        addButton.addEventListener("click", () => {
                                                                    //when it's ".children" it returns a list
            let see = document.querySelector(`#stockStreamItemDetails${results[i].ticker}`).children[0].innerHTML
            //console.log("this ticker has been added to localstorage",see)
            addToLocalStorage("watchlist",see)
            let watchlist = document.querySelector("#watchlistHolder")
            if(watchlist  && watchlist.length < 3){
                console.log('111111111111111111111111111111111111111123412341')
                buildWatchlistItem(see)
            }

           
        
            
        })

        divItemDetails.appendChild(ticker)
  

        divItem.appendChild(divItemDetails)
        divItem.appendChild(addButton)

        divStream.append(divItem)
    
        
    }; // end of for loop

   
    
}// end of stockStream()




// //gets the daily open and closing
// async function getDOC(tickerName){
//     console.log("////////////////// here i sgetDOC")
//     //date needs to be yyyy-mm-dd
//     const date = new Date()
    
    
//    // let month = date.getMonth() + 1 // months are 0 based // only shows single digit
//     //let day = date.getDate() // only shows single digit

//     let month = date.toLocaleString("default", {month: "2-digit"})
//     // the free tier of the api doesn't allow for same day info so we have to go as of yesterday
//     let day = date.getDate() 


//     if( [2,3,4,5,6,7,8,9].includes(day)){
//         day = "0" + (day -1)
//         console.log("here is new day", day)
//     }
//     //if it's the first of the month we need to get the last day of the previous month
//     else if (day == 1){
//         //if the the day is Jan 1st of a year we need Dec 31 of the prev year
//         if(month == 0){
//             year -= 1
//             month = 11 
//             day = 31

//         }
//         //if march 1st on a leap year (year has to be divisable by 4 and 100)
//         else if(month == 2 && (year% 4 == 0 && year % 100 == 0)){
//             console.log("leap year")
//             month -=1
//             day = 29
//         }
//         //march 1st on a non leap year
//         else if(month == 2){
//             month -=1
//             day = 28
//         }
//         // if first day of May, July, Sept, Nov
//         else if([4,6,8,10].includes(month)){
//             day = 30
//             month -=1

//         }
//         //for first day of Feb, April, June, Aug, Oct, Dec (months are 0 based [jan = 0 , feb = 1])
//         else if([1,3,5,7,9,11].includes(month)){
//             day = 31
//             month -=1

//         }
//     }
//     else {
//         console.log("nah we good on the day",day)

//     }

//      //day.toLocaleString("default", {day: "2-digit"})
//     // day -= 1
//     console.log("here is the lenght of day,", day.length, day)

//     let year = date.getFullYear();



//     let yesterDate = `${year}-${month}-${day}`
//     console.log(tickerName,yesterDate)
//     ////this needs to get the date and ticker name
//                     //let dailyOCUrl= "https://api.polygon.io/v1/open-close/A/2024-04-03?adjusted=true&apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y"
//     //let dailyOCUrl = "https://api.polygon.io/v1/open-close/" + tickerName + "/" + todayDate + "?adjusted=true&apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y"
//     // let dailyOCUrl1 = pdailyOCUrl
//     // console.log(dailyOCUrl1)
//     // console.log(dailyOCUrl)

//     let dailyOCUrl= `https://api.polygon.io/v1/open-close/${tickerName}/${yesterDate}?adjusted=true&apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y`
//     let docData
//     await fetch(dailyOCUrl)
//     .then( async function(response) {
//         //console.log(response)
//         const reqData =  await response.json();// const data =  await response.json();
//         docData = reqData

//     })
//     console.log(docData)

//     return await docData


// } // end of getDOC()


//  export async function buildWatchlistItem(data){
//     console.log("here is data in buildwatchlistitem.....",data)
    
//     let docData = await getDOC(data)
//     console.log("here is docData in buildwatchlistitem", docData)

//     let ticker = document.createElement("p")
//     let tickerTitle = document.createElement("h2")
//     tickerTitle.innerHTML = "Ticker:"
//     let tickerHolder = document.createElement("div")
//     // tickerHolder.setAttribute("id","tickerHolder")
//     tickerHolder.classList.add("wIDataCell")
//     tickerHolder.appendChild(tickerTitle)
//     tickerHolder.appendChild(ticker)


//     let open = document.createElement("p")
//     let openTitle = document.createElement("h2")
//     openTitle.innerHTML = "Open Value:"
//     let openHolder = document.createElement("div")
//     // openHolder.setAttribute("id","openHolder")
//     openHolder.classList.add("wIDataCell")
//     openHolder.appendChild(openTitle)
//     openHolder.appendChild(open)


//     let high = document.createElement("p")
//     let highTitle = document.createElement("h2")
//     highTitle.innerHTML = "High"
//     let highHolder = document.createElement("div")
//     highHolder.classList.add("wIDataCell")
//     highHolder.appendChild(highTitle)
//     highHolder.appendChild(high)


//     ticker.innerHTML = data
//     open.innerHTML = docData.open
//     high.innerHTML = docData.high

//     let watchlistHolder = document.querySelector("#watchlistHolder")
//     let watchlistItem = document.createElement("div")
//     watchlistItem.setAttribute("id", data)
//     watchlistItem.classList.add("watchlistItem")

//     let deleteButton = document.createElement("button")
//     deleteButton.innerHTML = "Click To Remove From Watchlist"
//     deleteButton.addEventListener("click",() => {

        
//         // console.log("I have been clicked",data)
      

//         removeFromLocalStorage("watchlist", data)//works fine
//         let stock = document.getElementById(`${data}`)
//         stock.remove()
  

//     })// end of deleteButton eventListener

//     watchlistItem.appendChild(tickerHolder)
//     watchlistItem.appendChild(openHolder)
//     watchlistItem.appendChild(highHolder)
//     watchlistItem.appendChild(deleteButton)

//     watchlistHolder.appendChild(watchlistItem)
  


// }// end of buildWatchlistItem()

function addToLocalStorage(key , data){
    let currentStorage = getLocalStorage(key)

    if(currentStorage == null){
        setLocalStorage("watchlist", [data])
    }else{
        if(!currentStorage.includes(data) && currentStorage.length < 3){
            currentStorage.push(data)
            setLocalStorage("watchlist",currentStorage)
        }
        
    }

}// end of addToLocalStorage()



export function removeFromLocalStorage(key, data){
    let currentStorage = getLocalStorage(key)
    // console.log("here is currentstorage",currentStorage)
    let modifiedStorage = []
    for (let i = 0; i < currentStorage.length; i++){
        if(currentStorage[i] != data){
            // console.log("here is currentstorage in the loop of ...", i, currentStorage[i])
            modifiedStorage.push(currentStorage[i])
            // console.log("modifiedStorege at this point ", modifiedStorage)
        }
    }
    setLocalStorage("watchlist",modifiedStorage)

}// end of removeFromLocalStorage

// retrieve data from localstorage
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
  export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }


