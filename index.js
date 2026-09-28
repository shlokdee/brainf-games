var games=["freeplay", "sum", "multiplication", "placeholder0","placeholder0","placeholder0","placeholder0"]
const gamecards=document.getElementById("gamecards")
for (let i=0; i<games.length;i++){
    const gamecard=document.createElement("div")
    gamecard.classList.add("gamecard")
    gamecard.innerHTML=`<h3>${games[i]}</h3><a href="games.html?game=${games[i]}">Go there</a>`
    gamecards.appendChild(gamecard)
}