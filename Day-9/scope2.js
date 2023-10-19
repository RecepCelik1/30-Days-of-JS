/* 

artık scopelar hakkında birşeyler biliyoruz. var anahtar kelimesi ile tanımlanan değişkenler function scope arasında geçerli
olurken, let ve const ile tanımlanan değişkenler block scope olarak geçerli olmaktadır. Block kavramını biraz daha açmak gerekirse 
JavaScript ve çoğu diğer yazılım dilinde {} parantezler arası olarak tanımlanabilir.
 hemen örnek.

*/

function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
}
letsLearnScope()
// console.log(gravity) //==> kod bloğunu girdiğimizde konsol undefined hatası vericektir çünkü var anahtar sözcüğünün özelliği function
// scope içerisinde local olarak davranır

if(true) {
    var gravity = 9.81
    console.log(gravity)
}

console.log(gravity)

{
    var birthDay = 14
}
console.log(birthDay)

// görüldüğü üzere block scope arasında var anahtar kelimesi ile tanımlanan değişkenler global olarak davranır.

function letsLearnScope2(){
    
    const gravityEarth = 9.81
    console.log(gravityEarth)

}

letsLearnScope2()

//console.log(gravityEarth)  //==> dediğimiz anda undefined cevabını yapıştırır konsol bize

if(true) {

    let gravityEarth = 9.81
    console.log(gravityEarth + ` if scope`)

}

// console.log(gravityEarth) yine undefined hatasını alırız
