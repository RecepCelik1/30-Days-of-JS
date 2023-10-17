                /* *Dersimiz döngüler */

        /* *for döngüsü */
// C dili ile birebir aynıdır

const countries = [`Finland`, `Sweden`, `Denmark`, `Norway`];
const newArr = [];
let i;
for(i = 0; i < countries.length; i++){
    newArr.push(countries[i].toUpperCase());
}

console.log(newArr);

const numbers = [1,2,3,4,5,6,7,8,9];
let sum = 0; 
for(i = 0; i < numbers.length; i++){

    sum = sum + numbers[i];

}
console.log(sum);