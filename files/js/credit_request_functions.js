"use strict";

// jQuery ready begin
jQuery(document).ready(function () {

    // ##################################################
    // STEP 1 - CREDIT-REQUEST SLIDER FUNCTIONS
    // ##################################################

    let desiredAmountRange = $("#desired_amount_range");
    let desiredAmountTxt = $("#desired_amount_txt");

    let runningTimeRange = $("#running_time_range");
    let runningTimeTxt = $("#running_time_txt");

    let monthlyRateRange = $("#monthly_rate_range");
    let monthlyRateTxt = $("#monthly_rate_txt");

    let detachmentYesRadio = $("#detachment_yes_radio");
    let detachmentNoRadio = $("#detachment_no_radio");
    let detachmentOption = $("#detachment_option");

    // Desired amount range-inp to txt-inp on inp
    // --> calc: divide (desired amount / running time)
    // --> use: new value as range- and txt-value 
    $(desiredAmountRange).on("input", function () {

        $(desiredAmountTxt).val($(this).val());
        let newMonthlyRate = parseFloat(desiredAmountTxt.val() / runningTimeTxt.val()).toFixed(2);

        $(monthlyRateRange).val(newMonthlyRate);
        $(monthlyRateTxt).val(newMonthlyRate);

    });

    // Desired amount txt-inp to range-inp on inp
    // --> calc: divide (desired amount / running time)
    // --> use: new value as range- and txt-value
    $(desiredAmountTxt).on("input", function () {

        $(desiredAmountRange).val($(this).val());
        let newMonthlyRate = parseFloat(desiredAmountTxt.val() / runningTimeTxt.val()).toFixed(2);

        $(monthlyRateRange).val(newMonthlyRate);
        $(monthlyRateTxt).val(newMonthlyRate);

    });

    // Running time range-inp to txt-inp
    // --> calc: divide (desired amount / running time)
    // --> use: new value as range- and txt-value
    $(runningTimeRange).on("input", function () {
        
        $(runningTimeTxt).val($(this).val());
        let newMonthlyRate = parseFloat(desiredAmountTxt.val() / runningTimeTxt.val()).toFixed(2);

        $(monthlyRateRange).val(newMonthlyRate);
        $(monthlyRateTxt).val(newMonthlyRate);

    });

    // Running time txt-inp to range-inp on inp
    // --> calc: divide (desired amount / running time)
    // --> use: new value as range- and txt-value
    $(runningTimeTxt).on("input", function () {

        $(runningTimeRange).val($(this).val());
        let newMonthlyRate = parseFloat(desiredAmountTxt.val() / runningTimeTxt.val()).toFixed(2);

        $(monthlyRateRange).val(newMonthlyRate);
        $(monthlyRateTxt).val(newMonthlyRate);

    });

    // Monthly Rate range-inp to txt-inp on inp
    // --> calc: devide (desired amount / monthly rate)
    // --> use: new value as range- and txt-value
    $(monthlyRateRange).on("input", function () {

        $(monthlyRateTxt).val($(this).val());
        let newRunningTime = parseInt(desiredAmountTxt.val() / monthlyRateTxt.val());

        $(runningTimeRange).val(newRunningTime);
        $(runningTimeTxt).val(newRunningTime);

    });

    // Monthly Rate txt-inp to range-inp on inp
    // --> calc: devide (desired amount / monthly rate)
    // --> use: new value as range- and txt-value
    $(monthlyRateTxt).on("input", function () {

        $(monthlyRateRange).val($(this).val());
        let newRunningTime = parseInt(desiredAmountTxt.val() / monthlyRateTxt.val());

        $(runningTimeRange).val(newRunningTime);
        $(runningTimeTxt).val(newRunningTime);

    });

    // Detachment option
    // --> create: input for detachment amount 
    $(detachmentYesRadio).on("click", function () {

        if ($(detachmentYesRadio).input = true) {
            detachmentOption.html(
                '<div id="detachment_div">' +
                '<label for="detachment_amount">Ablösebetrag</label>' +
                '<input type="text" name="detachment_amount" id="detachment_amount_txt" class="center-box center-txt"/>' +
                '</div>'
            );
        }

    });

    // Detachment option
    // --> remove: input #detachment_div
    $(detachmentNoRadio).on("click", function () {

        if ($(detachmentNoRadio).input = true) {
            $("#detachment_div").remove();
        }

    });

    // ##################################################
    // STEP 2 - CREDIT-REQUEST-P-DETAILS FUNCTIONS
    // ##################################################
    
    let addBorrowerSecOption = $("#add_borrower_sec_option");
    let addBorrowerBtn = $("#add_borrower_btn");

    let removeBorrowerBtn = $("#remove_borrower_btn");

    // Add 2nd borrower
    // --> set: (remove-btn) type attr. button
    // --> set: (add-btn) type attr. disabled
    // --> attach: (#add_borrower_sec_div) to (#add_borrower_sec_option) 
    $(addBorrowerBtn).on("click", function () {

        addBorrowerBtn.attr("type", "disabled");
        removeBorrowerBtn.attr("type", "button");
        addBorrowerSecOption.html(
            '<div class="col-100" id="add_borrower_sec_div">' +

            '<h4> 2. Kreditnehmer</h4>' +
            
            '<div>' +
            '<label for="salutation_sec">Anrede</label>' +
            '<input type="text" name="salutation_sec" id="salutation_sec_txt" />' +
            '</div>' +

            '<div>' +
            '<label for="title_sec">Titel</label>' +
            '<input type="text" name="title_sec" id="title_sec_txt" />' +
            '</div>' +

            '<div>' +
            '<label for="name_sec">Vorname</label>' +
            '<input type="text" name="name_sec" id="name_sec_txt"/>' +
            '</div>' +

            '<div>' +
            '<label for="surname_sec">Nachname</label>' +
            '<input type="text" name="surname_sec" id="surname_sec_txt" />' +
            '</div>' +

            '<div>' +
            '<label for="birthdate_sec">Geburtsdatum</label>' +
            '<input type="date" name="birthdate_sec" id="birthdate_sec_date" />' +
            '</div>' +

            '<div>' +
            '<label for="birthplace_sec">Geburtsort</label>' +
            '<input type="text" name="birthplace_sec" id="birthplace_sec_txt" />' +
            '</div>' +

            '<div>' +
            '<label for="nationality_sec">Staatsangehörigkeit</label>' +
            '<input type="text" name="nationality_sec" id="nationality_sec_txt" />' +
            '</div>' +

            '<div>' +
            '<label for="marital_status_sec">Familienstand</label>' +
            '<select name="marital_status_sec" id="marital_status_sec_select">' +
            '<option value="pls_select" selected>Bitte auswählen...</option>' +
            '<option value="ledig">ledig</option>' +
            '<option value="verheiratet">verheiratet</option>' +
            '<option value="verwitwet">verwitwet</option>' +
            '<option value="geschieden">geschieden</option>' +
            '<option value="eingetr. Lebenspartnerschaft">eingetargene Lebenspartnerschaft</option>' +
            '<option value="eingetr. Lebenspartner verstorben">eingetragene(r) Lebenpartner(in) verstorben</option>' +
            '<option value="eingetr. Lebenspartnerschaft aufgehoben">eingetragene Lebenspartnerschaft aufgehoben</option>' +
            '</select>' +
            '</div>' +

            '</div>'
        );

    });

    // Remove 2nd borrower div
    // --> set: (remove-btn) type attr. disabled
    // --> set: (add-btn) type attr. button
    $(removeBorrowerBtn).on("click", function() {

        let addBorrowerSecDiv = $("#add_borrower_sec_div");
        addBorrowerSecDiv.remove();
        removeBorrowerBtn.attr("type", "disabled");
        addBorrowerBtn.attr("type", "button");

    });

    // ##################################################
    // STEP 3 - CREDIT-REQUEST-ADDRESS FUNCTIONS
    // 1st borrower
    // ##################################################

    let relocationRadioYes = $("#relocation_radio_yes");
    let relocationRadioNo = $("#relocation_radio_no");
    let relocationOption = $("#relocation_option");

    // Relocation radio yes on click
    // --> attach: (#relocation option div) to (#relocation option)
    $(relocationRadioYes).on("click", function () {

        if(relocationRadioYes.input = true) {
            relocationOption.html(
                '<div id="relocation_option_div">' +
                '<h4>Vorherige Adresse - 1. Kreditnehmer</h4>' +
                '<div>' +
                '<span>Vorherige Adresse</span>' +
                '<label for="previous_street">Strasse</label>' +
                '<input type="text" name="previous_street" id="previous_street_txt" />' +
                '</div>' +
                '<div>' +
                '<label for="previous_house_nr">Hausnummer</label>' +
                '<input type="text" name="previous_house_nr" id="previous_house_nr_txt" />' +
                '</div>' +
                '<div>' +
                '<label for="previous_zipcode">PLZ</label>' +
                '<input type="text" name="previous_zipcode" id="previous_zipcode_txt" />' +
                '</div>' +
                '<div>' +
                '<label for="previous_city">Ort</label>' +
                '<input type="text" name="previous_city" id="previous_city_txt" />' +
                '</div>' +
                '<div>' +
                '<label for="resident_since">Wohnhaft seit - (neue Adresse)</label>' +
                '<input type="date" name="resident_since" id="resident_since_date" />' +
                '</div>' +
                '</div>'
            )
        }

        // Relocation radio no on click 
        // --> remove: relocation option
        $(relocationRadioNo).on("click", function () {

            let relocationOptionDiv = $("#relocation_option_div");

            if (relocationRadioNo.input = true) {
                relocationOptionDiv.remove();
            }

        });

    });

    // ##################################################
    // STEP 3 - CREDIT-REQUEST-ADDRESS FUNCTIONS
    // 2nd borrower
    // ##################################################

    let borrowerSecAddrRadioYes = $("#borrower_sec_addr_radio_yes");
    let borrowerSecAddrRadioNo = $("#borrower_sec_addr_radio_no");
    let borrowerSecOption = $("#borrower_sec_option");

    $(borrowerSecAddrRadioYes).on("click", function () {

        borrowerSecOption.html(
            '<div id="borrower_sec_option_div">' +
            '<h4>Aktuelle Wohnadresse - 2. Kreditnehmer</h4>' +
            '<div class="mar-20">' +
            '<label for="street_sec">Straße</label>' +
            '<input type="text" name="street_sec" id="street_sec_txt" />' +
            '</div>' +
            '<div class="mar-20">' +
            '<label for="house_nr_sec">Hausnummer</label>' +
            '<input type="text" name="house_nr_sec" id="house_nr_sec_txt" />' +
            '</div>' +
            '<div class="mar-20">' +
            '<label for="zipcode_sec">PLZ</label>' +
            '<input type="text" name="zipcode_sec" id="zipcode_sec_txt" />' +
            '</div>' +
            '<div class="mar-20">' +
            '<label for="city_sec">Ort</label>' +
            '<input type="text" name="city_sec" id="city_sec_txt" />' +
            '</div>' +
            '<div class="mar-20">' +
            '<label for="residental_status_sec">Wohnstatus</label>' +
            '<select name="residential_status_sec" id="residential_status_s_select">' +
            '<option value="1">Option 1</option>' +
            '<option value="2">Option 2</option>' +
            '<option value="3">Option 3</option>' +
            '<option value="4">Option 4</option>' +
            '<option value="5">Option 5</option>' +
            '</select>'+
            '</div>' +

            '<div id="borrower_sec_relocation_option_radio">' +
            '<h4>Umzug in den letzten 2 Jahren - 2. Kreditnehmer?</h4>' +
            '<div id="borrower_sec_relocation_radio">' +
            '<label for="borrower_sec_rel_radio_yes" class="d-i-block">Ja</label>' +
            '<input type="radio" name="borrower_sec_rel_radio" id="borrower_sec_rel_radio_yes" value="y" class="d-i-block" />' +
            '<label for="borrower_sec_rel_radio_no" class="d-i-block">Nein</label>' +
            '<input type="radio" name="borrower_sec_rel_radio" id="borrower_sec_rel_radio_no" value="n" class="d-i-block" checked />' +
            '</div>'+

            '</div>' 
        )

        let borrowerSecRelRadioYes = $("#borrower_sec_rel_radio_yes");
        let borrowerSecRelocationOption = $("#borrower_sec_relocation_option");

        $(borrowerSecRelRadioYes).on("click", function () {

            console.log("Umzug - 2. Kreditnehmer in den letzten 2 Jahren");

            borrowerSecRelocationOption.html(
                '<div id="borrower_sec_relocation_option_div">' +
                '<h4>Vorherige Adresse - 2. Kreditnehmer</h4>' +
                '<div>' +
                '<span>Vorherige Adresse</span>' +
                '<label for="borrower_sec_prev_street">Strasse</label>' +
                '<input type="text" name="borrower_sec_prev_street" id="borrower_sec_prev_street_txt" />' +
                '</div>' +
                '<div>' +
                '<label for="borrower_sec_prev_house_nr">Hausnummer</label>' +
                '<input type="text" name="borrower_sec_prev_house_nr" id="borrower_sec_prev_house_nr_txt" />' +
                '</div>' +
                '<div>' +
                '<label for="borrower_sec_prev_zipcode">PLZ</label>' +
                '<input type="text" name="borrower_sec_prev_zipcode" id="borrower_sec_prev_zipcode_txt" />' +
                '</div>' +
                '<div>' +
                '<label for="borrower_sec_prev_city">Ort</label>' +
                '<input type="text" name="borrower_sec_prev_city" id="borrower_sec_prev_city_txt" />' +
                '</div>' +
                '<div>' +
                '<label for="borrower_sec_resi_since">Wohnhaft seit - (neue Adresse)</label>' +
                '<input type="date" name="borrower_sec_resi_since" id="borrower_sec_resi_since_date" />' +
                '</div>' +
                '</div>'
            )

            let borrowerSecRelRadioNo = $("#borrower_sec_rel_radio_no");

            $(borrowerSecRelRadioNo).on("click", function () {
                let borrowerSecRelocationOptionDiv = $("#borrower_sec_relocation_option_div");
                borrowerSecRelocationOptionDiv.remove();
            });

        });

        

        $(borrowerSecAddrRadioNo).on("click", function () {

            let borrowerSecOptionDiv = $("#borrower_sec_option_div");

            if (borrowerSecAddrRadioNo.input = true) {
                borrowerSecOptionDiv.remove();
            }

        });

    });

// jQuery ready end    
});