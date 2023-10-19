                // nesne 

/* JavaScript dilinde bir nevi C dilindeki struct yapısı gibi bişeydir */

// const person = {} //==> işte bu şekilde boş bi nesne oluşturduk hadi aşağıda içini dolduralım

const person = {
    firstName: `Recep`,
    latsName: `Celik`,
    birthDay: `14 february 2002`,
    country: `Turkey`,
    city: `Istanbul`,
    skills: [
        `HTML5`,
        `CSS`,
        `JavaScript`,
        `React`,
    ],
    isMarried: `false`,
}

console.log(person)

    //Nesneden Data Çekebilmek
/* Nesnenin içindeki datalara iki yöntem kullanılarak erişebiliriz:
        
    * . operatörünü kullanarak
    * {} köşeli parantez kullanarak
*/

const person2 = {
    firstName: `Atakan`,
    latsName: `Gonca`,
    birthDay: `14 february 2002`,
    country: `Turkey`,
    city: `Istanbul`,
    skills: [
        `HTML5`,
        `CSS`,
        `JavaScript`,
        `React`,
    ],
    getFullName: function() {           //==> nesne içerisine fonksiyonda tanımlayabiliriz.
        return `${this.firstName} ${this.latsName}` //==> this anahtar kelimeside direkt olarak nesnein kendisine atıfta bulunur
    },
    isMarried: `false`,
}
console.log(person2.getFullName())

// "." operatörü kullanarak nesne içindeki verileri çağıralım
console.log(person2.firstName)
console.log(person2.latsName)
console.log(person2.birthDay)
console.log(person2.location)// undefined

//köşeli parantez kullanarak
console.log(person2[`firstName`])
console.log(person2[`lastName`])
console.log(person2[`birthDay`])
console.log(person2[`location`])

