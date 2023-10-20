const ex1 = `He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.`
let arrayOfText = ex1.split(` `)
let salary = [
    parseInt(arrayOfText[2]),
    parseInt(arrayOfText[8]),
    parseInt(arrayOfText[12]),
]

let annualEarning = 12*(salary[0] + salary[1] + salary[2])

console.log(`This guy earns ${annualEarning} dolars per years`)

