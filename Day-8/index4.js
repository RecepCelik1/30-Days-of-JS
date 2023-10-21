    // object için yeni key değerler oluşturma

/* Nesne değişenlerin özelliklerini gösterir yani eşlenebilen ve oluşturulduktan sonra içerisindeki indexleri değiştirebiliriz ve keyler
ekleyebiliriz.

methods = Object.assign, Object.keys, Object.values, Object.entries
*/

const person = {
    firstName: `Recep`,
    surName: `Celik`,
    age: `21`,
    country: `Turkey`,
    city: `Istanbul`,
    skills: [
        `HTML5`,
        `CSS3`,
        `JavaScript`,
        `React`,
        `Node`,
    ],
    getFullName: function(){
        return `${this.firstName} ${this.surName}`
    },
}
person.nationality = `Turkish`
person.country = `Sweden`
person.skills.push(`C`)
// görüldüğü üzere nesnemize nationality adında yeni bir key eklendi ve country keyi Sweden olarak değiştirildi ve skills arrayine
//C olarak yeni bir index eklendi.
console.log(person);

/* Object Methodları
stringlerde olduğu gibi objectler içinde methodlar vardır hadi görelim
*/

// object.assign: nesneyi orijinal nesneyi değiştirmeden kopyalamak için kullanılır.

const copyPerson = Object.assign({}, person); //Object.assign için güzel bir örnek
console.log(copyPerson)



