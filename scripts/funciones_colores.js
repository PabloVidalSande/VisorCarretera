    // ----------ESTILOS CAPAS---------- //

    function getColor(d) {
    var inputVal = document.getElementById("input_tramo").value;
    return d == inputVal && d <= inputVal+1? '#13FF00':
           d != inputVal  ? '#908888':
           '#908888';}

    function color_expropiaciones(e) {
    	return e == "FINALIZADA"  ? 'green':
               e == "ALERTA"  ? 'red':
           'grey';}

    function color_actuaciones(e) {
    	return e == "OBRA"  ? 'orange':
               e == "EN SERVICIO"  ? 'green':
               e == "LIQUIDADA"  ? 'blue':
               e == "PROYECTOS"  ? 'grey':
           'transparent';}

    function color_vias(e) {
    	return e == "Otras"  ? 'black':
               e == "PB"  ? 'green':
               e == "PC"  ? 'orange':
               e == "SEC"  ? 'blue':
               e == "VAC (AG) Xunta"  ? 'yellow':
               e == "VAC (CG y VG) Xunta"  ? 'purple':
           'grey';
       }

    function mystyle(feature) {
    return {
        fillColor: getColor(feature.properties.PK_REAL),
        weight: 10,
        opacity: 0.65,
        color: getColor(feature.properties.PK_REAL),
        fillOpacity: 0.65,};}
    
    function mystyle_pre(feature) {
    return {
        fillColor: '#153F7C',
        weight: 10,
        opacity: 0.65,
        color: '#153F7C',
        fillOpacity: 0.65,};}

    function estilo_exp(feature) {
    return {
        fillColor: '#FE0902',
        weight: 25,
        opacity: 0.65,
        color: '#FE0902',
        fillOpacity: 0.65,};}

    function estilo_tca_18(feature) {
    return {
        fillColor: 'blue',
        weight: 7,
        opacity: 0.9,
        color: 'blue',
        fillOpacity: 1,};}
    function estilo_tca_19(feature) {
    return {
        fillColor: 'red',
        weight: 5,
        opacity: 0.9,
        color: 'red',
        fillOpacity: 1,};}

    function estilo_expropiaciones(feature) {
    return {
        fillColor: color_expropiaciones(feature.properties.ESTADO),
        weight: 2,
        opacity: 1,
        color: 'Black',
        fillOpacity: 0.6,};}

    function estilo_actuaciones(feature) {
    return {
        fillColor: "grey",
        weight: 15,
        opacity: 0.5,
        color: "grey",
        fillOpacity: 0.5,};}

    function estilo_vias(feature) {
    return {
        fillColor: color_vias(feature.properties.RED),
        weight: 2.5,
        opacity: 1,
        color: color_vias(feature.properties.RED),
        fillOpacity: 0.6,};}
    function estilo_vias2(feature) {
    return {
        fillColor: 'black',
        weight: 2,
        opacity: 1,
        color: 'black',
        fillOpacity: 0.5,};}

    function estilo_coruna_red(feature) {
    return {
        fillColor: 'red',
        weight: 10,
        opacity: 0.8,
        color: 'red',
        fillOpacity: 0.5,};}
	function estilo_coruna_orange(feature) {
    return {
        fillColor: 'orange',
        weight: 20,
        opacity: 0.8,
        color: 'orange',
        fillOpacity: 0.5,};} 

	function estilo_exp_naranja(feature) {
    return {
        fillColor: 'orange',
        weight: 20,
        opacity: 0.8,
        color: 'orange',
        fillOpacity: 0.5,};} 

    function estilo_exp_verde(feature) {
    return {
        fillColor: 'green',
        weight: 20,
        opacity: 0.8,
        color: 'green',
        fillOpacity: 0.5,};} 

    function estilo_exp_azul(feature) {
    return {
        fillColor: 'blue',
        weight: 20,
        opacity: 0.8,
        color: 'blue',
        fillOpacity: 0.5,};}

    function estilo_exp_amarillo(feature) {
    return {
        fillColor: 'yellow',
        weight: 20,
        opacity: 0.8,
        color: 'yellow',
        fillOpacity: 0.5,};}

    function estilo_exp_morado(feature) {
    return {
        fillColor: 'purple',
        weight: 10,
        opacity: 0.8,
        color: 'purple',
        fillOpacity: 0.5,};} 

    function estilo_exp_pink(feature) {
    return {
        fillColor: 'pink',
        weight: 10,
        opacity: 0.8,
        color: 'pink',
        fillOpacity: 0.5,};}    

    function estilo_coruna_green(feature) {
    return {
        fillColor: 'green',
        weight: 10,
        opacity: 0.8,
        color: 'green',
        fillOpacity: 0.5,};}   

	function limite_concello(feature) {
    return {
        fillColor: 'grey',
        weight: 5,
        opacity: 0.8,
        color: 'black',
        fillOpacity: 0.3,};}   

    function feature_expropiaciones(feature, layer){
    	layer.bindPopup( "La parcela con referencia catastral "+feature.properties.REFCAT+" muestra el siguiente estado del expediente: " + feature.properties.ESTADO + ". " );
    }

