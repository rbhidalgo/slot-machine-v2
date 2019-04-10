console.log("up and running!")

const beerSlot1Photos = ['photos/artboard1.png','photos/artboard2.png', 'photos/artboard3.png', 
    'photos/artboard4.png','photos/artboard5.png', 'photos/artboard6.png']

const beerSlot2Photos = ['photos/artboard11.png','photos/artboard22.png', 'photos/artboard33.png', 
'photos/artboard44.png','photos/artboard55.png', 'photos/artboard66.png']

let row1Column1Photo = document.querySelector('.row1-col1-cube1-photo')
let row1Column2Photo = document.querySelector('.row1-col2-cube1-photo')
let row1Column3Photo = document.querySelector('.row1-col3-cube1-photo')
let row2Column1Photo = document.querySelector('.row2-col1-cube1-photo')
let row2Column2Photo = document.querySelector('.row2-col2-cube1-photo')
let row2Column3Photo = document.querySelector('.row2-col3-cube1-photo')
let row3Column1Photo = document.querySelector('.row3-col1-cube1-photo')
let row3Column2Photo = document.querySelector('.row3-col2-cube1-photo')
let row3Column3Photo = document.querySelector('.row3-col3-cube1-photo') 
let twentyBtn = document.querySelector('.twenty')
let fiftyBtn = document.querySelector('.fifty')
let hundBtn = document.querySelector('.hundred')
let slotsDiv = document.querySelector('.slots-row1')
let enterAmount = document.querySelector('.enter-amount')
let containerDiv = document.querySelector('.container')
let slotColumn1 = document.querySelector('.slot-column1')
let slotColumn2 = document.querySelector('.slot-column2')
let slotColumn3 = document.querySelector('.slot-column3')
let slotColumn4 = document.querySelector('.slot-column4')
let slotColumn5 = document.querySelector('.slot-column5')
let slotColumn6 = document.querySelector('.slot-column6')
let slotColumn7 = document.querySelector('.slot-column7')
let slotColumn8 = document.querySelector('.slot-column8')
let slotColumn9 = document.querySelector('.slot-column9')
let betOnebtn = document.querySelector('.bet-one')
let betThreebtn = document.querySelector('.bet-three')
let betFivebtn = document.querySelector('.bet-five')
let cubeAnimation = document.querySelector('.cube-animation')
let beerCube = document.querySelector('.cube')
let spinSoundEff = document.querySelector('.spin-sound')
let winSoundEff = document.querySelector('.win-sound')
let bet3Icons = document.querySelector('.bet3')
let bet5Icons = document.querySelector('.bet5')
let totalPointsDisplay = document.querySelector('.total')
let lastWinDisplay = document.querySelector('.last-win')
let lastBetDisplay = document.querySelector('.last-bet-made')
var currency = 0;
var totalPoints = 0;


twentyBtn.addEventListener('click', function() {
    console.log(`twenty was pressed!`)
    currency = 20;
    totalPointsDisplay.innerHTML = `Total ${currency}`;
    console.log(currency)
    enterAmount.style.display = 'none';
    containerDiv.style.display = 'inline';
} )

fiftyBtn.addEventListener('click', function() {
    console.log(`fifty was pressed!`)
    currency = 50;
    totalPointsDisplay.innerHTML = currency;
    console.log(currency)
    enterAmount.style.display = 'none';
    containerDiv.style.display = 'inline'; 
} )

hundBtn.addEventListener('click', function() {
    console.log(`hundred was pressed!`)
    currency = 100;
    totalPointsDisplay.innerHTML = currency;
    console.log(currency)
    enterAmount.style.display = 'none';
    containerDiv.style.display = 'inline';
} )

