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