// ! PALINDROMO CHECK
const userWordInput = document.getElementById("userWordInput")
const paliButton = document.getElementById("paliButton")

const userWord = document.getElementById("userWord")
const flippedWord = document.getElementById("flippedWord")
const wordResult = document.getElementById("wordResult")

paliButton.addEventListener("click",function(){
    let word = userWordInput.value
    let flippedString = ""
    userWord.innerHTML = `<strong>Parola scelta:</strong> ${word}`

    for (i = word.length - 1; i < word.length; i--) {
        
        //componi la parola al contrario
        flippedString += word[i]

        //appena raggiunta la lettera iniziale, il loop si interrompe
        if (i == 0) {
            break
        }
    }

    flippedWord.innerHTML = `<strong>Parola al contrario:</strong> ${flippedString}` 

    //controlla se le word e flippedString sono uguali; se lo sono, allora la parola è palindroma.
    let wordResultFinal = (word.toLowerCase() === flippedString.toLowerCase()) ? `<b>${word}</b> è una parola palindroma!` : `<b>${word}</b> non è una parola palindroma... :(`
    wordResult.innerHTML = wordResultFinal

})




// ! PARI E DISPARI
const numType = document.getElementById("numType")
const userNum = document.getElementById("userNum")
const evenOddButton = document.getElementById("evenOddButton")

const userNumDisplay = document.getElementById("userNumDisplay")
const compNumDisplay = document.getElementById("compNumDisplay")
const numbersSum = document.getElementById("numbersSum")
const oddEvenDisplay = document.getElementById("oddEvenDisplay")

//funzione che genera un numero a caso compreso tra un minimo e un massimo, entrambi compresi
function randomInt(min,max) {
    const range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

//controlla che la somma sia divisibile per due senza resto. Se non ha resto, allora ritornerà Pari, altrimenti ritornerà Dispari.
function oddEvenCheck(num) {
    return (num % 2 == 0) ? "Pari" : "Dispari"
}


evenOddButton.addEventListener("click",function(){

    //genero un numero casuale per il computer e prendo il valore inserito dall'utente, mostrandoli nel DOM
    let compNum = randomInt(1,5)
    let userNumValue = parseInt(userNum.value)
    userNumDisplay.innerHTML = `<strong>Il tuo numero:</strong> ${userNumValue}`
    compNumDisplay.innerHTML = `<strong>Numero del computer:</strong> ${compNum}`

    //sommo i due numeri e controllo se la somma è pari o dispari
    let total = compNum + userNumValue
    let result =  oddEvenCheck(total)
    numbersSum.innerHTML = `<strong>Somma:</strong> ` + total + ` (${result})`
    
    //infine, controllo se il valore restituito da oddEvenCheck() è uguale a quello selezionato dall'utente, Pari o Dispari
    let oddEvenDisplayString = (numType.value == result) ? "Hai vinto!" : "Hai perso... :("
    oddEvenDisplay.innerHTML = oddEvenDisplayString

})
