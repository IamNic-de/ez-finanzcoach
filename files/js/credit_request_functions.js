"use strict";

// jQuery ready begin
jQuery(document).ready(function () {

    // ##################################################
    // CREDIT-REQUEST FUNCTIONS
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

    $("#desired_amount_range").on("input", function () {

        $(desiredAmountTxt).val($(this).val());
        let newMonthlyRate = parseFloat(desiredAmountTxt.val() / runningTimeTxt.val()).toFixed(2);

        $(monthlyRateRange).val(newMonthlyRate);
        $(monthlyRateTxt).val(newMonthlyRate);

    });

    $("#desired_amount_txt").on("input", function () {

        $(desiredAmountRange).val($(this).val());
        let newMonthlyRate = parseFloat(desiredAmountTxt.val() / runningTimeTxt.val()).toFixed(2);

        $(monthlyRateRange).val(newMonthlyRate);
        $(monthlyRateTxt).val(newMonthlyRate);

    });

    $("#running_time_range").on("input", function () {
        
        $(runningTimeTxt).val($(this).val());
        let newMonthlyRate = parseFloat(desiredAmountTxt.val() / runningTimeTxt.val()).toFixed(2);

        $(monthlyRateRange).val(newMonthlyRate);
        $(monthlyRateTxt).val(newMonthlyRate);

    });

    $("#running_time_txt").on("input", function () {

        $(runningTimeRange).val($(this).val());
        let newMonthlyRate = parseFloat(desiredAmountTxt.val() / runningTimeTxt.val()).toFixed(2);

        $(monthlyRateRange).val(newMonthlyRate);
        $(monthlyRateTxt).val(newMonthlyRate);

    });

    $("#monthly_rate_range").on("input", function () {

        $(monthlyRateTxt).val($(this).val());
        let newRunningTime = parseInt(desiredAmountTxt.val() / monthlyRateTxt.val());

        $(runningTimeRange).val(newRunningTime);
        $(runningTimeTxt).val(newRunningTime);

    });

    $("#monthly_rate_txt").on("input", function () {

        $(monthlyRateRange).val($(this).val());
        let newRunningTime = parseInt(desiredAmountTxt.val() / monthlyRateTxt.val());

        $(runningTimeRange).val(newRunningTime);
        $(runningTimeTxt).val(newRunningTime);

    });

    $("#detachment_yes_radio").on("click", function () {

        if ($(detachmentYesRadio).input = true) {
            detachmentOption.html(
                '<div id="detachment_div">' +
                '<label for="detachment_amount">Ablösebetrag</label>' +
                '<input type="text" name="detachment_amount" id="detachment_amount_txt" class="center-box center-txt"/>' +
                '</div>'
            );
        }

    });

    $("#detachment_no_radio").on("click", function () {

        if ($(detachmentNoRadio).input = true) {
            $("#detachment_div").remove();
        }

    });

    // ##################################################
    // CREDIT-REQUEST-P-DETAILS FUNCTIONS
    // ##################################################
    
    let addBorrowerSecDiv = $("#add_borrower_sec_div");
    let addBorrowerBtn = $("#add_borrower_btn");

    let removeBorrowerBtn = $("#remove_borrower_btn");

    addBorrowerBtn.click(function () {

        console.log("Erfolg!");
        addBorrowerBtn.attr("type", "disabled");
        removeBorrowerBtn.attr("type", "button");
        addBorrowerSecDiv.html(
            '<div id="add_borrower_div">' +

            '<h3>2. Kreditnehmer</h3>' +
            
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

    $("#remove_borrower_btn").on("click", function() {

        let addBorrowerDiv = $("#add_borrower_div");
        addBorrowerDiv.remove();
        removeBorrowerBtn.attr("type", "disabled");
        addBorrowerBtn.attr("type", "button");

    });

// jQuery ready end    
});