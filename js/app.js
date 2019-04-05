console.log("up and running!")

const beerSlot1Photos = ['photos/artboard1.png','photos/artboard2.png', 'photos/artboard3.png', 
    'photos/artboard4.png','photos/artboard5.png', 'photos/artboard6.png']

let row1Column1Photo = document.querySelector('.row1-column1-photo')
let row1Column2Photo = document.querySelector('.row1-column2-photo')
let row1Column3Photo = document.querySelector('.row1-column3-photo')
let row2Column1Photo = document.querySelector('.row2-column1-photo')
let row2Column2Photo = document.querySelector('.row2-column2-photo')
let row2Column3Photo = document.querySelector('.row2-column3-photo')
let row3Column1Photo = document.querySelector('.row3-column1-photo')
let row3Column2Photo = document.querySelector('.row3-column2-photo')
let row3Column3Photo = document.querySelector('.row3-column3-photo') 
var currency = 0;
let twentyBtn = document.querySelector('.twenty')
let fiftyBtn = document.querySelector('.fifty')
let hundBtn = document.querySelector('.hundred')
let slotsDiv = document.querySelector('.slots-row1')
let enterAmount = document.querySelector('.enter-amount')
let containerDiv = document.querySelector('.container')

twentyBtn.addEventListener('click', function() {
    console.log(`twenty was pressed!`)
    currency = 20;
    console.log(currency)
    enterAmount.style.display = 'none';
    containerDiv.style.display = 'flex';
    if (currency <= 0){
        gameOver ()
    }
} )

fiftyBtn.addEventListener('click', function() {
    console.log(`fifty was pressed!`)
    currency = 50;
    console.log(currency)
    enterAmount.style.display = 'none';
    containerDiv.style.display = 'flex'; 
    if (currency <= 0){
        gameOver ()
    }
} )

hundBtn.addEventListener('click', function() {
    console.log(`hundred was pressed!`)
    currency = 100;
    console.log(currency)
    enterAmount.style.display = 'none';
    containerDiv.style.display = 'flex';
    if (currency <= 0){
        gameOver ()
    }
} )

function photoGenerate() {
    // for (let i = 0; i < currency; i++) {
    // Creates a random number for the photos array 
    // Row 1 Column 1
    let randNumR1C1 = Math.floor(Math.random() * beerSlot1Photos.length)
    let randNumR1C2 = Math.floor(Math.random() * beerSlot1Photos.length)
    let randNumR1C3 = Math.floor(Math.random() * beerSlot1Photos.length); {
        console.log(randNumR1C1 + " " + randNumR1C2 + " " + randNumR1C3)
        row1Column1Photo.src = beerSlot1Photos[randNumR1C1]
        row1Column2Photo.src = beerSlot1Photos[randNumR1C2]
        row1Column3Photo.src = beerSlot1Photos[randNumR1C3]
    }
    // let randNumR2C1 = Math.floor(Math.random() * beerSlot1Photos.length); {
    //     console.log(randNumR1C2)
    //     row1Column2Photo.src = beerSlot1Photos[randNumR1C2]
    // }
    // let randNumR3C1 = Math.floor(Math.random() * beerSlot1Photos.length); {
    //     console.log(randNumR1C3)
    //     row1Column3Photo.src = beerSlot1Photos[randNumR1C3]
    // }
}

function gameOver () {
    console.log(`You Lost!`)
    containerDiv.style.display = 'none';
    enterAmount.style.display = 'flex';
    document.querySelector('.amount-h1').innerHTML = 'Play Again?';
    const textAfterH1 = document.createElement('H1')
    textAfterH1.innerHTML = "You deserve a beer!";
    enterAmount.appendChild(textAfterH1);

    //Hide slot container
    //Display ==== You lost, need more money to play ==== display the money buttons again
}

// ==> create a winnings chart

// ==> 


// console.log("up and running!")

