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
*/