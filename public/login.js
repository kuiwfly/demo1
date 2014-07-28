/**
 * New node file
 */
var diagLogin,formLogin;
function Login(){
	alert("login");
	diagLogin.dialog("close");
}
$(function(){
	diagLogin = $("#diagLogin").dialog({
		autoOpen:false,
		height:300,
		width:350,
		modal:true,
		buttons:{
			"Login":Login,
			Cancel:function(){
				diaglog.dialog("close");
			}
		},
		close:function(){
			form[0].reset();
			allFields.removeClass("ui-state-error");
		}
	});
	formLogin = diagLogin.find("form").on("submit",function(){
		alert("submit");
	});
	
	}
);
$(document).ready(function(){
	
	}
);