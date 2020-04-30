// create a button that returns a random number to the console

let randomButtonElement = document.querySelector("#random-button")

let randomNumberVar

randomButtonElement.addEventListener("click", function (){
    randomNumberVar = Math.random()
    console.log(randomNumberVar)
})

// create another button that checks if the random number generated is greater than 0.5, if it is, console log true, if not console log false

let checkButtonElement = document.querySelector("#check-button")

checkButtonElement.addEventListener("click", function(){
    if (randomNumberVar > 0.5) {
        console.log("it is greater than 0.5")
    } else {
        console.log("it is not greater than 0.5")
    }
})