betOnebtn.addEventListener('click', function(){
    resetColor()
    bet3Icons.style.display = 'none';
    bet5Icons.style.display = 'none';
    // winSoundEff.pause()
    console.log(`bet one was pressed`)
    spinSoundEff.play()
    setInterval (() => { 
    betOnebtn.style.animation = 'background-animation 3s 0s 1';
    slotColumn1.style.animation = 'cube-slot-ani 1.3s 0s 2';
    slotColumn2.style.animation = 'cube-slot-ani 1.2s 0s 2';
    slotColumn3.style.animation = 'cube-slot-ani 1.3s 0s 2';
    slotColumn4.style.animation = 'cube-slot-ani 1.2s 0s 2';
    slotColumn5.style.animation = 'cube-slot-ani 1s 0s 2';
    slotColumn6.style.animation = 'cube-slot-ani .9s 0s 2';
    slotColumn7.style.animation = 'cube-slot-ani .8s 0s 2';
    slotColumn8.style.animation = 'cube-slot-ani .7s 0s 2';
    slotColumn9.style.animation = 'cube-slot-ani .6s 0s 2';
    }, 100);
    photoGenerate()
    resetAnimation()
    setTimeout(() => {
    totalPointsDisplay.innerHTML = `Total ${currency}`;
    lastWinDisplay.innerHTML = `Last Win ${totalPoints}`;
    totalPointsDisplay.style.color = 'red';
    lastWinDisplay.style.color = 'green';
    }, 3000);
    setTimeout(() => {
    lastWinDisplay.style.color = 'black';
    totalPointsDisplay.style.color = 'black';
    }, 5000);
})

betThreebtn.addEventListener('click', function(){
    resetColor()
    bet3Icons.style.display = 'flex';
    bet5Icons.style.display = 'none';
    // winSoundEff.pause()
    console.log(`bet one was pressed`)
    spinSoundEff.play()
    setInterval (() => { 
    slotColumn1.style.animation = 'cube-slot-ani 1.3s 0s 2';
    slotColumn2.style.animation = 'cube-slot-ani 1.2s 0s 2';
    slotColumn3.style.animation = 'cube-slot-ani 1.3s 0s 2';
    slotColumn4.style.animation = 'cube-slot-ani 1.2s 0s 2';
    slotColumn5.style.animation = 'cube-slot-ani 1s 0s 2';
    slotColumn6.style.animation = 'cube-slot-ani .9s 0s 2';
    slotColumn7.style.animation = 'cube-slot-ani .8s 0s 2';
    slotColumn8.style.animation = 'cube-slot-ani .7s 0s 2';
    slotColumn9.style.animation = 'cube-slot-ani .6s 0s 2';
    }, 100);
    photoGenerate()
    resetAnimation()
})

betFivebtn.addEventListener('click', function(){
    resetColor()
    bet3Icons.style.display = 'flex';
    bet5Icons.style.display = 'flex';
    // winSoundEff.pause()
    console.log(`bet one was pressed`)
    spinSoundEff.play()
    setInterval (() => { 
    slotColumn1.style.animation = 'cube-slot-ani 1.3s 0s 2';
    slotColumn2.style.animation = 'cube-slot-ani 1.2s 0s 2';
    slotColumn3.style.animation = 'cube-slot-ani 1.3s 0s 2';
    slotColumn4.style.animation = 'cube-slot-ani 1.2s 0s 2';
    slotColumn5.style.animation = 'cube-slot-ani 1s 0s 2';
    slotColumn6.style.animation = 'cube-slot-ani .9s 0s 2';
    slotColumn7.style.animation = 'cube-slot-ani .8s 0s 2';
    slotColumn8.style.animation = 'cube-slot-ani .7s 0s 2';
    slotColumn9.style.animation = 'cube-slot-ani .6s 0s 2';
    }, 100);
    photoGenerate()
    resetAnimation()
})
// let slotcol1anim = slotColumn1.style.animation = 'cube-slot-ani 1.3s 0s 2';
// let slotcol2anim = slotColumn2.style.animation = 'cube-slot-ani 1.2s 0s 2';
// let slotcol3anim = slotColumn3.style.animation = 'cube-slot-ani 1.3s 0s 2';
// let slotcol4anim = slotColumn4.style.animation = 'cube-slot-ani 1.2s 0s 2';
// let slotcol5anim = slotColumn5.style.animation = 'cube-slot-ani 1s 0s 2';
// let slotcol6anim = slotColumn6.style.animation = 'cube-slot-ani .9s 0s 2';
// let slotcol7anim = slotColumn7.style.animation = 'cube-slot-ani .8s 0s 2';
// let slotcol8anim = slotColumn8.style.animation = 'cube-slot-ani .7s 0s 2';
// let slotcol9anim = slotColumn9.style.animation = 'cube-slot-ani .6s 0s 2';

