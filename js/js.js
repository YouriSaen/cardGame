// const arrayCard = ["A", "A", "B", "B", "C", "C"];
let progress = 0
let points = 0
const h1El = document.querySelector("h1")
let pressedBtn1;
let pressedBtn2;
let orgSrc1;
let orgSrc2;
let card1;
let card2;
let flexContainer = document.createElement("section")
let flexChild = document.createElement("div")

//Constructor for cards
function Card(back, front, value){
    this.backCard = back;
    this.frontCard = front;
    this.valueCheck = value;
}

//new cards
let kDCard = new Card("assets/faces/joker.gif", "assets/faces/KH.gif", "0")
let jHCard = new Card("assets/faces/joker.gif", "assets/faces/JH.gif", "1")
let qCCard = new Card("assets/faces/joker.gif", "assets/faces/QC.gif", "2")
let kCCard = new Card("assets/faces/joker.gif", "assets/faces/KC.gif", "3")
let qSCard = new Card("assets/faces/joker.gif", "assets/faces/QS.gif", "4")
let jCCard = new Card("assets/faces/joker.gif", "assets/faces/JC.gif", "5")
const arrayCard = [kDCard, jHCard, qCCard,kCCard,qSCard,jCCard]


//Fisher yates algorithm, shuffle the array
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffleArray(arrayCard)
console.log(arrayCard)




//printCards should put all cards on the page twice
function printCards(kaart){
    flexContainer.setAttribute('id', "flex-container")
    flexChild.setAttribute('id','flex-child')
    let cardSrc = kaart.backCard
    let cardID = kaart.valueCheck
    console.log(kaart.valueCheck)
    let imgEl = document.createElement("IMG")
    imgEl.style.backgroundColor = "white"
    imgEl.setAttribute('id', cardID)
    document.body.appendChild(flexContainer)
    document.body.appendChild(flexChild)
    document.getElementById('flex-container').appendChild(flexChild)
    document.getElementById('flex-child').appendChild(imgEl)
    imgEl.src = cardSrc
}

//For loop for printing the cards
for (let i = 0; i < 2; i++) {
    arrayCard.forEach(printCards)
}

//loop through all images on the page
let allImg = document.querySelectorAll("img")
allImg.forEach(allImg => {
    allImg.addEventListener('click', getValue)
})

//check the ID for every clicked card (And some other things that we need for the reset)
function getValue(e){
    if (progress === 0){
        progress++
        orgSrc1 = e.target
        pressedBtn1 = e.target.id
        console.log(orgSrc1)
        card1 = e.target.src = arrayCard[pressedBtn1].frontCard
        console.log(pressedBtn1 + "First option")
        e.disabled = true
    }
    else if (progress === 1){
        progress++
        orgSrc2 = e.target;
        e.src = e.frontCard
        pressedBtn2 = e.target.id
        e.target.src = arrayCard[pressedBtn2].frontCard
        card2 = e.target.src = arrayCard[pressedBtn2].frontCard
        console.log(pressedBtn2 + "second option")
        e.disabled = true
    }
    if (progress === 2){
        checkForPoints()
    }

}

//Check if the ID is the same, if not reset it.
function checkForPoints(){
        if (pressedBtn1 === pressedBtn2){
            points++
            h1El.textContent = points
            progress = 0
            document.body.style.backgroundColor = "green"
            setTimeout(function (){
                document.body.style.backgroundColor = "white"
            }, 2000)
        } else {
            h1El.textContent = "Try again"
            document.body.style.backgroundColor = "red"
            setTimeout(function (){
                orgSrc1.src = arrayCard[0].backCard
                orgSrc2.src = arrayCard[0].backCard
                progress = 0
                document.body.style.backgroundColor = "white"
            }, 2000)

        }
}




//old code
//https://stackoverflow.com/questions/48247532/create-an-array-of-buttons-from-javascript-array
//Make from every arrayCard item a button
// function printBtn() {
//     for (let i = 0; i < arrayCard.length; i++) {
//         const btn = document.createElement("button");
//         btn.setAttribute("class", arrayCard[i])
//         const t = document.createTextNode(arrayCard[i]);
//         btn.appendChild(t);
//         btn.style.fontSize = "0"
//         document.body.appendChild(btn);
//     }
//Look through all buttons on screen and put the textContent in a variable
//     var buttonEl = document.querySelectorAll("button")
//     buttonEl.forEach(buttonEl => {
//         buttonEl.addEventListener('click', function () {
//             if (progress === 0) {
//                 progress++
//                 choice1 = buttonEl.textContent
//                 pressedBtn1 = buttonEl
//                 pressedBtn1.style.fontSize = "1rem"
//                 pressedBtn1.disabled = true
//             } else {
//                 if (progress === 1) {
//                     progress++
//                     choice2 = buttonEl.textContent
//                     pressedBtn2 = buttonEl
//                     pressedBtn2.style.fontSize = "1rem"
//                     pressedBtn2.disabled = true
//                 }
//                 //Check if you got the same letter, if not reset the choices
//                 if (progress === 2) {
//                     if (choice1 === choice2) {
//                         console.log("point")
//                         points++
//                         progress = 0
//                         h1El.textContent = points
//                     } else {
//                         setTimeout(function () {
//                             console.log("reset")
//                             pressedBtn1.disabled = false
//                             pressedBtn2.disabled = false
//                             pressedBtn1.style.fontSize = "0"
//                             pressedBtn2.style.fontSize = "0"
//                             progress = 0
//                         }, 5000)
//                     }
//                 }
//             }
//         })
//     })
// }




