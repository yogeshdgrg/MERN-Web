let users = [
    { userName: "Ram", password: "password" },
    { userName: "Shyam", password: "password1" },
    { userName: "Gita", password: "password2" }
]

const logIn = (userName, password) => {
    for (let account of users) {
        if (userName === account.userName && password === account.password) {
            return "Login Successfull"
        }
    }
    return "Login Unsuccessfull. Please enter valid info..."
}

console.log(logIn("Ram", "password"))