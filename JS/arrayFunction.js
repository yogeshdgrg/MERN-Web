console.log("function");

//* Using rest operator */
let total = 0
function sum(...arg) {
    console.log(arg)
    console.log(arg.length);
    // total=total+a
    // for (let i = 0; i < arg.length; i++) {
    //     total+=arg[i];
    // }
    // arg.forEach((val)=>{
    //     total+=val
    // })

    const totalSum = arg.reduce((accum, currElem) => {
        return accum += currElem
    }, 0)

    return totalSum;
}
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8))

// ** generating the random values from an array
let genders = ["Male", "Female", "Others"]

let religions = ["hindu", "buddist", "christ", "abc religion"]

let provinces = ["bagmati", "koshi", "karnali", "gandaki", "lumbini"]

const findElem = array => array[Math.floor(Math.random() * array.length)]
// console.log(array.length)


console.log(findElem(genders));
console.log(findElem(religions));
console.log(findElem(provinces));

// const index = Math.floor(Math.random() * findElem(genders))
// const index1 = Math.floor(Math.random() *findElem(religions))
// const index2 = Math.floor(Math.random() * findElem(provinces))




//** Callback function example */

const callingCallback = (data, callback) => {
    setTimeout(() => {
        callback(data);
    }, 2000);
}

const printData = (data) => {
    console.log(data);
}

callingCallback("hello I am data!",printData);



const sum1 = (a, b) => a + b;

const double = a => a * 2;

console.log(double(sum1(50,50))); 