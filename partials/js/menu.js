((d) => {
    let toogleSideMenu = d.getElementById("btn-toogle-menu");
    let sideMenu = d.getElementById("side-menu");

    toogleSideMenu.addEventListener("click", function() {
        let status = sideMenu.getAttribute("class");

        if(status === 'hide-left') {
            this.children[0].setAttribute("class", "svg-inline--fa fa-times fa-w-16");
            sideMenu.setAttribute("class", "show-left");
        } else {
            this.children[0].setAttribute("class", "svg-inline--fa fa-bars fa-w-16");
            sideMenu.setAttribute("class", "hide-left");
        }
        console.log(this.children[0].getAttribute("class"));
    })
})(document);