/* Sınırsız sayıda parametreyle çalışan fonksiyonlar 

# bu benim için yeni bir olay bunu öğrensem iyi olucaktır

    //klasik fonksiyonda sınırsız sayıda parametre

        Bu fonksiyonun tanımlanmasnı fonksiyon scope'nda object temelli arguments anahtar kelimesi ile erişilir. Parametre olarak atanan
        her ögeye arguments üzerinden ulaşabiliriz. Bir örneğine bakmak gerekirse
    
*/

// arguments nesnesine erişelim

function example() {
    console.log(arguments);
} 

example(1,2,3,4);
// o fonksiyonu dışarıdan çağırıp parantezler içerisine parametre atarken bir sınır yoktur ama işte atanan parameterelerin önceden adı 
// olmadığı için o parametredeki indexlere ulaşabilmek için arguments adındaki anahtar kelimeyi kullanırız arguments bir array gibi 
// davranır

function sumAllNumbers(){

    let i, sum = 0;
    for(i = 0; i < arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}
let a = 1, b = 2, c = 3, d = 4, e = 5; 
let sum = sumAllNumbers(a,b,c,d,e);
console.log(sum);



function sumAllNumbers2(){

    let i, sum = 0;
    for(i = 0; i < arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}

let sum2 = sumAllNumbers2(1,2,3,4,5,6,7,8,9);
console.log(sum2);


/* kendi kendine çağırılan fonksiyonlar 

javascript syntaxında farklı olarak birde kendi kendine çalışan (kendini çağıran fonksiyonlar) mevcuttur. bi örnek görelim ;
*/

(function(n) {
    console.log(n*n);  // aynen bu şekilde kullanılır görüldüğü üzere fonksiyon  başka bir yerde çağırılmadan kendin kendine çalışıp
})(2)                  // konsola 4 yazısını bastırdı.

// sadece yazdırmakla kalmayıp içerisinde veri saklamak istersek onuda şu şekilde yaparız

let squaredNum = (function(n) {
    return n*n;
})(10)

console.log(squaredNum); // görüldüğü üzere fonksiyon değer sakladı ve onu kendi kendine çalışıp squaredNum adındaki değişkene atadı.

/* Arrow function 
klasik fonksiyona alternatif olarak kullanılan arrow functionın sözdiziminde ufak bir farklılık vardır.function anahtar kelimesi
yerine => işareti kullanılır. hadi syntaxları kıyaslayalım ; 
*/

/* klasik fonksiyonu şu şekilde tanımlarız ;

function square(n){

    return 0;
}
    hadi birde arrow versiyonunu görelim
*/

const square = n => {
    let sum;    
    sum = n*n;              // aynen bu şekilde
    return sum;         
}