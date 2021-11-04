const registerDialog = document.getElementById("register-dialog");
const emailError = document.getElementById("email-error");
const telephoneError = document.getElementById("phone-error");
const registerForm = document.getElementById("register-form");

let registerDialogDefaultDisplay = null;

function validation(email, telephone) {
  const numberRegex = new RegExp("^d+$/");
  const emailRegex = new RegExp(
    '^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$'
  );

  const telephoneValidate = numberRegex.test(telephone);
  const emailValidate = emailRegex.test(email);

  if (telephoneValidate && emailValidate) return true;
  else return false;
}

function registerUser(form) {
  if (form.terms.checked && validation(form.email.value, form.phone.value)) {
    form.reset();
    registerDialog.style.display = registerDialogDisplayDefault;
  }
}

function hide() {
  registerDialogDisplayDefault = registerDialog.style.display;
  registerDialog.style.display = "None";
}

window.onload = function () {
  hide();

  registerForm.addEventListener(
    "submit",
    function (event) {
      if (
        registerForm.checkValidity() === false &&
        !validation(registerForm.email.value, registerForm.phone.value)
      ) {
        event.preventDefault();
        event.stopPropagation();
      }
      registerForm.classList.add("was-validated");
    },
    false
  );
};
