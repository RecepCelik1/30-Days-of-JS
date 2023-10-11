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

        /* Koşul Operatörü (Ternary - Üçlü)*/

/* Üçlü operatör bir koşul yazmaya izin verir. Koşullar yazmanın başka bir yolu üçlü operatörleri kullanmaktır.
*/

let isRaining = true;
isRaining
? console.log('You need a rain coat.')
: console.log('No need for a rain coat.')
isRaining = false;

isRaining
? console.log('You need a rain coat.')
: console.log('No need for a rain coat.')

        /* Alert Metodu */

/* Alert metodu ekranda bir pop-up içerisinde bir mesaj ve genellikle tamam butonu yazan bir mesaj bastırır tamama tıklayınca 
kapanır fln.*/

        /* Window prompt() metodu */

/* prompt() yöntemi tarayıcıda giriş bilgilerini almak için yukarıdaki alerte benzer bir popup şeklinde baloncuğun içinde bilgi
lerin girildiği bir kutucuk çıkarır. Kullanıcıdan alınan datalar bir değişkende saklanabilir. prompt() yöntemi iki argüman alır
ikinci argüman isteğe bağlıdır. */

        /* Window confirm() metot */

/* Confirm yöntemi, bir tamam ve iptal düğmesiyle birlikte belirli bir mesaj içeren bir iletişim kutusu görüntüler. Bir onay kutusu
genellikle bir kullanıcıdan bir şeyi yürütmek için izin istemek için kullanılır. window confirm() arügman olarak bir dize alır. 
Tamam'a tıklamak true değerini, iptale tıklamak false değerini döndürür. */



                /* date nesnesi */
/* JS te geçerli saat tarih javascript date objesi kullanılarak oluşturulur. Date obesini kullanarak oluşturduğumuz nesne, tarih 
ve saat ile çalışmak için birçok yöntem sunar. Bir tarih nesnesi değerlerinden tarig ve saat bilgisi almak için kullandığımız 
yöntemler, bilgiyi sağladığı için get kelimesi ile başlamaktadır. getFullYear(), gerMonth(), getDate(), getDay(), getHours(), 
getMinutes(), getSeconds(), gelMilliSeconds(), getTime(), getDay()*/

/*
    * getFullYear()    get the year as a four digit number (yyyy)
    * getMonth()        get the month as a number (0-11)
    * getDate()         get the day as a number (1-31)
    * getHours()        get the hour (0-23)
    * getMinutes()      get the minute (0-59)
    * getSeconds()      get the second (0-59)
    * getMilliSecond    get the millisecond (0-999)
    * getTime()         get the time (milliseconds since January 1, 1970)
    * getDay()          get the weekdays as a number (0-6)
*/


// Bir date objesi oluşturma

let now = new Date();
console.log(now);

// bir tam yılı almak 

now = new Date();
console.log(now.getFullYear()); // görüldüğü gibi çıktı olarak yılı verdi
