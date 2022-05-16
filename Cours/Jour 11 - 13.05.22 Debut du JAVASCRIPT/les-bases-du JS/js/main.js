//permet d'afficher un message ou une donnée dans la console du navigateur
console.log("Coucou, je fonctionne!");//votre meilleur ami!

console.log("J'ai pas de virgule")

//on simule une erreur
console.error("Je suis une erreur!")

//le stockage de nos valeurs que l'on va pouvoir maniupler tout au long de notre code js

//constante: son but est de stocker des données que l'on ne modifiera pas et que nous pourrons appeler à plusieurs reprises
const maConst = "Je suis une constante"; 

//varibles: on stock des données qui seront modifiables tout au long de notre code;

let maVariable = 'Coucou, je suis une variable';

var maVieilleVariable = "Coucou je suis moi aussi une variable"; //marche mais déprécié

console.log(maConst)

console.log("mes variables: ", maVariable, ', ' , maVieilleVariable)//j'ai déclaré plusieurs valeurs

//les types

//objet: données structurés
//string: chaîne de charactère se déclare entre des guillemets doubles ou des simples quote
//type number: chiffre
//boolean: true ou false (on s'en sert beaucoup pour les vérifications conditionnelles)
//null: donnée vide
//undefined: non définit (le navigateur ne comprend)


//exemple de undefined, lorsqu'on appel une donnée qui n'a pas de valeur
let fsjs = undefined;
let fsjs2 = null
console.log(fsjs)
console.log(fsjs2)

let bidon

console.log("bidon", bidon)

//CONCATENATION
//on peut assembler des données de types différents ensemble pour en faire une phrase
let nom = "Jean"; //type des string
let age = 30; //type number

const maPhrase = "Bonjour, je m'appel " + nom + " et j'ai " + age + " ans! Dans " + 3 + " ans j'en aurais " + 33 + '!';

console.log(maPhrase)

//concaténation version ES6
let phraseES6 = `Bonjour, je m'appel ${nom} et j'ai ${age} ans! Dans ${3} ans j'en aurais ${33}! <br>`
//on utilise des backquotes

//avec document.write, je peut afficher des données dans mon html (provisoire)
document.write(phraseES6)

//alert("Bienvenue") //infobulles

//prompt envoi une question avec un champs de text pour l'utilisateur
//const rep = window.prompt("Quel age as-tu?") //on peut mettre juste prompt() il comprend

//console.log(rep)
//la réponse de l'utilisateur sera stocké dans la constante rep en tant type string

//confirm nous demande de valider une info si c'est ok: renvoi le boolean true sinon false

/*--------------------------------*/

//const confirmation = window.confirm("Avez-vous plus de 18 ans?") //on peut juste mettre confirm

//console.log(confirmation)

//CONDITIONS
//nous permettent de faire des vérifications en javascript

//OPERATEUR DE COMPARAISON

// == simple égal (ne prend pas en compte son type) si vous mettez "33" ou 33 il l'interprétera
// === égalité strict si la valeur attendue est un type number il ne prendra pas en considération le "33"
// != non égal (ne prend en compte son type lui aussi)
// !== non égal strict (type pris en compte)
// && pour des conditions multiples "et" on appel ça eperluette
// || pour dire "ou" on appel cà le pipe
// > supérieur ou < pour inférieur
// >= supérieur ou égal, <= inférieur ou égal

//CONDITION SIMPLE IF ELSE

//si confirmation est true

/*if(confirmation){
    console.log("Ok tu peux rentrer sur le site")
}*/

//si confirmation est strictement égal true / équivaut if(confirmation === true)

/*if(confirmation) {
    document.write("Petit coquin")
}else{
    //sinon
    document.write("Je vais contacter tes parents")
}*/

/*--------------------------------*/

/*if(confirmation === true) {
    document.write("Petit coquin")
}else{
    document.write("Je vais contacter tes parents")
}*/

/*--------------------------------*/

//parseInt convertit une chaine de charactère en nombre entier 30, parseFloat en nombre décimal 30.0

//let myAge = parseInt(window.prompt("tu as quel age mon poulet?"))

