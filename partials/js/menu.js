import { api as api } from './variables.js';
import { updateStringLang as updateStringLang } from './lang.js';

((d) => {
    let toggleSideMenu = d.getElementById("btn-toogle-menu");
    let sideMenu = d.getElementById("side-menu");
    let logout = d.getElementById("btn-logout");
    let menuItem = d.getElementsByClassName("menu-link");
    let toggleMenuUser = d.getElementById("toggle-user-menu");
    let changePassword = d.getElementById("edit-password");
    let menuUser = d.getElementById("user-menu");
    let modal = d.getElementById("modal-background");
    let modalContent = d.getElementById("modal-body");
    let modalFooter = d.getElementById("modal-footer");

    let currentPage = window.location;

    for(let i = 0; i < menuItem.length; i++){
        if(menuItem[i].getAttribute('href') == currentPage) {
            menuItem[i].setAttribute('class', 'menu-link active');
        }
    }

    function openModalProfile() {
        let formProfile = `
          <div class="change-pass">
            <div class="form-group col-1-1">
              <label for="new-password" class="lang-str" data-section="new-password"></label>
              <input type="password" id="new-password" name="new-password"/>
            </div>
            <div class="form-group col-1-1">
              <label for="confirm-password" class="lang-str" data-section="confirm-password"></label>
              <input type="password" id="confirm-password" name="confirm-password"/>
            </div>
          </div>
        `;
        modalContent.innerHTML = "";
        modalContent.innerHTML = formProfile;
        updateStringLang(localStorage.getItem('lang'));
        modal.setAttribute("class", "");
    }
    
    function closeModal() {
      d.getElementById("close-modal").addEventListener("click", function() {
        modalContent.innerHTML = "";
        modal.setAttribute("class", "hide");
        toggleMenuUserContainer();
      })
    }

    function toggleMenuUserContainer() {
      if(toggleMenuUser.getAttribute("class") == 'active') {
        toggleMenuUser.setAttribute("class", "");
        menuUser.setAttribute("class", "hide");
      } else {
          toggleMenuUser.setAttribute("class", "active");
          menuUser.setAttribute("class", "");
      }
    }

    toggleSideMenu.addEventListener("click", function() {
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

    if(toggleMenuUser) {
        toggleMenuUser.addEventListener("click", function(){
          toggleMenuUserContainer();
        })
    }

    if(changePassword) {
      changePassword.addEventListener("click", function() {
        openModalProfile();
        closeModal();
      })
    }
})(document);