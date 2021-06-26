// Login
function login(){
    disabledConsultLogin(true);
    $('#error_login').text('');
    setTimeout(function(){ 
        disabledConsultLogin(false);
        $('#error_login').text('Email ou senha incorretos.');
    }, 1000);
}
function disabledConsultLogin(valid){
    if(valid){       
        $('.btn').prop('disabled', true);
        $('#email_login').prop('disabled', true);
        $('#password_login').prop('disabled', true);    
        // $('#login_recover_account').hide();        
    }else{
        $('#error_login').text('');
        $('.btn').prop('disabled', false);
        $('#email_login').prop('disabled', false);
        $('#password_login').prop('disabled', false);
        // $('#login_recover_account').show();
    }   
}