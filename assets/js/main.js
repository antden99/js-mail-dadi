console.log("tutto ok");


//creo la mia lista di email
const emailList = ["antonio@gmail.com", "francesco@gmail.com", "fabrizio@gmail.com"];
console.log(emailList); //stampo in console per verificare

//creo una variabile a cui assegno l'input inserito nel prompt dall'utente
const userInput = prompt("inserisci la tua email");
console.log(userInput); //stampo in console per verificare


let cont = 0;

//creo un for che scorra l'emailList(array)
for (let index = 0; index < emailList.length; index++) {
    const element = emailList[index];
    //controllo con l'IF se l'email è presente nella mia lista di emailList(array) e incremento cont;
    if(element===userInput){
           cont++;
    }
}
//controllo se cont è maggiore di 0, allora almeno una volta l'email è presente in lista, altrimenti no
if(cont > 0){
    console.log("l'email può accedere");
}else {
    console.log("l'email non può accedere")      
}