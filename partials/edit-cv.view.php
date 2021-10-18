<div class="main-panel">
    <h2 class="lang-str" data-section="title-new-cv"></h2>
    <form id="edit-cv-form" action="" data-user="<?php echo $dataUser->id_person?>">
      <div class="title-section">
        <p class="lang-str" data-section="information-person"></p>
        <hr/>
      </div>

      <section id="person-data">
        <div class="form-group col-2-3">
          <label for="name" class="lang-str" data-section="person-name"></label>
          <input type="text" id="name" required="required" name="name" class="input-form" data-validation="error-name" value="<?php echo $dataUser->name;?>"/>
        </div>

        <div class="form-group col-1-3">
          <label for="date_of_birth" class="lang-str" data-section="person-date"></label>
          <div class="date-container">
              <?php $dateN = explode("-", $dataUser->date_of_birth);?>
              <select id="day" name="day"class="input-form" required="required">
                <option value="<?php echo $dateN[2];?>"><?php echo $dateN[2];?></option>
              </select>
              <select id="month" name="month" class="input-form" required="required">
                <option value="" disabled selected class="lang-str" data-section="month"></option>
                <option value="1" class="lang-str" data-section="january" <?php echo ($dateN[1] == '01') ? 'selected' : '';?>></option>
                <option value="2" class="lang-str" data-section="february" <?php echo ($dateN[1] == '02') ? 'selected' : '';?>></option>
                <option value="3" class="lang-str" data-section="march" <?php echo ($dateN[1] == '03') ? 'selected' : '';?>></option>
                <option value="4" class="lang-str" data-section="april" <?php echo ($dateN[1] == '04') ? 'selected' : '';?>></option>
                <option value="5" class="lang-str" data-section="may" <?php echo ($dateN[1] == '05') ? 'selected' : '';?>></option>
                <option value="6" class="lang-str" data-section="june" <?php echo ($dateN[1] == '06') ? 'selected' : '';?>></option>
                <option value="7" class="lang-str" data-section="july" <?php echo ($dateN[1] == '07') ? 'selected' : '';?>></option>
                <option value="8" class="lang-str" data-section="august" <?php echo ($dateN[1] == '08') ? 'selected' : '';?>></option>
                <option value="9" class="lang-str" data-section="september" <?php echo ($dateN[1] == '09') ? 'selected' : '';?>></option>
                <option value="10" class="lang-str" data-section="october" <?php echo ($dateN[1] == '10') ? 'selected' : '';?>></option>
                <option value="11" class="lang-str" data-section="november" <?php echo ($dateN[1] == '11') ? 'selected' : '';?>></option>
                <option value="12" class="lang-str" data-section="december" <?php echo ($dateN[1] == '12') ? 'selected' : '';?>></option>
              </select>
              <select id="year" name="year" class="input-form" required="required">
                <option value="<?php echo $dateN[0];?>"><?php echo $dateN[0];?></option>
              </select>
          </div>
        </div>

        <div class="form-group col-1-4">
          <label for="nacionality" class="lang-str" data-section="person-nacionality"></label>
          <input type="text" id="nacionality" required="required" name="nacionality" value="Venezuelano(a)" class="input-form" value="<?php echo $dataUser->nacionality;?>"/>
        </div>
      

        <div class="form-group col-1-4">
          <label for="gender" class="lang-str" data-section="person-gender"></label>
          <select name="gender" id="gender" class="input-form" required="required">
            <option value="" disabled selected class="lang-str" data-section="select-option"></option>
            <option value="M" class="lang-str" data-section="gender-male" <?php echo ($dataUser->gender == "M") ? "selected" : "";?>></option>
            <option value="F" class="lang-str" data-section="gender-female" <?php echo ($dataUser->gender == "F") ? "selected" : "";?>></option>
            <option value="O" class="lang-str" data-section="gender-other" <?php echo ($dataUser->gender == "O") ? "selected" : "";?>></option>
          </select>
        </div>
      
        <div class="form-group col-1-4">
          <label for="civil-status" class="lang-str" data-section="person-civil-status"></label>
          <select name="civil_status" id="civil-status" required="required" class="input-form">
            <option value="" disabled selected class="lang-str" data-section="select-option"></option>
            <option value="Solteiro(a)" class="lang-str" data-section="single" <?php echo ($dataUser->civil_status == "Solteiro(a)") ? "selected" : "";?>></option>
            <option value="Casado(a)" class="lang-str" data-section="married" <?php echo ($dataUser->civil_status == "Casado(a)") ? "selected" : "";?>></option>
            <option value="Divorciado(a)" class="lang-str" data-section="divorced" <?php echo ($dataUser->civil_status == "Divorciado(a)") ? "selected" : "";?>></option>
            <option value="Viúvo(a)" class="lang-str" data-section="widower" <?php echo ($dataUser->civil_status == "Viúvo(a)") ? "selected" : "";?>></option>
            <option value="Separado(a)" class="lang-str" data-section="separated" <?php echo ($dataUser->civil_status == "Separado(a)") ? "selected" : "";?>></option>
          </select>
        </div> 
 
        <div class="form-group col-1-4">
          
        </div>

        <div class="form-group col-1-3">
          <label for="email" class="lang-str" data-section="person-email"></label>
          <input type="email" id="email" required="required" name="email" class="input-form" value="<?php echo $dataUser->email;?>"/>
        </div>
      
        <div class="form-group col-1-3">
          <label for="telephone" class="lang-str" data-section="person-phone"></label>
          <input type="number" id="telephone" required="required" name="telephone" class="input-form" value="<?php echo $dataUser->telephone;?>"/>
        </div>

        <div class="form-group col-1-3">
          <label for="telephone-2" class="lang-str" data-section="person-phone"></label>
          <input type="number" id="telephone-2" required="required" name="telephone-2" class="input-form" value="<?php echo (!empty($dataUser->telephone2)) ? $dataUser->telephone2: "";?>"/>
        </div>

        <div class="form-group col-1-1">
          <label for="address" class="lang-str" data-section="person-address"></label>
          <textarea name="address" id="address" cols="30" rows="2" required="required" class="input-form"><?php echo $dataUser->address;?></textarea>
        </div>
      </section>

      <div class="title-section">
        <p class="lang-str" data-section="academic-formation"></p>
        <hr/>
      </div>

      <section id="academic-data">
        <div class="form-group col-1-1">
          <?php $idStudy = 1;?>
          <?php foreach ($dataUser->studies as $study): ?>
            <section class="study-reg" id="study" data-id="<?php echo $idStudy;?>">
              <div class="section-title">
                <p class="lang-str title" data-section="academic-formation"></p>
                <p role="button" class="delete-study btn-delete-element" data-element="<?php echo $idStudy;?>"><i class="fas fa-trash"></i></p>
              </div>

              <div class="study-form">
                <div class="form-group col-1-3">
                  <label for="grade-study">Nivel alcanzado</label>
                  <select name="grade_study" id="grade-study" required="required" class="input-study">
                    <option value="" disabled>Seleccione una opcion</option>
                    <option value="medio" <?php echo ($study->grade_study == "medio") ? "selected" : "";?>>Medio</option>
                    <option value="superior" <?php echo ($study->grade_study == "superior") ? "selected" : "";?>>Superior</option>
                  </select>
                </div>

                <div class="form-group col-1-3">
                  <label for="status-study">Estado alcanzado</label>
                  <select name="status_study" id="status-study" required="required" class="input-study">
                    <option value="" disabled>Seleccione una opcion</option>
                    <option value="incompleto" <?php echo ($study->status_study == "incompleto") ? "selected" : "";?>>Incompleto</option>
                    <option value="completo" <?php echo ($study->status_study == "completo") ? "selected" : "";?>>Completo</option>
                  </select>
                </div>
                
                <div class="form-group col-1-3">
                  <label for="date-study">Ano de estudio</label>
                  <input type="text" id="date-study" placeholder="Ano de estudio" required="required" name="date_study" class="input-study" value="<?php echo $study->date_study;?>"/>
                </div>

                <div class="form-group col-1-2">
                  <label for="institution">Institucion de estudio</label>
                  <input type="text" id="institution" placeholder="Institucion de estudio" required="required" name="institution" class="input-study" value="<?php echo $study->institution;?>"/>
                </div>
                
                <div class="form-group col-1-2">
                  <label for="college-career">Titulo obtenido</label>
                  <input type="text" id="college-career" placeholder="Titulo obtenido" required="required" name="college_career" class="input-study" value="<?php echo $study->college_career;?>"/>
                </div>
              </div>
            </section>
            <?php $idStudy++;?>
          <?php endforeach;?>

          <button role="button" id="add-study" class="btn lang-str" data-section="academic-formation"></button>
        </div>
      </section>

      <div class="title-section">
        <p class="lang-str" data-section="courses"></p>
        <hr/>
      </div>

      <section id="courses">
        <div class="form-group col-1-1">
          <?php $idCourse = 1;?>
          <?php foreach ($dataUser->courses as $course): ?>
            <section class="course-reg" id="course" data-id="<?php echo $idCourse;?>">
              <div class="section-title">
                <p class="title">Curso <?php echo $idCourse;?></p>
                <p role="button" class="delete-course btn-delete-element" data-element="<?php echo $idCourse;?>"><i class="fas fa-trash"></i></p>
              </div>

              <div class="course-form">
                <div class="form-group col-1-3">
                  <label for="course-title">Nombre del curso</label>
                  <input type="text" id="course-title" placeholder="Nombre del curso" required="required" name="title" class="input-course" value="<?php echo $course->title;?>"/>
                </div>
                
                <div class="form-group col-1-3">
                  <label for="institution">Institucion de estudio</label>
                  <input type="text" id="institution" placeholder="Institucion de estudio" required="required" name="institution" class="input-course" value="<?php echo $course->institution;?>"/>
                </div>
                
                <div class="form-group col-1-3">
                  <label for="date-course">Ano de estudio</label>
                  <input type="text" id="date-course" placeholder="Ano de estudio" required="required" name="date_course" class="input-course" value="<?php echo $course->date;?>"/>
                </div>
              </div>
            </section>
            <?php $idCourse++;?>
          <?php endforeach;?>

          <button role="button" id="add-course" class="btn lang-str" data-section="courses-btn"></button>
        </div>
      </section>
    
      <div class="title-section">
        <p class="lang-str" data-section="work-experience"></p>
        <hr/>
      </div>

      <section id="experience">
        <div class="form-group col-1-1">
          <?php $idEperience = 1;?>
          <?php foreach ($dataUser->experiences as $experience): ?>
            <section class="experience-reg" id="experience" data-id="<?php echo $idEperience;?>">
              <div class="section-title">
                <p class="title">Experiencia laboral <?php echo $idEperience;?></p>
                <p role="button" class="delete-experience btn-delete-element" data-element="<?php echo $idEperience;?>"><i class="fas fa-trash"></i></p>
              </div>

              <div class="experience-form">
                <div class="form-group col-1-2">
                  <label for="experience-position">Cargo</label>
                  <input type="text" id="experience-position" placeholder="Cargo" required="required" name="position" class="input-experience" value="<?php echo $experience->position;?>"/>
                </div>
                
                <div class="form-group col-1-2">
                  <label for="company">Empresa</label>
                  <input type="text" id="company" placeholder="Empresa" required="required" name="company" class="input-experience" value="<?php echo $experience->company;?>"/>
                </div>
                
                <div class="form-group col-1-2">
                  <label for="date-experience">Fecha</label>
                  <input type="text" id="date-experience" placeholder="Fecha" required="required" name="date_experience" class="input-experience" value="<?php echo $experience->date;?>"/>
                </div>
                <div class="form-group col-1-2">
                  <label for="country">Pais</label>
                  <input type="text" id="country" placeholder="Pais" required="required" name="country" class="input-experience" value="<?php echo $experience->country;?>"/>
                </div>
              </div>
            </section>
            <?php $idEperience++;?>
          <?php endforeach;?>

          <button role="button" id="add-experience" class="btn lang-str" data-section="work-btn"></button>
        </div>
      </section>
      
      <div class="title-section">
        <p class="lang-str" data-section="additional"></p>
        <hr/>
      </div>

      <section id="additional-data">
        <div class="form-group col-1-1">
          <?php $idAddtional = 1;?>
          <?php foreach ($dataUser->additionals as $additional): ?>
            <section class="additional-reg" id="additional" data-id="<?php echo $idAddtional;?>">
              <div class="section-title">
                <p class="title">Informacion adicional <?php echo $idAddtional;?></p>
                <p role="button" class="delete-additional btn-delete-element" data-element="<?php echo $idAddtional;?>"><i class="fas fa-trash"></i></p>
              </div>

              <div class="additional-form">
                <div class="form-group col-1-1">
                  <label for="desciption">Descripcion</label>
                  <input type="text" id="additional" placeholder="Descripcion" required="required" name="description" class="input-additional" value="<?php echo $additional->description;?>"/>
                </div>
              </div>
            </section>
            <?php $idAddtional++;?>
          <?php endforeach;?>

          <button role="button" id="add-additional" class="btn lang-str" data-section="additional-btn"></button>
        </div>
      </section>

      <div class="form-group col-1-1">
        <button id="send-cv" class="btn lang-str" data-section="send"></button>
      </div>
    </form>
  </div>