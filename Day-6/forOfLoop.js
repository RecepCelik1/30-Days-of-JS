            /* *for of loop */
//ES6, geleneksel bir döngüden daha basit olan bir döngü olan yeni bir döngü yöntemi sunar ve her tür için ve giriş döngülerinin
//eksiklerini telafi eder.

/* Anladığım kadarı ile mesela bir dizideki elemanların teker teker karesini almak istediğimizde bir i tanımlar gerekli döngüye 
sokardık bunda öyle bişeye gerek yok direk olarak dizinin elemanlarını teker teker dönüp bizim belirlediğimiz başka bir değişkenin
içerisine atıyor sonra aşağıdaki kod bloğunda istersek o değişkeni istediğimiz işlemlerden geçirdikten sonra başa dönüp diğer indexe 
geçiş yapıyor. */

const numbers = [1,2,3,4,5,6,7,8,9]

for (const num of numbers) {
    console.log(num);
} 

// kod pratikliği sağlıyor i tanımlayıp uğraşmak yerine iki satırda hallediyoruz ve daha az karmaşık olduğu için böyle yinelenen 
//durumlarda oldukça verimlidir. özellikle diziler, haritalar ve dize gibi yapılarda dolaşmak için çok verimlidir.

let sum = 0;
for (const num1 of numbers){

    sum = sum + num1;

}

console.log(sum);


//break ifadesi = C dili ile aynıdır.

//continue ifadesi = C dili ile aynıdır.