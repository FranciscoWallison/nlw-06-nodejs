// Login
function login(){
    disabledConsultLogin(true);
    $('#error_login').text('');

    let data = {
        "email": $("#email_login").val(),
        "password": $("#password_login").val()
    }

    consultData("login", "POST", data)
    .then( async result => {
        if(result.status == 400){
            $('#error_login').text('Email ou senha incorretos.');
        }
        if(result.status == 200){
            localStorage.clear();
            let data = await result.json().then(result => {return result});
            localStorage.setItem('access_nlw', JSON.stringify(data));
            $("#login").hide();
            validAces();
        }
    }).catch(async e => {			

	}).finally(result => {
        
        disabledConsultLogin(false);
    });
}
function disabledConsultLogin(valid){
    if(valid){       
        $('#error_login').text('');
        $('.btn').prop('disabled', true);
        $('#email_login').prop('disabled', true);
        $('#password_login').prop('disabled', true);    
        // $('#login_recover_account').hide();        
    }else{       
        $('.btn').prop('disabled', false);
        $('#email_login').prop('disabled', false);
        $('#password_login').prop('disabled', false);
        // $('#login_recover_account').show();
    }   
}

function sair(){
    $("#info_list").hide();
	$("#menu-nlw").hide();
    $("#login").show();
    localStorage.clear();
}