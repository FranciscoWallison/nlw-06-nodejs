function infoInitMessage(type, data = []){
    console.log('infoInitMessage', type == 'receive', type, data);
    document.getElementById("info_list_message").innerHTML = "";
    if(type == 'receive'){
        $('#info_text_title').text('Elogios Recebidas');  
        data.forEach(usersComplimentsReceive);
    }
    if(type == 'send'){
        $('#info_text_title').text('Elogios Enviados');  
        data.forEach(usersComplimentsSend);
    }
	if(type == 'users'){
        usersComplimentsGet(data);
    }
    
}

function usersComplimentsReceive(item, index) {
    document.getElementById("info_list_message").innerHTML +=
    `<li>
        <div class="collapsible-header">`
        +
        item.userSender.name
        +
        `<span class="badge">#`
        +
        item.tag.name
        +
        `</span></div>
        <div class="collapsible-body message-receive"><p>`+item.message+`</p></div>
    </li>`;
}


function infoInitReceiveGet(){
	$("#send_compliment").hide();
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
	}).finally(result => {
		$('body').addClass("authenticated-body");
		$('body').removeClass("preload-body");
	});
}

//  Send
function infoInitSendGet(){
	$("#send_compliment").hide();

	consultData("users/compliments/send", "GET")
	.then( async result => {
		if(result.status == 200){
			$("#preloader").hide();
			let data = await result.json().then(result => {return result});
			$("#info_list").show();
			$("#menu-nlw").show();			
			
			infoInitMessage('send',data);
		}
		if(result.status == 401){
			showLogin("preloader");
		}
	}).catch(async e => {
		console.error('catch', e)
		showLogin("preloader");
	}).finally(result => {
		$('body').addClass("authenticated-body");
		$('body').removeClass("preload-body");
	});
}

function usersComplimentsSend(item, index) {
    document.getElementById("info_list_message").innerHTML +=
    `<li>
        <div class="collapsible-header">`
        +
        item.userReceiver.email
        +
        `<span class="badge">#`
        +
        item.tag.name
        +
        `</span></div>
        <div class="collapsible-body message-receive"><p>`+item.message+`</p></div>
    </li>`;
}


function usersComplimentsGet(data) {
	$.each(data.users, function (i, item) {
		if(item.id  != data.id_user)
		{
			$('#user-receive').append($('<option>', { 
				value: item.id,
				text : item.name + " - " + item.email
			}));
		}
		
	});

	$.each(data.tags, function (i, item) {
		$('#tag-send').append($('<option>', { 
			value: item.id,
			text : "#"+item.name
		}));
	});

	$("#user_sender").val(data.id_user)
}

function infoCreateMessageGet(){
	$("#info_list").hide();
	
	consultData("users", "GET")
	.then( async result => {
		if(result.status == 200){
			$("#preloader").hide();
			let data = await result.json().then(result => {return result});
			$("#send_compliment").show();
			$("#menu-nlw").show();
			
			
			infoInitMessage('users',data);
		}
		if(result.status == 401){
			showLogin("preloader");
		}
	}).catch(async e => {
		console.error('catch', e)
		showLogin("preloader");
	}).finally(result => {
		$('body').addClass("authenticated-body");
		$('body').removeClass("preload-body");
	});
}



function infoCreateMessageNew(){
	$('.alert_recover').text('');
	$('.btn').prop('disabled', true);
    $('#error_login').text('');

    let data =
		{
			"user_sender":  $("#user_sender").val(),
			"user_receiver":  $("#user-receive").val(),
			"tag_id":  $("#tag-send").val(),
			"message":  $("#textarea1").val(),
		}
    

    consultData("compliments", "POST", data)
    .then( async result => {
        if(result.status == 200){
			$('.alert_account').removeClass("red-text");
			$('.alert_account').addClass("green-text");

            $('.alert_recover').text('Enviado');
        }
    }).catch(async e => {			

	}).finally(result => {
        $('.btn').prop('disabled', false);
        
    });
}