

const gamecards=document.getElementById("gamecards")


fetch("games.json")
.then(res=>res.json())
.then(games =>{
for (const i in games){
    const gamecard=document.createElement("div")
    gamecard.classList.add("gamecard")
    gamecard.innerHTML=`<h3>${games[i].name}</h3><p>${games[i].description}</p><a href="games.html?game=${i}">Go there</a>`
    gamecards.appendChild(gamecard)
}})