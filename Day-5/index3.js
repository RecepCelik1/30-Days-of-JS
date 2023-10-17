        /* *Dizi elemanlarını joinlemek */
// dizinin elemanlarını birleştirmek için kullanılır, join yönteminde ilettiğimiz argüman dizide birleştirilir ve bir dizi olarak 
// döndürülür. Varsayılan olarak bir virgül ile birleştirilir, ancak elemanlar arasında birleştirilebilecek farklı dizi 
// parametreleri iletebiliriz.

const numbers = [1,2,3,4,5];
console.log(numbers.join()) // default olarak her eleman arasına virgül koyacaktır

const names = [`Recep`,`Samet`,`Yusuf`,`Cihat`];
console.log(names.join());
console.log(names.join(''));
console.log(names.join(' '));       //==> terminaldeki çıktıları inceleyerek daha iyi anlayabiliriz
console.log(names.join(', '));
console.log(names.join(' # '));



        /* *Slice metodu */

//slice: bir aralıktaki çoklu elemanları 
//dilimler iki parametre alır. Bu paramet-
//reler, başlangıç ve bitiş konumlarıdır. 
//Bitiş konumu dahil edilmez

console.log(numbers.slice()); //-> bütün ögeyi kopyalar

console.log(numbers.slice(0)); //-> yine bütün ögeyi kopyalar.

console.log(numbers.slice(0, numbers.length)) //-> bütün ögeyi kopyalar

console.log(numbers.slice(1,4)) //-> bu yazılan parametreler index numarasıdır.
//ilk index dahil edilirken son index dahil edilmez.



        /* *Dizilerde splice metodu */

//splice: üç tane parametre alır; başlangıç konumu, kaldırılması gereken eleman sayısı ve eklenmesi gereken eleman
//sayısı.

let splice1 = numbers.splice();
console.log(splice1); //-> bütün elemanları kaldırı.

const num = [1,2,3,4,5];
splice1 = num.splice(0,1);
console.log(splice1); //-> ilk elemanı kaldırır

const num1 = [1,2,3,4,5,6];
num1.splice(3,3,7,8,9);
console.log(num1.splice(3,3,7,8,9));

        /* *Push metodu */
//push : dizinin sonuna eleman ekler.Varolan bir diziye eleman eklemek için push metodunu kullanırız.

const arr = [`item1`,`item2`,`item3`];
arr.push(`new item`);
console.log(arr)
//[`item1`,`item2`,`item3`,`new item`]










