<?php

// STEP 1
$desiredAmount = $_POST['desired_amount'];
$runningTime = $_POST['running_time'];
$monthlyRate = $_POST['monthly_rate'];
$detachmentRadio = $_POST['detachment_radio'];
$detachmentAmount = $_POST['detachment_amount'];

// STEP 2
$salutation = $_POST['salutation'];
$title = $_POST['title'];
$name = $_POST['name'];
$surname = $_POST['surname'];
$birthdate = $_POST['birthdate'];
$birthplace = $_POST['birthplace'];
$nationality = $_POST['nationality'];
$maritalStatus = $_POST['marital_status'];
$children = $_POST['children'];
$amountPpl = $_POST['amount_ppl'];

// STEP 2 - 2nd borrower
$salutationSec = $_POST['salutation_sec'];
$titleSec = $_POST['title_sec'];
$nameSec = $_POST['name_sec'];
$surnameSec = $_POST['surname_sec'];
$birthdateSec = $_POST['birthdate_sec'];
$birthplaceSec = $_POST['birthplace_sec'];
$nationalitySec = $_POST['nationality_sec'];
$maritalStatusSec = $_POST['marital_status_sec'];

?>

<section class="col-50 center-box center-txt">
    <h3>Adresse</h3>
    <div>
        <form action="index.php?page=credit_request_employer" method="POST">
            <div class="mar-20">
                <label for=""></label>
                <input type="text" name="" id="">
            </div>
            <div class="mar-20">
                <label for=""></label>
                <input type="text" name="" id=""
            </div>
            <div class="mar-20">
                <label for=""></label>
                <input type="text" name="" id=""
            </div>
            <div class="mar-20">
                <label for=""></label>
                <input type="text" name="" id=""
            </div>
            <div class="mar-20">
                <label for=""></label>
                <input type="text" name="" id=""
            </div>
        </form>
    </div>

            <div>
                <h3>Übergabe Daten Schritt 2</h3>
                <h4>1. Kreditnehmer</h4>
                <div>
                    <label for="salutation">Anrede</label>
                    <input type="text" name="salutation" value="<?= $salutation ?>">
                </div>
                <div>
                    <label for="title">Titel</label>
                    <input type="text" name="title" value="<?= $title ?>">
                </div>
                <div>
                    <label for="name">Name</label>
                    <input type="text" name="name" value="<?= $name ?>">
                </div>
                <div>
                    <label for="surname">Nachname</label>
                    <input type="text" name="surname" value="<?= $surname ?>">
                </div>
                <div>
                    <label for="birthdate">Geburtstag</label>
                    <input type="text" name="birthdate" value="<?= $birthdate ?>">
                </div>
                <div>
                    <label for="birthplace">Geburtsort</label>
                    <input type="text" name="birthplace" value="<?= $birthplace ?>">
                </div>
                <div>
                    <label for="nationality">Staatsangehörigkeit</label>
                    <input type="text" name="nationality" value="<?= $nationality ?>">
                </div>
                <div>
                    <label for="marital_status">Familienstand</label>
                    <input type="text" name="marital_status" value="<?= $maritalStatus ?>">
                </div>

                <h4>2. Kreditnehmer</h4>
                <div>
                    <label for="salutation_sec">Anrede</label>
                    <input type="text" name="salutation_sec" value="<?= $salutationSec ?>">
                </div>
                <div>
                    <label for="title_sec">Titel</label>
                    <input type="text" name="title_sec" value="<?= $titleSec ?>">
                </div>
                <div>
                    <label for="name_sec">Name</label>
                    <input type="text" name="name_sec" value="<?= $nameSec ?>">
                </div>
                <div>
                    <label for="surname_sec">Nachname</label>
                    <input type="text" name="surname_sec" value="<?= $surnameSec ?>">
                </div>
                <div>
                    <label for="birthdate_sec">Geburtstag</label>
                    <input type="text" name="birthdate_sec" value="<?= $birthdateSec ?>">
                </div>
                <div>
                    <label for="birthplace_sec">Geburtsort</label>
                    <input type="text" name="birthplace_sec" value="<?= $birthplaceSec ?>">
                </div>
                <div>
                    <label for="nationality_sec">Staatsangehörigkeit</label>
                    <input type="text" name="nationality_sec" value="<?= $nationalitySec ?>">
                </div>
                <div>
                    <label for="marital_status_sec">Familienstand</label>
                    <input type="text" name="marital_status_sec" value="<?= $maritalStatusSec ?>">
                </div>

                <h4>Allgemeine Angaben</h4>
                <div>
                    <label for="children">Kindergeldber. Kinder</label>
                    <input type="text" name="children" value="<?= $children ?>">
                </div>
                <div>
                    <label for="amount_ppl">Anzahl d. Personen</label>
                    <input type="text" name="amount_ppl" value="<?= $amountPpl ?>">
                </div>

            </div>

            <div>
                <h3>Übergabe Daten Schritt 1</h3>
                <div>
                    <label for="desired_amount">Wunschbetrag</label>
                    <input type="text" name="desired_amount" 
                    value="<?= $desiredAmount ?>" />
                </div>
                <div>
                    <label for="running_time">Laufzeit</label>
                    <input type="text" name="running_time" 
                    value="<?= $runningTime ?>" />
                </div>
                <div>
                    <label for="monthly_rate">Monatsrate</label>
                    <input type="text" name="monthly_rate" 
                    value="<?= $monthlyRate ?>" />
                </div>
                <div>
                    <label for="detachment_radio">Ablöse?</label>
                    <input type="text" name="detachment_radio" 
                    value="<?= $detachmentRadio ?>" />
                </div>
                <div>
                    <label for="detachment_amount">Ablösebtrag</label>
                    <input type="text" name="detachment_amount"
                    value="<?= $detachmentAmount ?>" />
                </div>
            </div>