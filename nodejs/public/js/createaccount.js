// Create Account
function createNewAccount(){
    disabledConsultAccount(true);
    $('#alert_account').text('');
    setTimeout(function(){ 
        disabledConsultAccount(false);
        $('#alert_account').text('Email ou senha incorretos.');
        
        $('#alert_account').addClass("green-text");
        
        $('#alert_account').addClass("red-text");
    }, 1000);
}
function disabledConsultAccount(valid){
    if(valid){       
        $('.btn').prop('disabled', true);
        $('#nome_account').prop('disabled', true);
        $('#email_account').prop('disabled', true);
        $('#password_account').prop('disabled', true);    
        $('#login_create_account').prop('disabled', true);
        // $('#login_recover_account').hide();        
    }else{
        $('#alert_account').text('');
        $('.btn').prop('disabled', false);
        $('#nome_account').prop('disabled', false);
        $('#email_account').prop('disabled', false);
        $('#password_account').prop('disabled', false);    
        // $('#login_recover_account').show();
    }   
}