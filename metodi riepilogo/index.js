const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

//STAMPO I NOMI
studenti.forEach((studente) => {
  console.log(studente.nome);
});

console.log("");

//STAMPO UN NOME CON VOTO > 90
const studenteVotoSuperiore = studenti.find((studente) => studente.voto > 90);
console.log(
  "Il primo studente con voto superiore a 90 è: " + studenteVotoSuperiore.nome
);

console.log("");

//STAMPO LA MEDIA DEI VOTI
const sommaVoti = studenti.reduce((acc, studente) => acc + studente.voto, 0);
const mediaVoti = sommaVoti / studenti.length;
console.log("La media dei voti degli studenti è: " + mediaVoti);

console.log("");

//STAMPO I NOMI IN MAIUSCOLO
const nomiMaiuscoli = studenti.map((studente) => studente.nome.toUpperCase());
console.log("NOMI UPPERCASE: " + nomiMaiuscoli);

console.log("");

//STAMPO GLI STUDENTI CON VOTO > 85
const studentiSuperiori = studenti.filter((studente) => studente.voto > 85);
console.log("Gli studenti con più di 85 sono: ");
console.log(studentiSuperiori);
