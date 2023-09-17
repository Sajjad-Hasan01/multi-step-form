const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password");

    // Form Validation 
const form = document.querySelector("#registrationForm"),
    nameField = form.querySelector(".name-field"),
    nameInput = nameField.querySelector(".name"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email"),
    passField = form.querySelector(".create-password"),
    passInput = passField.querySelector(".password"),
    cPassField = form.querySelector(".confirm-password"),
    cPassInput = cPassField.querySelector(".cPassword");
    termAcception = form.querySelector(".term-field");
    termCheckBox = termAcception.querySelector("input");

    //   Show/Hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })


    // Form Validation 

      // Name Validation
function checkName() {
    if (nameInput.value === "" || nameInput.value === " ") {
        return nameField.classList.add("invalid"); //adding invalid class if name input value do not match with passPattern
    }
    nameField.classList.remove("invalid"); //removing invalid class if name input value matched with passPattern
}

  // Email Validtion
function checkEmail() {
    const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emaiPattern)) {
      return emailField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
    }
    emailField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
}

  // Password Validation
function createPass() {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passInput.value.match(passPattern)) {
        return passField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
    }
    passField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
}

  // Confirm Password Validtion
function confirmPass() {
    if (passInput.value !== cPassInput.value || cPassInput.value === "") {
        return cPassField.classList.add("invalid");
    }
    cPassField.classList.remove("invalid");
}

// Check Acception
function checkAcception() {
    if (!termCheckBox.checked) {
        return termAcception.classList.add("invalid");
    }
    termAcception.classList.remove("invalid");
}

// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
    e.preventDefault(); //preventing form submitting
    checkName();
    checkEmail();
    createPass();
    confirmPass();
    checkAcception()

    if (
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid") &&
        !cPassField.classList.contains("invalid")
    ) {
        location.href = form.getAttribute("action");
    }
});

//calling function on key up
nameInput.addEventListener("keyup", checkName);
emailInput.addEventListener("keyup", checkEmail);
passInput.addEventListener("keyup", createPass);
cPassInput.addEventListener("keyup", confirmPass);
termAcception.addEventListener("click", checkAcception);