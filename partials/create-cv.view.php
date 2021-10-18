<div class="main-panel">
    <h2 class="lang-str" data-section="title-new-cv"></h2>
    <form id="cv-form">
      <div class="title-section">
        <p class="lang-str" data-section="information-person"></p>
        <hr/>
      </div>

      <section id="person-data">
        <div class="form-group col-2-3">
          <label for="person-name" class="lang-str" data-section="person-name"></label>
          <input type="text" id="person-name" name="person-name" class="input-form"/>
        </div>

        
        <div class="form-group col-1-3">
          <label for="date_of_birth" class="lang-str" data-section="person-date"></label>
          <div class="date-container">
              <select id="day" name="day"class="input-form" required>
                <option value="" disabled selected class="lang-str" data-section="day"></option>
              </select>
              <select id="month" name="month" class="input-form" required>
                <option value="" disabled selected class="lang-str" data-section="month"></option>
                <option value="1" class="lang-str" data-section="january"></option>
                <option value="2" class="lang-str" data-section="february"></option>
                <option value="3" class="lang-str" data-section="march"></option>
                <option value="4" class="lang-str" data-section="april"></option>
                <option value="5" class="lang-str" data-section="may"></option>
                <option value="6" class="lang-str" data-section="june"></option>
                <option value="7" class="lang-str" data-section="july"></option>
                <option value="8" class="lang-str" data-section="august"></option>
                <option value="9" class="lang-str" data-section="september"></option>
                <option value="10" class="lang-str" data-section="october"></option>
                <option value="11" class="lang-str" data-section="november"></option>
                <option value="12" class="lang-str" data-section="december"></option>
              </select>
              <select id="year" name="year" class="input-form" required>
                <option value="" disabled selected class="lang-str" data-section="year"></option>
              </select>
          </div>
        </div>

        <div class="form-group col-1-4">
          <label for="nacionality" class="lang-str" data-section="person-nacionality"></label>
          <input type="text" id="nacionality" name="nacionality" value="Venezuelano(a)" data-validation="error-name" class="input-form" required/>
        </div>
      

        <div class="form-group col-1-4">
          <label for="gender" class="lang-str" data-section="person-gender"></label>
          <select name="gender" id="gender" class="input-form" data-validation="error-name" required>
            <option value="" disabled selected class="lang-str" data-section="select-option"></option>
            <option value="M" class="lang-str" data-section="gender-male"></option>
            <option value="F" class="lang-str" data-section="gender-female"></option>
            <option value="O" class="lang-str" data-section="gender-other"></option>
          </select>
        </div>
      
        <div class="form-group col-1-4">
          <label for="civil-status" class="lang-str" data-section="person-civil-status"></label>
          <select name="civil_status" id="civil-status" data-validation="error-name" class="input-form" required>
            <option value="" disabled selected class="lang-str" data-section="select-option"></option>
            <option value="Solteiro(a)" class="lang-str" data-section="single"></option>
            <option value="Casado(a)" class="lang-str" data-section="married"></option>
            <option value="Divorciado(a)" class="lang-str" data-section="divorced"></option>
            <option value="Viúvo(a)" class="lang-str" data-section="widower"></option>
            <option value="Separado(a)" class="lang-str" data-section="separated"></option>
          </select>
        </div>

        <div class="form-group col-1-3">
          <label for="email" class="lang-str" data-section="person-email"></label>
          <input type="email" id="email" data-validation="error-name" name="email" class="input-form" required/>
        </div>
      
        <div class="form-group col-1-3">
          <label for="telephone" class="lang-str" data-section="person-phone"></label>
          <input type="number" id="telephone" data-validation="error-name" name="telephone" class="input-form" required/>
        </div>

        <div class="form-group col-1-3">
          <label for="telephone-2" class="lang-str" data-section="person-phone-2"></label>
          <input type="number" id="telephone-2" name="telephone-2" class="input-form"/>
        </div>

        <div class="form-group col-1-1">
          <label for="address" class="lang-str" data-section="person-address"></label>
          <textarea name="address" id="address" cols="30" rows="2" data-validation="error-name" class="input-form" required></textarea>
        </div>
      </section>

      <div class="title-section">
        <p class="lang-str" data-section="academic-formation"></p>
        <hr/>
      </div>

      <section id="academic-data">
        <div class="form-group col-1-1">
          <button role="button" id="add-study" class="btn lang-str" data-section="academic-formation"></button>
        </div>
      </section>

      <div class="title-section">
        <p class="lang-str" data-section="courses"></p>
        <hr/>
      </div>

      <section id="courses">
        <div class="form-group col-1-1">
          <button role="button" id="add-course" class="btn lang-str" data-section="courses-btn"></button>
        </div>
      </section>
    
      <div class="title-section">
        <p class="lang-str" data-section="work-experience"></p>
        <hr/>
      </div>

      <section id="experience">
        <div class="form-group col-1-1">
          <button role="button" id="add-experience" class="btn lang-str" data-section="work-btn"></button>
        </div>
      </section>
      
      <div class="title-section">
        <p class="lang-str" data-section="additional"></p>
        <hr/>
      </div>

      <section id="additional-data">
        <div class="form-group col-1-1">
          <button role="button" id="add-additional" class="btn lang-str" data-section="additional-btn"></button>
        </div>
      </section>

      <div class="form-group col-1-1">
        <button id="send-cv" class="btn lang-str" type="submit" data-section="send"></button>
      </div>
    </form>
  </div>