// function aniOn () {
//     slotcol1anim.
// }

function resetColor () {
    slotColumn1.style.backgroundColor = 'rgba(189, 191, 193, 0.8)';
    slotColumn2.style.backgroundColor = 'rgba(189, 191, 193, 0.8)';
    slotColumn3.style.backgroundColor = 'rgba(189, 191, 193, 0.8)';
    slotColumn4.style.backgroundColor = 'rgba(189, 191, 193, 0.8)';
    slotColumn5.style.backgroundColor = 'rgba(189, 191, 193, 0.8)';
    slotColumn6.style.backgroundColor = 'rgba(189, 191, 193, 0.8)';
    slotColumn7.style.backgroundColor = 'rgba(189, 191, 193, 0.8)';
    slotColumn8.style.backgroundColor = 'rgba(189, 191, 193, 0.8)';
    slotColumn9.style.backgroundColor = 'rgba(189, 191, 193, 0.8)';
}

function resetAnimation () {
    betOnebtn.style.animation = '';
    slotColumn1.style.animation = '';
    slotColumn2.style.animation = '';
    slotColumn3.style.animation = '';
    slotColumn4.style.animation = '';
    slotColumn5.style.animation = '';
    slotColumn6.style.animation = '';
    slotColumn7.style.animation = '';
    slotColumn8.style.animation = '';
    slotColumn9.style.animation = '';
}

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

function colCheckBkc1() {
    slotColumn4.style.backgroundColor = '#0766ef';
    slotColumn1.style.backgroundColor = '#0766ef';
    slotColumn7.style.backgroundColor = '#0766ef';
}

function colCheckBkc2() {
    slotColumn5.style.backgroundColor = '#0766ef';
    slotColumn2.style.backgroundColor = '#0766ef';
    slotColumn8.style.backgroundColor = '#0766ef';
}

function colCheckBkc3() {
    slotColumn6.style.backgroundColor = '#0766ef';
    slotColumn3.style.backgroundColor = '#0766ef';
    slotColumn9.style.backgroundColor = '#0766ef';
}

function rowCheckBkc1() {
    slotColumn1.style.backgroundColor = '#0766ef';
    slotColumn2.style.backgroundColor = '#0766ef';
    slotColumn3.style.backgroundColor = '#0766ef';
}

function rowCheckBkc2() {
    slotColumn4.style.backgroundColor = '#0766ef';
    slotColumn5.style.backgroundColor = '#0766ef';
    slotColumn6.style.backgroundColor = '#0766ef';
}

function rowCheckBkc3() {
    slotColumn7.style.backgroundColor = '#0766ef';
    slotColumn8.style.backgroundColor = '#0766ef';
    slotColumn9.style.backgroundColor = '#0766ef';
}

function crossCheckBkc1() {
    slotColumn5.style.backgroundColor = '#0766ef';
    slotColumn3.style.backgroundColor = '#0766ef';
    slotColumn7.style.backgroundColor = '#0766ef';
}

function crossCheckBkc2() {
    slotColumn5.style.backgroundColor = '#0766ef';
    slotColumn9.style.backgroundColor = '#0766ef';
    slotColumn1.style.backgroundColor = '#0766ef';
}

function squareCheckBkc() {
    slotColumn8.style.backgroundColor = '#0766ef';
    slotColumn9.style.backgroundColor = '#0766ef';
    slotColumn7.style.backgroundColor = '#0766ef';
    slotColumn4.style.backgroundColor = '#0766ef';
    slotColumn1.style.backgroundColor = '#0766ef';
    slotColumn2.style.backgroundColor = '#0766ef';
    slotColumn3.style.backgroundColor = '#0766ef';
    slotColumn6.style.backgroundColor = '#0766ef';
}

function jackpotCheckBkc() {
    slotColumn1.style.backgroundColor = '#0766ef';
    slotColumn2.style.backgroundColor = '#0766ef';
    slotColumn3.style.backgroundColor = '#0766ef';
    slotColumn4.style.backgroundColor = '#0766ef';
    slotColumn5.style.backgroundColor = '#0766ef';
    slotColumn6.style.backgroundColor = '#0766ef';
    slotColumn7.style.backgroundColor = '#0766ef';
    slotColumn8.style.backgroundColor = '#0766ef';
    slotColumn9.style.backgroundColor = '#0766ef';
}

