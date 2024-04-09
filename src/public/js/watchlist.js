/*
Needed components

Ticker Name 
current value
previous close value 

*/

import { loadHeaderFooter, getLocalStorage, removeFromLocalStorage} from "./utilities.mjs";

loadHeaderFooter()
// getDOC("A")
displayWatchlist()

async function displayWatchlist(){
    let watchlist = getLocalStorage("watchlist")
    console.log("here is displaywatchlist...",watchlist)
    if(watchlist != null){
         watchlist.forEach(item =>{
             buildWatchlistItem(item)
        })

    }else{
        //when there is nothing added to the watch list
        let watchlistHolder = document.querySelector("#watchlistHolder")
        let emptyMessage = document.createElement('h2')
        emptyMessage.innerHTML = "Add up to three (3) stocks to watch"
        emptyMessage.style.color = "White"
        emptyMessage.style.gridColumn = "1/4"
        emptyMessage.style.textAlign = "center"
        watchlistHolder.appendChild(emptyMessage)

    }
   
}


//gets the daily open and closing
async function getDOC(tickerName){
    console.log("////////////////// here i sgetDOC")
    //date needs to be yyyy-mm-dd
    const date = new Date()
    
    
   // let month = date.getMonth() + 1 // months are 0 based // only shows single digit
    //let day = date.getDate() // only shows single digit

    let month = date.toLocaleString("default", {month: "2-digit"})
    // the free tier of the api doesn't allow for same day info so we have to go as of yesterday
    let day = date.getDate() 

    let currentDayOfTheWeek = date.getDay()
    //IF the current day of the week is Mon, Tues, Wed, Thurs, or, Fri
    // Sun = 0, Mon = 1 ... Sat = 7
    if([2,3,4,5,6].includes(currentDayOfTheWeek)){
        if( [2,3,4,5,6,7,8,9].includes(day)){
            day = "0" + (day -1)
            console.log("here is new day", day)
        }
        //if it's the first of the month we need to get the last day of the previous month
        else if (day == 1){
            //if the the day is Jan 1st of a year we need Dec 31 of the prev year
            if(month == 0){
                year -= 1
                month = 11 
                day = 31
    
            }
            //if march 1st on a leap year (year has to be divisable by 4 and 100)
            else if(month == 2 && (year% 4 == 0 && year % 100 == 0)){
                console.log("leap year")
                month -=1
                day = 29
            }
            //march 1st on a non leap year
            else if(month == 2){
                month -=1
                day = 28
            }
            // if first day of May, July, Sept, Nov
            else if([4,6,8,10].includes(month)){
                day = 30
                month -=1
    
            }
            //for first day of Feb, April, June, Aug, Oct, Dec (months are 0 based [jan = 0 , feb = 1])
            else if([1,3,5,7,9,11].includes(month)){
                day = 31
                month -=1
    
            }
        }
        else {
            console.log("nah we good on the day",day)
    
        }

    }
    // if the currentDayOfTheWeek is..
    else{
        //... if the current day is sunday...
        if(currentDayOfTheWeek == 0){
            //if the numeric day of the month is...
            if( [3,4,5,6,7,8,9].includes(day)){
                day = "0" + (day - 2)
                console.log("here is new day", day)
            }
            //if it's the second day of the month we need to get the last day of the previous month
            else if (day == 2){
                //if the the day is Jan 1st of a year we need Dec 31 of the prev year
                if(month == 0){
                    year -= 1
                    month = 11 
                    day = 31
        
                }
                //if march 1st on a leap year (year has to be divisable by 4 and 100)
                else if(month == 2 && (year% 4 == 0 && year % 100 == 0)){
                    console.log("leap year")
                    month -=1
                    day = 29
                }
                //march 1st on a non leap year
                else if(month == 2){
                    month -=1
                    day = 28
                }
                // if first day of May, July, Sept, Nov
                else if([4,6,8,10].includes(month)){
                    day = 30
                    month -=1
        
                }
                //for first day of Feb, April, June, Aug, Oct, Dec (months are 0 based [jan = 0 , feb = 1])
                else if([1,3,5,7,9,11].includes(month)){
                    day = 31
                    month -=1
        
                }
                else {
                    console.log("nah we good on the day in the 'if yesterday was a saturday' ",day)
            
                }
            }
            else {
                console.log("nah we good on the day in the 'if yesterday was a saturday' ",day)
        
            }

        }
        // if the currentDayOfTheWeek is Mon
        else if (currentDayOfTheWeek == 1){
            if( [4,5,6,7,8,9].includes(day)){
                day = "0" + (day - 3)
                console.log("here is new day", day)
            }
            //if it's the third day of the month we need to get the last day of the previous month
            else if (day == 3){
                //if the the day is Jan 1st of a year we need Dec 31 of the prev year
                if(month == 0){
                    year -= 1
                    month = 11 
                    day = 31
        
                }
                //if march 1st on a leap year (year has to be divisable by 4 and 100)
                else if(month == 2 && (year% 4 == 0 && year % 100 == 0)){
                    console.log("leap year")
                    month -=1
                    day = 29
                }
                //march 1st on a non leap year
                else if(month == 2){
                    month -=1
                    day = 28
                }
                // if first day of May, July, Sept, Nov
                else if([4,6,8,10].includes(month)){
                    day = 30
                    month -=1
        
                }
                //for first day of Feb, April, June, Aug, Oct, Dec (months are 0 based [jan = 0 , feb = 1])
                else if([1,3,5,7,9,11].includes(month)){
                    day = 31
                    month -=1
        
                }
                else {
                    console.log("nah we good on the day in the 'if yesterday was a sunday' ",day)
            
                }
            }
            else {
                console.log("nah we good on the day in the 'if yesterday was a sunday' ",day)
        
            }
        }

    }

    

     //day.toLocaleString("default", {day: "2-digit"})
    // day -= 1
    console.log("here is the lenght of day,", day.length, day)

    let year = date.getFullYear();



    let yesterDate = `${year}-${month}-${day}`
    console.log(tickerName,yesterDate)
    ////this needs to get the date and ticker name
                    //let dailyOCUrl= "https://api.polygon.io/v1/open-close/A/2024-04-03?adjusted=true&apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y"
    //let dailyOCUrl = "https://api.polygon.io/v1/open-close/" + tickerName + "/" + todayDate + "?adjusted=true&apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y"
    // let dailyOCUrl1 = pdailyOCUrl
    // console.log(dailyOCUrl1)
    // console.log(dailyOCUrl)

    let dailyOCUrl= `https://api.polygon.io/v1/open-close/${tickerName}/${yesterDate}?adjusted=true&apiKey=b7VVurJtA8Yn_G0_61TUsj0wJynF3w0y`
    let docData
    await fetch(dailyOCUrl)
    .then( async function(response) {
        //console.log(response)
        const reqData =  await response.json();// const data =  await response.json();
        docData = reqData

    })
    console.log(docData)

    return await docData


}


