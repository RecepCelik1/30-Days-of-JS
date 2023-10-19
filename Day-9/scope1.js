                    /* Nesne Yapısı */

// scope olayı

// Global Scope
// Local Scope

/* Bu olaya yine C dilinden epey aşinayız. Global olma olayı iki şekilde olabilir dosyanın direkt kendisinde global olabilir veya 
bazı kod bloklarına göre global olabilir. */

let a = `JavaScript`
let b = 10

// function scope
function letsLearnScope() {

    console.log(a,b)    //==> burasıda global olan a, b değişkenlerini bastırır
    
    let value = false
    
    //block scope
    {
        let a = `NodeJS`
        let b = 100
        let c = 2002                //==> burası block scope olayına güzel bir örnek
        value = !value                 
        console.log(a,b,c,value)
    }

    // görüldüğü gibi yukarıdaki değişkenler ve sakladıkları datalar o block içerisinde kaldı ve c değişkeni için undefined hatası verdi
    console.log(a,b,value) // Javascript 10 undefined false

}

letsLearnScope()

console.log(a,b)