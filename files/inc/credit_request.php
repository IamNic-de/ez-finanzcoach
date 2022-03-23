<section class="col-50 center-box center-txt">
    <h3>Kreditanfrage</h3>
    <div>
        <form action="index.php?page=credit_request_p_details" method="POST">
            <div>
                <h4>Wunschkredit</h4>
            </div>
            <div class="mar-20">
                <label for="desired_amount">Wunschbetrag</label>
                <input type="range" name="desired_amount" id="desired_amount_range" 
                min="1000" max="80000" step="1000" value="20000" />
                <input type="text" name="desired_amount" id="desired_amount_txt" 
                value="20000" class="slider-txt" />
            </div>
            <div class="mar-20">
                <label for="running_time">Laufzeit</label>
                <input type="range" name="running_time" id="running_time_range" 
                min="6" max="120" step="1">
                <input type="text" name="running_time" id="running_time_txt" value="40" class="slider-txt" />
            </div>
            <div class="mar-20">
                <label for="monthly_rate">Monatsrate</label>
                <input type="range" name="monthly_rate" id="monthly_rate_range" 
                min="50" max="2500" step="30" />
                <input type="text" name="monthly_rate" id="monthly_rate_txt" value="500" class="slider-txt" />
            </div>
            <div class="mar-20">
                <span class="d-block">Ist die Ablösung bestehender Ratenkredite gewünscht?</span>
                <label for="detachment_yes_radio" class="d-i-block">Ja</label>
                <input type="radio" name="detachment_radio" id="detachment_yes_radio" value="y" class="d-i-block" />
                <label for="detachment_no_radio" class="d-i-block">Nein</label>
                <input type="radio" name="detachment_radio" id="detachment_no_radio" value="n" class="d-i-block" checked />

                <div id="detachment_option"></div>
                
            </div>
            <div class="mar-20">
                <input type="submit" name="submit" id="cr_req_submit" />
                <input type="reset" name="reset" id="cr_req_reset" />
            </div>
        </form>
    </div>  
</section>