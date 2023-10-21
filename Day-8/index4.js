    // object için yeni key değerler oluşturma

/* Nesne değişenlerin özelliklerini gösterir yani eşlenebilen ve oluşturulduktan sonra içerisindeki indexleri değiştirebiliriz ve keyler
ekleyebiliriz. Hadi bi örnek  görelim
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
person.nationality = `Ethiopian`
person.country = `Sweden`
person.skills.push(`C`)
// görüldüğü üzere nesnemize nationality adında yeni bir key eklendi ve country keyi Sweden olarak değiştirildi ve skills arrayine
//C olarak yeni bir index eklendi.
console.log(person);