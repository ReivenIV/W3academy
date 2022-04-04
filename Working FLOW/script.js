 /*  
                           Introduction au Javascript 
                                //41. Chifoumi partie 3/3 
'use strict';
window
// Vous devez déclarer 3 variables,
var player;
var random;
var computer;

// demandez à l'utilisateur son choix (pierre, feuille ou ciseaux)
player = window.prompt('Choisissez pierre feuille ou ciseaux');
// modifier la casse en minusule
player = player.toLowerCase();

// affectez une valeur aleatoire entre 0 et 1 à la variable random
// @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
random = Math.random();

// definissez le choix de l'ordianteur (1/3 de chance pour chacun des choix)
// si 1/3 affectez pierre à la variable computer
if(random < 1 / 3)
{
    computer = 'pierre';
}
// sinon si 2/3 affectez feuille à la variable computer
else if(random < 2 / 3) 
{
    computer = 'feuille';
}
// sinon affectez ciseaux à la variable computer
else
{
    computer = 'ciseaux';
}

// affichez le choix de l'ordinateur dans le document
document.write("<p>Choix de l'ordinateur : <strong>" + computer + "</strong></p>");


// Vérifiez si il y a une égalité

    // affichez l'égalité
 if (player===computer) {document.write("Egalité")}

 
 
// sinon ...
else {
    //  ... vérifiez les différents cas possibles avec 
    // un switch sur la variable computer
    
    switch(computer) {

        
        // cas du choix pierre pour l'ordinateur
        case "pierre":
            // si le joueur a choisi feuille
            if(player==="feuille") {document.write("Gagné")}       
            
            // sinon c'est qu'il a choisi ciseaux
            else {document.write("Perdu")}
        break;        
        
        // cas choix feuille
        case "feuille":
            // si le joueur a choisi pierre
            if(player==="ciseaux") {document.write("Gagné")}            
            // sinon c'est qu'il a choisi ciseaux
            else {document.write("Perdu")}
        break;

        
        // cas du choix ciseaux
        case "ciseaux":
            // si le joueur a choisi pierre
            if(player==="pierre") {document.write("Gagné")}
            // sinon c'est qu'il a choisi feuille
            else {document.write("Perdu")}
        break;

    }
}

*/
 
        





// --------------------------------------------------------------------------------------------------
                                        // LEÇON 2 Revisions des variables

/*
 1. Exercice de concaténation de variables et extraction de texte 
var texte1 = 'Soleil flamboyant '
var texte2 = 'éther et mer rouge sang'

var extrait = texte1.substr(10,2)
var concat = extrait + texte2
*/

/*
 2. Exercice fonction parsefloat et fonction prompt 
prompt("Ecrivez un truc", "Here")
*/

/* 
3. Exercice vérification type de variable 
var var1 = true
var result = typeof(var1)
*/

 
/* 
4. Exercice concept constante 
const TVA = 0.196
var tarifHT = 12.50
var tarifTTC = montantTVA + tarifHT
var montantTVA = TVA * tarifHT
*/

/*
5. Exercice fonction math pour calculer la TVA 
const TVA = Math.PI
var tarifHT = 12.50
var tarifTTC = montantTVA + tarifHT
var montantTVA = TVA * tarifHT
*/

// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------

                                        // Les structures de contrôle en JavaScript
                                        // LEÇON 1 Les conditions en Javascript

/*
1. Les opérateurs de comparaison d'égalité 
var var1 = 42;
var var2 = "42";
var test = var1 === var2;
alert(test);
*/

/*
3. Les opérateurs de comparaison supérieur et inférieur 
var var1 = 2354;
var var2 = 2354;
var test = var1 <= var2;
alert(test);
*/

/*
4. Opérateur logique ET pour toutes les expressions 
var var1 = true;
var var2 = true;
var test = var1 && var2;
alert(test);
*/

/*
5. Opérateur logique OU pour au moins une expression
var var1 = true;
var var2 = false;
var test = var1 || var2;
alert(test);
*/

/* 
6. Les opérateurs logiques NON pour inversé la valeur 
var var1 = true;
var test = !var1;
alert(test);
*/

/* 
7. Qu'est-ce qui est vrai ou faux ?
var var1 = '';
var var2 = 'Lorem';
var test = !var1 && !var2;
alert(test);
*/

