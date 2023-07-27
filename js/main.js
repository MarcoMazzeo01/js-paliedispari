// ! PARI E DISPARI
const numType = document.getElementById("numType")
const userNum = document.getElementById("userNum")
const evenOddButton = document.getElementById("evenOddButton")

const userNumDisplay = document.getElementById("userNumDisplay"), userNumDisplayString = userNumDisplay.innerHTML
const compNumDisplay = document.getElementById("compNumDisplay"), compNumDisplayString = compNumDisplay.innerHTML
const numbersSum = document.getElementById("numbersSum"), numbersSumString = numbersSum.innerHTML
const oddEvenDisplay = document.getElementById("oddEvenDisplay"), oddEvenDisplayString = oddEvenDisplay.innerHTML

function RNG(min,max) {
    const range = max - min + 1;
    const randomInt = Math.floor(Math.random() * range) + min;
  
    return randomInt;
}


function oddEvenCheck(num) {
    if (num % 2 == 0) {
        return "Pari"
    } else {
        return "Dispari"
    }
}


function resetDOM() {
    userNumDisplay.innerHTML = userNumDisplayString
    compNumDisplay.innerHTML = compNumDisplayString
    numbersSum.innerHTML = numbersSumString
    oddEvenDisplay.innerHTML = ""
}

evenOddButton.addEventListener("click",function(){

    resetDOM()

    let compNum = RNG(1,5)
    let userNumValue = parseInt(userNum.value)

    userNumDisplay.innerHTML += userNumValue
    compNumDisplay.innerHTML += compNum

    let total = compNum + userNumValue
    let result =  oddEvenCheck(total)
    numbersSum.innerHTML += total + ` (${result})`

    

    if (numType.value == result) {
        oddEvenDisplay.innerHTML = "Hai vinto!"
    } else {
        oddEvenDisplay.innerHTML = "Hai perso!"
    }

    


})
