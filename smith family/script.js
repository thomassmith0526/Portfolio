const babyGirlNames = ['Beth', 'Gerogia', 'Chilly', "Missy"]
const babyBoyNames = ['Jackson','Bue', 'Thomas', 'David']
console.log(babyBoyNames)
console.log(babyGirlNames)
let middleName = 'Ried'
console.log(`My name is ${babyBoyNames[0]} ${middleName}`)


for(let i = 0; i < babyBoyNames.length; i ++) {
    console.log(`My name is ${babyBoyNames[i]} ${middleName}`)
}
for(let i = 0; i<babyGirlNames.length; i ++) {
    console.log(`My name is ${babyGirlNames[i]} ${middleName}`)
}
for( const babyName of babyBoyNames) {
    console.log(babyName)
}