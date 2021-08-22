<div class="main-panel">
  <div id="list-cv-header">
    <div class="header-group">
      <div class="filter-group">
        <label for="s-name">Nombre</label>
        <input type="text" name="s-name" id="s-name"/>
      </div>
      <div class="filter-group">
        <p id="position-numbers" class="hide"></p>
        <input type="text" name="s-position" id="s-position" class="hide" disabled></input>
        <button role='button' id="filter-position" class="btn">Posicion</button>
        <div id='position-container' class="filter-container hide">
          <fieldset>
            <legend>
              <input type="text" name="f-position" id="f-position"/>
            </legend>
            <div id="position-options">
            </div>
            <button role='button' id="delete-filter-selection" class="btn">Limpiar</button>
          </fieldset>
        </div>
      </div>
    </div>
    <div class="header-group">
      <a type="button" id="btn-new-cv" class="btn" href="<?php echo host();?>/create-cv" target="_self">Crear nuevo curriculo</a>
    </div>
  </div>

  <table class="table-cv">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Correo</th>
        <th>Telefono</th>
        <th>Formacion Academica</th>
        <th>Cursos</th>
        <th>Experiencia laboral</th>
        <th>Informacion Adicional</th>
        <th>Editar</th>
        <th>Descargar</th>
      </tr>
    </thead>
    <tbody id="table-data">
    </tbody>
  </table>
  <div id="pages"></div>
<div>