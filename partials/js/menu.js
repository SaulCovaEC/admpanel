((d) => {
    let toogleSideMenu = d.getElementById("btn-toogle-menu");
    let sideMenu = d.getElementById("side-menu");
    let logout = d.getElementById("btn-logout");

    toogleSideMenu.addEventListener("click", function() {
        let status = sideMenu.getAttribute("class");

        if(status === 'hide-left') {
            this.children[0].setAttribute("class", "svg-inline--fa fa-times fa-w-16");
            sideMenu.setAttribute("class", "show-left");
        } else {
            this.children[0].setAttribute("class", "svg-inline--fa fa-bars fa-w-16");
            sideMenu.setAttribute("class", "hide-left");
        }
    })

    logout.addEventListener("click", function(event){
        event.preventDefault(); 
        fetch("https://admpanel.hermanitos.org.br/functions/logout.php")
        .then(response => response.json())
        .catch(error => console.log('Error: ', error))
        .then(function(response){
            console.log("adios");
            window.location.reload();
        });
    });
})(document);