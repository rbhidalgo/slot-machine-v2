console.log("up and running!")



const dogSlot1Photos = ['photos/artboard1.png','photos/artboard2.png', 'photos/artboard3.png', 
    'photos/artboard4.png','photos/artboard5.png', 'photos/artboard6.png']

let colum1PhotoSrc = document.querySelector('.slot-column1-photo')   
var currency = 0;
let twentyBtn = document.querySelector('.twenty')
let fiftyBtn = document.querySelector('.fifty')
let hundBtn = document.querySelector('.hundred')
let slotsDiv = document.querySelector('.slots')

twentyBtn.addEventListener('click', function() {
    console.log(`twenty was pressed!`)
    currency = 20;
    console.log(currency)
} )

fiftyBtn.addEventListener('click', function() {
    console.log(`fifty was pressed!`)
    currency = 50;
    console.log(currency)
} )

hundBtn.addEventListener('click', function() {
    console.log(`hundred was pressed!`)
    currency = 100;
    console.log(currency)
} )

function colum1Photo() {
    // for (let i = 0; i < currency; i++) {
    let randomNumb = Math.floor(Math.random() * dogSlot1Photos.length); {
        console.log(randomNumb)
        colum1PhotoSrc.src = dogSlot1Photos[randomNumb]

    }
    let randomNumb2 = Math.floor(Math.random() * dogSlot1Photos.length); {
        console.log(randomNumb2)
        document.querySelector('.slot-column2-photo').src = dogSlot1Photos[randomNumb2]
    }
    let randomNumb3 = Math.floor(Math.random() * dogSlot1Photos.length); {
        console.log(randomNumb3)
        document.querySelector('.slot-column3-photo').src = dogSlot1Photos[randomNumb3]
    }
    if (randomNumb === randomNumb2 && randomNumb2 === randomNumb && randomNumb3 === randomNumb2) {
        currency += 1
        console.log (`you won 1 points - ${currency}`)
    }
    if (randomNumb !== randomNumb2 || randomNumb2 !== randomNumb || randomNumb3 !== randomNumb2) {
        currency -= 1
        console.log (`you lost 1 points - ${currency}`)
    }
    if (randomNumb === 5 && randomNumb2 === 5 & randomNumb3 === 5) {
        console.log (`YOU WON 50 FREE POINTS - ${currency}`)
        currency += 25
        console.log(`${currency}`)
    }
    if (currency<=0){
        gameOver ()
    }   
}

function gameOver () {
    console.log(`You Lost!`)
    slotsDiv.style.display = "none";
    //Hide slot container
    //Display ==== You lost, need more money to play ==== display the money buttons again

}
