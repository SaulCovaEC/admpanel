/*----- Templates -----*/
function addStudy(id) {
  return `<section class="study-reg" id="study" data-id="${id+1}">
    <div class="section-title">
      <p class="lang-str title" data-section="academic-formation"></p>
      <p role="button" class="delete-study btn-delete-element" data-element="${id+1}"><i class="fas fa-trash"></i></p>
    </div>

    <div class="study-form">
      <div class="form-group col-1-3">
        <label for="grade-study">Nivel alcanzado</label>
        <select name="grade_study" id="grade-study" required="required" class="input-study">
          <option value="" disabled selected>Seleccione una opcion</option>
          <option value="medio">Medio</option>
          <option value="superior">Superior</option>
        </select>
      </div>

      <div class="form-group col-1-3">
        <label for="status-study">Estado alcanzado</label>
        <select name="status_study" id="status-study" required="required" class="input-study">
          <option value="" disabled selected>Seleccione una opcion</option>
          <option value="incompleto">Incompleto</option>
          <option value="completo">Completo</option>
        </select>
      </div>
      
      <div class="form-group col-1-3">
        <label for="date-study">Ano de estudio</label>
        <input type="text" id="date-study" placeholder="Ano de estudio" required="required" name="date_study" class="input-study"/>
      </div>

      <div class="form-group col-1-2">
        <label for="institution">Institucion de estudio</label>
        <input type="text" id="institution" placeholder="Institucion de estudio" required="required" name="institution" class="input-study"/>
      </div>
      
      <div class="form-group col-1-2">
        <label for="college-career">Titulo obtenido</label>
        <input type="text" id="college-career" placeholder="Titulo obtenido" required="required" name="college_career" class="input-study"/>
      </div>
    </div>
  </section>`;
}

function addExperience(id) {
  return `<section class="experience-reg" id="experience" data-id="${id+1}">
    <div class="section-title">
      <p class="title">Experiencia laboral ${id+1}</p>
      <p role="button" class="delete-experience btn-delete-element" data-element="${id+1}"><i class="fas fa-trash"></i></p>
    </div>

    <div class="experience-form">
      <div class="form-group col-1-2">
        <label for="experience-position">Cargo</label>
        <input type="text" id="experience-position" placeholder="Cargo" required="required" name="position" class="input-experience"/>
      </div>
      
      <div class="form-group col-1-2">
        <label for="company">Empresa</label>
        <input type="text" id="company" placeholder="Empresa" required="required" name="company" class="input-experience"/>
      </div>
      
      <div class="form-group col-1-2">
        <label for="date-experience">Fecha</label>
        <input type="text" id="date-experience" placeholder="Fecha" required="required" name="date_experience" class="input-experience"/>
      </div>
      <div class="form-group col-1-2">
        <label for="country">Pais</label>
        <input type="text" id="country" placeholder="Pais" required="required" name="country" class="input-experience"/>
      </div>
    </div>
  </section>`;
}

function addCourse(id) {
  return `<section class="course-reg" id="course" data-id="${id+1}">
    <div class="section-title">
      <p class="title">Curso ${id+1}</p>
      <p role="button" class="delete-course btn-delete-element" data-element="${id+1}"><i class="fas fa-trash"></i></p>
    </div>

    <div class="course-form">
      <div class="form-group col-1-3">
        <label for="course-title">Nombre del curso</label>
        <input type="text" id="course-title" placeholder="Nombre del curso" required="required" name="title" class="input-course"/>
      </div>
      
      <div class="form-group col-1-3">
        <label for="institution">Institucion de estudio</label>
        <input type="text" id="institution" placeholder="Institucion de estudio" required="required" name="institution" class="input-course"/>
      </div>
      
      <div class="form-group col-1-3">
        <label for="date-course">Ano de estudio</label>
        <input type="text" id="date-course" placeholder="Ano de estudio" required="required" name="date_course" class="input-course"/>
      </div>
    </div>
  </section>`;
}

function addAdditional(id) {
  return `<section class="additional-reg" id="additional" data-id="${id+1}">
    <div class="section-title">
      <p class="title">Informacion adicional ${id+1}</p>
      <p role="button" class="delete-additional btn-delete-element" data-element="${id+1}"><i class="fas fa-trash"></i></p>
    </div>

    <div class="additional-form">
      <div class="form-group col-1-1">
        <label for="desciption">Descripcion</label>
        <input type="text" id="additional" placeholder="Descripcion" required="required" name="description" class="input-additional"/>
      </div>
    </div>
  </section>`;
}

function templateCvItem(data) {
  return `<tr id="${data.id_person}" data-name="${data.name}">
    <td>${data.name}</td>
    <td>${data.email}</td>
    <td>${data.telephone}</td>
    <td class="table-icon-cell" data-ref="study" data-status="${(data.studies.length <= 0) ? 'true' : 'false'}"><i class="fas fa-user-graduate"></i></td>
    <td class="table-icon-cell" data-ref="courses" data-status="${(data.courses.length <= 0) ? 'true' : 'false'}"><i class="fas fa-scroll"></i></td>
    <td class="table-icon-cell" data-ref="professional" data-status="${(data.experiences.length <= 0) ? 'true' : 'false'}"><i class="fas fa-suitcase"></i></td>
    <td class="table-icon-cell" data-ref="additional" data-status="${(data.additionals.length <= 0) ? 'true' : 'false'}"><i class="far fa-list-alt"></i></td>
    <td class="table-icon-cell" data-ref="edit" data-status="false"><i class="fas fa-user-edit"></i></td>
    <td class="table-icon-cell" data-ref="download" data-status="false"><i class="fas fa-file-download"></i></td>
  </tr>`;
}

function templatePages(current, all) {
let template = `<div id="pages" data-current="${current}">
  <button class="page-btn${(current == 1) ? " disabled" : ""}" id="prev-page" data-page="${parseInt(current)-1}"><i class="fas fa-chevron-left"></i></button>`
  
  for(let i = 0; i < all; i++) {
    template += `<button class="page-btn${(current == (i+1)) ? " active" : ""}" data-page="${i+1}">${i+1}</button>`;
  }

template += `<button class="page-btn${(current == all) ? " disabled" : ""}" id="next-page" data-page="${parseInt(current)+1}"><i class="fas fa-chevron-right"></i></button>
</div>`;

return template;
}

function templateOption(numb) {
return `<option value="${numb}">${numb}</option>`;
}

function templateFilterOption(option, numb) {
  return `<div class="checkbox-group">
  <input type="checkbox" name="s-position" value="${option.position}" id='opcion-${numb}'><label for="opcion-${numb}">${option.position}</label>
</div>`
}


export let template = {
  addStudy,
  addExperience,
  addCourse,
  addAdditional,
  templateCvItem,
  templatePages,
  templateOption,
  templateFilterOption
}