function columnCheck () {
    if (randNumR2C1 == randNumR1C1 && randNumR2C1 == randNumR3C1){
        row2Column1Photo.src = beerSlot2Photos[randNumR2C1]
        row1Column1Photo.src = beerSlot2Photos[randNumR1C1]
        row3Column1Photo.src = beerSlot2Photos[randNumR3C1]
        currency += 1
        totalPoints +=1
        colCheckBkc1()
        console.log(`you won 1 points - ${currency}`)
    }
    if (randNumR2C2 == randNumR1C2 && randNumR2C2 == randNumR3C2){
        row2Column2Photo.src = beerSlot2Photos[randNumR2C2]
        row1Column2Photo.src = beerSlot2Photos[randNumR1C2]
        row3Column2Photo.src = beerSlot2Photos[randNumR3C2]
        currency += 1
        totalPoints +=1
        colCheckBkc2()
            console.log(`you won 1 points - ${currency}`)
        }
    if  (randNumR2C3 == randNumR1C3 && randNumR2C3 == randNumR3C3) {
        row2Column3Photo.src = beerSlot2Photos[randNumR2C3]
        row1Column3Photo.src = beerSlot2Photos[randNumR1C3]
        row3Column3Photo.src = beerSlot2Photos[randNumR3C3]
        currency += 1
        totalPoints +=1
        colCheckBkc3()
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
        totalPoints += 1
        rowCheckBkc1()
        console.log(`you won 1 points - ${currency}`)
    }
    if  (randNumR2C2 == randNumR2C1 && randNumR2C2 == randNumR2C3) {
        row2Column2Photo.src = beerSlot2Photos[randNumR2C2]
        row2Column1Photo.src = beerSlot2Photos[randNumR2C1]
        row2Column3Photo.src = beerSlot2Photos[randNumR2C3]
        currency += 1
        totalPoints += 1
        rowCheckBkc2()
        console.log(`you won 1 points - ${currency}`)
    }
    if  (randNumR3C2 == randNumR3C1 && randNumR3C2 == randNumR3C3) {
        row3Column2Photo.src = beerSlot2Photos[randNumR3C2]
        row3Column1Photo.src = beerSlot2Photos[randNumR3C1]
        row3Column3Photo.src = beerSlot2Photos[randNumR3C3]
        currency += 1
        totalPoints += 1
        rowCheckBkc3()
        console.log(`you won 1 points - ${currency}`)
    }
    else currency -= 1
        console.log(`you lost 1 point - ${currency}`)
}

function crossCheck () {
    if (randNumR2C2 == randNumR1C3 && randNumR2C2 == randNumR3C1) {
        currency += 1
        totalPoints += 1
        crossCheckBkc1()
        console.log(`you won 1 point - ${currency}`) 
    }
    if  (randNumR2C2 == randNumR3C3 && randNumR2C2 == randNumR1C1) {
        row2Column2Photo.src = beerSlot2Photos[randNumR2C2]
        row3Column3Photo.src = beerSlot2Photos[randNumR3C3]
        row1Column1Photo.src = beerSlot2Photos[randNumR1C1]
        currency += 1
        totalPoints += 1
        crossCheckBkc2()
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
            totalPoints += 50
            squareCheckBkc()
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
            totalPoints += 1000000
            jackpotCheckBkc()
            console.log(`JACKPOT!!!!!!!! ${currency}`)
            }
        else currency -= 1
            console.log(`you lost 1 point - ${currency}`)
    }
}


function gameOver () {
    if (currency <= 0){
    console.log(`You Lost!`)
    containerDiv.style.animationName = 'fadeout';
    // containerDiv.style.animation = 'fadeout, 10s, linear, 10s, 1, normal';
    containerDiv.style.display = 'none';
    // enterAmount.style.animation = 'fadein, 10s, linear, 10s, 1, normal';
    enterAmount.style.animationName = 'fadein';
    enterAmount.style.display = 'flex';
    document.querySelector('.amount-h1').innerHTML = 'Play Again?';
    currency = 0;
    // const textAfterH1 = document.createElement('H1');
    // textAfterH1.innerHTML = "You deserve a beer!";
    // enterAmount.appendChild(textAfterH1);
    }
}