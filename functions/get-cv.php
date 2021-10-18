<?php
require_once 'dbcnfg.php';
require('./fpdf/fpdf.php');

header("Access-Control-Allow-Origin: *");

class PDF extends FPDF {
    // Page header
    function Header(){
      // Width and position
      $width = $this->GetPageWidth();
      $iconPosition = $width -40;
      // Border colors
      $this->Image('../img/border.png',0,6,$width, 1);
      // Logo imagen
      $this->Image('../img/logo-cv.png',$iconPosition,12,30);
      if($this->PageNo() > 1) {
        // Line break
        $this->Ln(14);
      } else {
        // Line break
        $this->Ln(2);
      }
    }

    function Footer(){
      // Position at 1.5 cm from bottom
      $this->SetY(-20);
      $this->SetFont('Arial','',9);
      $this->SetTextColor(0,0,0);
      $footerText = utf8_decode("Associação Hermanitos - CNPJ: 34.956.978/0001- 43\n R. Quintino Bocaiúva, 626 - Centro, Manaus/ AM, 69075-904 \n Tel.: (92) 99431-5431   |   e-mail: hermanitos@hermanitos.org.br   |   www.hermanitos.org.br");
      $this->MultiCell(0,4,$footerText,0,'C', false);
    }
    
    function ChapterBody($data){
      // PERSONAL INFO
    	// Name
      $this->SetFont('Times','B',20);
    	$this->Cell(0,15,utf8_decode($data->name));
    	$this->Ln();
      // Civil Status
      $this->SetFont('Times','',10);
      $this->Cell(0,6,utf8_decode('Nacionalidade: '.$data->nationality." - ".$data->time_residence));
    	$this->Ln();
      // Direction
      $this->Cell(0,6,utf8_decode('Endereço: '.$data->address));
    	$this->Ln();
      // Day of birth
      $this->Cell(0,6,'Data de Nascimento: '.$this->formatDate($data->date_of_birth));
    	$this->Ln();
      // Phone
      $this->Cell(0,6,'Telefone: '.$this->formatPhone($data->telephone));
      // Email
    	$this->Ln();
      $this->Cell(0,6,utf8_decode('E-Mail: '.$data->email));
    	// Line break
    	$this->Ln();

      $this->Ln();
      $this->SetFont('Times','B',14);
    	$this->Cell(0,10,utf8_decode("OBJETIVO"),'B');
    	$this->Ln();

      $this->SetFont('Times','',12);
      $this->Cell(0,6,utf8_decode($data->objective));
    	$this->Ln();
      
      if($data->studies) {
        $this->Ln();
        $this->SetFont('Times','B',14);
        $this->Cell(0,10,utf8_decode("FORMAÇÃO ACADÊMICA"),'B');
        $this->Ln();
        $this->SetFont('Times','',12);
        for ($i=0; $i < count($data->studies); $i++) { 
          $this->MultiCell(0,6,utf8_decode("Ensino ".(($data->studies[$i]->grade_study) ? $data->studies[$i]->grade_study." " : " ").(($data->studies[$i]->status_study) ? $data->studies[$i]->status_study." - " : " - ").(($data->studies[$i]->institution) ? $data->studies[$i]->institution." - " : "").(($data->studies[$i]->college_career) ? $data->studies[$i]->college_career : "")." ".(($data->studies[$i]->grade_study) ? $data->studies[$i]->date_study : "")));
        }
      }

      if($data->experiences) {
        $this->Ln();
        $this->SetFont('Times','B',14);
        $this->Cell(0,10,utf8_decode("EXPERIÊNCIA PROFISSIONAL"),'B');
        $this->Ln();
        $this->SetFont('Times','',12);
        for ($i=0; $i < count($data->experiences); $i++) { 
            $this->SetFont('Times','B',12);
            $this->Cell(0,6,utf8_decode("Cargo: ".(($data->experiences[$i]->position) ? $data->experiences[$i]->position." " : " ")));
    	    $this->Ln();
    	    $this->SetFont('Times','',12);
            $this->Cell(0,6,utf8_decode("- Periodo: ".(($data->experiences[$i]->date) ? $data->experiences[$i]->date." " : " ").(($data->experiences[$i]->country) ? " - País: ".$data->experiences[$i]->country : "")));
    	    $this->Ln();
    	    $this->Cell(0,6,utf8_decode((($data->experiences[$i]->company) ? " - Empresa: ".$data->experiences[$i]->company : "")));
    	    $this->Ln();
        }
      }
      
      if($data->courses) {
        $this->Ln();
        $this->SetFont('Times','B',14);
        $this->Cell(0,10,utf8_decode("CURSOS:"),'B');
        $this->Ln();
        $this->SetFont('Times','',12);
        for ($i=0; $i < count($data->courses); $i++) { 
          $this->MultiCell(0,6,utf8_decode((($data->courses[$i]->title) ? $data->courses[$i]->title : " ").(($data->courses[$i]->institution) ? " - ".$data->courses[$i]->institution : "").(($data->courses[$i]->date) ? " - ".$data->courses[$i]->date : "")));
        }
      }
      
      if($data->additionals) {
        $this->Ln();
        $this->SetFont('Times','B',14);
        $this->Cell(0,10,utf8_decode("INFORMAÇÕES ADICIONAIS"),'B');
        $this->Ln();
        $this->SetFont('Times','',12);
        for ($i=0; $i < count($data->additionals); $i++) { 
          $this->MultiCell(0,6,utf8_decode(($data->additionals[$i]->description) ? $data->additionals[$i]->description : ""));
        }
      }
    }
    
    function PrintCv($num, $data)
    {
    	$this->AddPage();
    	$this->ChapterBody($data);
    }

    function formatPhone($numb) {
      $arrayNumb = str_split($numb);
      $arrayLength = count($arrayNumb);
      $result = "";
      $separator = $arrayLength-4;
      for ($i=0; $i < $arrayLength; $i++) { 
        if($i == 0) {
          $result .= "(".$arrayNumb[$i];
        } else if($i == 1) {
          $result .= $arrayNumb[$i].") ";
        } else if($i == $separator) {
          $result .= "-".$arrayNumb[$i];
        } else {
          $result .= $arrayNumb[$i];
        }
      }
      return $result;
    }

    function formatDate($date) {
      $arrayDate = explode("-", $date);
      
      return $arrayDate[2]."/".$arrayDate[1]."/".$arrayDate[0];
    }
}

function getCv($id) {
  $result = array();
  $personSql = "SELECT * FROM person WHERE id_person = '$id'";

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

  return $result[0];
}

$cvPerson = getCv($_POST['id']);

$pdf = new PDF();
    
$title = $cvPerson->name;
$pdf->SetTitle($title);
$pdf->SetAuthor('Fundação Hermanitos');
$pdf->PrintCv(1,$cvPerson);
$pdf->Output();