       /* *Push metodu */

//push : dizinin sonuna eleman ekler.Varolan bir diziye eleman eklemek için push metodunu kullanırız.

const arr = [`item1`,`item2`,`item3`];
arr.push(`new item`);
console.log(arr)
//[`item1`,`item2`,`item3`,`new item`]

       
       /* *pop metodu */

//dizinin sonundaki indexi siler.
let numbers = [1,2,3,4,5];
let var1 = numbers.pop();
console.log(var1);


        /* *shift metodu */

//bu index dizinin en başındaki elemanı siler.

numbers = [1,2,3,4,5];
var1 = numbers.shift(); //-> baştan bir elemanı kaldırır.
console.log(var1); 


       /* * unshift metodu */

//dizinin başına eleman ekler.
const numbers1 = [1,2,3,4,5];
numbers1.unshift(0)//-> en başa bi sıfır atar
console.log(numbers1);


       /* * reverse metodu */

//reverse: dizi sıralamasını terse çevirir
numbers = [1,2,3,4,5];
var1 = numbers.reverse();
console.log(var1);


       /* * sort metodu */
//dizi elemanlarını sıralamaya yarar. Dizi elemanlarını alfabetik düzene göre sıralar.
//sort call back fonksiyonu alır, sortun call back fonksiyonu ile nasıl kullandığımızı ilerleyen bölümlerde göreceğiz.

const webTechs = [

`HTML5`,

`CSS`,

`JavaScript`,

`React`,

`Redux`,

`Node`,

`MangoDB`,

]

webTechs.sort();
console.log(webTechs);


                /* *Dizi içinde dizi */
// diziler pek çok farklı veri türünü ve başka bir diziyi dahil olmak üzere depolayabilirler.

const arrayOfarray = [[0,1,2,3,4],[5,6,7,8,9]]; // iki boyutlu bunun mantığını C dilinden iyice oturtuk :))
const array3d = [[[1,2],[3,4]],[[5,6],[7,8]]]; // 3 boyutlu dizidir C dilinde eşşek gibi modelle canlandırıp öğrendik iyice

console.log(array3d[0][1][1]); 



const  frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']

const  backEnd = ['Node','Express', 'MongoDB']

const  fullStack = [frontEnd, backEnd]

console.log(fullStack) // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]

console.log(fullStack.length) // 2

console.log(fullStack[0]) // ["HTML", "CSS", "JS", "React", "Redux"]

console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]