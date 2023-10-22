        /* Functional Programming - Fonksiyonel Programlama */

/* JS dili normal, manuel döngü yerine karmaşık sorunları çözmemizi sağlayacak pek çok yerleşik yöntem sunmaktadır. Bu metotların hepsi
callback fonksiyonu ile birlikte kullanılabilir. Bunlar;

    //forEach

    //map

    //filter

    //reduce

    //find

    //every

    //some

    //sort
*/

/* forEach 
forEach: bir arrayın elemanlarını teker teker gezer. "element", "index" ve dizinin kendisi ile callback fonksiyonunu parametre olarak 
alabilir. "index" dizinin kendisi isteğe bağlı olarak parametre olarak verilmeyebilir.
*/

let sum = 0;
const numbers = [1,2,3,4,5];
numbers.forEach(num => console.log(num))
console.log(sum)