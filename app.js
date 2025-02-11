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

const commandezPlats = (plats) => {
   return new Promise((resolve, reject) => {
    if (plats === "viande") {
        return resolve()
    } else{
        return reject()
    }
})}

commandezPlats("poisson")
    .then((result) => console.log("c'est le bon plats"))

    .catch((error) => console.log("c'est pas le bon plats")
)
