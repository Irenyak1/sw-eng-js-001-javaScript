
// Access element by ID
const demoId = document.getElementById("demo")
demoId.style.border = '1px solid orange'; 

// Access elements by class name
let demoClass = document.getElementsByClassName("demo")
for(i=0; i<demoClass.length; i++){
    demoClass[i].style.border = "2px solid blue"
}
// If you want to style an individual element
demoClass[0].style.border = "2px dotted red"

// Access elements by ID
let demoTag = document.getElementsByTagName("article")
for(i=0; i<demoTag.length; i++){
    demoTag[i].style.border = "2px solid purple"
}

// Access element by query selector
let demoQuery = document.querySelector('#demo-query')
demoQuery.style.border = "2px solid maroon"

// Access elements by query selector all
let demoQueryAll = document.querySelectorAll(".demo-query-all")
//either use for loop
for(i=0; i<demoQueryAll.length; i++){
    demoQueryAll[i].style.border = "2px solid green"
}
//or forEach
// demoQueryAll.forEach(item =>{
//     item.style.border = "5px solid blue"
// })

function changeMe(){
    let p = document.querySelector("p")
    p.textContent = "I changed because of inline event handler"
    p.style.border = "2px dotted blue"
    // console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", p.parentNode)
}

function changeMe2(){
    let k = document.getElementById("opp")
    k.textContent = "I changed because of an event handler"
    k.style.border = "2px dotted red"
}

const butt = document.querySelector("#pop")
butt.onclick=changeMe2
// We don't explicitly call this function like this because 
// as long as the page loads its action will be applied without waiting for the click
// butt.onclick=changeMe2() 