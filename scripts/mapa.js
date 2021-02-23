/*function buscador_tramo() {
	document.getElementById("control").style.display = "initial"}

function buscador_tramo2() {
	document.getElementById("control").style.display = "none"}*/

function splash() {	
	setTimeout(function(){ document.getElementById("splash").style.width = "0px"}, 400)
	setTimeout(function(){ document.getElementById("bienvenido").style.display = "none"}, 1150)	
}

/*function incidencia() {
	document.getElementById("panel_incidencia").style.display = "initial"}
function incidencia_out() {
	document.getElementById("panel_incidencia").style.display = "none"}*/
	

function power() {
	document.getElementById("pw_panel").style.border = "3px solid #153F7C"
	document.getElementById("pw_panel").style.width = "70%"
	}

function power2() {
	document.getElementById("pw_panel2").style.border = "3px solid #153F7C"
	document.getElementById("pw_panel2").style.width = "70%"
	document.getElementById("search_panel").style.width = "0%"
	document.getElementById("search_panel").style.border = "0px solid #153F7C"
	document.getElementById("buscador_carretera").style.display= "none"
	document.getElementById("buscador_incidencia").style.display= "none"
	document.getElementById("buscador_tramo").style.display= "none"
	}

function power3() {
	document.getElementById("pw_panel3").style.border = "3px solid #153F7C"
	document.getElementById("pw_panel3").style.width = "70%"
	document.getElementById("search_panel").style.width = "0%"
	document.getElementById("search_panel").style.border = "0px solid #153F7C"
	document.getElementById("buscador_carretera").style.display= "none"
	document.getElementById("buscador_incidencia").style.display= "none"
	document.getElementById("buscador_tramo").style.display= "none"
	}

function power4() {
	document.getElementById("pw_panel4").style.border = "3px solid #153F7C"
	document.getElementById("pw_panel4").style.width = "70%"
	document.getElementById("search_panel").style.width = "0%"
	document.getElementById("search_panel").style.border = "0px solid #153F7C"
	document.getElementById("buscador_carretera").style.display= "none"
	document.getElementById("buscador_incidencia").style.display= "none"
	document.getElementById("buscador_tramo").style.display= "none"
	}


function power_close() {
	document.getElementById("pw_panel").style.width = "0%"
	document.getElementById("pw_panel").style.border = "0px solid #153F7C"
	}
function power_close2() {
	document.getElementById("pw_panel2").style.width = "0%"
	document.getElementById("pw_panel2").style.border = "0px solid #153F7C"
	document.getElementById("exp_actuacion2").style.border = "0px solid #153F7C"
	document.getElementById("exp_actuacion2").style.width = "0%"
	document.getElementById("exp_actuacion2").style.right = "-10%"}

function power_close3() {
	document.getElementById("pw_panel3").style.width = "0%"
	document.getElementById("pw_panel3").style.border = "0px solid #153F7C"
	document.getElementById("exp_actuacion3").style.border = "0px solid #153F7C"
	document.getElementById("exp_actuacion3").style.width = "0%"
	document.getElementById("exp_actuacion3").style.right = "-10%"}
function power_close4() {
	document.getElementById("pw_panel4").style.width = "0%"
	document.getElementById("pw_panel4").style.border = "0px solid #153F7C"
	document.getElementById("exp_actuacion").style.border = "0px solid #153F7C"
	document.getElementById("exp_actuacion").style.width = "0%"
	document.getElementById("exp_actuacion").style.right = "-10%"}

function layer_panel_open() {
	document.getElementById("layer_panel").style.border = "3px solid #153F7C"
	document.getElementById("layer_panel").style.width = "20%"}

function layer_panel_close(){
	document.getElementById("layer_panel").style.width = "0%"
	document.getElementById("layer_panel").style.border = "0px solid #153F7C"}

