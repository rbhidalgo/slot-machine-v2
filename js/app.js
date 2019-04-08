console.log("up and running!")

const beerSlot1Photos = ['photos/artboard1.png','photos/artboard2.png', 'photos/artboard3.png', 
    'photos/artboard4.png','photos/artboard5.png', 'photos/artboard6.png']

const beerSlot2Photos = ['photos/artboard11.png','photos/artboard22.png', 'photos/artboard33.png', 
'photos/artboard44.png','photos/artboard55.png', 'photos/artboard66.png']

let row1Column1Photo = document.querySelector('.row1-column1-photo')
let row1Column2Photo = document.querySelector('.row1-column2-photo')
let row1Column3Photo = document.querySelector('.row1-column3-photo')
let row2Column1Photo = document.querySelector('.row2-column1-photo')
let row2Column2Photo = document.querySelector('.row2-column2-photo')
let row2Column3Photo = document.querySelector('.row2-column3-photo')
let row3Column1Photo = document.querySelector('.row3-column1-photo')
let row3Column2Photo = document.querySelector('.row3-column2-photo')
let row3Column3Photo = document.querySelector('.row3-column3-photo') 
let twentyBtn = document.querySelector('.twenty')
let fiftyBtn = document.querySelector('.fifty')
let hundBtn = document.querySelector('.hundred')
let slotsDiv = document.querySelector('.slots-row1')
let enterAmount = document.querySelector('.enter-amount')
let containerDiv = document.querySelector('.container')
var currency = 0;

twentyBtn.addEventListener('click', function() {
    console.log(`twenty was pressed!`)
    currency = 20;
    console.log(currency)
    enterAmount.style.display = 'none';
    containerDiv.style.display = 'inline';
} )

fiftyBtn.addEventListener('click', function() {
    console.log(`fifty was pressed!`)
    currency = 50;
    console.log(currency)
    enterAmount.style.display = 'none';
    containerDiv.style.display = 'inline'; 
} )

hundBtn.addEventListener('click', function() {
    console.log(`hundred was pressed!`)
    currency = 100;
    console.log(currency)
    enterAmount.style.display = 'none';
    containerDiv.style.display = 'inline';
} )


