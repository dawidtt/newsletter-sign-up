let email;
let emailValue;

function validateEmail() {
  email = document.querySelector("#email");
  emailValue = email.value;
  const errorMessage = document.querySelector(".error-message");
  const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const checkEmail = reg.test(email.value);

  if (!checkEmail) {
    email.classList.add("error-input");
    errorMessage.innerText = "Valid email required";
  } else {
    localStorage.setItem("emailValue", emailValue);
  }

  return checkEmail;
}
function successEmail(emailValue) {
  emailValue = localStorage.getItem("emailValue");
  const sMail = document.querySelector("#thanks-message p span");
  sMail.innerText = emailValue;
}
