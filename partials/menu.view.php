<section id="menu">
  <div id="section-menu">
    <img src="<?php echo host();?>/partials/img/logo.png" alt="Hermanitos" class="logo-menu">
    <button id="btn-toogle-menu">
      <i class="fas fa-bars"></i>
    </button>
  </div>
  <div id="section-user">
    <div id="selection-lang">
      <button id="pt" class="lang-select"><img src="./img/pt.ico" alt="Portugues"/></button>
      <button id="es" class="lang-select"><img src="./img/es.ico" alt="Español"/></button>
      <button id="en" class="lang-select"><img src="./img/en.ico" alt="Ingles"></button>
    </div>
    <div id="user-options">
      <button id="toggle-user-menu"><i class="far fa-user"></i></button>
    </div>
    <div id="user-menu" class="hide">
      <ul>
        <li id="edit-password"><span class="lang-str" data-section="edit-password"></span> <i class="fas fa-user-edit"></i></li>
        <hr/>
        <li id="btn-logout"><span class="lang-str" data-section="logout"></span> <i class="fas fa-sign-out-alt"></i></li>
      </ul>
    </div>
  </div>
</section>