/*
8. La structure if 
var var1 = 5;
var var2 = 6;
var var3 = 4;
Votre premiere condition ici 
if (var1 > var2 && var1 <= var3) {alert("La condition 1 est vérifiée");}
Votre deuxième condition ici 
if (var1 < var2 && var1 >= var3) {alert("La condition 2 est vérifiée");}
*/

/**
 * 9. La structure else 
 * var var1 = 2358;
if (typeof var1 == "string") {
	alert("var1 est une chaîne de caractères");
} else {
	alert("var1 n'est pas une chaîne de caractères");
}
 */

/*
10. La structure elseif 
// Pas besoin de modifier la variable number 
var number = Math.floor((Math.random() * 21) - 10);
if ( number > 0) {
	alert("C'est positif");
}
else if ( number < 0 ) {
	alert("C'est négatif");
}
else {
	alert("C'est zéro");
}
 */
/* 
11. La structure switch
var number = Math.floor((Math.random() * 6));
switch (number) {
case 1: alert(number);
break;
case  2: alert(number);
break;
case  3: alert(number);
break;
case  4: alert(number);
break;
case  5: alert(number);
break;
default: alert("La valeur est forcément zéro : " + number );
}
*/

/*
12. La structure ternaire 
var var1 = true;
var result;
result = var1 ? "C'est vrai" : "C'est faux";
alert(result);
*/

/*
13. Astuce pour tester une variable 
var var1 = 'Lorem ipsum';
var var2 = 1;
if (var1 && var2) {
	alert("Tout est vrai !");
}
*/

/*
14. Astuce avec l'opérateur OU 
var var1 = 0;
var var2 = 0;
var var3 = "Lorem ipsum";
var var4 = 1;
var result;
result = var1 || var2 || var3 || var4;
alert(result);
*/
/*
15. Exercice sur les conditions 
var var1 = 'Je suis une chaîne de caractères ';
var var2 = ' concaténée à partir de plusieurs ';
var var3 = 'sous-chaînes contenues dans var1, var2 et var3.';

var texteComplet;
texteComplet = var1 + var2 + var3;

if(texteComplet.length > 100) {
	alert("C'est une grande phrase");
} else {
	alert("C'est une petite phrase");
}
*/

// --------------------------------------------------------------------------------------------------
                                        //LEÇON 2 Les boucles en JavaScript

/*
//1. La boucle for 
var br = "<br>"
for (var i = 0; i < 10; i++) {
	document.write( i + br)
}
*/

/*
2. La boucle while avec itérateur 
var br = "<br>";
var i = 0;
while(i<=10) {
	document.write(i+br);  
	i++;
}
*/

/* 
3. La boucle while sans itérateur 
var text = "";
var result;
var check = true;
while(check)
{
	result = prompt("Write something");
	if(result) 
		{
			text += result;
		} else {
			check = false;
		
	}
}
*/

 /*
4. Sortir d'une boucle avec break 
var text = "";
var result;
var check = true;
while(check)
{
	result = prompt("Write something");
	if(result) 
		{
			text += result;
		} else {
			break
	}
}
*/

/*
5. Sortir d'une itération avec continue 
var i = 0;
var j = 28;
var limit = 14;

while (i < limit) {
	i++;
	
	if(i < limit/2) 
	{continue}
	j++;
	
}
*/

/*
6. La boucle do while
var i = 0;
var j = 10;
do {
	i++
} 
while(i < j);
*/

// --------------------------------------------------------------------------------------------------
                                        //LEÇON 3 Révision des conditions et des boucles



 /*  
1. Exercice script vérification valeur 
var var1 = 1138;
var var2 = 1442;

if (var1 > var2) {
	alert("var1 a gagné !");
} 
else if (var1 < var2) {
	alert("var2 a gagné !");
} else {
	alert("Egalité !");
}
*/

/*
2. Exercice écrire un script avec demande utilisateur 


/*
Exo 2... No pude hacerlo nose 
// var check = false;
// var result;
// 

// while (check === false) {
	
// 	result = parseInt(prompt("un nombre entre 0 to 10"));
	
// 	if ( result < 0 || result > 0 || isNaN(result)) {
// 		check = false;
//         console.log(result);
// 	} else {
// 		check = false;
		
// 	}
    
// }
*/

/*
3. Exercice écrire un script qui conditionne affichage
var i = 0;

while (i<=10)
{document.write("<br>"+i);i % 2;i++ }
*/

