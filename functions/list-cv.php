<?php
require_once 'dbcnfg.php';

header("Access-Control-Allow-Origin: *");

function allCv($limit = 10, $page = 1) {
    $offset = ($page == 1) ? 0 : ($page*10)-1;
    $result = array();
    $personSql = "SELECT * FROM person LIMIT $limit OFFSET $offset";

    $personResult = mysqli_query($GLOBALS['conn'], $personSql);
    
    while ($person = mysqli_fetch_object($personResult)) {
        $idUser = $person->id_person;
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

    echo json_encode($result);
}


if($_POST) {
    allCv($_POST["limit"], $_POST["page"]);
}