//let myAge2 = parseFloat(window.prompt("combien de pognon?"))

//console.log(myAge)

//console.log(myAge2)

//pour éxécuter le code du if les deux conditions doivent être vérifier
/*if(confirmation === true && myAge < 50){
    document.write("<p>petit coquinou!</p>")
}else{
    document.write("<p>trop jeune ou trop vieux!</p>")
}*/

//CONDITION multiple IF ELSEIF ELSE (se limiter à 4 max)

/*if(confirmation === true && myAge === 50){
    console.log("if")
} else if(confirmation === true && myAge < 50){
    console.log("else if moins de 50 piges")
} else if(confirmation === true && myAge > 50){
    console.log("else if plus de 50 ans")
}else{
    console.log("else trop jeune")
}*/

//CONDITION MULTIPLE SWITCH

/*switch(myAge){
    case 50:
        console.log("Tu as 50 ans!!!")
    break;
    
    case 30:
        console.log("Tu as 30 piges")
    break;
    
    case (40 || 45):
        console.log("Tu as 40 ou 45 piges")
    break;
    default:
        console.log("Aucune condition remplie")
    break;
}*/

//pour éviter la if dans une switch moi j'utilise le boolean

/*switch(true){
    case (myAge === 50):
        console.log("50 ans!")
    break;
    case (myAge > 50):
        console.log("papy")
    break;
    case (myAge < 50):
        console.log("Jeunot")
    break;
}*/

//LES TABLEAUX
//le tableau nous permet de stocker plusieurs élément de n'importe quel type

//tableau old school
const tab = new Array("Pierre", "Paul", "Jack")

//version plus propre
const tableau = ["Pierre", "Paul", "Jack", 30, null]
                  //0        1       2     3     4 = 5 éléments déclarés
//le premier élément du tableau part de l'index 0

console.log(tableau)

//on peut manipuler les index de ce tableau
console.log(tableau[1]) //ici il va afficher paul

//on peut connaitre la longueur du tableau avec la propriété .length
console.log("longueur: ", tableau.length)

//ajout d'un index dans le tableau
tableau.push("Jacky")
console.log("push", tableau)


//LES OBJETS

//l'objet nous permet de stocker plusieurs élément sous forme d'arboressence clé => valeur

//objet old school
const myObj = new Object()
myObj.name = "Antoine";
myObj.fonction = "Lord";
myObj.age = 30;

/*const myObj = {
    name: "Antoine",
    fonction: "Lord",
    age: 30
}*/

console.log(myObj)

//pour accéder à des valeurs; je vais appeler sa clé
console.log(myObj.name)

//objet le plus utilisé

const Perso = {
    name: "Antoine",
    fonction: "Lord",
    age: 30,
    guns: {
        fusil: ["Mauser", "k31", "Dragunov"],
        nbr: 10,
        specialite: "sniper"
    }
}

console.log(Perso)

console.log(Perso.name)
console.log(Perso.guns)//affiche tout l'objet présent dans la propriété guns

console.log(Perso.guns.specialite) //sniper

console.log(Perso.guns.fusil[2])//dragunov

//on peut mettre vraiment tout ce qu'on veut dans un objet types, autre objet, function, tableau

//on peut mettre des objet aussi dans un tableau

const Personnages = [
                        {name: "Kevin", age: 14, niveau: "junior"},//index 0
                        {name: "Clara", age: 24, niveau: "confirmée"},//index 1
                        {name: "Seb", age: 25, niveau:"expert"}//index 2
                    ]
                    
console.log(Personnages)


document.write(tableau)

//BOUCLES

//notre boucle va parcourir notre tableau et manipuler un par les éléments (chaque tour de boucle correspond à un élément)

//FOR
//i correspond à l'index de chaque élément, i++  incrémentation on passe à l'index suivant
for(let i = 0; i < tableau.length ; i++){
    document.write("<p>"+ tableau[i] +"</p>")
}
//tu me parcours tous les éléments de mon tableau 1 par 1 et pour chaque tour de boucle tu m'affiche sa valeur

//forEach va parcourir le tableau, element correpond à la valeur visé (index) pour chaque tour de boucle
tableau.forEach(element => document.write("<h2>"+element+"</h2>"))

