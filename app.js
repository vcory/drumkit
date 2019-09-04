// Play drum by keyboard press
document.addEventListener('keypress' , (event) => {
    console.log(event)
    if (event.keyCode ==97) {
        document.getElementById('audio1').play();
    }
})

document.addEventListener('keypress' , (event) => {
    console.log(event)
    if (event.keyCode ==115) {
        document.getElementById('audio2').play();
    }
})


document.addEventListener('keypress' , (event) => {
    console.log(event)
    if (event.keyCode ==100) {
        document.getElementById('audio3').play();
    }
})

document.addEventListener('keypress' , (event) => {
    console.log(event)
    if (event.keyCode ==102) {
        document.getElementById('audio4').play();
    }
})

document.addEventListener('keypress' , (event) => {
    console.log(event)
    if (event.keyCode ==103) {
        document.getElementById('audio5').play();
    }
})

document.addEventListener('keypress' , (event) => {
    console.log(event)
    if (event.keyCode ==104) {
        document.getElementById('audio6').play();
    }
})

document.addEventListener('keypress' , (event) => {
    console.log(event)
    if (event.keyCode ==106) {
        document.getElementById('audio7').play();
    }
})

document.addEventListener('keypress' , (event) => {
    console.log(event)
    if (event.keyCode ==107) {
        document.getElementById('audio8').play();
    }
})

document.addEventListener('keypress' , (event) => {
    console.log(event)
    if (event.keyCode ==108) {
        document.getElementById('audio9').play();
    }
})





// Play music by mouse click

document.getElementById('btn-a').onclick = function () {
    document.getElementById('audio1').play();
}
document.getElementById('btn-s').onclick = function () {
    document.getElementById('audio2').play();
}
document.getElementById('btn-d').onclick = function () {
    document.getElementById('audio3').play();
}
document.getElementById('btn-f').onclick = function () {
    document.getElementById('audio4').play();
}
document.getElementById('btn-g').onclick = function () {
    document.getElementById('audio5').play();
}   
document.getElementById('btn-h').onclick = function () {
    document.getElementById('audio6').play();
}

document.getElementById('btn-j').onclick = function () {
    document.getElementById('audio7').play();
}
document.getElementById('btn-k').onclick = function () {
    document.getElementById('audio8').play();
}

document.getElementById('btn-l').onclick = function () {
    document.getElementById('audio9').play();
}








// document.addEventListener("keydown", function(e) {
//     playSound(e.key);
//      buttonAnimation(e.key);

// }

// function playSound(e.key) {

//     switch (key) {
//         case "a"
//             let boom = new Audio('sounds/boom.wav');
//             boom.play();
//             break;

//         case "s"
//             let clap = new Audio('./sounds/clap.wav');
//             boom.play();
//             break;

//         case "d"
//             let hihat = new Audio('sounds/boom.wav');
//             boom.play();
//             break;

//         case "f"
//             let kick = new Audio('sounds/clap.wav');
//             boom.play();
//             break;
            
//             case "g"
//             let openhat = new Audio('sounds/boom.wav');
//             boom.play();
//             break;

//         case "h"
//             let ride = new Audio('sounds/clap.wav');
//             boom.play();
//             break;
        
//         case "j"
//             let snare = new Audio('sounds/boom.wav');
//             boom.play();
//             break;

//         case "k"
//             let tink = new Audio('sounds/clap.wav');
//             boom.play();
//             break;
        
//         case "l"
//             let tom = new Audio('sounds/boom.wav');
//             boom.play();
//             break;

//         default:
//             console.log(buttonsInnerHTML);

//         }



//     }






// Play music by mouse click

// let buttons = document.querySelectorAll(".drum").length;

// for (let i = 0; i < buttons; i++) {

//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {

//         let buttonsInnerHTML = this.HTMLAllCollection;
        
//         playSound(buttonsInnerHTML);

//         buttonAnimation(buttonsInnerHTML);

//     });
// }