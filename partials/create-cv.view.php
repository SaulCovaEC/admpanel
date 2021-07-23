  <div class="main-panel">
    <h2>Agregar un CV</h2>
    <form id="cv-form" action="">
      <div class="title-section">
        <p>Informacion personal</p>
        <hr/>
      </div>

      <section id="person-data">
        <div class="form-group col-2-3">
          <label for="name">Nome</label>
          <input type="text" id="name" placeholder="Name" required="required" name="name" class="input-form"/>
        </div>

        
        <div class="form-group col-1-3">
          <label for="date_of_birth">Fecha de nacimiento</label>
          <div class="date-container">
              <select id="day" name="day"class="input-form" required="required">
                <option value="" disabled selected>Dia</option>
              </select>
              <select id="month" name="month" class="input-form" required="required">
                <option value="" disabled selected>Mes</option>
                <option value="1">Enero</option>
                <option value="2">Febrero</option>
                <option value="3">Marzo</option>
                <option value="4">Abril</option>
                <option value="5">Mayo</option>
                <option value="6">Junio</option>
                <option value="7">Julio</option>
                <option value="8">Agosto</option>
                <option value="9">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
              </select>
              <select id="year" name="year" class="input-form" required="required">
                <option value="" disabled selected>Ano</option>
              </select>
          </div>
        </div>

        <div class="form-group col-1-3">
          <label for="nacionality">Nacionalidad</label>
          <input type="text" id="nacionality" placeholder="Nacionalidad" required="required" name="nacionality" value="Venezuelano(a)" class="input-form"/>
        </div>
      

        <div class="form-group col-1-3">
          <label for="gender">Sexo</label>
          <select name="gender" id="gender" class="input-form" required="required">
            <option value="" disabled selected>Seleccione una opcion</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
            <option value="O">Otro</option>
          </select>
        </div>
      
        <div class="form-group col-1-3">
          <label for="civil-status">Estado civil</label>
          <select name="civil_status" id="civil-status" required="required" class="input-form">
            <option value="" disabled selected>Seleccione una opcion</option>
            <option value="Solteiro(a)">Solteiro(a)</option>
            <option value="Casado(a)">Casado(a)</option>
            <option value="Divorciado(a)">Divorciado(a)</option>
            <option value="Viúvo(a)">Viúvo(a)</option>
            <option value="Separado(a)">Separado(a)</option>
          </select>
        </div>    

        <div class="form-group col-1-3">
          <label for="time-residence">Tiempo de residencia</label>
          <input type="text" id="time-residence" placeholder="Tiempo de residencia" required="required" name="time_residence" class="input-form"/>
        </div>
      
        <div class="form-group col-1-3">
          <label for="telephone">Telefono</label>
          <input type="text" id="telephone" placeholder="(00) 00000 0000" required="required" name="telephone" class="input-form"/>
        </div>
      
        <div class="form-group col-1-3">
          <label for="email">Correo</label>
          <input type="email" id="email" placeholder="Correo" required="required" name="email" class="input-form"/>
        </div>

        <div class="form-group col-1-1">
          <label for="adress">Direccion</label>
          <textarea name="adress" id="adress" cols="30" rows="2" required="required" placeholder="Direccion" class="input-form"></textarea>
        </div>
      </section>

      <div class="title-section">
        <p>Formacion academica</p>
        <hr/>
      </div>

      <section id="academic-data">
        <div class="form-group col-1-1">
          <button role="button" class="btn" id="add-study">Agregar estudio</button>
        </div>
      </section>

      <div class="title-section">
        <p>Cursos</p>
        <hr/>
      </div>

      <section id="courses">
        <div class="form-group col-1-1">
          <button role="button" class="btn" id="add-course">Agregar curso</button>
        </div>
      </section>
    
      <div class="title-section">
        <p>Experiencia laboral</p>
        <hr/>
      </div>

      <section id="experience">
        <div class="form-group col-1-1">
          <button role="button" class="btn" id="add-experience">Agregar experiencia laboral</button>
        </div>
      </section>
      
      <div class="title-section">
        <p>Informacion adicional</p>
        <hr/>
      </div>

      <section id="additional-data">
        <div class="form-group col-1-1">
          <button role="button" class="btn" id="add-additional">Agregar informacion</button>
        </div>
      </section>

      <div class="form-group col-1-1">
        <button class="btn" id="send-cv">Enviar</button>
      </div>
    </form>
  </div>