import { langEs as langEs, langPt as langPt, langEn as langEn } from './var-lang.js';

((d, c) => {
  let currentLang = (localStorage.getItem('lang') === "") ? (window.navigator.language.substr(0, 2)) : localStorage.getItem('lang');
  let langSelect = d.getElementsByClassName("lang-select");

  let addStudyBtn = d.getElementById("add-study");
  let addCourseBtn = d.getElementById("add-course");
  let addExperienceBtn = d.getElementById("add-experience");
  let addAdditionalBtn = d.getElementById("add-additional");

  if(currentLang == "es" || currentLang == "ES") {
    loadStringLang('es');
  } else if (currentLang == "en" || currentLang == "EN") {
    loadStringLang('en');
  } else {
    loadStringLang('pt');
  }

  function loadStringLang(lang) {
    let labels = d.getElementsByClassName("lang-str");
    for(let i = 0; i < labels.length; i++){
      let stringSecction = labels[i].getAttribute("data-section");
      if(lang == "es" || lang == "ES") {
        labels[i].innerHTML = langEs[stringSecction];
      } else if(lang == "en" || lang == "EN") {
        labels[i].innerHTML = langEn[stringSecction];
      } else {
        labels[i].innerHTML = langPt[stringSecction];
      }
    }

    let validations = d.getElementsByClassName("input-form");
    for(let i = 0; i < validations.length; i++){
      let stringValidation = validations[i].getAttribute("data-validation");
      if(lang == "es" || lang == "ES") {
        validations[i].setCustomValidity(langEs[stringValidation]);
      } else if(lang == "en" || lang == "EN") {
        validations[i].setCustomValidity(langEn[stringValidation]);
      } else {
        validations[i].setCustomValidity(langPt[stringValidation]);
      }
    }

    let placeholders = d.getElementsByClassName("input-form");
    for(let i = 0; i < placeholders.length; i++){
      let currentInput = placeholders[i]
      if(currentInput.nodeName == 'INPUT' || currentInput.nodeName == 'TEXTAREA') {
        let stringPlaceholder = currentInput.getAttribute("name");
        if(lang == "es" || lang == "ES") {
          currentInput.setAttribute('placeholder', langEs[stringPlaceholder]);
        } else if(lang == "en" || lang == "EN") {
          currentInput.setAttribute('placeholder', langEn[stringPlaceholder]);
        } else {
          currentInput.setAttribute('placeholder', langPt[stringPlaceholder]);
        }
      }
    }
  }

  function selectCurrent() {
    for(let i = 0; i < langSelect.length; i++){
      let thisBtn = langSelect[i];
      let btnLang = thisBtn.getAttribute('id');
      
      (btnLang == currentLang) ? thisBtn.setAttribute("class", "lang-select selected") : thisBtn.setAttribute("class", "lang-select");
    }
  }

  if(langSelect) {
    for(let i = 0; i < langSelect.length; i++){
      let thisBtn = langSelect[i];
      let btnLang = thisBtn.getAttribute('id');
      
      selectCurrent();
      thisBtn.addEventListener("click", function(){
        loadStringLang(btnLang);
        localStorage.setItem('lang', btnLang);
        currentLang = btnLang;
        selectCurrent();
      })
    }
  }


if(addStudyBtn){
  addStudyBtn.addEventListener("click", function(event){
    event.preventDefault();
    loadStringLang(currentLang)
  })
}

if(addCourseBtn){
  addCourseBtn.addEventListener("click", function(event){
    event.preventDefault();
    loadStringLang(currentLang)
  })
}

if(addExperienceBtn){
  addExperienceBtn.addEventListener("click", function(event){
    event.preventDefault();
    loadStringLang(currentLang)
  })
}

if(addAdditionalBtn){
  addAdditionalBtn.addEventListener("click", function(event){
    event.preventDefault();
    loadStringLang(currentLang)
  })
}
})(document, console.log);