<?php
require_once 'dbcnfg.php';

header("Access-Control-Allow-Origin: *");

function filterCv($name, $position, $limit = 10, $page = 1) {
    $offset = ($page == 1) ? 0 : (($page*10)-10);
    $result = array();
    $prevSql = "SELECT DISTINCT(person.id_person) FROM person";

    if($position != '') {
        $prevSql .= " INNER JOIN professional_experience ON person.id_person = professional_experience.id_person WHERE person.name LIKE '%$name%' AND (";
        $positionArray = explode("*,*", $position);
    
        for($i = 0; $i < count($positionArray); $i++) {
            $prevSql .= ($i < count($positionArray)-1) ? "professional_experience.position = '".$positionArray[$i]."' OR " : "professional_experience.position = '".$positionArray[$i]."'";
        }
        $prevSql .= ")";
    } else {
        $prevSql .= " WHERE person.name LIKE '%$name%'";
    }

    $allResultSql = $prevSql;

    $prevSql .= "ORDER BY person.name ASC LIMIT $limit OFFSET $offset";

    $resultSql = mysqli_query($GLOBALS['conn'], $prevSql);

    while ($idPerson = mysqli_fetch_object($resultSql)) {
        $idUser = $idPerson->id_person;
        
        $personSql = "SELECT * FROM person WHERE id_person = $idUser";
        
        $personResult = mysqli_query($GLOBALS['conn'], $personSql);
        while ($person = mysqli_fetch_object($personResult)) {
            $academic = array();
            $academicSql = "SELECT * FROM academic_formation WHERE id_person = $idUser";
            $academicResult = mysqli_query($GLOBALS['conn'], $academicSql);
            $person->studies = array();
            while ($academic = mysqli_fetch_object($academicResult)) {
                array_push($person->studies, $academic);
            }
            
            $professional = array();
            $professionalSql = "SELECT * FROM professional_experience WHERE id_person = $idUser";
            $professionalResult = mysqli_query($GLOBALS['conn'], $professionalSql);
            $person->experiences = array();
            while ($professional = mysqli_fetch_object($professionalResult)) {
                array_push($person->experiences, $professional);
            }
            
            $courses = array();
            $coursesSql = "SELECT * FROM courses WHERE id_person = $idUser";
            $coursesResult = mysqli_query($GLOBALS['conn'], $coursesSql);
            $person->courses = array();
            while ($course = mysqli_fetch_object($coursesResult)) {
                array_push($person->courses, $course);
            }
            
            $additional = array();
            $additionalSql = "SELECT * FROM additional WHERE id_person = $idUser";
            $additionalResult = mysqli_query($GLOBALS['conn'], $additionalSql);
            $person->additionals = array();
            while ($additional = mysqli_fetch_object($additionalResult)) {
                array_push($person->additionals, $additional);
            }
            
            array_push($result, $person);
        }
    }

    $allResultCount = mysqli_query($GLOBALS['conn'], $allResultSql);
    $nResults = mysqli_num_rows($allResultCount);
    $pResult = ceil($nResults/$limit);
    
    echo json_encode(array($pResult, $nResults, $result));
}


if($_POST) {
    filterCv($_POST["name"], $_POST["position"], $_POST["limit"], $_POST["page"]);
}