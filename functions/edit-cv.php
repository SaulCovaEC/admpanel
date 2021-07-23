<?php
require_once 'dbcnfg.php';

header("Access-Control-Allow-Origin: *");

function formatObject($string) {
    $varPost = $string;
    $varExplode = explode("},", $varPost);
    $numbVars = count($varExplode);
    $resultObj = array();
    
    if ($numbVars == '1') {
        array_push($resultObj, json_decode($string));
    } else {
        for($i = 0; $i < $numbVars; $i++) {
            $item = ($i < ($numbVars-1)) ? $varExplode[$i]."}" : $varExplode[$i];
            
            array_push($resultObj, json_decode($item));
        }
    }
    
    return $resultObj;
}

function createPerson() {
    $name = $_POST["name"];
    $nacionality = $_POST["nacionality"];
    $time_residence = $_POST["time_residence"];
    $gender = $_POST["gender"];
    $civil_status = $_POST["civil_status"];
    $adress = $_POST["adress"];
    $date_of_birth = $_POST["year"]."-".(($_POST["month"] < 10) ? "0".$_POST["month"] : $_POST["month"])."-".$_POST["day"];
    $telephone = $_POST["telephone"];
    $email = $_POST["email"];
    $objetive = (empty($_POST["objetive"])) ? "Inserção do mercado de trabalho" : $_POST["objetive"];
    $sql = "INSERT INTO person (name, nationality, time_residence, gender, civil_status, adress, date_of_birth, telephone, email, objective) VALUES ('".$name."', '".$nacionality."', '".$time_residence."', '".$gender."','".$civil_status."', '".$adress."', '".$date_of_birth."', '".$telephone."', '".$email."', '".$objetive."')";

    mysqli_query($GLOBALS['conn'], $sql);
    return mysqli_insert_id($GLOBALS['conn']);
}

function createStudies($id_person, $studies) {
    $numbStudies = count($studies);
    for($i = 0; $i < $numbStudies; $i++){
        $grade = $studies[$i]->grade_study;
        $status = $studies[$i]->status_study;
        $career = $studies[$i]->college_career;
        $institution = $studies[$i]->institution;
        $date = $studies[$i]->date_study;
        
        $sql = "INSERT INTO academic_formation(grade_study, status_study, college_career, institution, date_study, id_person) VALUES ('$grade', '$status', '$career', '$institution', '$date', '$id_person')";
        mysqli_query($GLOBALS['conn'], $sql);
    }
}

function createExperiences($id_person, $experiences) {
    $numbExperiences = count($experiences);
    for($i = 0; $i < $numbExperiences; $i++){
        $position = $experiences[$i]->position;
        $company = $experiences[$i]->company;
        $date = $experiences[$i]->date_experience;
        $country = $experiences[$i]->country;
        
        $sql = "INSERT INTO professional_experience(position, company, date, country, id_person) VALUES ('$position', '$company', '$date', '$country', '$id_person')";
        mysqli_query($GLOBALS['conn'], $sql);
    }
}

function createCourses($id_person, $courses) {
    $numbCourses = count($courses);
    for($i = 0; $i < $numbCourses; $i++){
        $title = $courses[$i]->title;
        $institution = $courses[$i]->institution;
        $date = $courses[$i]->date_course;
        
        $sql = "INSERT INTO courses(title, institution, date, id_person) VALUES ('$title', '$institution', '$date', '$id_person')";
        mysqli_query($GLOBALS['conn'], $sql);
    }
}

function createAdditionals($id_person, $additionals) {
    $numbAdditionals = count($additionals);
    for($i = 0; $i < $numbAdditionals; $i++){
        $description = $additionals[$i]->description;
        
        $sql = "INSERT INTO additional(description, id_person) VALUES ('$description', '$id_person')";
        mysqli_query($GLOBALS['conn'], $sql);
        array_push($test, $sql);
    }
}

if($_POST) {
    $result = array();
    $id_person = createPerson();
    array_push($result, $id_person);
    
    if(!empty($_POST["studies"])){
        $studies = formatObject($_POST["studies"]);
        $studiesResult = createStudies($id_person ,$studies);
        array_push($result, $studiesResult);
    } else {
        array_push($result, null);
    }
    
    if(!empty($_POST["experiences"])){
        $experiences = formatObject($_POST["experiences"]);
        $experiencesResult = createExperiences($id_person ,$experiences);
        array_push($result, $experiencesResult);
    } else {
        array_push($result, null);
    }
    
    if(!empty($_POST["courses"])){
        $courses = formatObject($_POST["courses"]);
        $coursesResult = createCourses($id_person ,$courses);
        array_push($result, $coursesResult);
    } else {
        array_push($result, null);
    }
    
    if(!empty($_POST["additionals"])){
        $additionals = formatObject($_POST["additionals"]);
        $additionalResult = createAdditionals($id_person ,$additionals);
        array_push($result, $additionalResult);
    } else {
        array_push($result, null);
    }
    
    echo json_encode($result);
}