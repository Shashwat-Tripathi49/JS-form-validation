
  const form = document.getElementById("registrationForm");

  const nameEl = document.getElementById("name");
  const emailEl = document.getElementById("email");
  const passwordEl = document.getElementById("password");
  const confirmEl = document.getElementById("confirmPassword");
  const genderEl = document.getElementById("gender");
  const termsEl = document.getElementById("terms");
  const phoneE1 = document.getElementById("phone")

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmError = document.getElementById("confirmError");
  const genderError = document.getElementById("genderError");
  const termsError = document.getElementById("termsError");
  const phoneError = document.getElementById("phoneError");

  function clearErrors() {
    nameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
    confirmError.innerText = "";
    genderError.innerText = "";
    termsError.innerText = "";
    phoneError.innerText = "";
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    clearErrors();
    let valid = true;

    let nameValue = nameEl.value.trim();
    if (nameValue.length < 3) {
        nameError.innerText = "Name must be at least 3 letters.";
        valid = false;
    } else {
        for (let i = 0; i < nameValue.length; i++) {
            let ch = nameValue[i];
            if (!((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))) {
                nameError.innerText = "Name must contain only alphabets.";
                valid = false;
                break;
            }
        }
    }
    "shashwattripathi@gmail.com"
    console.log("email          ",emailEl.value)
    
    let emailValue = emailEl.value.trim();
    console.log("trimemail          ",emailValue)
    if (emailValue.length === 0) {
      emailError.innerText = "Email is required.";
      valid = false;
    } else {
      let firstChar = emailValue[0];
      console.log("firstnmame          ",firstChar)
      if (!((firstChar >= 'A' && firstChar <= 'Z') || (firstChar >= 'a' && firstChar <= 'z'))) {
        emailError.innerText = "Email must start with a letter.";
        valid = false;
      } else if (emailValue.indexOf("@") === -1) {
        emailError.innerText = "Email must contain '@'.";
        valid = false;
      } else if (!emailValue.endsWith(".com")) {
        emailError.innerText = "Email must end with .com";
        valid = false;
      }
    }

    let passwordValue = passwordEl.value;
    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;
    let hasSpecial = false;
    let specials = "!@#$%^&*(),.?\":{}|<>";

    for (let i = 0; i < passwordValue.length; i++) {
      let ch = passwordValue[i];
      if (ch >= 'A' && ch <= 'Z') hasUpper = true;
      else if (ch >= 'a' && ch <= 'z') hasLower = true;
      else if (ch >= '0' && ch <= '9') hasDigit = true;
      else if (specials.includes(ch)) hasSpecial = true;
    }

    if (
      passwordValue.length < 8 ||
      !hasUpper ||
      !hasLower ||
      !hasDigit ||
      !hasSpecial
    ) {
      passwordError.innerText = "Password must contain uppercase, lowercase, number, special char and be 8+ characters.";
      valid = false;
    }

    let confirmValue = confirmEl.value;
    if (confirmValue !== passwordValue) {
      confirmError.innerText = "Passwords do not match.";
      valid = false;
    }

    if (genderEl.value === "") {
      genderError.innerText = "Please select a gender.";
      valid = false;
    }

    if (!termsEl.checked) {
      termsError.innerText = "You must agree to the terms.";
      valid = false;
    }
      
    let phoneValue = phoneE1.value.trim();
    console.log(phoneValue)
    if ( phoneValue.length != 10){
   
        phoneError.innerText = " phone number must conatin 10 digits.";
        valid = false ;
    }


    if (valid) {
      alert("Form Submitted Successfully!");
    }
  });

