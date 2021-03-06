import { api as api } from './variables.js';

((d, c) => {  
  /*----- Variables -----*/
  let formLogin = d.getElementById("login-form");
  let user = d.getElementById("user");
  let pass = d.getElementById("password");

  function login() {
    let formData = new FormData();

    formData.append("email", user.value);
    formData.append("pass", pass.value);

    fetch(api['login'], {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .catch(error => console.log('Error: ', error))
    .then(function(response){
      c(response.id_user);
      window.location.reload();
    });
  }

  formLogin.addEventListener("submit", function(event){
    event.preventDefault(); 
    login();
  });
})(document, console.log);