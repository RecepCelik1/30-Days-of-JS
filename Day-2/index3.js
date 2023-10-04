// Veri Türlerini Kontrol Etme ve Döküm

//veri türlerini kontrol etme

//bunu için typeof kullanırız.

let firstName = `Recep`;
console.log(typeof(firstName)); // bu şekilde zate bildiğimiz bişey.

// Veri Türünü Değiştirme (Döküm)

// * Döküm = Bir veri tipini başka bir veri tipine dönüştürme. Aritmetik işlem yapmadan önce string olarak alınmış bir sayıyı 
// float veya integere dönüştürmemiz gerekir.

// string to int : aşağıdaki metotları kullanarak yapabiliriz bu işi

/* 
    *parseInt()
    *Number()
    *Plus sign(+) // artı işareti demek
 */

    let num = '10';
    let numInt= parseInt(num);
    console.log(numInt);

    num = '10';
    numInt = Number(num);
    console.log(numInt);

    num = '10';
    numInt = +num;
    console.log(numInt);


// string to float: yukarıdakinin aynısı tek farkı parseFloat dememiz.

// float to in: parseInt() kullanılır yine fakat unutma aşağıya yuvarlicaktır sayıyı.


