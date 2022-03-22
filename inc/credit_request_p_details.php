<?php

$desiredAmount = $_POST['desired_amount'];
$runningTime = $_POST['running_time'];
$monthlyRate = $_POST['monthly_rate'];
$detachmentRadio = $_POST['detachment_radio'];
$detachmentAmount = $_POST['detachment_amount'];

?>

<section>
    <h3>Persönliche Angaben</h3>
    <div>
        <form action="index.php?page=credit_request_address" method="POST">
            <div id="p_details_div">
                <h3>1. Kreditnehmer</h3>
                <div>
                    <label for="salutation">Anrede</label>
                    <input type="text" name="salutation" id="salutation_txt">
                </div>
                <div>
                    <label for="title">Titel</label>
                    <input type="text" name="title" id="title_txt">
                </div>
                <div>
                    <label for="name">Vorname</label>
                    <input type="text" name="name" id="name_txt">
                </div>
                <div>
                    <label for="surname">Nachname</label>
                    <input type="text" name="surname" id="surname_txt">
                </div>
                <div>
                    <label for="birthdate">Geburtsdatum</label>
                    <input type="date" name="birthdate" id="birthdate_date">
                </div>
                <div>
                    <label for="birthplace">Geburtsort</label>
                    <input type="text" name="birthplace" id="birthplace_txt">
                </div>
                <div>
                    <label for="nationality">Staatsangehörigkeit</label>
                    <input type="text" name="nationality" id="nationality_txt">
                </div>
                <div>
                    <label for="marital_status">Familienstand</label>
                    <select name="marital_status" id="marital_status_select">
                        <option value="pls_select" selected >Bitte auswählen...</option>
                        <option value="ledig">ledig</option>
                        <option value="verheiratet">verheiratet</option>
                        <option value="verwitwet">verwitwet</option>
                        <option value="geschieden">geschieden</option>
                        <option value="eingetr. Lebenspartnerschaft">eingetargene Lebenspartnerschaft</option>
                        <option value="eingetr. Lebenspartner verstorben">eingetragene(r) Lebenpartner(in) verstorben</option>
                        <option value="eingetr. Lebenspartnerschaft aufgehoben">eingetragene Lebenspartnerschaft aufgehoben</option>
                    </select>
                </div>
                <div>
                    <label for="children">Kindergeldberechtigte Kinder im Haushalt</label>
                    <select name="children" id="children_select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value=">10">>10</option>
                    </select>
                </div>
                <div>
                    <label for="amount_ppl">Anzahl d. Personen im Haushalt</label>
                    <select name="amount_ppl" id="amount_ppl_select">
                    <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value=">10">>10</option>
                    </select>
                </div>

                <div id="borrower_option">
                    <div id="add_borrower_btn_div">
                        <input type="button" name="add_borrower" id="add_borrower_btn" value="+ Kreditnehmer hinzufügen">
                    </div>

                    <div id="remove_borrower_btn_div">
                        <input type="disabled" name="remove_borrower" id="remove_borrower_btn" value="- Kreditnehmer 2 entfernen">
                    </div>

                    <div id="add_borrower_sec_div"></div>
                    
                </div>

                <div>
                    <input type="submit" name="submit" id="p_deatils_submit">
                    <input type="reset" name="reset" id="p_details_reset">
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
        </form>
    </div>
</section>