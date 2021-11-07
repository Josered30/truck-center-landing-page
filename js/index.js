// document.addEventListener("DOMContentLoaded", function(event) { 
// });


const form = document.getElementById("emailForm");
    
async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("emailFormStatus");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Datos enviados";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Ocurrio un error en el envio"
  });
}

form.addEventListener("submit", handleSubmit)