/*
4. Exercice script qui donne affichage et information 
var i = 0;
while (i <= 10) {
	if (i % 2) {
		document.write( i + " Impair ");
	}	
	else {
		document.write(i + " Pair "); 
	} i++;
}
*/

/*
5. Exercice reconstitution de chaïne de caractères 
var var1 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit';
var result;
var i = 0;
while (i < var1.length) {
	result += var1.charAt(i);
	i++;
}
alert(result);
*/

/*
6. Exercice comparaison de 2 chaînes de caractères 
var var1 = 'abcdefghijklmnopqrstuvwxyz';
var var2 = 'abcdefghijklmn123456789ABC';
var i = 0;
while (var1.charAt(i) == var2.charAt(i)) {
	i++;
}
alert(i);
*/

// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------

                                        // Les tableaux, les objets, les fonctions  
                                        // LEÇON 1 Les tableaux et les objets en Javascript

/*
1. Déclarer un tableau 
var tab = []
*/

/*
2. Tableau et objet 
var tableau = [];
var test = typeof tableau
alert( test )
*/

/*
//3. Tableau et indice 
var tableau = ['je', 'suis', 'un', 'tableau', '!']
var result = tableau[2]
*/

/* 
4. Modifier une valeur du tableau 
var tableau = ['je', 'suis', 'un', 'tableau', '!']
tableau[2] = "intrus"
*/

/*
5. Récupérer la longueur d'un tableau
var tableau = ['châine', 42, true, ['hello', 'world']]
var longueur = tableau.length
*/

/* 
6. Récupérer la longueur d'une valeur d'un tableau 
var tableau = ['paris', 'tokyo', 'strasbourg']
var longueur = tableau[2].length
*/

/*
 
7. Ajouter un élément à la fin d'un tableau 
var tableau = ['paris', 'tokyo', 'strasbourg']
tableau.push('New York')
 */

/*
 
8. Ajouter un élément au début d'un tableau 
var tableau = ['paris', 'tokyo', 'strasbourg']
tableau.unshift('New York')
 */

/*
9. Supprimer le dernier élément d'un tableau 
var tableau = ['paris', 'tokyo', 'strasbourg']
tableau.pop()
*/

/*
10. Supprimer le premier élément d'un tableau 
var tableau = ['paris', 'tokyo', 'strasbourg']
tableau.shift()
*/

/* 
11. Convertir une chaîne en tableau 
var var1 = 'je-veux-être-fragmenté'
var result =  var1.split('-');
alert(result)
*/

/*
12. Convertir un tableau en chaîne
var tableau = ['paris', 'tokyo', 'strasbourg']
var result = tableau.join('-');
alert(result)
*/

/*
13. Parcourir un tableau 
var tableau = ['paris', 'tokyo', 'strasbourg']
var i;
var longueur = tableau.length;
for (i = 0; i < longueur; i++) {
	alert(tableau[i])
}
*/

/* 
14. Déclarer un tableau associatif 
var voiture = {
  marque : 'Bugatti',
  modele : 'Chiron',
  couleur : 'bleue',
  annee : 2016
};
*/
/* 
15. Accéder aux éléments d'un tableau associatif
var ecran = {
  marque: 'SamSoule',
  annee: 2019,
  resolution: '1920x1080',
  prix: '400€'
}
var result = ecran.resolution; 
alert(result)
*/
/* 
16. Ajouter un élément dans un tableau associatif 
var ecran = {
  marque: 'SamSoule',
  annee: 2019,
  resolution: '1920x1080',
  prix: '400€'
}
ecran.taille = "23 pouces"
var result = ecran.taille;
alert (result)
*/


/* 
17. Parcourir un tableau associatif 
var voiture = {
  marque : 'Bugatti',
  modele : 'Chiron',
  couleur : 'bleue',
  annee : 2016
}
for (var id in voiture){
	alert (voiture[id])
}
*/

/*
18. Exercice récupérer la longueur d'une propriété 
var ecran = {
  marque: 'SamSoule',
  annee: 2019,
  resolution: '1920x1080',
  prix: '400€'
}
var result = ecran.marque.length;
console.log(result);
 */

/*
19. Exercice afficher les propriétés d'un tableau associatif 
var ecran = {
  marque: 'SamSoule',
  annee: false,
  resolution: '1920x1080',
  prix: '400€',
  reduction: false
}
for(var id in ecran) {
	
	if (!ecran[id]) {
		
		alert(id)
	}
}
*/


