                /* Conditionals - Koşullar */

/*
    *if-else else-if
    *switch-case 
    *ternary operator
*/


/* if kullanımı

if(condition) {
    codes
}

*/

// kodların syntaxı C dili ile birebir aynıdır zaten C dili bildiğim için sadece hatırlatma amaçlı bi kaç örnek bırakır geçerim.

/*
    switch(caseValue){
        
        case 1:
            //codes
          break
        
        case caseValue > 2:  //caselerde koşul ifadeleride kullanılabilir.
            //codes
          break

        default:
            //codes
    
    }

        //break ifadesi o case içerisindeki kodlar bittikten sonra switchten çıkmak için kullanılır. 

swicth case ifadesi if elseden çok daha verimlidir.*/


/* ternary operatörü 

let isRaining = true
isRaining
    ? console.log(`you need a rain coat`) ==> true ifadesi
    : console.log(`No need for rain coat`) ==> false ifadesi
*/

let isRaining = false;
isRaining
? console.log(`you need a rain coat`)
: console.log(`no need for rain coat`)