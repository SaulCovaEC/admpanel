import { api as api } from './variables.js';
import { template as template } from './template.js'
import { updateStringLang as updateStringLang } from './lang.js';

((d, c) => {
/*----- Variables -----*/
  let formNewCv = d.getElementById("cv-form");
  let dayInput = d.getElementById("day");
  let yearInput = d.getElementById("year");
  let monthResidenceInput = d.getElementById("month-residence");
  let yearResidenceInput = d.getElementById("year-residence");
  let addStudyBtn = d.getElementById("add-study");
  let addCourseBtn = d.getElementById("add-course");
  let addExperienceBtn = d.getElementById("add-experience");
  let addAdditionalBtn = d.getElementById("add-additional");

  let modal = d.getElementById("modal-background");
  let modalContent = d.getElementById("modal-body");
  let modalFooter = d.getElementById("modal-footer");

/*----- Functions -----*/
function addListener(element) {
  let deleteElement = d.getElementsByClassName("delete-"+element);
  for (let i = 0; i < deleteElement.length; i++) {
    deleteElement[i].addEventListener("click", function(event){
      event.preventDefault();
      let elementId = this.getAttribute("data-element");
      let parentElement = this.parentElement.parentElement;
      if(parentElement) {
        let verify = confirm("Esta seguro que desea eliminar esto?");
        if(verify == true) {
          parentElement.remove(element);
        }
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

function successStatus(idUser, name) {
  modalContent.innerHTML = `<div class="status-success">
      <div class="icon-status">
          <i class="fas fa-check-circle"></i>
      </div>
      <div class="text-status">
          <p>Datos guardados con exito</p>
      </div>
  </div>`;
  modalFooter.innerHTML = `<div>
    <button id="download-cv">Descargar</button>
    <button id="back-cv">Volver</button>
  </div>`;

  d.getElementById("download-cv").addEventListener("click", function(){
    downloadCv(idUser, name);
  });
  d.getElementById("back-cv").addEventListener("click", function(){
    d.getElementById("cv-form").reset();
    modalContent.innerHTML = "";
    modalFooter.innerHTML = ""
    modal.setAttribute("class", "hide");
  });
}

function errorStatus() {
  modalContent.innerHTML = `<div class="status-error">
        <div class="icon-status">
            <i class="fas fa-minus-circle"></i>
        </div>
        <div class="text-status">
            <p>Error al guardar los datos, por favor contacte con el administrador</p>
        </div>
    </div>`;
    modalFooter.innerHTML = `<div>
      <button id="back-cv">Volver</button>
      </div>`;
  
      d.getElementById("back-cv").addEventListener("click", function(){
        modalContent.innerHTML = "";
        modalFooter.innerHTML = ""
        modal.setAttribute("class", "hide");
      });
}

function nuevoCv() {
  /*=== Person Info ===*/
  let form = document.getElementsByClassName("input-form");
  let formData = new FormData();
  c('test');
  for (let index = 0; index < form.length; index++) {
    formData.append(form[index].getAttribute("name"), form[index].value);
  }
  
  /*=== studies ===*/
  let studyReg = d.getElementsByClassName("study-reg");
  let formDataStd = [];
  
  for (let index = 0; index < studyReg.length; index++) {
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
	
    openModal();
    //modalLoading.setAttribute("class", '');
      
    /*=== Send Data ===*/
    fetch(api['create-cv'], {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .catch(error => console.log('Error: ', error))
    .then(function(response){
				let idPerson = response[0];
		      c(response)
        if (idPerson === 0) {
          showContentModal("duplicate");
        } else if (idPerson >= 1){
          showContentModal("success", idPerson)
        }
        else { 
          showContentModal("error");
        }
    });
}

function openModal() {
  modal.setAttribute("class", "");
  closeModal();
}

function closeModal() {
  d.getElementById("close-modal").addEventListener("click", function(event){
    modalContent.innerHTML = "";
    modalFooter.innerHTML = ""
    modal.setAttribute("class", "hide");
  });
}

/*----- Triggers -----*/
if(formNewCv){
  formNewCv.addEventListener("submit", function(event){
    event.preventDefault(); 
    nuevoCv();
  });
}

if(dayInput) {
  for(let i = 0; i < 31; i++) {
    dayInput.insertAdjacentHTML("beforeend", template.templateOption(i+1));
  }
}

if(yearInput) {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  for(let i = 0; i < 100; i++) {
    yearInput.insertAdjacentHTML("beforeend", template.templateOption(currentYear-(i+1)));
  }
}

if(monthResidenceInput) {
  for(let i = 0; i < 11; i++) {
    monthResidenceInput.insertAdjacentHTML("beforeend", template.templateOption(i+1));
  }
}

if(yearResidenceInput) {
  for(let i = 0; i < 100; i++) {
    yearResidenceInput.insertAdjacentHTML("beforeend", template.templateOption(i+1));
  }
}

if(addStudyBtn){
  addStudyBtn.addEventListener("click", function(event){
    event.preventDefault();
    let templateNew = template.addStudy(d.getElementsByClassName("delete-study").length);
    this.insertAdjacentHTML("beforebegin", templateNew);
    //updateStringLang();
    addListener("study");
  })
}

if(addCourseBtn){
  addCourseBtn.addEventListener("click", function(event){
    event.preventDefault();
    let templateNew = template.addCourse(d.getElementsByClassName("delete-course").length);
    this.insertAdjacentHTML("beforebegin", templateNew);
    //updateStringLang();
    addListener("course");
  })
}

if(addExperienceBtn){
  addExperienceBtn.addEventListener("click", function(event){
    event.preventDefault();
    let templateNew = template.addExperience(d.getElementsByClassName("delete-experience").length);
    this.insertAdjacentHTML("beforebegin", templateNew);
    addListener("experience");
  })
}

if(addAdditionalBtn){
  addAdditionalBtn.addEventListener("click", function(event){
    event.preventDefault();
    let templateNew = template.addAdditional(d.getElementsByClassName("delete-additional").length);
    this.insertAdjacentHTML("beforebegin", templateNew);
   //updateStringLang();
    addListener("additional");
  })
}

})(document, console.log);