// const a = undefined;

// console.log(typeof a);

// let p='Javascript'; 
// let q=p; 
// p='React'; 
// console.log(q);
// const sum = (a,b) => a + b;
//    const result = sum(2, 3);
//    console.log(result);
//    if ("2" === 2) {
//     console.log("Inside if");
//    } else {
//     console.log("Inside else");
//    }

//    function work(x, y = 4) {
//     return x + y;
//    }
//    console.log(work(32));

   const persons = [
    {name:"alam",age:15},
    {name:"satu",age:18},
    {name:"suchi",age:22}
   ];


persons.forEach(p=>console.log(p));

const number = [4,12,13,27,44,32,75]
let sum = 0;
number.forEach(element => {
   sum+=element;
});
console.log(sum);


const array1 = [1,2,3,7,11];
[a,b,...rest] = array1
console.log(a,b,rest);

// array2.push(12);
// console.log(array1);
// console.log(array2);