async function buildWatchlistItem(data){
    console.log("here is data in buildwatchlistitem.....",data)
    
    let docData = await getDOC(data)
    console.log("here is docData in buildwatchlistitem", docData)

    let ticker = document.createElement("p")
    let tickerTitle = document.createElement("h2")
    tickerTitle.innerHTML = "Ticker:"
    let tickerHolder = document.createElement("div")
    // tickerHolder.setAttribute("id","tickerHolder")
    tickerHolder.classList.add("wIDataCell")
    tickerHolder.appendChild(tickerTitle)
    tickerHolder.appendChild(ticker)


    let open = document.createElement("p")
    let openTitle = document.createElement("h2")
    openTitle.innerHTML = "Open Value:"
    let openHolder = document.createElement("div")
    // openHolder.setAttribute("id","openHolder")
    openHolder.classList.add("wIDataCell")
    openHolder.appendChild(openTitle)
    openHolder.appendChild(open)


    let high = document.createElement("p")
    let highTitle = document.createElement("h2")
    highTitle.innerHTML = "High"
    let highHolder = document.createElement("div")
    highHolder.classList.add("wIDataCell")
    highHolder.appendChild(highTitle)
    highHolder.appendChild(high)


    ticker.innerHTML = data
    open.innerHTML = docData.open
    high.innerHTML = docData.high

    let watchlistHolder = document.querySelector("#watchlistHolder")
    let watchlistItem = document.createElement("div")
    watchlistItem.setAttribute("id", data)
    watchlistItem.classList.add("watchlistItem")

    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Click To Remove From Watchlist"
    deleteButton.addEventListener("click",() => {
        //let watchlist = getLocalStorage("watchlist")
        
        console.log("I have been clicked",data)
        // for(let i; i < watchlist.length; i++){
        //     if(watchlist[i] == stock){
        //         //watchlist.splice(i,1) // removes from the local storage
        //         removeFromLocalStorage("watchlist",data)
        //         stock.remove()
        //     }
        // }

        removeFromLocalStorage("watchlist", data)//works fine
        let stock = document.getElementById(`${data}`)
        // console.log(stock,"111111111111111")
        let watchlistContainer = document.querySelector("#watchlistHolder")
        //watchlistContainer.removeChild(stock)
        stock.remove()
        // console.log(stock,"1222222222222222222222")

    })// end of deleteButton eventListener

    watchlistItem.appendChild(tickerHolder)
    watchlistItem.appendChild(openHolder)
    watchlistItem.appendChild(highHolder)
    watchlistItem.appendChild(deleteButton)

    watchlistHolder.appendChild(watchlistItem)
  


    

   
    


}