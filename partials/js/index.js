((d, c) => {
  /*----- Variables -----*/
  let sendCv = d.getElementById("send-cv");
  let modal = d.getElementById("modal-background");
  let dayInput = d.getElementById("day");
  let yearInput = d.getElementById("year");
  let tableIconBtn = d.getElementsByClassName("table-icon-cell");
  let deleteElement = d.getElementsByClassName("delete-elem");
  let addStudyBtn = d.getElementById("add-study");
  let addCourseBtn = d.getElementById("add-course");
  let addExperienceBtn = d.getElementById("add-experience");
  let addAdditionalBtn = d.getElementById("add-additional");
  let tableBody = d.getElementById("table-data");
    
  /*----- Templates -----*/
  function addStudy(id) {
      return `<section class="study-reg" id="study" data-id="${id+1}">
        <div class="section-title">
          <p class="title">Formacion ${id+1}</p>
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
      return `<tr id="${data.id_person}">
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${data.telephone}</td>
        <td class="table-icon-cell" data-ref="study" data-status="${(data.studies.length <= 0) ? 'true' : 'false'}"><i class="fas fa-user-graduate"></i></td>
        <td class="table-icon-cell" data-ref="courses" data-status="${(data.courses.length <= 0) ? 'true' : 'false'}"><i class="fas fa-scroll"></i></td>
        <td class="table-icon-cell" data-ref="professional" data-status="${(data.experiences.length <= 0) ? 'true' : 'false'}"><i class="fas fa-suitcase"></i></td>
        <td class="table-icon-cell" data-ref="additional" data-status="${(data.additionals.length <= 0) ? 'true' : 'false'}"><i class="far fa-list-alt"></i></td>
        <td class="table-icon-cell" data-ref="edit" data-status="false"><i class="fas fa-user-edit"></i></td>
      </tr>`;
  }
  
    function dayOption(numb) {
        return `<option value="${numb}">${numb}</option>`;
    }

    function yearOption(numb) {
        return `<option value="${numb}">${numb}</option>`;
    }
  
/*----- Functions -----*/


function addListener(element) {
  let deleteElement = d.getElementsByClassName("delete-"+element);
  for (let i = 0; i < deleteElement.length; i++) {
    deleteElement[i].addEventListener("click", function(event){
      event.preventDefault();
      let elementId = this.getAttribute("data-element");
      let parentElement = this.parentElement.parentElement;
      if(parentElement) {
        parentElement.remove(element);
      }
      reasignarIds(element);
    })
  }
}

function reasignarIds(element) {
  let deleteElement = d.getElementsByClassName("delete-"+element);
  for (let i = 0; i < deleteElement.length; i++) {
    let newId = i+1;
    let thisElement = deleteElement[i];
    thisElement.setAttribute("data-element", newId);
    thisElement.parentElement.parentElement.setAttribute("id", element+"-"+newId);
    thisElement.parentElement.parentElement.setAttribute("data-id", newId);
    let titleSection = "";
    if(element === 'study') {
        titleSection = "Formacion";
    } else if(element === "course") {
        titleSection = "Curso";
    } else if (element === "experience") {
        titleSection = "Experiencia laboral";
    } else if (element === "additional") {
        titleSection = "Informacion adicional";
    }
    
    thisElement.previousElementSibling.innerText = titleSection+" "+newId;
  }
}

  function openModal() {
      modal.setAttribute("class", "");
      closeModal();
  }

  function loadAllCv() {
      let formData = new FormData();
      
      formData.append("limit", 10);
      formData.append("page", 1);
      
      fetch("http://api.irmaozinhos.com.br/list-cv.php", {
        method: "POST",
        body: formData
      })
      .then(response => response.json())
      .catch(error => console.log('Error: ', error))
      .then(function(response){
          Object.entries(response).forEach(([key, value]) => {
              let templateNew = templateCvItem(value);
              tableBody.insertAdjacentHTML("beforebegin", templateNew);
          })
          c(response);
      });
  }

function nuevoCv() {
  /*=== Person Info ===*/
  let form = document.getElementsByClassName("input-form");
  let formData = new FormData();

  for (let index = 0; index < form.length; index++) {
    formData.append(form[index].getAttribute("name"), form[index].value);
  }
  
  /*=== studies ===*/
  let studyReg = d.getElementsByClassName("study-reg");
  let formDataStd = [];
  
  for (let index = 0; index < studyReg.length; index++) {
      let idStudy = studyReg[index].getAttribute("data-id");
      let formStd = studyReg[index].getElementsByClassName("input-study");
      let formDataPrev = "{";
      let formStdLength = formStd.length;
      
      for (let i = 0; i < formStdLength; i++) {
          formDataPrev += '"'+formStd[i].getAttribute("name")+'":"'+formStd[i].value+'"';
          formDataPrev += (i < formStdLength-1) ? "," : "";
      }
      formDataPrev += "}";
      formDataStd[index] = formDataPrev;
  }
  formData.append("studies", formDataStd);
  
  /*=== Experiences ===*/
  let experiencesReg = d.getElementsByClassName("experience-reg");
  let formDataExperiences = [];
  
  for (let index = 0; index < experiencesReg.length; index++) {
      let idExperience = experiencesReg[index].getAttribute("data-id");
      let formExperience = experiencesReg[index].getElementsByClassName("input-experience");
      let formDataPrev = "{";
      let formExperienceLength = formExperience.length;
      
      for (let i = 0; i < formExperienceLength; i++) {
          formDataPrev += '"'+formExperience[i].getAttribute("name")+'":"'+formExperience[i].value+'"';
          formDataPrev += (i < formExperienceLength-1) ? "," : "";
      }
      formDataPrev += "}";
      formDataExperiences[index] = formDataPrev;
  }
  
  formData.append("experiences", formDataExperiences);
  
  /*=== Courses ===*/
  let coursesReg = d.getElementsByClassName("course-reg");
  let formDataCourses = [];
  
  for (let index = 0; index < coursesReg.length; index++) {
      let idCourse = coursesReg[index].getAttribute("data-id");
      let formCourse = coursesReg[index].getElementsByClassName("input-course");
      let formDataPrev = "{";
      let formCourseLength = formCourse.length;
      
      for (let i = 0; i < formCourseLength; i++) {
          formDataPrev += '"'+formCourse[i].getAttribute("name")+'":"'+formCourse[i].value+'"';
          formDataPrev += (i < formCourseLength-1) ? "," : "";
      }
      formDataPrev += "}";
      formDataCourses[index] = formDataPrev;
  }
  
  formData.append("courses", formDataCourses);
  
  /*=== Additionals ===*/
  let additionalsReg = d.getElementsByClassName("additional-reg");
  let formDataAdditionals = [];
  
  for (let index = 0; index < additionalsReg.length; index++) {
      let idAdditional = additionalsReg[index].getAttribute("data-id");
      let formAdditionals = additionalsReg[index].getElementsByClassName("input-additional");
      let formDataPrev = "{";
      let formAdditionalsLength = formAdditionals.length;
      
      for (let i = 0; i < formAdditionalsLength; i++) {
          formDataPrev += '"'+formAdditionals[i].getAttribute("name")+'":"'+formAdditionals[i].value+'"';
          formDataPrev += (i < formAdditionalsLength-1) ? "," : "";
      }
      formDataPrev += "}";
      formDataAdditionals[index] = formDataPrev;
  }
  
  formData.append("additionals", formDataAdditionals);
  
  /*=== Send Data ===*/
  fetch("http://api.irmaozinhos.com.br/create-cv.php", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .catch(error => console.log('Error: ', error))
  .then(function(response){
      c(response);
  });
}

function closeModal() {
  d.getElementById("close-modal").addEventListener("click", function(event){
    modal.setAttribute("class", "hide");
  });
}

  /*----- Triggers -----*/
  if(tableBody) {
      loadAllCv();
  }
  
  if(dayInput) {
      for(let i = 0; i < 31; i++) {
        dayInput.insertAdjacentHTML("beforeend", dayOption(i+1));
      }
  }
  
  if(yearInput) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
      for(let i = 0; i < 100; i++) {
        yearInput.insertAdjacentHTML("beforeend", yearOption(currentYear-(i+1)));
      }
  }

if(tableIconBtn){
  for (let i = 0; i < tableIconBtn.length; i++) {
    tableIconBtn[i].addEventListener("click", function(event){
      if(this.getAttribute("disabled") === "false"){
        openModal();
      } 
    });
  }
}

if(addStudyBtn){
  addStudyBtn.addEventListener("click", function(event){
    event.preventDefault();
    let templateNew = addStudy(d.getElementsByClassName("delete-study").length);
    this.insertAdjacentHTML("beforebegin", templateNew);
    addListener("study");
  })
}

if(addCourseBtn){
  addCourseBtn.addEventListener("click", function(event){
    event.preventDefault();
    let templateNew = addCourse(d.getElementsByClassName("delete-course").length);
    this.insertAdjacentHTML("beforebegin", templateNew);
    addListener("course");
  })
}

if(addExperienceBtn){
  addExperienceBtn.addEventListener("click", function(event){
    event.preventDefault();
    let templateNew = addExperience(d.getElementsByClassName("delete-experience").length);
    this.insertAdjacentHTML("beforebegin", templateNew);
    addListener("experience");
  })
}

if(addAdditionalBtn){
  addAdditionalBtn.addEventListener("click", function(event){
    event.preventDefault();
    let templateNew = addAdditional(d.getElementsByClassName("delete-additional").length);
    this.insertAdjacentHTML("beforebegin", templateNew);
    addListener("additional");
  })
}

if(sendCv){
  sendCv.addEventListener("click", function(event){
    event.preventDefault(); 
    nuevoCv();
  });
}
})(document, console.log);