/* 
20. Exercice afficher les propriétés d'un tableau ordonné

var ecran = ['alpha', null, 'gamme', 0, 'delta', false, 'zêta'];
var i;

for (var i = 0; i < ecran.length; i++) {
	
 	if (!ecran[i]) {
		
		alert(ecran[i])
	}
}
*/
/* 
21. Exercice modifier les valeurs d'un tableau associatif 
var ecran = {
  marque: 'SamSoule',
  annee: false,
  resolution: '1920x1080',
  prix: '400€',
  reduction: false
}

for(var id in ecran) {	
	if (!ecran[id]) {
		ecran.id = true; 
	}
}
 */

/* 
22. Exercice modifier les valeurs d'un tableau ordonné

var ecran = ['alpha', false, 'beta', 'gamme', false, 'delta']	
for (var i = 0; i < ecran.length; i++) {
	
	if(!ecran[i]) {
		ecran[i] = true
	}
}
*/

/* 
23. Exercice tableau associatif vers tableau ordonné 
var ecran = {
  marque: 'SamSoule',
  annee: false,
  resolution: '1920x1080',
  prix: '400€',
  reduction: false
}
var result = [];
for (var id in ecran){	
	if (!ecran[id]) {		
		result.push(ecran[id])
	}
}
*/

/*24. Exercice récupérer tableau associatif vers tableau ordonné 
var ecran = {
  marque: 'SamSoule',
  annee: false,
  resolution: '1920x1080',
  prix: '400€',
  reduction: false
}
var result = [];
for (var id in ecran) {
	if (ecran[id]){
		result.push(ecran[id])
	}
}
for (var i = 0; i < result.length; i++){
	alert(result[i])	
}
*/

/* 
25. Exercice récupérer tableau ordonné vers tableau associatif 
var ecran = ['', false, 'beta', false, "", false]
var result = {}
for (var i = 0; i < ecran.length; i++) {
	
	if (ecran[i]) {		
		result.recup = ecran[i];
		alert(result.recup)		
	}	
}
*/

/*
26. Exercice récupérer la longueur d'un tableau ordonné 
var villes = ['paris', 'tokyo', 'strasbourg'];
var result = villes.length;
alert(result)
*/


/*
27. Exercice récupérer la longueur d'une valeur 
var villes = ['paris', 'tokyo', 'strasbourg']
var result = villes[villes.length-1].length;
alert(result)
-------------- ou --------------
var villes = ['paris', 'tokyo', 'strasbourg']
var result = villes[2].length;
alert(result)
*/
/* 
28. Exercice récupérer des nombres dans un tableau 
var micmac = ['tokyo', 42, true, 3.14, ['hello', 'world']]
for (var i = 0; i < micmac.length; i++) {	
	if (typeof micmac[i] === 'number') {		
	alert(micmac[i])
	
	}
}
*/


/*
29. Exercice créer un tableau ordonné avec nombre entier 
var result = [];
var longueur = Math.floor(Math.random()*100);

for (var i = 0; i < longueur; i++)
{
	result.push(i*2);
}
*/



/* 
30. Exercice récupération de chaîne de caractères 
var phrases = ['Commencement de l’hiver', ' l’ombre des branches', 'le chant', 'de la cigale']
var max = 10

for (var i = 0; i < phrases.length; i++) {	
	if(phrases[i].length > max) {		
		alert(phrases[i])		
	}
}
*/

/*
31. Exercice mettre des caractères dans un nouveau tableau 
var phrases = ['Commencement de l’hiver', ' l’ombre des branches', 'le chant', 'de la cigale'];
var max = 10;
var result = [];

for (var i = 0; i < phrases.length; i++) {	
	if(phrases[i].length > max) {
		result.push(phrases[i])
	}
}
*/

/*

*/

// --------------------------------------------------------------------------------------------------
                                        //LEÇON 2 Les fonctions en JavaScript


/*
1. Déclarer une fonction 
function display() {
	alert("Je suis une fonction")
}
*/

/*
2. Notion de variable globale 
var texte = 'hello world';
function display () {
	alert(texte)
}
display()
*/


/*3. Notion de variable locale 
var texte = "Globale";

function display () {	
	var texte = "Locale"
	alert(texte)	
}
display()

alert(texte)
 */


/*
4. Fonction et arguments
function hello(prenom, nom) {
	alert("Bonjour " + prenom+" "+ nom)
}
 */


