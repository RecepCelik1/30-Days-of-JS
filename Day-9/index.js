/* High Order Function */

/* Yüksek dereceden fonksiyonlar parametre olarak başka bir fonksiyonu içerisine alabilen ya da başka bir fonksiyonu değer olarak
döndürebilen fonksiyonlardır.

# bir fonksiyon parametre olarak geçebiliyorsa ona callback fonksiyon denir

*/

// CALLBACK

// yukarıda da söylendiği gibi başka bir fonksiyona parametre olarak verilen fonksiyondur.

// callback olarak kullanılacak fonksiyonun adını istediğimiz gibi verebiliriz

const callback = (n) => {
    return n ** 2
}

// bir başka fonksiyonu callback olarak alan fonksiyon (taştaşlı fonksiyon)
function cube (callback, n) {
    return callback(n) * n
}
console.log(cube(callback , 3))

// RETURNING FUNCTİON 
// yüksek mertebeden fonksiyonlar bir başka fonksiyonu değer olarak döndürebilirler. Hemen bir örnek ;

const higherOrder = (n) => {
    const doSomething = (m) => {
        const doWhatEver = (t) => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver // doSomething return olarak kendi köşeli parantezlerine gömülmüş olan doWhatever fonksiyonunu döndürdü
    }
    return doSomething // yukarıdaki ile aynı şekilde
}

console.log (higherOrder(2))