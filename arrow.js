
//1st way
// function doubleIt(num){
//     return num* 2 ;
// }

//2nd way 
// const doubleIt = function fun(num){
//     return num * 2 ;  
// }
  
//advance way its called arrow function
const doubleIt = num => num * 2;

//যদি প্যারামিটার একাধিক হয় তাহলে single bracket er moddhe hobe
const add = (x, y) => x+y;
 
//যদি অনেক কাজ করার প্রয়োজন হয় just extra curly brackt er moddhe 

const doMath = (x, y) => {
    const sum = x + y;
    const diff= x - y;
    const result = sum * diff;
    return result;
}


 const result = add(12, 10);
 const result3 = doMath(7, 5);
 console.log(result3);