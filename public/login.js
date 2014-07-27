/**
 * New node file
 */
var txtUserName, txtPwd, btnLogin;

$(function(){
	txtUserName = $('#txtUserName');
	txtPwd = $('#txtPwd');
	btnLogin = $('#btnLogin');
	txtUserName.val('test');
	btnLogin.val('login');
	alert("init");
	}
);
$(document).ready(function(){
	alert("I am ready!");
	}
);