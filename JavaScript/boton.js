function setModo(hoja) {
    document.getElementById("Base").setAttribute("href", hoja);  

	if(hoja=="est_Impresion.css"){
		console.log(document.URL);
	}
}
function openVideo(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
function desplegar(id){

    let contenido= document.getElementById(id);
    if(contenido.style.display=="none"){
        contenido.style.display = "block";
    }
    else{
        contenido.style.display = "none";
    }
}