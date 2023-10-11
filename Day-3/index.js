// Booleans 

/* Bir boolean data türü iki tane value sağlar: true ya da false. Boolean datası bunlardan birine eşit olabilir. Karşılaştırma operatör-
lerini gördüğümüzde daha iyi oturacaktır bunlar. Her bir kıyaslama operatörü yalnızca bu boolean datalarından yalnızca birini return 
eder: true or false.
*/

let truValue = 3<4;  // çıktı olarak true değerini verecektir.
console.log(truValue);

// şimdi burada bir argüman giricek işin içine tam türkçe karşılığı bulunmuyor truthy = doğrumsu, JS dilince true değerine eşit olan ,
// falsy olmayan datalar.
/*
    *All numbers (positive and negative) bunlar true değerini döndürür. (0 hariç)
    *Tüm stringler boolean değeri olarak true sonucunu döndürür. (boş string hariç)
    *data türü olan booleanın true değeri (hadi canım :D)
*/

//falsy values 

/*
    * 0
    * On
    * null
    * undefined
    * NaN
    * the boolean false
    * boş strign
*/

// bu boolean data türünü ilerde karar yapılarında kullanacağız.

/* undefined 
eğer bir variable tanımlar ve değer atamazsak o variable undefined yani tanımsız olucaktır. Buna ek olarak eğer bir fonksiyon değer 
döndürmüyorsa o fonksiyon da undefined olur.
*/

let firstName;
console.log(typeof(firstName)); // it returns with undefined

/*Null
değer yok demektir
*/

let empty = null; 
console.log(empty); // çıktı olarak null vericektir ama tanımsız değildir object yani nesne olarak tanımlanmıştır

/* Assignment Operators 
    
    * = ifadesi pek çok programlama dilinde olduğu gibi JS dilinde de atama operatörüdür. (her zaman sağdaki değer sola atanır)

*/

/*Arithmetic Operators : matematiksel operatörlerdir

    * addition = +
    * substraction = - 
    * multiplication = *
    * division = /
    * modulus = %
    * exponential = ** (üs almak)
    * ++ önüne geldiği değişkenin değerini sadece bir attırır
    * -- yukarıdaki işlevin negatifi
*/

const PI = 3.14;
let radius = 100;  // metre cinsinden

// bu bilgiler bize dairenin alanını hesaplamamıza izin verir

const areaOfCircle = PI*radius*radius;
console.log(areaOfCircle);



const gravity = 9.81;   // m/s2
let mass = 72;          //kilogram

//bu bilgileri kullanarak bir nesnenin kütlesini hesaplayabiliriz

const weight = mass * gravity;
console.log(weight);


        /* Kıyaslama Operatörleri */


/* Kıyaslama operatörleri programlamada önemli yer tutar ve çok sık kullanırız.

    * == eşit mi operatörü iki eşittir olduğunda iki datanın valueları eşit olduğunda true değerini döndürür
    * === bu ise mutlak eşitlik anlamına geliyor yani hem value hem de data type olarak eşit olmalı
    * != eşit değil mi
    * > büyüktür
    * < küçüktür
    * >= büyük eşit
    * <= küçük eşit
*/

        /* Mantıksal Operatörler */

/* aşağıdaki semboller mantıksal operatörlerdir ve yine programlamadaki önemi büyüktüt

    * && ve operatörü iki değerinde 1 olması durumunda 1 sonucunu verir
    * || veya operatörü
    * ! 
*/

        /* Koşul Operatörü */





