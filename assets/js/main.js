console.log("tutto ok");


//creo la mia lista di email
const emailList = ["antonio@gmail.com", "francesco@gmail.com", "fabrizio@gmail.com"];
//console.log(emailList); //stampo in console per verificare

//creo una variabile a cui assegno l'input inserito nel prompt dall'utente
let userInput = prompt("inserisci la tua email");
//console.log(userInput); //stampo in console per verificare
//console.log(typeof(userInput));

//qui trasformo tutto in minuscolo per sicurezza che non ci sia un errore di caratteri
userInput = userInput.toLowerCase();
let cont = 0;

//creo un for che scorra l'emailList(array)
for (let index = 0; index < emailList.length; index++) {

    const element = emailList[index];
    //controllo con l'IF se l'email è presente nella mia lista di emailList(array) e incremento cont;
    if (element === userInput.toLowerCase()) {
        cont++;
    }
}
//controllo se cont è maggiore di 0, allora almeno una volta l'email è presente in lista, altrimenti no
if (cont > 0) {
    console.log("l'email può accedere");
} else {
    console.log("l'email non può accedere")
}


///////////////GIOCO DADI//////////////////

//creo due variabili, a cui assegno due numeri random che vanno da 1 a 6
let giocatore = Math.floor(Math.random() * 6) + 1;
let computer = Math.floor(Math.random() * 6) + 1;

//stampo in console il valore dei numeri generati per controllo
console.log(giocatore);
console.log(computer);


//creo un if, per vedere chi ha vinto o se il risultato finale è un pareggio
if (giocatore > computer) {
    console.log("l'utente ha vinto");
    
} else if (giocatore < computer) {
    console.log("il computer ha vinto");
}
else if (giocatore == computer) {
    console.log("pareggio");
}