// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi,
// stampa la lista ordinata alfabeticamente.
//
// Scrivi anche la posizione della lista in cui il nuovo utente si trova.

// creo un array di cognomi
var cognomi = ['Rossi', 'Bianchi', 'Verdi', 'Neri', 'Zucchero'];

// scorro tutti gli elementi dell'array
for (var i = 0; i < cognomi.length; i++) {
    // rendo tutto minuscolo l'elemento corrente
    var cognome_minuscolo = cognomi[i].toLowerCase();

    // modifico l'elemento corrente
    cognomi[i] = cognome_minuscolo;
}
// cognomi tutti in minuscolo
console.log('Lista cognomi iniziale in minuscolo:');
console.log(cognomi);

// chiedo all'utente il suo cognome
var cognome_utente = prompt('Qual è il tuo cognome?');
console.log(cognome_utente);

// rimuovo gli spazi non significativi
cognome_utente = cognome_utente.trim();

// rendo in minuscolo il cognome dell'utente
cognome_utente = cognome_utente.toLowerCase();

// inserisco il cognome dell'utente nell'array
cognomi.push(cognome_utente);

// array disordinato
console.log('Lista cognomi disordinata:');
console.log(cognomi);

// ordino l'array
cognomi.sort();

// cerco la posizione del cognome dell'utente nell'array ordinato
var posizione_cognome = cognomi.indexOf(cognome_utente);
if(posizione_cognome != -1) {
    console.log('Il tuo cognome si trova in posizione: ' + (posizione_cognome + 1));
} else {
    console.log('Non ho trovato il tuo cognome');
}

// riporto l'iniziale maiuscola su tutti i cognomi
for (var i = 0; i < cognomi.length; i++) {
    // rendo maiuscolo il primo carattere e concateno il resto della stringa in minuscolo
    var cognome_iniziale_maiuscola = cognomi[i].charAt(0).toUpperCase() + cognomi[i].slice(1);
    // modifico l'elemento corrente
    cognomi[i] = cognome_iniziale_maiuscola;
}

// array ordinato con formattazione corretta
console.log('Lista cognomi ordinata:');
console.log(cognomi);
