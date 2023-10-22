    /* Setting Time */
/* JavaScriptte bazı fonksiyonları belirli bir zaman aralığında yürütebiliriz veya bazı fonksiyonları yürütmek için belirli bir süre
planlama (bekletme) yapabiliriz */

// setInterval
// setTimeout

// setInterval fonksiyonu ile süre ayarlama

/* 
JavaScriptte belirli bir zaman aralığında sürekli olarak istediğimiz şeyi yapmak için SetInterval fonksiyonunu kullanırız.SetInterval,
genel olarka bir callback fonksiyonu ve ikinci olarak, belirlemek istediğimiz süreyi parametre olarak kullanırız. Özetle bizim 
istediğimiz kod bloğunu belirlediğimiz süre içerisinde sürekli olarak döndürür.
 */

// syntax

var duration = 1000 // zaman birimi olarak ms kullanır burada 1000 dedik onu 1000 ms olarak alıcaktır aşağıda 
function callBack() {
    console.log(`Hello`)
}
// setInterval(callBack,duration) // 1000ms = 1sn saniyede bir hello yazdıracaktır.


// setTimeOut ile zaman ayarlama

/* JavaScriptte ileriye dönük çalışacak fonksiyonlar planlayabiliriz. Tam da bu iş için setTimeOut metodu yardımımıza koşuyor. Bu 
fonksiyonda yukarıdakine benzer şekilde bir callback fonksiyon ve ms cinsinden bir süre değerini parametre olarak alır */

//syntax gösteriminde yukarıdaki callBack fonksiyonunu tekrar kullanacağım

setTimeout(callBack, 2000) // setInterval gibi belirli zaman aralıkları ile tekrar tekrar çalışacak şekilde değilde 2 sn bekledikten 
                            // sonra bir kere çalıştırıcaktır fonksiyonu
