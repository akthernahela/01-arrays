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


// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers;
for (let i = teachers.length - 1; i >= 0; i--) {
  const teacher = teachers[i];
  console.log(teacher);
}
//Creo il ciclo for()
//Parte dall'ultimo elemento
//Inverto l'array

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++){
  if ( teachers[i].length >= 5){
    longNames.push(teachers[i]);
  }
}
console.log(longNames);
//Faccio un array vuoto nel quale dopo appare i nomi che voglio selezionare
//Devo dare un istruzione per selezionare la lunghezza degli elementi che voglio 

// 3. Rimuovi 'Ed' dall'array teachers


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;