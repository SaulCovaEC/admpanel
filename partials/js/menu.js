import { api as api } from './variables.js';

((d) => {
    let toogleSideMenu = d.getElementById("btn-toogle-menu");
    let sideMenu = d.getElementById("side-menu");
    let logout = d.getElementById("btn-logout");
    let menuItem = d.getElementsByClassName("menu-link");
    let currentPage = window.location;

    for(let i = 0; i < menuItem.length; i++){
        if(menuItem[i].getAttribute('href') == currentPage) {
            menuItem[i].setAttribute('class', 'menu-link active');
        }
    }

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
        fetch(api['logout'])
        .then(response => response.json())
        .catch(error => console.log('Error: ', error))
        .then(function(response){
            console.log("adios");
            window.location.reload();
        });
    });
})(document);