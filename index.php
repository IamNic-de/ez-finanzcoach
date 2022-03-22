<?php

// SESSION-START
session_start();

// GERMAN-FORMAT
setlocale(LC_ALL,"de_DE","deu_deu","german");

// EMBED * database_news.inc.php *
require_once "files/inc/database_news.inc.php";

// EMBED * database_credit_request.inc.php *
require_once "files/inc/database_credit_request.inc.php";

// EMBED * functions.inc.php *
require_once "files/inc/functions.inc.php";


// SECUR-TOKEN
if(!isset($_SESSION["session_token"])){
    $_SESSION["session_token"] = 
        bin2hex(openssl_random_pseudo_bytes(32));
}

// REPORT MESSAGE
if(isset($_SESSION["report_msg"])){
    $report = $_SESSION["report_msg"];
    //FLUSH REPORT MESSAGE
    unset($_SESSION["report_msg"]);
}

// GET PAGE - * $page *
$page = $_GET["page"] ?? '';

// EMBED * header.inc.php *
require_once "files/inc/header.inc.php";

// SITE SWITCH - * $page *
switch($page){
    case "credit_request":
        include "files/inc/credit_request.php";
        break;
    case "credit_request_p_details":
        include "files/inc/credit_request_p_details.php";
        break;
    case "credit_request_address":
        include "files/inc/credit_request_address.php";
        break;
    case "credit_request_employer":
        include "files/inc/credit_request_employer.php";
        break;
    case "contact":
        include "files/inc/contact.php";
        break;
    case "imprint":
        include "files/inc/imprint.php";
        break;
    case "privacy":
        include "files/inc/privacy.php";
        break;
    default:
        include "files/inc/home.php";
        break;
}

// EMBED * footer.inc.php *
require_once "files/inc/footer.inc.php";

?> 