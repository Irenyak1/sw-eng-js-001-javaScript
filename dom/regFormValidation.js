const Validate = (event) => {
    let error = 0
    // pick inputs
    let firstName = document.getElementById("fname");


    // pick error sections
    let firstNameError = document.getElementById("fnameErr")


    // validating first name input emptiness
    if(firstName.value == ""){
        firstName.style.border = "1px solid red"
        firstNameError.innerHTML = "Please first name can not be empty"
        firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
     // validating first name for minimum length
    else if(firstName.value.length < 3){
        firstName.style.border = "1px solid red"
        firstNameError.innerHTML = "Please the first name must be atleast 3 letters"
        firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    // validating first name for maximum length
    else if(firstName.value.length > 11){
        firstName.style.border = "1px solid red"
        firstNameError.innerHTML = "Please the first name must be less than 11 letters"
        firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }


    if(error > 0){
        event.preventDefault()
    }
}


