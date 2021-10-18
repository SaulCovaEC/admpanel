<div class="main-panel">
  <div id="list-cv-header">
    <div class="header-group">
      <div class="filter-group">
        <label for="s-name" class="lang-str" data-section="name-filter"></label>
        <input type="text" name="s-name" id="s-name"/>
      </div>
      <div class="filter-group">
        <p id="position-numbers" class="hide"></p>
        <input type="text" name="s-position" id="s-position" class="hide" disabled></input>
        <button role='button' id="filter-position" class="lang-str btn" data-section="position-filter-btn"></button>
        <div id='position-container' class="filter-container hide">
          <fieldset>
            <legend>
              <input type="text" name="f-position" id="f-position"/>
            </legend>
            <div id="position-options">
            </div>
            <button role='button' id="delete-filter-selection" class="lang-str btn" data-section="clear-filter-btn"></button>
          </fieldset>
        </div>
      </div>
    </div>
    <div class="header-group">
      <a type="button" id="btn-new-cv" class="lang-str btn" data-section="create-cv-btn" href="<?php echo host();?>/create-cv" target="_self"></a>
    </div>
  </div>

  <table class="table-cv">
    <thead>
      <tr>
        <th class="lang-str" data-section="name-table"></th>
        <th class="lang-str" data-section="email-table"></th>
        <th class="lang-str" data-section="phone-table"></th>
        <th class="lang-str" data-section="academic-formation-table"></th>
        <th class="lang-str" data-section="course-table"></th>
        <th class="lang-str" data-section="job-experience-table"></th>
        <th class="lang-str" data-section="aditional-table"></th>
        <th class="lang-str" data-section="edit-cv-table"></th>
        <th class="lang-str" data-section="download-table"></th>
      </tr>
    </thead>
    <tbody id="table-data">
    </tbody>
  </table>
  <div id="pages"></div>
<div>