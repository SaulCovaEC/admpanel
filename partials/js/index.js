import { api as api } from './variables.js';
import { template as template } from './template.js'

((d, c) => {
  /*----- Variables -----*/
  let formNewCv = d.getElementById("cv-form");
  let sendCv = d.getElementById("send-cv");
  let modal = d.getElementById("modal-background");
  let dayInput = d.getElementById("day");
  let yearInput = d.getElementById("year");
  let monthResidenceInput = d.getElementById("month-residence");
  let yearResidenceInput = d.getElementById("year-residence");
  let addStudyBtn = d.getElementById("add-study");
  let addCourseBtn = d.getElementById("add-course");
  let addExperienceBtn = d.getElementById("add-experience");
  let addAdditionalBtn = d.getElementById("add-additional");
  let tableBody = d.getElementById("table-data");
  let sName = d.getElementById("s-name");
  let pages = d.getElementById("pages");
  let modalContent = d.getElementById("modal-body");
  let modalFooter = d.getElementById("modal-footer");
  let openPositionFilter = d.getElementById('filter-position');
  let positionFilterContainer = d.getElementById('position-container');
  let inputPosition = d.getElementById('f-position');
  let selectionInput = d.getElementById('s-position');
  let positionFilter = d.getElementById('position-options');
  let clearFilterPosition = d.getElementById('delete-filter-selection');
  
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

  function addTableListener() {
    let tableIconBtn = d.getElementsByClassName("table-icon-cell");

    for (let i = 0; i < tableIconBtn.length; i++) {
      tableIconBtn[i].addEventListener("click", function(event){
        let thisElement = tableIconBtn[i];
        let opIcon = thisElement.getAttribute("data-ref");
        let idIcon = thisElement.parentElement.getAttribute("id");

        if(opIcon == "download") {
          let name = thisElement.parentElement.getAttribute("data-name");
          downloadCv(idIcon, name);
        }
      });
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

  function addListenerPage() {
    let pageBtns = d.getElementsByClassName("page-btn");

    for(let i = 0; i < pageBtns.length; i++) {
      pageBtns[i].addEventListener("click", function() {
        let page = pageBtns[i].getAttribute("data-page");
        loadPageCv(10, page);
      })
    }
  }

  function openModal() {
      modal.setAttribute("class", "");
      closeModal();
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

  function loadPageCv(limit, page) {
    let formData = new FormData();
    tableBody.innerHTML = "";
      
    formData.append("limit", limit);
    formData.append("page", page);
    
    fetch(api["list-cv"], {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .catch(error => console.log('Error: ', error))
    .then(function(response){
        Object.entries(response[1]).forEach(([key, value]) => {
            let templateNew = template.templateCvItem(value);
            tableBody.insertAdjacentHTML("beforeend", templateNew);
        })
        addTableListener();
        let pageTemplate = template.templatePages(page, response[0]);
        pages.innerHTML = "";
        pages.innerHTML = pageTemplate;
        addListenerPage();
    });
  }

  function loadAllCv() {
      loadPageCv(10, 1);
  }

  function filterCv(page) {

    let name = d.getElementById('s-name').value;
    let position = d.getElementById('s-position').value;
    tableBody.innerHTML = '';
    
    if(name != '' || position != '') {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("position", position);
      formData.append("limit", 10);
      formData.append("page", page);
  
      fetch(api['filter-cv'], {
        method: "POST",
        body: formData
      })
      .then(response => response.json())
      .catch(error => console.log('Error: ', error))
      .then(function(response){
        Object.entries(response).forEach(([key, value]) => {
          let templateNew = template.templateCvItem(value);
          tableBody.insertAdjacentHTML("beforeend", templateNew);
        })
        addTableListener();
      });
    } else {
      loadAllCv();
    }
  }

  function filterPosition(position) {
    let formData = new FormData();
    formData.append("position", position);
    formData.append("limit", 10);
    formData.append("page", 1);
      
    fetch(api['filter-position'], {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .catch(error => console.log('Error: ', error))
    .then(function(response){
      let i = 1;
      Object.entries(response).forEach(([key, value]) => {
        let templateNew = template.templateFilterOption(value, i);
        positionFilter.insertAdjacentHTML("beforeend", templateNew);
        i++;
      })
      
      let optionsCheckbox = d.querySelectorAll('input[type=checkbox][name=s-position]')

      optionsCheckbox.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
          updateFilterPosition();
          filterCv(1);
        })
      })
    });
  }

  function updateFilterPosition() {
    let optionsCheckbox = d.querySelectorAll('input[type=checkbox][name=s-position]');
    let positionNumber = d.getElementById('position-numbers');
    let currentSelection = ''
    let nSelection = 0
    optionsCheckbox.forEach(function(checkbox) {
      if(checkbox.checked) {
        currentSelection += checkbox.value+'*,*';
        nSelection = nSelection + 1;
      }
    })
    let finalSelection = currentSelection.substring(0, currentSelection.length - 3)
    
    if(nSelection > 0) {
      positionNumber.innerText = ''
      positionNumber.setAttribute('class', '')
      positionNumber.innerText = nSelection+' seleccionados'
    } else {
      positionNumber.setAttribute('class', 'hide')
      positionNumber.innerText = ''
    }
    selectionInput.setAttribute('value', finalSelection)
  }

  function downloadCv(idUser, name) {
    let formData = new FormData();
      
    formData.append("id", idUser);
    fetch(api['get-cv'], {
      method: "POST",
      body: formData
    })
    .then(response => response.blob())
    .then(blob => {
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement('a');
        a.href = url;
        a.download = name+".pdf";
        document.body.appendChild(a);
        a.click();    
        a.remove();    
    });
  }

const replaceSpecialChars = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/([^\w]+|\s+)/g, '-')
    .replace(/\-\-+/g, '-')
    .replace(/(^-+|-+$)/, '');
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
  fetch(api['create-cv'], {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .catch(error => console.log('Error: ', error))
  .then(function(response){
    openModal();
    if(response[0] != 0) {
      successStatus(response[0], d.getElementById("name").value);
    } else {
      errorStatus();
    }
  });
}

function closeModal() {
  d.getElementById("close-modal").addEventListener("click", function(event){
    modalContent.innerHTML = "";
    modalFooter.innerHTML = ""
    modal.setAttribute("class", "hide");
  });
}

function hideFilterPosition() {
  positionFilterContainer.setAttribute('class', 'filter-container hide')
  positionFilter.innerHTML = '';
  inputPosition.setAttribute('value', '')
}

  /*----- Triggers -----*/
  if(tableBody) {
      loadAllCv();
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
    addListener("study");
  })
}

if(addCourseBtn){
  addCourseBtn.addEventListener("click", function(event){
    event.preventDefault();
    let templateNew = template.addCourse(d.getElementsByClassName("delete-course").length);
    this.insertAdjacentHTML("beforebegin", templateNew);
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
    addListener("additional");
  })
}

if(openPositionFilter){
  openPositionFilter.addEventListener("click", () => {
    let status = positionFilterContainer.getAttribute('class');
    if(status === 'filter-container') {
      hideFilterPosition();
    } else {
      positionFilterContainer.setAttribute('class', 'filter-container')
      filterPosition('');
      inputPosition.addEventListener('input', function() {
        let optionsCheckbox = d.querySelectorAll('input[type=checkbox][name=s-position]');
        optionsCheckbox.forEach(function(checkbox) {
          let valueFormat = replaceSpecialChars(checkbox.value.toLowerCase());
          let inputFormat = replaceSpecialChars(inputPosition.value.toLowerCase());
          if(valueFormat.includes(inputFormat) || checkbox.checked) {
            checkbox.parentElement.setAttribute('class', 'checkbox-group')
          } else {
            checkbox.parentElement.setAttribute('class', 'checkbox-group hide')
          }
        })
      })
      
      clearFilterPosition.addEventListener('click', () => {
        let optionsCheckbox = d.querySelectorAll('input[type=checkbox][name=s-position]');
        optionsCheckbox.forEach(function(checkbox) {
          checkbox.checked = false;
        })
        selectionInput.value = ''
        filterCv(1);
      })
    }
  })
}

if(sName){
  sName.addEventListener("input", function() {
    filterCv(1);
  });
}

if(formNewCv){
  formNewCv.addEventListener("submit", function(event){
    event.preventDefault(); 
    nuevoCv();
  });
}
})(document, console.log);