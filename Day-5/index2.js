        /* Dizileri Manipüle Edebilecek Metotlar */
// Söz konusu metotlar = Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push,pop
// shift, unshift 

// const arr = Array() => boş bir dizi yaratır daha sonra istersek içini doldurabilir.

// const sixEmptyValues = Array(6) /=> 6 tane boş index oluşturur daha sonra istersek içini doldurabiliriz.


        /* fill ile statik değerler yaratmak */

// fill : bütün dizi elemanlarını statik değerle doldurur

const sixXvalues = Array(6).fill(`X`); // X değerine sahip 6 tane index oluşturur
console.log(sixXvalues); 


        /* Concat kullanarak dizileri birleştirmek */

// concat: iki veya daha fazla diziyi birbiri ile birleştirir

const fruits = [`banana`, `orange`, `mango`, `lemon`];
const vegetables = [`Tomato`, `Potato`, `Cabbage`, `Onion`, `Carrot`];

const fruitsAndVegetables = fruits.concat(vegetables);
console.log(fruitsAndVegetables);


        /* Dizi uzunluğuna ulaşmak */

// length: dizinin içindeki toplam index sayısını belirtir
const number = [1,2,3,4,5];
console.log(number.length);


        /* Bir dizinin içerisindeki elemanın index numarasına ulaşmak */
// bu iş için indexOf kullanırız. Bahsi geçen elemanın dizinin içerisinde olup olmadığını kontrol eder. Eğer mevcutsa o elemanın index 
// numarasını, değilse -1 değerini döndürür.

console.log(number.indexOf(5)); // -> 4 değerini döndürecektir


        /* *Dizi içindeki son indexe ulaşmak */
//lastIndexOf: bir elemanı arıyorsun diyelim o elemanın dizideki en sonlarında olanın index numarasını döndürecektir.

const num = [1,2,3,4,5,3,1,2];
console.log(num.lastIndexOf(3)); // görüldüğü üzere 2. değil, 5. indexteki 3 ün index numarasını döndürecektir: 5 :D


        /* *includes */
// bir dizide bir öğenin oluğ olmadığını kontrol etmek için kullanılır. Mevcut ise true, değilse false değerini döndürür.

console.log(number.includes(4));


        /* *Diziyi kontrol etmek */
//Arra.isArray -> adından da anlaşılacağı üzere bir data typeın dizi olup olmadığını kontrol eder.

console.log(Array.isArray(number));
const num100 = 100;
console.log(Array.isArray(num100));


        /* *Diziyi stringe çevirmek */
//toString: diziyi string bir ifadeye çevirir.

console.log(number.toString());

const names = [`Recep`, `Efkan`, `Ege`,`Eray`]
console.log(names.toString());


