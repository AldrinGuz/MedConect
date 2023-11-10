function setModo(hoja) {
    document.getElementById("Base").setAttribute("href", hoja);  

	if(hoja=="est_Impresion.css"){
		console.log(document.URL);
	}
}