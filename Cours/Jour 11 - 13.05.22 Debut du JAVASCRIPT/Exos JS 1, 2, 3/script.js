/*
               Exercice1-Calculatrice_de_tva
## Énoncé

L'utilisateur saisit un montant HT, le résultat TTC s'affiche en HTML.

## Détails

* Le taux de TVA utilisé est le taux normal en vigueur en France, il ne bouge pas.
* Il faut réafficher toutes les informations : le montant HT, le montant de TVA et le résultat TTC.
* Le montant HT est un nombre à virgule (on peut saisir des centimes).

## Rappels

* Attention au type de la donnée renvoyé par *window.prompt()* !
*/


//      Result
// const TVA = 20;
// const prixHT = window.prompt("Write the value of your basquet");
// document.write(`PrixHT: ${prixHT}€ PrixTTC: ${prixHT * TVA / 100 + prixHT}€ prix TVA: ${ prixHT*TVA/100}€`);


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*              Exercice2-Date_du_jour
## Enoncé

Afficher dynamiquement la date du jour en HTML sous la forme “Nous sommes le Vendredi 13 Mai 2022”.

## Détails

* Il va falloir se servir de tableaux pour afficher en français les noms des jours de la semaine et des mois...

## Rappels

* La classe *Date* possède une méthode pour extraire chaque partie de la date et de l'heure
* Attention aux valeurs renvoyées par chaque méthode, **bien lire la documentation**
*/


//newdate

// Resultat
// const jour = ["Dimanche", "Lundi", "Mardi", "Mecredi", "Jeudi", "Vendredi", "Samedi"];
// const mois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"];

// let today = new Date();
// let todayDay = today.getDay();
// let todayInMonth = today.getDate()
// let todayMonth = today.getMonth();
// let todayYear = today.getFullYear();

// const todayPhrase = document.write(` Nous sommes le ${today[todayDay]} ${todayInMonth}  ${mois[todayMonth]} ${todayYear}`);



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*              Exercice3-Objet_voiture
## Énoncé

Créer puis afficher en HTML un objet représentant une voiture :

1. La marque de la voiture
2. Son année de fabrication
3. Sa date d'achat
4. La liste des passagers (au moins 2), avec le prénom de chacun des passagers

## Détails

* Afficher les propriétés de l'objet voiture sous la forme d'une liste HTML
* On peut représenter n'importe quelle date en JavaScript en donnant une chaîne de caractères à la création d'une instance de la classe *Date* :

<code>
	// Représente la date du 5 avril 2014, format américain YYYY-MM-DD.
	let myBirthday = new Date('2022-05-13');
</code>

## Rappels

* On peut stocker un objet dans un tableau tout comme on peut stocker un tableau dans un objet...
*/


//Resultat 

// const voiture = {

//     marque:"Ford",
//     serie: "Mustang",
//     doors: 5,
//     color: {
//         variant1: "Rouge et noire",
//         variant2: "Blanche et noire",
//         variant3: "Orange",
//     },
//     dateAchat: 2017,
//     dateFabrication: 1966,
//     client: {
//         premierClient: "Arnold",
//         dernierClient: "Susan",
//     },
//     codeVitre: [12654, 154789, 215487, 414578]
// }

// document.write(`<h1>${voiture.marque} ${voiture.serie} !!</h1>`);
// document.write(`<h2> Color: ${voiture.color.variant2} </h2>`);
// document.write(`<h3> Date d'achat: ${voiture.dateAchat} <br> Date serie Voiture: ${voiture.dateFabrication} </h3>`);
// document.write(`<p> Numero de Vitres : ${voiture.codeVitre} </p>`)
// document.write(`<p> Numero de Vitres à retenir : ${voiture.codeVitre[2]} </p>`)