tableau.forEach((element) => {
    document.write("<h3>"+element+"</h3>")
    })


//ici index est optionnel et nous permet de récupérer l'index généré par la boucle
//on l'utilise dans le cas ou notre élément dans la base de donnée ne possède pas d'id
tableau.forEach((valeur, index) => {
    document.write("<h3>"+ index + " " + valeur +"</h3>")
    })
    
const newTab = [
    {id: 33, mot: "coucou"},
    {id: 47, mot: "kikoo"},
    {id: 2, mot: "salut"}
    ]
    
newTab.forEach((element) => {
    document.write(`<p>id: ${element.id} , mot: ${element.mot}</p>`)
})

//BOUCLE MAP
//utilisée à fond dans react (cousine de forEach)
//en temps normal dans react on devra utiliser un key se référant à l'id.
newTab.map((element)=>{
    document.write(`<h2>id: ${element.id} , mot: ${element.mot}</h2>`)
})


//BOUCLE DO WHILE

//éxécute une action tant que la condition n'est pas remplie
let coucou 
/*do{
    coucou = prompt("Quel est ton nom?")
}while(coucou !== "antoine")

console.log(coucou)*/


//BOUCLE WHILE (cousine de la do while)

//tant que la condition n'est pas rempli, tu éxécute
/*while(coucou !== "antoine"){
    coucou = prompt("Quel est ton nom? ")
}
console.log(coucou)*/


//FONCTIONS

/* les fonctions nous permettent d'isoler un bout de code que l'on pourra réutiliser autant qu'on souhaite */

//le mot clé fonction nous permet de déclarer la fonction
function giveName(){
    console.log("je suis une fonction simple")
}

//appel de la fonction
giveName()
giveName()
giveName()

//on peut leur donner des valeurs en argument, on peut attribuer une valeur par défaut à un argument pour éviter le cas cet argument n'est pas rempli lors de l'appel de la fonction
function myName(name, age = 19){
    const phrase = `Je m'appel ${name} et j'ai ${age} ans!`
    console.log(phrase)
}

//on va pouvoir automatiser cette phrase

myName("Pierre", 30)
myName("Paul", 5)
myName("Jack")

//fonction anonyme est une fonction que l'on va éxécuter une seule fois (pas de nom)
console.log("fonction anonyme ", function(){
    return "je suis anonyme"
})

//cette fonction n'est plus anonyme à partir du moment ou je la stock dans une constante
const nomination = function(){
    console.log("je ne suis plus anonyme")
}

nomination()

//fonction fléchée

const maFonctionFlechee = ()=>{
    console.log("Je suis fléchée")
}

maFonctionFlechee()

const maFonctionArg = (name)=>{
    console.log("Je suis fléchée " + name)
}

maFonctionFlechee()
maFonctionArg("Bryan")

//fonction fléchée anonyme

console.log(()=>{
    return("je suis fléchée anonyme")
})

//lorsque je clique sur le bouton tu me déclenche ma fonction anonyme
document.querySelector("button").addEventListener('click', ()=>{
    console.log("je suis anonyme et fléchée")
})


//par défault les fonctions fléchées sont anonyme, mais lorsque l'on attribut cette fonction à une constante elle devient nommée (on verra plus tard l'intéret de la fléchée (par rapport au this))

//Calcul

// + pour additionner
// - pour soustraire
// * pour multiplier
// / pour diviser
// % modulo = le restant d'une division
// ** pour les puissances


let calcul = 3 + 5
console.log(calcul)//8

let essai = "3"+"5"
console.log(essai)
//attention ici il ne fera pas de calcul, car js va concaténer et non additionner car il capte que c'est des chaines de charactère => il affichera 35 et non pas 8

let calcul2 = 4 * 7
console.log(calcul2)

let division = 3 / 1
console.log(division)

let modulo = 3 % 2
console.log(modulo)


/* DATES */

let maDate = new Date()
console.log(maDate)

console.log("jour", maDate.getDay())//l'index 0 est dimanche
console.log("month", maDate.getMonth()) //l'index 0 est janvier
console.log("année", maDate.getFullYear())//2022