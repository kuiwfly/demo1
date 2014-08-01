/**
 * New node file
 */

var Client = {
		username:null,
		socket:null,
		send:function(data){
			Client.socket.send(data);
		},

		login:function(username,password){
			var data = {command:"login",
			            username:username,
			            password:password
			            };
			
			Client.send(data);
		},
		chat:function(message){
			var data = {command:"chat",
			            message:message};
			Client.send(data);
		},
		connect:function(){
		},
		receive:function(data){
		},
		disconnect:function(){
		},
		
		init:function(){
			Client.socket = io.connect('http://localhost:8888');
			Client.socket.on("connect",Client.connect);
			Client.socket.on("message",Client.receive);
			Client.socket.on("disconnect",Client.disconnect);
		}

};




$(function(){
	var diagLogin,formLogin;
	Client.init();
	
	function onLogin(){
		var username = $('#txtUserName').val();
		var password = $('#txtPwd').val();
		alert(username+':'+password);
		Client.login(username,password);
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