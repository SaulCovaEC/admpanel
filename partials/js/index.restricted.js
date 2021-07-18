((d, c) => {
  /*----- Variables -----*/
  let formLogin = d.getElementById("login-form");
  let user = d.getElementById("user");
  let pass = d.getElementById("pass");

  function login() {
    let formData = new FormData();

    formData.append("mail", user.value);
    formData.append("pass", pass.value);

    fetch("https://api.hermanitos.org.br/session-login", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .catch(error => console.log('Error: ', error))
    .then(function(response){
        c(response);
    });
  }

  formLogin.addEventListener("submit", function(event){
    event.preventDefault(); 
    login();
  });
})(document, console.log);