// variables
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const username = document.querySelector("#name")
const address = document.querySelector("#address")
const city = document.querySelector("#city")
const postal = document.querySelector("#postal")

// all needed regex 

const email_regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/

const phone_no = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/

const string_reg = /[a-z][A-Z]/

const num_reg = /^[0-9][0-9][0-9][0-9][0-9][0-9]$/


// testing the input for the regex


// email validation
email.addEventListener("blur", ()=>{


    if(email_regex.test(email.value)){
        console.log("correct email");
    }
    else{
        alert("incorrect email")
    }
})


// phone validation
phone.addEventListener("blur", ()=>{


    if(phone_no.test(phone.value)){
        console.log("correct phone");
    }
    else{
        alert("phone number should be of 10 digits only")
    }
})


// name validation

username.addEventListener("blur", ()=>{


    if(string_reg.test(username.value)){
        console.log("correct name");
    }
    else{
        alert("Please use only letter while writing the name")
    }
})

// postal code validation


postal.addEventListener("blur", ()=>{


    if(num_reg.test(postal.value)){
        console.log("correct postal");
    }
    else{
        alert("The postal code should be only of 6 digits")
    }
})
