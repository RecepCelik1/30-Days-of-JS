//continue of index.js

/*
    #stringler

*/

/*
    #string birleştirme 
    örnek ;
*/

let firstName = "Recep", space=" ", secondName = "Celik";
let fullName = firstName + space + secondName;
console.log(fullName);

// string birleştrimek için toplama sembolünü kullanmak eski bir yöntemdir. Bu yöntem fazla basit ve hataya açıktır. Daha sonra başka
// bir yöntem göreceğiz.

/* # Uzun değişmez stringler 

string uzunluğu çok büyükse eğer muhtemelen tek bir satıra sığmayacaktır. Stringin bir sonraki satırdan devam edeceğini belirtmek için
her satırın sonunda ters eğik çizgi kullanabiliriz. (\)

örnek:
*/

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

/* Stringlerdeki kaçış dizileri

Javascript ve diğer programlama dillerinde \ (ters eğik çizgi) ardından bazı karakterler kaçış dizisidir. En yaygınları : 

* \n : yeni satır
* \t : Tab, 8 boşluk
* \\ : ters eğik çizgi
* \' : tek tırnak
* \" : çift tırnak

*/

/*  #Şablon değişmezleri 

şablon stringleri oluşturmak için iki ters tırnak kullanıyoruz. Burası şokomelli ters tırnak. = alt gr ve iki kere virgül tuşu
Verileri bir şablon string'i içine ifade olarak ekleme yapabiliriz. Verileri eklemek için ifadeyi $ işareti ile başlayan {} parantezleri içerisine alırız. Böylece bir string içerisine mesela bir sayı değişkeni koyabiliriz.

*/
console.log(`the sum of 3 and 2 is 5`); // statik bir kod
let a = 2, b = 3;

console.log(`the sum of ${a} and ${b} is ${a+b}`); // artık veriler dinamik olarak eklenir.

// stringleri + ile eklemekten daha etkili bir yol olduğundan bahsetmiştik bu kısımda onu anlatacağız. Bu yöntem daha stabil çalışır.

let firstName1 = "Recep", secondName1="Celik", contry = "Turkey";
let personInfo = `I am ${firstName1} ${secondName1}. I live in ${contry}`; // işte bu şekilde
console.log(personInfo);

/* Bir string şablonu veya interpolasyon (matematiksel bir terim) yöntemi kullanarak, bir değer olabilecek ifadeler veya bazı işlemler 
ekleyebiliriz. (karşılaştırma, aritmetik işlemler, üçlü işlem ...)

örneğin:
*/

let num2 = 5, num3 = 9;
let exp = `${num2} is grater than ${num3}: ${a > b}`; // false değerini döndürecektir.
console.log(exp);

//string metodları 

/* JS içerisindeki her şey bir JS objesidir. ilkel string demek bir kere oluşturulduktan sonra onu değiştiremeyiz(türünü). String 
nesnesi pek çok string metoduna sahiptir. Bunlar stringler ile çalışırken, onların özelliklerini bulurken bize çok yardımcı olurlar.
*/

//1-) length

/* legth metodu çıktı olarak bir stringin içerdiği karakter sayısını verir. (space dahil)
örnek 
*/

let js = `JavaScript`;
console.log(js.length); //syntaxı bu şekildedir ve 10 değerini bastırıcaktır konsola.


//2-) accessing each character in a string with using it's index. Js dilindede sayma 0 dan başlayarak yapılır.

let string = `JavaScript`;
console.log(string[0]); //Çıktı olarak J harfini verecektir. İstersek hangi string girilirse girilsin son harfini bulan bir algoritma ya
                        // zabiliriz.
let lastIndex = string.length - 1; // Bu şekilde karakter uzunluğundan 1 çıkararak son indexin numarasını bir değişkene atarız.
console.log(string[lastIndex]); // daha sonra da o değişkeni parametre numarası olarak kullanarak yazdırabiliriz.

// 3-) toUpperCase(): bununla bütün string parametrelerini teker teker büyük harfe çeviririz.

string = `Javascript`;
console.log(string.toUpperCase()); // bununda syntaxı bu şekildedir.
console.log(string.toLowerCase()); // aradan lower case ide çıkaralım :))

// 5-) substr(): bunun içerisine iki tane argüman gireriz biri kaçıncı indexten itibaren stringi bölüceğini, diğeri o ayrımdan sonraki  
// kaç karakteri alıcağını belirler.

string = `JavaScript`;
console.log(string.substr(4,6)); //4. index olan S harfinden itibaren 6 harfi bastıracaktır.

// 6-) substring(): bu da yukarıdaki lavukla aynı işlevi görüyor ama tek farkı aldığı iki argümanın ilki başlangıç indexi ikincisi 
// ise hangi karakterde durucağı ile ilgili index fakat son indexi dahil etmez.

string= `JavaScript`;
console.log(string.substring(0,4)); //Java çıktısını verecektir.

// 7-) split(): Bu metot bir stringi belirtilen yerden bölmeye yarar. (array oluşturuyor).

