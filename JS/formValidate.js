// ** To see whether the form is submitted or not !

const isSubmitted = (userNameVal) => {
    const element = document.forms[0].children
    let len = element.length - 1
    console.log(len)
    let validDataCount = 0
    for(let i=0;i<len;i++){
        if(document.forms[0].children[i].classList.contains("success")){
            validDataCount += 1
        }
    }

    if(validDataCount===len){
        console.log("Form is submitted")
        // alert("Thank You For Submitting form.")
        swal({
            title: `Thank You ${userNameVal}`,
            text: "Form is Submitted",
            icon: "success",
            button: "Ok",
          });
    }

    else{
        alert("Please enter the details correctly")
    }

}


/* errValue Functon defined */

const errValue = (input, errMsg) => {
    input.style.borderWidth = "2px"
    input.style.borderColor = "red";
    const formContent = input.parentElement
    const errorMessage = formContent.querySelector("span")
    console.log(errorMessage)
    errorMessage.innerText = errMsg
    const faExclamation = formContent.querySelector('.fa-exclamation')
    faExclamation.style.visibility = "visible"
    const faCheck = formContent.querySelector('.fa-check')
    faCheck.style.visibility = "hidden"
}

// ** correctValue function defined

const correctValue = (input) => {
    input.style.borderWidth = "2px"
    input.style.borderColor = "green";
    const formContent = input.parentElement

    const faCheck = formContent.querySelector('.fa-check')
    faCheck.style.visibility = "visible"
    const faExclamation = formContent.querySelector('.fa-exclamation')
    faExclamation.style.visibility = "hidden"
    if ((faExclamation.style.visibility = "hidden")) {
        const errorMessage = formContent.querySelector("span")
        errorMessage.innerText = ""
    }
    formContent.classList.add("success")
    console.log(formContent.classList)
    // document.forms[0].children[0].classList.add("success")
}



let formSubmit = document.getElementById('formSubmitBtn')
// console.log(userNameVal);

formSubmit.addEventListener('submit', (event) => {
    event.preventDefault();
    let userNameVal = document.getElementById('userName').value;
    let emailVal = document.getElementById('email').value;
    let passwordVal = document.getElementById('password').value;
    let conformPasswordVal = document.getElementById('conformPassword').value;



    //* For valdating the userName */
    if (userNameVal === "") {
        console.log("userName cannot be empty")
        errValue(userName, "Username cannot be empty.")
    }
    else if (userNameVal.length < 3) {
        errValue(userName, "Username must be at least 3 characters.")
    }
    else {
        correctValue(userName)
    }


    //* For valdating the Email */

    if (emailVal === "") {
        console.log("Email cannot be empty");
        errValue(email, "Email cannot be empty.")
    }
    else if (!validateEmail(emailVal)) {
        errValue(email, "Not valid email.")
    }
    else {
        correctValue(email)
    }

    // console.log(userNameVal, "  ", emailVal) 


    //* For valdating the Password */

    if (passwordVal === "") {
        console.log("password cannot be empty");
        errValue(password, "Password cannot be empty.")
    }
    else if (passwordVal.length < 8) {
        errValue(password, "Password must be at 8 characters.")
    }
    else {
        correctValue(password)
    }


    //* For valdating the Conform Password */

    if (conformPasswordVal === "") {
        console.log("conform password cannot be empty");
        errValue(conformPassword, "Please conform password.")
    }
    else if (passwordVal !== conformPasswordVal) {
        errValue(conformPassword, "Password doesn't match.")
    }
    else {
        correctValue(conformPassword)
    }

    // *To check whether the form is submitted or not

    isSubmitted(userNameVal);

})

function validateEmail(emailVal) {
    const regex = /^[_a-zA-Z]+@[a-z]+.[a-z]{1,3}$/;
    // console.log(regex.test(emailVal))
    return regex.test(emailVal)
}