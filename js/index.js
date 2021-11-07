// document.addEventListener("DOMContentLoaded", function(event) {
// });

const form = document.getElementById("emailForm");

function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("emailFormStatus");
  const data = new FormData(event.target);

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Datos enviados";
      status.classList.toggle("status-succeed");
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Ocurrio un error en el envio";
      status.classList.toggle("status-fail");
    });
}

form.addEventListener("submit", handleSubmit);
