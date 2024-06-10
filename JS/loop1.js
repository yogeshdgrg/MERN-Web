// ** Multiplication program


const findMultiplication = (number) => {
    for (let i = number.start; i <= number.end; i++) {
        console.log(`${number.num} * ${i} = ${number.num * i}`)
    }
}

// findMultiplication(1, 10, 8)
// findMultiplication(11, 20, 10)
// findMultiplication({
//     start:1,
//     end:10,
//     num:8
// })


let numbers = [1, 2, 3, 4, 5];
numbers = numbers.map((no) => no * 2)
// console.log(numbers)


const userName = ["Aarav", "Sujan", "Gopal", "Bigyan"]
users = []
users = userName.map((name, index) => {
    return {
        name,
        email: `${name}@gmail.com`,
        password: `${name}${index + 1}`
    }
})
console.log(users)

// ** Another method using the push method
// users.push({
//     name,
//     email: `${name}@gmail.com`,
//     password:`${name}${index+1}`
// })


// ** Assignment :- 