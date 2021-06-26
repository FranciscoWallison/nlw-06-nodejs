setTimeout(function(){ 
    showLogin("preloader");
 }, 1000);

function showLogin(currentAccess){
    $("#"+currentAccess).hide();
    $("#login").show();
    $('.mdi-alert-error').text('');   
}

function forgotPassword(){
    $("#login").hide();
    $("#recover_account").show();
}

function createAccount(){
    $("#login").hide();
    $("#create_account").show();
}
