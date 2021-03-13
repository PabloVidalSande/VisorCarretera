function splash() {
	setTimeout(function(){ document.getElementById("splash").style.height = "0px"}, 400)
	setTimeout(function(){ document.getElementById("splash").style.width = "0px"}, 400)
	setTimeout(function(){ document.getElementById("splash").style.bottom = "3%"}, 500)
	setTimeout(function(){ document.getElementById("splash").style.left = "5%"}, 500)
	setTimeout(function(){ document.getElementById("splash").style.backgroundColor = "transparent"}, 600)
	setTimeout(function(){ document.getElementById("splash").style.borderRadius = "100%";}, 600)

	setTimeout(function(){ document.getElementById("bienvenido").style.display = "none"}, 900)
	
};

function display_menu() {
	document.getElementById("menu_desplegado").style.height = "100%"
	

}

function close_menu() {
	document.getElementById("menu_desplegado").style.height = "0%" }