const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE
console.log(teachers);

/*TOOLS:
-Arrey [i] = value (per cambiare il valore)
-Uso .pop() <!--lascia parentesi vuota--> Questa azione serve per rimuovere l'ultimo valore
-Uso .shift() <!--lascia parentesi vuota--> Questa azione serve per rimuovere il primo valore
-Uso .push(valore) <!--lascia parentesi vuota--> Questa azione serve per aggiungere un valore in fondo alla riga
-Uso .unshift(valore) <!--lascia parentesi vuota--> Questa azione serve per aggiungere un valore all'inizio della riga
-Per cercare un elemento .indexOf( valore )
-Lenght === 0 serve per verificare se l'array è vuota
*/

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
//Gli indici partono da zero
console.log(fourthTeacher);
//Legge l'elemento che si trova alla 3 posizione partendo da 0
//Non modifica l'array 


// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers [4] = "Patrick";
//Con la variabile seleziono la posizione della stringa da cambiare, poi scrivo il nuovo valore
console.log(teachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
//Creo una variabile per non eliminare direttamente la stringa
console.log(teachers);
//Logging per vedere la stringa 
console.log(lastTeacher);
//Logging per riprendere la stringa

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(firstTeacher);
//Stessa cosa di prima solo che con .shift() ho tolto la prima stringa


// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");
console.log(teachers);
//Con .push() ho aggiunto una stringa alla fine dell'array

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");
console.log(teachers);
//Con .unshift() ho aggiunto una stringa all'inizio


// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf("Lewis");
console.log(lewisIndex);
//Usa indexOf() per cercare una sringa 

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length === 0;
console.log(isTeachersEmpty);
//Per sapere se l'array teachers è vuoto o no
//Ricevendo un valore booleano 