function search() {
	document.getElementById("search_panel").style.border = "3px solid #153F7C"
	document.getElementById("search_panel").style.width = "40%"
	document.getElementById("search_carretera").style.width = "97%"
	document.getElementById("search_incidencia").style.width = "97%"
	document.getElementById("search_tramo").style.width = "97%"
	}
function search_close() {
	document.getElementById("search_panel").style.width = "0%"
	document.getElementById("search_panel").style.border = "0px solid #153F7C"
	document.getElementById("buscador_carretera").style.display= "none"
	document.getElementById("buscador_incidencia").style.display= "none"
	document.getElementById("buscador_tramo").style.display= "none"}

function activar_busc_carretera() {
	document.getElementById("search_carretera").style.width = "0%"
	document.getElementById("buscador_carretera").style.display= "initial"}
function activar_busc_incidencia() {
	document.getElementById("search_incidencia").style.width = "0%"
	document.getElementById("buscador_incidencia").style.display= "initial"}
function activar_busc_tramo() {
	document.getElementById("search_tramo").style.width = "0%"
	document.getElementById("buscador_tramo").style.display= "initial"}

/* Activar capas */
var clicked1 = false;
function activar_capa1(){
	if (clicked1 == false) {document.getElementById("activar_capa_1").style.backgroundColor = "#153F7C" 
							map.addLayer(carretera);}
	else {document.getElementById("activar_capa_1").style.backgroundColor = "#AEAEB2"
		  map.removeLayer(carretera);}
	clicked1 = !clicked1;
}

var clicked2 = false;
function activar_capa2(){
	if (clicked2 == false) {document.getElementById("activar_capa_2").style.backgroundColor = "#153F7C"
			map.addLayer(pk);}
	else {document.getElementById("activar_capa_2").style.backgroundColor = "#AEAEB2"
			map.removeLayer(pk);}
	clicked2 = !clicked2;
}

var clicked3 = false;
function activar_capa3(){
	if (clicked3 == false) {document.getElementById("activar_capa_3").style.backgroundColor = "#153F7C"
	map.addLayer(expropiaciones)
	map.fitBounds(expropiaciones.getBounds())}
	else {document.getElementById("activar_capa_3").style.backgroundColor = "#AEAEB2" 
		map.removeLayer(expropiaciones)}
	clicked3 = !clicked3;
}

var clicked4 = false;
function activar_capa4(){
	if (clicked4 == false) {document.getElementById("activar_capa_4").style.backgroundColor = "#153F7C" 
		map.addLayer(TCA2018)
		map.addLayer(TCA2019)}
	else {document.getElementById("activar_capa_4").style.backgroundColor = "#AEAEB2" 
		map.removeLayer(TCA2018)
		map.removeLayer(TCA2019)}
	clicked4 = !clicked4;
}

var clicked5 = false;
function activar_capa5(){
	if (clicked5 == false) {document.getElementById("activar_capa_5").style.backgroundColor = "#153F7C"
	map.addLayer(actuaciones)

}
	else {document.getElementById("activar_capa_5").style.backgroundColor = "#AEAEB2"
	map.removeLayer(actuaciones)
	document.getElementById("leyenda_capas_panel").style.border = "0px solid #153F7C"
	document.getElementById("leyenda_capas_panel").style.width = "0%"
}
	clicked5 = !clicked5;
	
}

var clicked6 = false;
function activar_capa6(){
	if (clicked6 == false) {document.getElementById("activar_capa_6").style.backgroundColor = "#153F7C" 
		map.addLayer(puntos)
		}
	else {document.getElementById("activar_capa_6").style.backgroundColor = "#AEAEB2" 
		map.removeLayer(puntos)
		}
	clicked6 = !clicked6;
}

var clicked7 = false;
function activar_capa7(){
	if (clicked7 == false) {document.getElementById("activar_capa_7").style.backgroundColor = "#153F7C" 
		
		
		map.addLayer(vias)}
	else {document.getElementById("activar_capa_7").style.backgroundColor = "#AEAEB2" 
		map.removeLayer(vias)
		}
	clicked7 = !clicked7;
}

