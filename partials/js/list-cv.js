import { api as api } from './variables.js';
import { template as template } from './template.js'
import { updateStringLang as updateStringLang } from './lang.js';

((d, c) => {
/*----- Variables -----*/
  let tableBody = d.getElementById("table-data");
  let sName = d.getElementById("s-name");
  let pages = d.getElementById("pages");
  let openPositionFilter = d.getElementById('filter-position');
  let positionFilterContainer = d.getElementById('position-container');
  let inputPosition = d.getElementById('f-position');
  let selectionInput = d.getElementById('s-position');
  let positionFilter = d.getElementById('position-options');
  let clearFilterPosition = d.getElementById('delete-filter-selection');
  let editFormCv = d.getElementById('edit-cv-form');

/*----- Functions -----*/
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
      } else if (opIcon == "edit") {
        window.location = "http://localhost/admpanel/edit-cv?id="+idIcon;
      }
    });
  }
}

function addListenerPage() {
  let pageBtns = d.getElementsByClassName("page-btn");
  let limit = d.getElementById("limit-results").value

  for(let i = 0; i < pageBtns.length; i++) {
    pageBtns[i].addEventListener("click", function() {
      let page = pageBtns[i].getAttribute("data-page");
      if(sName.value.length !== 0 || selectionInput.value.length !== 0) {
        filterCv(page);
      } else {
        loadPageCv(limit, page)
      }
    })
  }
}

function changeLimitResults() {
  let limitaPages = d.getElementById("limit-results");

  limitaPages.addEventListener("change", function() {
    loadPageCv(this.value, 1)
  })
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
      Object.entries(response[2]).forEach(([key, value]) => {
          let templateNew = template.templateCvItem(value);
          tableBody.insertAdjacentHTML("beforeend", templateNew);
      })
      addTableListener();
      let pageTemplate = template.templatePages(page, response[0], response[1], limit);
      pages.innerHTML = "";
      pages.innerHTML = pageTemplate;
      updateStringLang();
      addListenerPage();
      changeLimitResults();
  });
}

function filterCv(page) {
  let name = d.getElementById('s-name').value;
  let position = d.getElementById('s-position').value;
  
  if(name != '' || position != '') {
    let limit = d.getElementById("limit-results").value
    let formData = new FormData();
    formData.append("name", name);
    formData.append("position", position);
    formData.append("limit", limit);
    formData.append("page", page);

    fetch(api['filter-cv'], {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .catch(error => console.log('Error: ', error))
    .then(function(response){
      tableBody.innerHTML = '';
      Object.entries(response[2]).forEach(([key, value]) => {
        let templateNew = template.templateCvItem(value);
        tableBody.insertAdjacentHTML("beforeend", templateNew);
      })
      addTableListener();
      let pageTemplate = template.templatePages(page, response[0], response[1], limit);
      pages.innerHTML = "";
      pages.innerHTML = pageTemplate;
      updateStringLang();
      addListenerPage();
      changeLimitResults();
    });
  } else {
    loadPageCv(10, 1);
  }
}

function loadAllPosition() {
  let formData = new FormData();
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
    positionNumber.innerText = nSelection+' seleccionados'
  } else {
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

function replaceSpecialChar(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/([^\w]+|\s+)/g, '-')
    .replace(/\-\-+/g, '-')
    .replace(/(^-+|-+$)/, '');
}

function hideFilterPosition() {
  positionFilterContainer.setAttribute('class', 'filter-container hide');
}

/*----- Triggers -----*/
if(tableBody) {
  loadPageCv(10, 1);
}

if(openPositionFilter){
  loadAllPosition();
  openPositionFilter.addEventListener("click", () => {
    let status = positionFilterContainer.getAttribute('class');
    if(status === 'filter-container') {
      hideFilterPosition();
    } else {
      positionFilterContainer.setAttribute('class', 'filter-container')
      inputPosition.addEventListener('input', function() {
        let optionsCheckbox = d.querySelectorAll('input[type=checkbox][name=s-position]');
        optionsCheckbox.forEach(function(checkbox) {
          let valueFormat = replaceSpecialChar(checkbox.value.toLowerCase());
          let inputFormat = replaceSpecialChar(inputPosition.value.toLowerCase());
          if(valueFormat.includes(inputFormat) || checkbox.checked) {
            checkbox.parentElement.setAttribute('class', 'checkbox-group')
          } else {
            checkbox.parentElement.setAttribute('class', 'checkbox-group hide')
          }
        })
      })
      
      clearFilterPosition.addEventListener('click', () => {
        let optionsCheckbox = d.querySelectorAll('input[type=checkbox][name=s-position]');
        let limit = d.getElementById("limit-results").value
        optionsCheckbox.forEach(function(checkbox) {
          checkbox.checked = false;
        })
        updateFilterPosition();
        selectionInput.setAttribute('value', '')
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

if(editFormCv) {
  addListener("study");
  addListener("course");
  addListener("experience");
  addListener("additional");
}
})(document, console.log);