console.log("----------------from utilties------------\nsupppppppppp")

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
    //src\public\partials\header.html

    //console.log("#########################",hPathTemplate)
    renderWithTemplate(hPathTemplate, headerSection)
    // let body = document.querySelector("body")
    // body.appendChild(hPathTemplate)
    
    //Making the footer piece
    let footerSection = document.querySelector("#footerSection") //grabbing our footer section in the DOM
    let fPathTemplate = await loadTemplate("/src/public/partials/footer.html")
    renderWithTemplate(fPathTemplate, footerSection)
    //footerSection.appendChild(fPathTemplate)
  
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

           
        
            
        })

        divItemDetails.appendChild(ticker)
        // divItemDetails.appendChild(tn)

        divItem.appendChild(divItemDetails)
        divItem.appendChild(addButton)

        divStream.append(divItem)
        // let headerSection = document.querySelector("#headerSection")
        // headerSection.append(divStream)
        
    };

   
    



}

function addToLocalStorage(key , data){
    let currentStorage = getLocalStorage(key)

    if(currentStorage == null){
        setLocalStorage("watchlist", [data])
    }else{
        if(!currentStorage.includes(data)){
            currentStorage.push(data)
            setLocalStorage("watchlist",currentStorage)
        }
        
    }

}
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

}

// retrieve data from localstorage
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
  // save data to local storage
  export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
