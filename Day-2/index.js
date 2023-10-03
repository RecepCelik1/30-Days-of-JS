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