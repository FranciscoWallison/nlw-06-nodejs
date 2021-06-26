const getUrl = window.location;
const baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

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

async function consultData(consult, type, data = {}) {
	// Default options are marked with *
	let authorization_data = {
		token: ''
	}
	
	authorization_data = localStorage.getItem('access_nlw') === null ? authorization_data : JSON.parse(localStorage.getItem('access_nlw'));
	console.log('authorization_data', authorization_data);
	const response = await fetch(baseUrl+""+consult, {
		method: type, // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
		'Content-Type': 'application/json', 'Accept' : 'application/json',
		'Authorization': 'Basic '+ authorization_data.token
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	return response; // parses JSON response into native JavaScript objects
}
