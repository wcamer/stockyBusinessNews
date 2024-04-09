import { loadHeaderFooter } from "/src/public/js/utilities.mjs"; ///js/utilities.mjs
//src\public\js\utilities.js

loadHeaderFooter()
//this has "https://newapi.org/vw/everything?" + "q=[topic]" + apiKey"
var url = 'https://newsapi.org/v2/everything?' +
          'q=stocks&' +
          'apiKey=e4e21500877041bb915a5f7f49646946';


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
    
}

function buttonReset(){
    p1.removeAttribute("disabled")
    p2.removeAttribute("disabled")
    p3.removeAttribute("disabled")
    p4.removeAttribute("disabled")
    p5.removeAttribute("disabled")

}




////////////////////

// let article = document.createElement('article')//single story container
// let section = document.createElement('section')
// let img = document.createElement('img')//holds story image
// let desc = document.createElement('p')// description under title
// let title = document.createElement('h2') // title under image
// let link = document.createElement('a') // link to more if you want to know more
// console.log("hello from new.js")


