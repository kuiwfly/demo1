/**
 * New node file
 */
var socket = io.connect('http://localhost:8888');
socket.on('connect',function(){
	console.log("connected....");
	}
);
socket.on('news',function(data){
	console.log(data);
	}
);
socket.on('result',function(data){
	}
);
function login(username,password){
	socket.emit('login','username:'+username+';password:'+password);
}


$(function(){
	var diagLogin,formLogin;
	
	
	function onLogin(){
		var username = $('#txtUserName').val();
		var password = $('#txtPwd').val();
		alert(username+':'+password);
		login(username,password);
		diagLogin.dialog("close");
	}
	diagLogin = $("#diag-login").dialog({
		autoOpen:true,
		height:300,
		width:350,
		modal:true,
		buttons:{
			"Login":onLogin,
			Cancel:function(){
				diagLogin.dialog("close");
			}
		},
		close:function(){
			formLogin[0].reset();
		}
	});
	formLogin = diagLogin.find("form").on("submit",function(){
		alert("submit");
	});

    /*
    $( "#dialog-message" ).dialog({
        modal: true,
        buttons: {
          Ok: function() {
            $( this ).dialog( "close" );
          }
        }
      });*/
	}
);
$(document).ready(function(){
	
	}
);