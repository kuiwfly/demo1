/**
 * New node file
 */

$(function(){
	var diagLogin,formLogin;
	function Login(){
		alert("login");
		diagLogin.dialog("close");
	}
	diagLogin = $("#diag-login").dialog({
		autoOpen:true,
		height:300,
		width:350,
		modal:true,
		buttons:{
			"Login":Login,
			Cancel:function(){
				diagLogin.dialog("close");
			}
		},
		close:function(){
			formLogin[0].reset();
			//allFields.removeClass("ui-state-error");
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