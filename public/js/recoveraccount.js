// Recover Account
function recoverAccount(){
    disabledConsultRecover(true);
    $('#alert_recover').text('');
    setTimeout(function(){ 
        disabledConsultRecover(false);
        $('#alert_recover').text('Email ou senha incorretos.');

        $('#alert_recover').addClass("green-text");
        
        $('#alert_recover').addClass("red-text");
    }, 1000);
}
function disabledConsultRecover(valid){
    if(valid){
        $('#email_recover').prop('disabled', true);
        $('.btn').prop('disabled', true);
        // $('#login_recover_account').hide();        
    }else{
        $('#alert_recover').text('');
        $('#email_recover').prop('disabled', false);
        $('.btn').prop('disabled', false);
        // $('#login_recover_account').show();
    }   
}