function photoGenerate() {
    // Creates a random number for the photos row 
    // Row 1 
    let randNumR1C1 = Math.floor(Math.random() * beerSlot1Photos.length)
    let randNumR1C2 = Math.floor(Math.random() * beerSlot1Photos.length)
    let randNumR1C3 = Math.floor(Math.random() * beerSlot1Photos.length); {
        console.log(randNumR1C1 + " " + randNumR1C2 + " " + randNumR1C3)
        row1Column1Photo.src = beerSlot1Photos[randNumR1C1]
        row1Column2Photo.src = beerSlot1Photos[randNumR1C2]
        row1Column3Photo.src = beerSlot1Photos[randNumR1C3]
    }
    let randNumR2C1 = Math.floor(Math.random() * beerSlot1Photos.length)
    let randNumR2C2 = Math.floor(Math.random() * beerSlot1Photos.length)
    let randNumR2C3 = Math.floor(Math.random() * beerSlot1Photos.length); {
        console.log(randNumR2C1 + " " + randNumR2C2 + " " + randNumR2C3)
        row2Column1Photo.src = beerSlot1Photos[randNumR2C1]
        row2Column2Photo.src = beerSlot1Photos[randNumR2C2]
        row2Column3Photo.src = beerSlot1Photos[randNumR2C3]
    }
    let randNumR3C1 = Math.floor(Math.random() * beerSlot1Photos.length)
    let randNumR3C2 = Math.floor(Math.random() * beerSlot1Photos.length)
    let randNumR3C3 = Math.floor(Math.random() * beerSlot1Photos.length); {
        console.log(randNumR3C1 + " " + randNumR3C2 + " " + randNumR3C3)
        row3Column1Photo.src = beerSlot1Photos[randNumR3C1]
        row3Column2Photo.src = beerSlot1Photos[randNumR3C2]
        row3Column3Photo.src = beerSlot1Photos[randNumR3C3]
        columnCheck()
        rowCheck()
        crossCheck()
        squareCheck()
        allCheckJackpot()
        gameOver()
    }
    function columnCheck () {
        if (randNumR2C1 == randNumR1C1 && randNumR2C1 == randNumR3C1){
            row2Column1Photo.src = beerSlot2Photos[randNumR2C1]
            row1Column1Photo.src = beerSlot2Photos[randNumR1C1]
            row3Column1Photo.src = beerSlot2Photos[randNumR3C1]
            currency += 1
            console.log(`you won 1 points - ${currency}`)
        }
        if (randNumR2C2 == randNumR1C2 && randNumR2C2 == randNumR3C2){
            row2Column2Photo.src = beerSlot2Photos[randNumR2C2]
            row1Column2Photo.src = beerSlot2Photos[randNumR1C2]
            row3Column2Photo.src = beerSlot2Photos[randNumR3C2]
            currency += 1
            console.log(`you won 1 points - ${currency}`)
            }
        if  (randNumR2C3 == randNumR1C3 && randNumR2C3 == randNumR3C3) {
            row2Column3Photo.src = beerSlot2Photos[randNumR2C3]
            row1Column3Photo.src = beerSlot2Photos[randNumR1C3]
            row3Column3Photo.src = beerSlot2Photos[randNumR3C3]
            currency += 1
            console.log(`you won 1 points - ${currency}`)
            }
        else currency -= 1
            console.log(`you lost 1 point - ${currency}`)
    }
    function rowCheck () {
        if (randNumR1C2 == randNumR1C1 && randNumR1C2 == randNumR1C3) {
            row1Column2Photo.src = beerSlot2Photos[randNumR1C2]
            row1Column1Photo.src = beerSlot2Photos[randNumR1C1]
            row1Column3Photo.src = beerSlot2Photos[randNumR1C3]
            currency += 1
            console.log(`you won 1 points - ${currency}`)
        }
        if  (randNumR2C2 == randNumR2C1 && randNumR2C2 == randNumR2C3) {
            row2Column2Photo.src = beerSlot2Photos[randNumR2C2]
            row2Column1Photo.src = beerSlot2Photos[randNumR2C1]
            row2Column3Photo.src = beerSlot2Photos[randNumR2C3]
            currency += 1
            console.log(`you won 1 points - ${currency}`)
        }
        if  (randNumR3C2 == randNumR3C1 && randNumR3C2 == randNumR3C3) {
            row3Column2Photo.src = beerSlot2Photos[randNumR3C2]
            row3Column1Photo.src = beerSlot2Photos[randNumR3C1]
            row3Column3Photo.src = beerSlot2Photos[randNumR3C3]
            currency += 1
            console.log(`you won 1 points - ${currency}`)
        }
        else currency -= 1
            console.log(`you lost 1 point - ${currency}`)
    }
    function crossCheck () {
        if (randNumR2C2 == randNumR1C3 && randNumR2C2 == randNumR3C1) {
            row2Column2Photo.src = beerSlot2Photos[randNumR2C2]
            row1Column3Photo.src = beerSlot2Photos[randNumR1C3]
            row3Column1Photo.src = beerSlot2Photos[randNumR3C1]
            currency += 1
            console.log(`you won 1 point - ${currency}`) 
        }
        if  (randNumR2C2 == randNumR3C3 && randNumR2C2 == randNumR1C1) {
            row2Column2Photo.src = beerSlot2Photos[randNumR2C2]
            row3Column3Photo.src = beerSlot2Photos[randNumR3C3]
            row1Column1Photo.src = beerSlot2Photos[randNumR1C1]
                currency += 1
                console.log(`you won 1 point - ${currency}`) 
            }
        else currency -= 1
            console.log(`you lost 1 point - ${currency}`)
    }
    function squareCheck () {
        if (randNumR3C2 == randNumR3C3 && randNumR3C2 == randNumR3C1 &&
            randNumR2C1 == randNumR3C1 && randNumR2C1 == randNumR1C1 &&
            randNumR1C2 == randNumR1C1 && randNumR1C2 == randNumR1C3 &&
            randNumR2C3 == randNumR3C3 && randNumR2C3 == randNumR1C3) {
            row3Column2Photo.src = beerSlot2Photos[randNumR3C2]
            row3Column3Photo.src = beerSlot2Photos[randNumR3C3]
            row3Column1Photo.src = beerSlot2Photos[randNumR3C1]
            row2Column1Photo.src = beerSlot2Photos[randNumR2C1]
            row1Column1Photo.src = beerSlot2Photos[randNumR1C1]
            row1Column2Photo.src = beerSlot2Photos[randNumR1C2]
            row1Column3Photo.src = beerSlot2Photos[randNumR1C3]
            row2Column3Photo.src = beerSlot2Photos[randNumR2C3]
                currency += 50
                console.log(`YOU WON 50 POINTS!!!! - ${currency}`)
            }
        else currency -= 1
            console.log(`you lost 1 point - ${currency}`)
        }
    function allCheckJackpot () {
        if (randNumR2C2 == randNumR1C1 && randNumR2C2 == randNumR1C2 && randNumR2C2 == randNumR1C3 &&
            randNumR2C2 == randNumR2C1 && randNumR2C2 == randNumR2C3 &&
            randNumR2C2 == randNumR3C1 && randNumR2C2 == randNumR3C2 && randNumR2C2 == randNumR3C3){
            row1Column1Photo.src = beerSlot2Photos[randNumR1C1]
            row1Column2Photo.src = beerSlot2Photos[randNumR1C2]
            row1Column3Photo.src = beerSlot2Photos[randNumR1C3]
            row2Column1Photo.src = beerSlot2Photos[randNumR2C1]
            row2Column2Photo.src = beerSlot2Photos[randNumR2C2]
            row2Column3Photo.src = beerSlot2Photos[randNumR2C3]
            row3Column1Photo.src = beerSlot2Photos[randNumR3C1]
            row3Column2Photo.src = beerSlot2Photos[randNumR3C2]
            row3Column3Photo.src = beerSlot2Photos[randNumR3C3]
                currency += 1000000
                console.log(`JACKPOT!!!!!!!! ${currency}`)
            }
        else currency -= 1
            console.log(`you lost 1 point - ${currency}`)
    }
}


function gameOver () {
    if (currency <= 0){
    console.log(`You Lost!`)
    // containerDiv.style.animationName = 'fadeout';
    // // containerDiv.style.animation = 'fadeout, 10s, linear, 10s, 1, normal';
    // containerDiv.style.display = 'none';
    // // enterAmount.style.animation = 'fadein, 10s, linear, 10s, 1, normal';
    // enterAmount.style.animationName = 'fadein';
    // enterAmount.style.display = 'flex';
    // document.querySelector('.amount-h1').innerHTML = 'Play Again?';``
    // const textAfterH1 = document.createElement('H1');
    // textAfterH1.innerHTML = "You deserve a beer!";
    // enterAmount.appendChild(textAfterH1);
    }
}