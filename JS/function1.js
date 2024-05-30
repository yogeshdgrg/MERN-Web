let genders = ["Male", "Female", "Others"]

let religions = ["hindu", "buddist", "christ", "abc religion"]

let provinces = ["bagmati", "koshi", "karnali", "gandaki", "lumbini"]

const findElem = (array) => {
    // console.log(array.length)
    return array[Math.floor(Math.random() * array.length)]

}

console.log(findElem(genders));
console.log(findElem(religions));
console.log(findElem(provinces));