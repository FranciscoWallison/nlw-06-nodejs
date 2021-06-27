// Create Account
function createNewAccount(){
    disabledConsultAccount(true);
    $('#alert_account').text('');

    let data = {
        "name": $('#nome_account').val(),
        "email": $('#email_account').val(),
        "password": $('#password_account').val()
    }
    console.log('result-data', data);
    consultData("users", "POST", data)
    .then( async result => {
        console.log('result result.status == ', result, result.status);
        if(result.status == 400){
            $('#alert_account').removeClass("green-text");        
            $('#alert_account').addClass("red-text");
            $('#alert_account').text('E-mail já existente!');
        }

        if(result.status == 200){
            $('#alert_account').addClass("green-text");        
            $('#alert_account').removeClass("red-text");
            $('#alert_account').text('Conta Criado com Sucesso!');
        }
    }).catch(async e => {			

	}).finally(result => {
        
        disabledConsultAccount(false);
    });

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
        // $('#alert_account').text('');
        $('.btn').prop('disabled', false);
        $('#nome_account').prop('disabled', false);
        $('#email_account').prop('disabled', false);
        $('#password_account').prop('disabled', false);    
        // $('#login_recover_account').show();
    }   
}