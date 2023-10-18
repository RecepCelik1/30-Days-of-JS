                /* C dilinden farklı olmak üzere JS fonksiyonlarında bi kaç syntax farkı bulunmaktadır */

/* Js dilinde fonksiyon tanımlamanın bi kaç yolu vardır 
    
    // * Classic Declaration function
    // * Expression function
    // * Anonymous Function
    // * Arrow Function

*/

//klasik fonksiyon tanımlama

/* Klasik fonksiyon tanımlarken JS dilinde function anahtar kelimesini kullanırız

    function functionName(parameterList){

        codes
        return 0;
    }

    functionName() //=> daha sonra bu şekilde o fonksiyonu çağırırız. onun dışında geri kalan her şeyi zaten biliyorum scope olayı,
    biyomlar fln filan. 

*/

//anonymous function-isimsiz fonksiyon

const anonymousFun = function() {
    console.log(
        `i'm anonymous function and my index is stored by anonymous`
    )

    return 0;
}

let a = anonymousFun();
console.log(a);


/*  expression function bir tür isimsiz fonksiyondur. isimsiz fonksiyon oluşturulduktan sonra bir değişkene atayarak kullanabiliriz.
daha sonra o fonksiyondan bir değer döndürmek istediğimizda o değişkeni çağırarak istediğimiz değeri alabiliriz.
*/

/* fonksiyon parametreleri
bu konuyu zaten biliyorum ama bi tekrar etmekte ve JS dilindeki syntaxını gözden geçirmekte fayda var.

*/

function areaOfCircle(r){

    let area = Math.PI * r * r; 
    return area;
}
let r = 5;
let radius = areaOfCircle(r);  // js dilinde bir fonksiyonun parametresini global bir değişkenle bu şekilde eşleştiririz.
console.log(radius);

/* çok parametreli fonksiyon

    function functionName(parm1, parm2, parm3,...){

    }
    functionName(parm1, parm2, parm3,...)

    yukarının yerine ayriyeten şey de yapabiliriz parametre yerine bir dizi atayabilir birde öyle bir durum var hadi bir örnek yapalım

*/ 

function arrayFunction(arr){
    let sum = 0, i;
    for(i=0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

const array1 = [1,2,3,4,5,6,7,8,9];

console.log(arrayFunction(array1));

/* Sınırsız sayıda parametreyle çalışan fonksiyonlar 

# bu benim için yeni bir olay bunu öğrensem iyi olucaktır

    //klasik fonksiyonda sınırsız sayıda parametre

        Bu fonksiyonun tanımlanmasnı fonksiyon scope'nda object temelli arguments anahtar kelimesi ile erişilir. Parametre olarak atanan
        her ögeye arguments üzerinden ulaşabiliriz. Bir örneğine bakmak gerekirse
    
*/