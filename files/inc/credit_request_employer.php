<?php

// STEP 1
$desiredAmount = $_POST['desired_amount'];
$runningTime = $_POST['running_time'];
$monthlyRate = $_POST['monthly_rate'];
$detachmentRadio = $_POST['detachment_radio'];
$detachmentAmount = $_POST['detachment_amount'];

// STEP 2 - 1st borrower
$salutation = $_POST['salutation'];
$title = $_POST['title'];
$name = $_POST['name'];
$surname = $_POST['surname'];
$birthdate = $_POST['birthdate'];
$birthplace = $_POST['birthplace'];
$nationality = $_POST['nationality'];
$maritalStatus = $_POST['marital_status'];

// STEP 2 - 2nd borrower
$salutationSec = $_POST['salutation_sec'];
$titleSec = $_POST['title_sec'];
$nameSec = $_POST['name_sec'];
$surnameSec = $_POST['surname_sec'];
$birthdateSec = $_POST['birthdate_sec'];
$birthplaceSec = $_POST['birthplace_sec'];
$nationalitySec = $_POST['nationality_sec'];
$maritalStatusSec = $_POST['marital_status_sec'];

// STEP 2 - general informations
$children = $_POST['children'];
$amountPpl = $_POST['amount_ppl'];

// STEP 3 - 1st borrower
$street = $_POST['street'];
$houseNr = $_POST['house_nr'];
$zipcode = $_POST['zipcode'];
$city = $_POST['city'];
$residentalStatus = $_POST['residental_status'];

// STEP 3 - 1st borrower - relocation
$previousStreet = $_POST['previous_street'];
$previousHouseNr = $_POST['previous_house_nr'];
$previousZipcode = $_POST['previous_zipcode'];
$previousCity = $_POST['previous_city'];
$residentSince = $_POST['previous_since'];

// STEP 3 - 2nd borrower

// STEP 3 - 2nd borrower - relocation

?>

<section>
    <h3>Angaben zum Einkommen</h3>
    <div>
        <form action="" method="POST">
            <div>
                <h4>1. Kreditnehmer</h4>
                <!-- NAME 1st borrower -->
                <div>
                    <label for=""></label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label for=""></label>
                    <input type="text" name="" id="" />
                </div>
                <!-- END NAME -->

                <div>
                    <label for=""></label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label for=""></label>
                    <input type="text" name="" id="" />
                </div>

                <div>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
                <div>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
                <div>
                    <label for=""></label>
                    <input type="date">
                </div>

                <div>
                    <label for=""></label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label for=""></label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label for=""></label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label for=""></label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label for=""></label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label for=""></label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label for=""></label>
                    <input type="text" name="" id="" />
                </div>
            </div>
            
        </form>
    </div>
</section>