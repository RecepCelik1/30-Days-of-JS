                    // Diziler

// tıpkı C dilinde olduğu gibi bu JS tede dizilerin indexi sıfırdan başlar.

// JSte aynı dizi içerisinde farklı türdeki dataları depolayabiliriz ve her bir dizi elemanına index numarası ile erişip sonradan
// değerini değiştirebilir. Bir dizi boş olabilir.
// ve C dilinden farklı olmak üzere JS te bir arrayın kaç tane eleman depolayacağını önceden belirtmek zorunda değiliz.

const arr = Array(1,2,3,`i love JS`); // array oluşturmak için const kullanmak çok yaygındır. const kullanıyorsak bu değişken adını bir 
console.log(arr[3]);                   // bir daha kullanmayacağız demektir.

console.log(arr[3][0]); // çıktı olarak i verecektir. bir array içerisine string tanımladığımızda zaten 2 boyutlu dizi tanımladık 
                        // demektir.

const arr1 = [

`Recep`,

21,

true,

{country: `Turkey`, city: `Istanbul`},

{skills: [`HTML5`,`CSS`,`JS`,`React`,`Python`] },

]

console.log(arr1.length);  // bu şekilde .length ile bir dizinin içerisinde kaç eleman olduğunu görebiliriz.

// split ile diziyi istediğimiz şekilde bölebiliriz.

let js = `JavaScript`;
const charsInJavaScript = js.split(''); 
console.log(charsInJavaScript); // görüldüğü üzere çıktıda köşeli parantezler içerisine bir array oluşturdu.

let companiesString = `Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon`;
const companies = companiesString.split(`,`);
console.log(companies); // çıktıya dikkat split fonksiyonu virgülü gördüğü zaman ayırıp farklı bir array yapıp devam eder. böylece
                        // diğer çıktılardan önce bir space kalır.

                        
let txt = `I love learning coding. I'm currently learning JS, HTML5, CSS, React`;
const words = txt.split(' ');
console.log(words);