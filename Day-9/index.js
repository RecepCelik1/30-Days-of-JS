/* High Order Function */

/* Yüksek dereceden fonksiyonlar parametre olarak başka bir fonksiyonu içerisine alabilen ya da başka bir fonksiyonu değer olarak
döndürebilen fonksiyonlardır.

# bir fonksiyon parametre olarak geçebiliyorsa ona callback fonksiyon denir

*/

// CALLBACK

// yukarıda da söylendiği gibi başka bir fonksiyona parametre olarak verilen fonksiyondur.

// callback olucak fonksiyonun adını istediğimiz gibi verebiliriz
const callback = (n) => {
    return n ** 2
}

// bir başka fonksiyonu callback olarak alan fonksyion (taştaşlı fonksiyon)
function cube (callback, n) {
    return callback(n) * n
}
console.log(cube(callback, 3))