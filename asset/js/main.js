const nomeUtente = prompt("Inserisci il tuo nome");
console.log("nomeUtente");
document.getElementById("contenitore_target").innerHTML = nomeUtente;

const cognomeUtente = prompt("Inserisci il tuo cognome");
console.log("cognomeUtente");
document.getElementById("contenitore_target").innerHTML = cognomeUtente;

const coloreUtente = prompt("Inserisci il tuo colore preferito");
console.log("coloreUtente");
document.getElementById("contenitore_target").innerHTML = coloreUtente;

console.log(`la tua password è ${nomeUtente}  ${cognomeUtente} ${coloreUtente}`)

document.getElementById("contenitore_target").innerHTML = (`la tua password è ${nomeUtente}  ${cognomeUtente} ${coloreUtente}`);