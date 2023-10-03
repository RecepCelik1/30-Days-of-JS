//JS ilkel veri türleri

/* 

ilkel veri türleri şunlardır

    # Numbers
    # Strings
    # Booleans
    # Null
    # Undefined
    # Symbol

ilkel olmayan veri türleri şunlardır

    # Objects (nesneler)
    # Arrays (diziler)


Şimdi ilke ve ilkel olmayan veri türlerinin tam olarak ne anlama geldiğini görelim. ilkel veri türleri basit değerleri temsil eden 
ve değerleri doğrudan bellekte saklanan veri tipleridir.Bu türdeki veri tipleri sabit bir boyuttadır ve değiştirilemezler.
    örnek;
*/

let word = 'Javascript';

console.log(word);

word = 5;

console.log(word);

// Görüldüğü üzere bir değişkenin depoladığı data türü ve içeriği değişebilir ama kapladığı boyut değişmez.



/* ilkel olmayan veri türü

İlkel olmayan veri türleri, daha karmaşık veri yapılarını temsil eden ve değerlerin referanslarını tutan veri tipleridir. Bu türlerdeki değerler dinamik boyutlara sahip olabilirler ve değiştirilebilirler. 

hadi bir dizi oluşturarak görelim.
*/

let nums = [1,2,3];
nums[0] = 10;
console.log(nums[0]);

/*js dilinde de dizilerin indeksi 0 dan başlar. (yani sayım 0 dan başlar)

görüldüğü üzere diziler ilkel olmayan değişkenlerdir. ilkel olmayan veri türleri değere göre karşılaştırılamaz. ilkel olmayan veri 
türleri aynı özelliklere ve değerlere sahip olsalar bile, kesinlikle eşit değildirler.

*/

let numbers = [1,2,3];
console.log(numbers==nums); // görüldüğü üzere false değerini verdi.

/* 
    temel kural, ilkel olmayan veri türlerini karşılaştıramıyoruz. Dizileri (arrays), fonkisyonları (functions) veya nesneleri (objects)
    karşılaştırmayın. ilkel olmayan değerler, değer yerine referansla karşılaştırıldıkları için referans türleri olarak adlandırılır.

    iki nesne, yalnızca aynı temel nesneye atıfta bulunuyorlarsa kesinlikle eşittir.

    örnek

*/

let nums1 = [1, 2, 3];
    nums2 = nums1;
console.log(nums1==nums2);  //true (değişken oluştururken numbers'ın değerini nums'a eşitlediği için bunun sonucu true olarak döner.)

let userOne = {
    name: 'Mert',
    role: 'teaching',
    country: 'Turkey'
}

let useTwo = userOne;
console.log(userOne == useTwo); //yukarıdaki ile aynı mantık.


//  # Math Object

//JavaScript'te Math Objesi, sayılar ile çalışmanız için birçok yöntem sağlar.

const PI = Math.PI;  //Math objesi sayesinde PI sayısının değerini otomatik olarak alıyoruz. 
console.log(PI); 

//En yakın sayıya yuvarlama 
// Eğer .5 in altındaysa aşağıya üstündeyse yukarıya yuvarlar. Örn: 3.14 ise 3 yapar 3.51 ise 4 yapar.

console.log(Math.round(3.5)); //.5 ise yukarıya yuvarlıyormuş :))

console.log(Math.floor(PI)); //floor aşağıya yuvarlar
console.log(Math.ceil(PI)); //bu yukarıya yuvarlar

console.log(Math.min[1,2,3,4,5,6]); // Bir dizideki en küçük sayıyı bulmaya yarar
console.log(Math.max[1,2,3,4,5,6]); // Bir dizideki en büyük sayıyı bulmaya yarar

let randomNum = Math.random() //0 ile 0.999999 arasında rastgele bir sayı atar.
console.log(randomNum);

let randomNum1 = Math.floor(Math.random()*10); //0 ile 10 arasında rastgele bir sayı oluştururuz 100 ile çarparsak 0-100 arası fln.
console.log(randomNum1);

let randomNum2 = Math.floor(Math.random()*100); //0 ile 100 arasında
console.log(randomNum2);

console.log(Math.abs(-10)); // mutlak değer

console.log(Math.sqrt(100)); // karekök

console.log(Math.pow(3, 2)); // üs


//Logaritma
//Returns the natural logarithm with base E of x, Math.log(x). Aynı işlevi Math.LN() fonksiyonuda görmektedir.
console.log(Math.log(2)); 
console.log(Math.log(10));

//Trigonometri 
Math.sin(0);
Math.cos(60);