function carreteras(){
	map.addLayer(carretera);
}
/* ------------------------------------------------ */
/*
function charts_via_activo(){document.getElementById("charts_tramo").style.display= "none"
							 document.getElementById("charts_via").style.display= "initial"}

function charts_tramo_activo(){document.getElementById("charts_via").style.display= "none"
								document.getElementById("charts_tramo").style.display= "initial"}*/

function open_tca(){document.getElementById("tca_panel").style.width = "26%"
					document.getElementById("tca_panel").style.border = "3px solid #153F7C"
					document.getElementById("tca_panel").style.display = "initial"}

function tca_panel_close(){document.getElementById("tca_panel").style.width = "0%"
						   document.getElementById("tca_panel").style.border = "0px solid #153F7C"}


function buscar_actuacion() {
  // Declare variables busqueda actuaciones
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Recorra todos los elementos de la lista y oculte aquellos que no coincidan con la consulta de búsqueda.
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function buscar_expediente() {
  // Declarar variables busqueda expedientes
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput2');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL2");
  li = ul.getElementsByTagName('li');

  // Recorra todos los elementos de la lista y oculte aquellos que no coincidan con la consulta de búsqueda.
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function activar_b_actuacion(){
	document.getElementById('buscador_actuacion').style.display = 'initial'
	document.getElementById('buscador_expediente').style.display = 'none'
	document.getElementById('buscador_concello').style.display = 'none'
	document.getElementById('buscador_estado').style.display = 'none'
}

function activar_b_expediente(){
	document.getElementById('buscador_expediente').style.display = 'initial'
	document.getElementById('buscador_actuacion').style.display = 'none'
	document.getElementById('buscador_concello').style.display = 'none'
	document.getElementById('buscador_estado').style.display = 'none'
}

function activar_b_concello(){
	document.getElementById('buscador_concello').style.display = 'initial'
	document.getElementById('buscador_actuacion').style.display = 'none'
	document.getElementById('buscador_expediente').style.display = 'none'
	document.getElementById('buscador_estado').style.display = 'none'
}

function activar_b_estado(){
	document.getElementById('buscador_estado').style.display = 'initial'
	document.getElementById('buscador_actuacion').style.display = 'none'
	document.getElementById('buscador_expediente').style.display = 'none'
	document.getElementById('buscador_concello').style.display = 'none'
}

function activar_exp_actuacion() {
	document.getElementById("exp_actuacion").style.border = "3px solid #153F7C"
	document.getElementById("exp_actuacion").style.width = "40%"
	}
/* Flechas cerrar expedientes */
function exp_act_close(){document.getElementById("exp_actuacion").style.border = "0px solid #153F7C"
						document.getElementById("exp_actuacion").style.width = "0%"
						document.getElementById("exp_actuacion").style.right = "-10%"}

function exp_act_close2(){document.getElementById("exp_actuacion2").style.border = "0px solid #153F7C"
						document.getElementById("exp_actuacion2").style.width = "0%"
						document.getElementById("exp_actuacion2").style.right = "-10%"}

function exp_act_close3(){document.getElementById("exp_actuacion3").style.border = "0px solid #153F7C"
						document.getElementById("exp_actuacion3").style.width = "0%"
						document.getElementById("exp_actuacion3").style.right = "-10%"}

function exp_corunha_close(){document.getElementById("exp_corunha").style.border = "0px solid #153F7C"
						document.getElementById("exp_corunha").style.width = "0%"
						document.getElementById("exp_corunha").style.right = "-10%"}

function exp_arteixo_close(){document.getElementById("exp_arteixo").style.border = "0px solid #153F7C"
						document.getElementById("exp_arteixo").style.width = "0%"
						document.getElementById("exp_arteixo").style.right = "-10%"}
/* ------------------------------------------------ */

function street() {document.getElementById("pano").style.border = "3px solid #153F7C"
				   document.getElementById("pano").style.width = "35%"				   
}

function street_close(){document.getElementById("pano").style.border = "0px solid #153F7C"
				   document.getElementById("pano").style.width = "0%"}

/* Filtro estados */
function filtrar_estado() {
	var seleccion = document.getElementById('estado_select').value
	if (seleccion == "Estudios Previos") {
		document.getElementById('filtrado_estudios').style.display = 'initial'
		document.getElementById('sin_filtrar').style.display = 'none'
		document.getElementById('filtrado_inicial').style.display = 'none'
		document.getElementById('filtrado_obra').style.display = 'none'
		document.getElementById('filtrado_servicio').style.display = 'none'
		document.getElementById('filtrado_liquidada').style.display = 'none'
	}
	if (seleccion == "Inicial") {
		document.getElementById('filtrado_inicial').style.display = 'initial'
		document.getElementById('sin_filtrar').style.display = 'none'
		document.getElementById('filtrado_estudios').style.display = 'none'
		document.getElementById('filtrado_obra').style.display = 'none'
		document.getElementById('filtrado_servicio').style.display = 'none'
		document.getElementById('filtrado_liquidada').style.display = 'none'
	}
	if (seleccion == "Obra") {
		document.getElementById('filtrado_obra').style.display = 'initial'
		document.getElementById('sin_filtrar').style.display = 'none'
		document.getElementById('filtrado_estudios').style.display = 'none'
		document.getElementById('filtrado_inicial').style.display = 'none'
		document.getElementById('filtrado_servicio').style.display = 'none'
		document.getElementById('filtrado_liquidada').style.display = 'none'
	}
	if (seleccion == "En servicio") {
		document.getElementById('filtrado_servicio').style.display = 'initial'
		document.getElementById('sin_filtrar').style.display = 'none'
		document.getElementById('filtrado_estudios').style.display = 'none'
		document.getElementById('filtrado_inicial').style.display = 'none'
		document.getElementById('filtrado_obra').style.display = 'none'
		document.getElementById('filtrado_liquidada').style.display = 'none'
	}

	if (seleccion == "Liquidada") {
		document.getElementById('filtrado_liquidada').style.display = 'initial'
		document.getElementById('sin_filtrar').style.display = 'none'
		document.getElementById('filtrado_estudios').style.display = 'none'
		document.getElementById('filtrado_inicial').style.display = 'none'
		document.getElementById('filtrado_obra').style.display = 'none'
		document.getElementById('filtrado_servicio').style.display = 'none'
	}
}
/* ------------------------------------------------ */
/* Cerrar informe */
function informe_close() {
	document.getElementById("1").style.width = "0%"
	document.getElementById("1").style.border = "0px solid #153F7C"
	document.getElementById("1").style.left = "200%"
	document.getElementById("2").style.width = "0%"
	document.getElementById("2").style.border = "0px solid #153F7C"
	document.getElementById("2").style.left = "200%"
	document.getElementById("3").style.width = "0%"
	document.getElementById("3").style.border = "0px solid #153F7C"
	document.getElementById("3").style.left = "200%"
	document.getElementById("4").style.width = "0%"
	document.getElementById("4").style.border = "0px solid #153F7C"
	document.getElementById("4").style.left = "200%"
	document.getElementById("5").style.width = "0%"
	document.getElementById("5").style.border = "0px solid #153F7C"
	document.getElementById("5").style.left = "200%"
	document.getElementById("6").style.width = "0%"
	document.getElementById("6").style.border = "0px solid #153F7C"
	document.getElementById("6").style.left = "200%"
	document.getElementById("7").style.width = "0%"
	document.getElementById("7").style.border = "0px solid #153F7C"
	document.getElementById("7").style.left = "200%"
}
/* ------------------------------------------------ */






