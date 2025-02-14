// console.log("Hello Node.js")
// console.log("Bienvenue dans backend")

// const sumArray = (table, callback) => {
//     const sum = table.reduce((acc, curr) => acc + curr,0)
//     callback(sum)
    
// }

// sumArray([1, 2, 3], (result) => {
//     console.log("La somme des éléments est :", result)
// })


// ecriver une function nommez commandezPlats cette fonction s'attend à recevoir un paramètre de plats
// mettez en evidences les etapes de livraison du plat en mettant en évidence les étape de livraison du plats avec les promises

// const commandezPlats = (plats) => {
//    return new Promise((resolve, reject) => {
//     if (plats === "viande") {
//         return resolve()
//     } else{
//         return reject()
//     }
// })}

// commandezPlats("poisson")
//     .then((result) => console.log("c'est le bon plats"))

//     .catch((error) => console.log("c'est pas le bon plats")
// )

// const { error } = require("console");
const fileSysteme = require("fs");

// fileSysteme.readFile("menu.txt", (error, data) =>{
//     return 
// })

// fileSysteme.writeFile("commande.txt", "le nouveau text enregistré", (error) =>{
//     if(error) {
//         console.log("erreur du fichier")
//     } 
// }
// //     )
// fileSysteme.appendFile("commande.txt", "\n mise à jour", (error) =>{
//     error ? console.log("impossible d'ecrire dans le fichier") : console.log("le fichier a ete ajouter")
// })

// fileSysteme.rm("fichier", {recursive:true}, (error) =>{
//     error ? console.log("impossible de supprimer le dossier") : console.log("le dossier a ete supprimé")
// })

// gestion des taches
// creer une application permettant de creer une tache, modifier, afficher, de supprimer une tache
const gestionTache = require("readline")

const intertface = gestionTache.createInterface({
    input: process.stdin,
    output: process.stdout
})

const faireAction = () => {
    console.log("1 - Création");
    console.log("2 - Afficher");
    console.log("3 - Modifier");
    console.log("4 - Supprimer");
}

faireAction()

intertface.question("Faire une action \n", (choisir) => {
    switch(choisir) {
        case "1":
            creerFichier()
            break;
            
        case "2":
            afficherFichier()
            break;
            
        case "3":
            modifierFichier()
            break;
            
        case "4":
            supprimerFichier()
            break;
            
        default:
            console.log("Choix invalide")
            faireAction()
    }
})

const creerFichier = () => {
    intertface.question("Creer votre fichier \n", )
}
creerFichier()




