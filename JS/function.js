let persons = ["Ram", "Shyam", "Hari"]

let userDetails = []

//? Lists for generating the random Province,Gender and Religion

let provinces = ["Bagmati", "Gandaki", "Karnali", "Koshi", "Madesh", "Sudurpaschim", "Lumbini"]
let religions = ["Hindu", "Buddist", "Chiristain", "Kirat"]
let genders = ["Male", "Female", "Other"]


//? This function genertates the random values for keys

const findElem = array => array[Math.floor(Math.random() * array.length)]


const signUp = (perName) => {
    return {
        ["name"]: perName,
        ["province"]: findElem(provinces),
        ["gender"]: findElem(genders),
        ["religon"]: findElem(religions),
    }
}

//? Calls the signUp function for each user

persons.forEach((perName) => {
    userDetails.push(signUp(perName));
})


console.log(userDetails);