console.log("up and running!")

const dogSlot1Photos = ['photos/artboard1.png','photos/artboard2.png', 'photos/artboard3.png', 
    'photos/artboard4.png','photos/artboard5.png', 'photos/artboard6.png']
    
function colum1Photo() {
    let randomNumb = Math.floor(Math.random() * dogSlot1Photos.length); {
        console.log(randomNumb)
        document.querySelector('.slot-column1-photo').src = dogSlot1Photos[randomNumb]
    }
    let randomNumb2 = Math.floor(Math.random() * dogSlot1Photos.length); {
        console.log(randomNumb2)
        document.querySelector('.slot-column2-photo').src = dogSlot1Photos[randomNumb2]
    }
    let randomNumb3 = Math.floor(Math.random() * dogSlot1Photos.length); {
        console.log(randomNumb3)
        document.querySelector('.slot-column3-photo').src = dogSlot1Photos[randomNumb3]
    }
    if (randomNumb === randomNumb) {
        console.log ('you won 10 points')
    }
}