/*
5. Fonction et valeur de retour 
function calcul (numerateur, denominateur) {	
	return	numerateur / denominateur
}
 */


/* 
6. Exercice fonction récupérer un caractère 
var recup;
var texte = "Lorem ipsum dolor sit amet";
var position = 9;

function trouve (txt, pos) {
 return txt.charAt(pos)
}

recup = trouve(texte, position);
alert(recup);
*/

/*
7. Exercice fonction extraire une partie d'une chaîne 
var texte = "Lorem ipsum dolor sit amet";
var position = 13;
var recup;

function extrait (txt, pos) {
	return txt.slice(pos)
}

recup = extrait(texte, position);
alert(recup);
*/

/*
8. Exercice fonction convertir en majuscule 
var texte = "Lorem ipsum dolor sit amet";
var recup;
function majuscule(txt) {
	return txt.toUpperCase()
}
recup = majuscule(texte);
alert(recup);
*/


/*
9. Exercice fonction convertir un tableau en chaîne 
var tableau = ['compte', 'à', 'rebours', 3, 2, 1, 'partez'];
var recup;

function convert(tbl){	
	return tbl.join()
}

recup = convert(tableau);
alert(recup);
*/


/*
10. Exercice fonction convertir une chaîne en tableau 
var texte = "Lorem ipsum dolor sit amet";
var recup;
function convert (txt) {
	return txt.split(" ")
}
recup = convert(texte);
alert(recup);
*/




/*
11. Exercice fonction récupérer le dernier élément d'un tableau 
var tableau = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var recup;
function dernierElem (tbl) {	
return tbl[tbl.length-1]	
}
recup = dernierElem(tableau);
alert(recup);
*/

// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------

                                        // Manipuler le DOM
                                        // LEÇON 1 Trouver un élément HTML

/*
1. Le concept du DOM 
il n'y avait rien à faire
*/

/* 
2. Récupérer l'élément par son nom 
var result = document.getElementsByTagName('h1')
 */

/* 
3. Compter les éléments récupérés 
var result;
result = document.getElementsByTagName('h1').length;
console.log(result);
*/

/*
4. Parcourir les éléments récupérés selon leur balise
var result;
var longueur;
result = document.getElementsByTagName('p');
longueur = result.length;
for (var i = 0; i < longueur; i++) {
	alert(result[i])
}
*/


/* 
5. Parcourir les éléments récupérés selon leur class 
var result;
var longueur;

result = document.getElementsByClassName('par');
longueur = result.length;
for (var i = 0; i < longueur; i++) {
	alert(result[i])
}
*/

/* 
6. Récupérer les éléments selon leur id 
var result;
result = document.getElementById('bloc');
alert(result)
*/

/* 
7. Récupérer un élément avec un sélecteur css 
var result = document.querySelector("li");
alert (result)
*/


/* 
8. Récupérer une liste d'éléments avec un sélecteur css 
var result;
var longueur;

result = document.querySelectorAll("li");
longueur = result.length;
for(var i = 0; i < longueur; i++) {
	alert(result[i])
}
 */



// --------------------------------------------------------------------------------------------------
                                        //LEÇON 2 Modifier un élément HTML

/* 
1. Modifier le HTML d'un élément 
var recup = document.querySelector('div > p');
recup.innerHTML = "Dernier paragraphe";
alert(recup);
*/

/*
2. Modifier la valeur d'un attribut 
var a = document.querySelector('a');
a.innerHTML = "News Google";
a.href = 'https://news.google.fr/'
*/

/* 
3. Ajouter un attribut 
var a = document.querySelector("ul>li>a");
a.href = "https://news.google.fr/";
a.innerHTML = "News Google";
a.setAttribute("title","Les news Google");
*/

/*
4. Modifier une propriété css 
var recup = document.querySelector('div');
recup.style.color = "blue";
*/


/* 
5. Sélecteur de photos 1/3 
var photos;
var index;
var total;

photos = document.querySelectorAll('.photo-list li');
index = photos.length;
total = document.querySelector('#total em')
*/




/*
var photos;
var index;
var total;

function onClickListItem () {
	
}
for(index = 0; index < photos.length; index++) {
		photos[index].addEventListener('click', onClickListItem);
	}



photos = document.querySelectorAll('.photo-list li');
index = photos.length;
total = document.querySelector('#total em')

 */




/*


 */




/*


 */




/*


 */




/*


 */




/*


 */




/*


 */




/*


 */





