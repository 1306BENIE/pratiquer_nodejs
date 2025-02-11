// console.log("Hello Node.js")
// console.log("Bienvenue dans backend")

const sumArray = (table, callback) => {
    const sum = table.reduce((acc, curr) => acc + curr,0)
    callback(sum)
    
}

sumArray([1, 2, 3], (result) => {
    console.log("La somme des éléments est :", result)
})

// console.log(sum(1, 2, 3, 4))