// const beerSlot1Photos = ['photos/artboard1.png','photos/artboard2.png', 'photos/artboard3.png', 
//     'photos/artboard4.png','photos/artboard5.png', 'photos/artboard6.png']

// let row1Column1Photo = document.querySelector('.row1-column1-photo')
// let row1Column2Photo = document.querySelector('.row1-column2-photo')
// let row1Column3Photo = document.querySelector('.row1-column3-photo')
// let row2Column1Photo = document.querySelector('.row2-column1-photo')
// let row2Column2Photo = document.querySelector('.row2-column2-photo')
// let row2Column3Photo = document.querySelector('.row2-column3-photo')
// let row3Column1Photo = document.querySelector('.row3-column1-photo')
// let row3Column2Photo = document.querySelector('.row3-column2-photo')
// let row3Column3Photo = document.querySelector('.row3-column3-photo') 
// var currency = 0;
// let twentyBtn = document.querySelector('.twenty')
// let fiftyBtn = document.querySelector('.fifty')
// let hundBtn = document.querySelector('.hundred')
// let slotsDiv = document.querySelector('.slots-row1')
// let enterAmount = document.querySelector('.enter-amount')
// let containerDiv = document.querySelector('.container')

// twentyBtn.addEventListener('click', function() {
//     console.log(`twenty was pressed!`)
//     currency = 20;
//     console.log(currency)
//     enterAmount.style.display = 'none';
//     containerDiv.style.display = 'flex';
// } )

// fiftyBtn.addEventListener('click', function() {
//     console.log(`fifty was pressed!`)
//     currency = 50;
//     console.log(currency)
// } )

// hundBtn.addEventListener('click', function() {
//     console.log(`hundred was pressed!`)
//     currency = 100;
//     console.log(currency)
// } )

// function colum1Photo() {
//     // for (let i = 0; i < currency; i++) {
//     // Creates a random number for the photos array 
//     // Row 1 Column 1
//     let randNumR1C1 = Math.floor(Math.random() * beerSlot1Photos.length)
//     let randNumR2C1 = Math.floor(Math.random() * beerSlot1Photos.length)
//     let randNumR3C1 = Math.floor(Math.random() * beerSlot1Photos.length); {
//         console.log(randNumR1C1 + " " + randNumR2C1 + " " + randNumR3C1)
//         row1Column1Photo.src = beerSlot1Photos[randNumR1C1]
//         row2Column1Photo.src = beerSlot1Photos[randNumR2C1]
//         row3Column1Photo.src = beerSlot1Photos[randNumR3C1]
//         if (randNumR1C1 === randNumR2C1 && randNumR2C1 === randNumR3C1) {
//             currency += 1
//             console.log(`You won 1 point`)
//         }
//     }
//     let randNumR1C2 = Math.floor(Math.random() * beerSlot1Photos.length); {
//         console.log(randNumR1C2)
//         row1Column2Photo.src = beerSlot1Photos[randNumR1C2]
//     }
//     let randNumR1C3 = Math.floor(Math.random() * beerSlot1Photos.length); {
//         console.log(randNumR1C3)
//         row1Column3Photo.src = beerSlot1Photos[randNumR1C3]
//     }
//     if (randNumR1C1 === randNumR1C2 && randNumR1C2 === randNumR1C1 && randNumR1C3 === randNumR1C2) {
//         currency += 1
//         console.log (`you won 1 point - ${currency}`)
//     }
//     if (randNumR1C1 !== randNumR1C2 || randNumR1C2 !== randNumR1C1 || randNumR1C3 !== randNumR1C2) {
//         currency -= 1
//         console.log (`you lost 1 point - ${currency}`)
//     }
//     if (randNumR1C1 === 5 && randNumR1C2 === 5 & randNumR1C3 === 5) {
//         console.log (`YOU WON 25 FREE POINTS - ${currency}`)
//         currency += 25
//         console.log(`${currency}`)
//     }
//     if (currency === 0){
//         gameOver ()
//     }   
// }
