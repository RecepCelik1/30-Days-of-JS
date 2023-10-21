const callback = (n) => {
    return n**2
}

const cube = (callback, k) => { // callback fonkisyonunun parametresi olan n ye burada değer atayamayız
                                        
    return callback(k) * k  // onun yerine fonksiyon içerisinde parametresine bir değer atarız
}

/* yukarıda callback fonksiyonu parametre olarak kullanmaya güzel bir örnek mevcuttur efenim. callback fonksiyonuna cube fonksiyonu 
içerisindeyken parametre olan k yı callback in parametresi olan n ye eşitledik ve böylece callback fonksiyonunun parametresine 
değer atayabildik */

console.log(cube(callback,3)) 

// !! higher order fonksiyonlar parametre veya return değeri olarak kullanılamazlar.

