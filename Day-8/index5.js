// object methodlarından devam

// Object.keys: bir nesnenin anahtarlarını veya özelliklerini dizi olarak almak için kullanılır.

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

const keys = Object.keys(person)
console.log(keys)

// Object.keys: nesnenin keylerine karşılık gelen isimlendirmeleri dizi içerisine almak için kullanılır buraya dikkat yani o keylere
// atanan dataları değil sadece o keylerin isimlerini dizi içerisine alır.

const values = Object.values(person)
console.log(values) 

// bu method ise adı üstünde values yani değer yani o keylere atanmış dataları array içerisine alır. (Object.values)

const entries = Object.entries(person)
console.log(entries)

// bu method ise hem keyleri hemde o keylerin valuelerini array içerisine alır. ama her bir key ve değeri bir array olucak şekilde. 
// o arrayin içinde önce key adını daha sonrada o keye karşılık gelen value değerini assign eder. (Object.entries)

console.log(person.hasOwnProperty(`firstName`))
console.log(person.hasOwnProperty(`score`))

// hasOwnProperty methodu ise bir diiz içerisinde belirli bir keyword olup olmadığını kontrol eder iki farklı değer alır varsa true, 
// yoksa false değerini alır.