// ! PARI E DISPARI
const numType = document.getElementById("numType")
const userNum = document.getElementById("userNum")
const evenOddButton = document.getElementById("evenOddButton")

const userNumDisplay = document.getElementById("userNumDisplay"), userNumDisplayString = userNumDisplay.innerHTML
const compNumDisplay = document.getElementById("compNumDisplay"), compNumDisplayString = compNumDisplay.innerHTML
const numbersSum = document.getElementById("numbersSum"), numbersSumString = numbersSum.innerHTML
const oddEvenDisplay = document.getElementById("oddEvenDisplay"), oddEvenDisplayString = oddEvenDisplay.innerHTML

//funzione che genera un numero a caso compreso tra un minimo e un massimo, entrambi compresi
function RNG(min,max) {
    const range = max - min + 1;
    const randomInt = Math.floor(Math.random() * range) + min;
  
    return randomInt;
}

//controlla che la somma sia divisibile per due senza resto. Se non ha resto, allora ritornerà Pari, altrimenti ritornerà Dispari.
function oddEvenCheck(num) {
    if (num % 2 == 0) {
        return "Pari"
    } else {
        return "Dispari"
    }
}

//resetta il contenuto degli elementi usati per mostrare l'esito del gioco
function resetDOM() {
    userNumDisplay.innerHTML = userNumDisplayString
    compNumDisplay.innerHTML = compNumDisplayString
    numbersSum.innerHTML = numbersSumString
    oddEvenDisplay.innerHTML = ""
}

evenOddButton.addEventListener("click",function(){

    //resetta elementi ogni volta che si preme il pulsante
    resetDOM()

    //genero un numero casuale per il computer e prendo il valore inserito dall'utente, mostrandoli nel DOM
    let compNum = RNG(1,5)
    let userNumValue = parseInt(userNum.value)
    userNumDisplay.innerHTML += userNumValue
    compNumDisplay.innerHTML += compNum

    //sommo i due numeri e controllo se la somma è pari o dispari
    let total = compNum + userNumValue
    let result =  oddEvenCheck(total)
    numbersSum.innerHTML += total + ` (${result})`
    
    //infine, controllo se il valore restituito da oddEvenCheck() è uguale a quello selezionato dall'utente, Pari o Dispari
    if (numType.value == result) {
        oddEvenDisplay.innerHTML = "Hai vinto!"
    } else {
        oddEvenDisplay.innerHTML = "Hai perso!"
    }

    


})
