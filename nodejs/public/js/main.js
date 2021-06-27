const getUrl = window.location;
const baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
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
	let valid = type == 'GET' ? {
		method: type, // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
		'Content-Type': 'application/json', 'Accept' : 'application/json',
		'Authorization': 'Basic '+ tokenAuthorization().token
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
	}
	:
	{
		method: type, // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
		'Content-Type': 'application/json', 'Accept' : 'application/json',
		'Authorization': 'Basic '+ tokenAuthorization().token
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data) // body data type must match "Content-Type" header
	};

	const response = await fetch(baseUrl+""+consult, valid);
	return response; // parses JSON response into native JavaScript objects
}

validAces();
function validAces(){
	consultData("users/compliments/receive", "GET")
	.then( async result => {
		if(result.status == 200){
			$("#preloader").hide();
			let data = await result.json().then(result => {return result});
			$("#info_list").show();
			$("#menu-nlw").show();
			
			
			infoInitMessage('receive',data);
		}
		if(result.status == 401){
			showLogin("preloader");
		}
	}).catch(async e => {
		console.error('catch', e)
		showLogin("preloader");
		localStorage.clear();
	}).finally(result => {
		$('body').addClass("authenticated-body");
		$('body').removeClass("preload-body");
	});
}

function tokenAuthorization(){
	let authorization_data = {
		token: '',
		refresh_token: ''
	}
	authorization_data = localStorage.getItem('access_nlw') === null ? authorization_data : JSON.parse(localStorage.getItem('access_nlw'));
	return authorization_data
}