string = `30 Days Of JavaScript`;
console.log(string.split()); //bu kısımda bir şey belirtmediğimiz için 1 elementli bir array oluştu. -> ["30 Days Of JavaScript"]
console.log(string.split(' ')); // bu kısımda boşluktan böl dediğimiz için 4 elementli bir array oluştu. -> 
                                                                                                //["30", "Days", "Of", "JavaScript"];
firstName = `Recep`;
console.log(firstName.split('')); // Burada sadece tek tırnak kullandığımız için stringin içindeki tüm karakterleri array haline getirdi
                                    // -> ["R", "e", "c" ,"e","p"];

let countries = `Finland, Sweden, Norway, Denmark, and Iceland`;
console.log(countries.split(','));// Buraya dikkat sadece virgül ile ayırıyor. Yani ne demek virgül karakterini gördüğün zaman sök al ve
                                  // oraya kadar aldığın tüm karakterleri ayrı bir array olarak depola. fark edileceği üzere ikinci 
                                  // karakterden itibaren en başta boşlukla ayırdı.
// şu şekikde = ["Finland" , " Sweden" , " Norway" , " Denmark" , " and Iceland"]  !! Burası şokomelli

console.log(countries.split(', ')); //fakat bu sefer direkt boşluksuz ayıracaktır.

//8-) trim(): stringin başındaki ve sonundaki boşlukları silmeye yarar.

string = `  30 Days Of JavaScript   `;
console.log(string.trim(' ')); // tırnak işareti kullanmadan da vanilla olarak kullansak dahi boşlukları silecektir.

//9-) includes(): bu metod string içerisinde belirli bir argümanı arar, bulursa true(1) bulamazsa false(2) değerini döndürür.
// ama harfi harfine arama yapar.

string = `30 Days Of JavaScript`; 
console.log(string.includes('Days')); // true
console.log(string.includes('days')); // false - birebir arama yapar!

// 10-) replace(oldsubstring, newsubstring) bu metot string içerisinde değiştirme yapmanızı sağlar. Eski ve yeni olmak üzere iki 
// argüman alır.

console.log(string.replace('JavaScript','Python')); // 30 Days Of Python

// 11-) charAt(): stringdeki indexi belirttiğinizde o indexin değerini yazdırır. Pek gerekli bir şey değil gibi.

string = `30 Days Of JavaScript`;
console.log(string.charAt(0)); //3 (0. indeksin değerini döndürdü.)

// 12-) charCodeAt(): stringdeki vermiş olduğumuz indeksin ASCII değerini döndürür.

console.log(string.charCodeAt(3)); //D harfinin ASCII karşılığı 68 olduğu için 68 değerini döndürecektir.

// 13-) indexOf(): bu metot belirtilen değerin indeksini verir. Değer bulunamazsa -1 değerini dönrürür ve yine birebir arama yapar.

string = `30 Days Of JavaScript`;
console.log(string.indexOf('D')); // 3 değerini döndürecektir.

// 14-) lastIndexOf(): Bu metot belirtilen değerin son indeksini verir. Değer bulunamazsa -1 sonucunu döndürür. (Birebir arama yapar).
// yukarıdaki yapı bulduğu ilk anda dururken bu en sonuncusuna kadar arar.

string = `30 Days Of JavaScript`;
console.log(string.lastIndexOf('a'));  // a en son 14. indekste mevcuttur 14 değerini döndürür.


// 15-) concat(): bu metot birleştirme işlemini sağlar, birden fazla değer alabilir.

string = `30`;
console.log(string.concat("Days", "Of", "JavaScript"));// 30DaysOfJavaScript

// 16-) startsWith: stringin belirtilen argüman ile başlayıp başlamadığını kontrol eder. true ya da false değerini döndürür. Birebir 
// arama yapar.

string = `30 Days Of JavaScript`;
console.log(string.startsWith(30));// true
console.log(string.endsWith(`Script`)); //17-) Buda son kelime versiyonu true değerini döndürür.

// 18-) search() argüman olarak bir alt dize alır ve ilk eşleşmenin dizinini döndürür. Arama değeri bir dize veya normal ifade kalıbı
// olabilir.

string = `I love JavaScript. If you do not love JavaScript what else can you love.`;
console.log(string.search('love')); // argümanı ilk bulduğu gibi başlangıç index değerini döndürür.

// 19-) match(): argüman olarak bir alt dize veya normal ifade kalubu alır ve eşleşme varsa bir dizi döndürür, değilse null döndürür.
// Normal bir ifade kalıbının nasıl göründüğünü görelim. / işareti ile başlar ve / işareti ile biter.

/* let string = 'love'
   let patternOne = /love/ koşulsuz
   let patternTwo = /love/gi    g-bütün metinde ara, i-büyük küçük harf duyarsız */

//Match syntax

string = `I love JavaScript. If you do not love JavaScript what else can you love.`;
console.log(string.match('love'));

let pattern = /love/gi;
console.log(string.match(pattern));

//20-) repeat(): bağımsız değişken olarak bir sayı alır ve stringi sayı kadar döndürür.

string = `love`;
console.log(string.repeat(5));
