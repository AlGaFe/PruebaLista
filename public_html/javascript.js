/* 
 .value
 .selectedIndex
 .remove(x.selectedIndex)
 */
function pasarCancionSemanaPasada() {
    if ( document.getElementById("copiar").checked == true) {
    var estaSemana = document.getElementById("estaSemana");
    var array = estaSemana.getElementsByTagName("option");
    var cancion = estaSemana.options[estaSemana.selectedIndex];
    var option = document.createElement("option");
    option.value = array.length+1;
    option.text = cancion.text;
    document.getElementById("semanaPasada").appendChild(option);
    }else if (document.getElementById("mover").checked == true) {
    var estaSemana = document.getElementById("estaSemana");
    var array = estaSemana.getElementsByTagName("option");
    var cancion = estaSemana.options[estaSemana.selectedIndex];
    var option = document.createElement("option");
    option.value = array.length+1;
    option.text = cancion.text;
    document.getElementById("semanaPasada").appendChild(option);
    cancion.parentNode.removeChild(cancion);
    }
   
}
function pasarTodasSemanaPasada() {
    if ( document.getElementById("copiar").checked == true) {
    var estaSemana = document.getElementById("estaSemana");
    var array = estaSemana.getElementsByTagName("option");
    for (var i = 0; i <= array.length; i++) {
        var cancion = array[i];
        var option = document.createElement("option");
        option.value = cancion.value;
        option.text = cancion.text;
        document.getElementById("semanaPasada").appendChild(option);
    }
    }else if (document.getElementById("mover").checked == true) {
    var estaSemana = document.getElementById("estaSemana");
    var array = estaSemana.getElementsByTagName("option");
    for (var i = 0; i <= array.length; i) {
        var cancion = array[i];
        var option = document.createElement("option");
        option.value = cancion.value;
        option.text = cancion.text;
        document.getElementById("semanaPasada").appendChild(option);
        cancion.parentNode.removeChild(cancion);
    }
}
}
function pasarCancionEstaSemana() {
     if ( document.getElementById("copiar").checked == true) {
    var semanaPasada = document.getElementById("semanaPasada");
    var array = estaSemana.getElementsByTagName("option");
    var cancion = estaSemana.options[estaSemana.selectedIndex];
    var option = document.createElement("option");
    option.value = array.length+1;
    option.text = cancion.text;
    document.getElementById("estaSemana").appendChild(option);
    }else if (document.getElementById("mover").checked == true) {
    var estaSemana = document.getElementById("semanaPasada");
    var array = estaSemana.getElementsByTagName("option");
    var cancion = estaSemana.options[estaSemana.selectedIndex];
    var option = document.createElement("option");
    option.value = array.length+1;
    option.text = cancion.text;
    document.getElementById("estaSemana").appendChild(option);
    cancion.parentNode.removeChild(cancion);
    }
}
function pasarTodasEstaSemana() {
     if ( document.getElementById("copiar").checked == true) {
    var estaSemana = document.getElementById("semanaPasada");
    var array = estaSemana.getElementsByTagName("option");
    for (var i = 0; i <= array.length; i++) {
        var cancion = array[i];
        var option = document.createElement("option");
        option.value = cancion.value;
        option.text = cancion.text;
        document.getElementById("estaSemana").appendChild(option);
    }
    }else if (document.getElementById("mover").checked == true) {
    var estaSemana = document.getElementById("semanaPasada");
    var array = estaSemana.getElementsByTagName("option");
    for (var i = 0; i <= array.length; i) {
        var cancion = array[i];
        var option = document.createElement("option");
        option.value = cancion.value;
        option.text = cancion.text;
        document.getElementById("estaSemana").appendChild(option);
        cancion.parentNode.removeChild(cancion);
    }

    }
    }
function verElemento() {
    var semana = prompt("Por favor introduce 1 si desea ver un elemento de esta semana y 2 si desea ver un elemento de la semana pasada", "1");
    switch (semana) {
        case "1":
            var estaSemana = document.getElementById("estaSemana");
            var cancion = estaSemana.options[estaSemana.selectedIndex];
            var texto = cancion.text;
            document.getElementById("textArea").innerHTML += texto;
            break;
        case "2":
            var semanaPasada = document.getElementById("semanaPasada");
            var cancion = semanaPasada.options[semanaPasada.selectedIndex];
            var texto = cancion.text;
            document.getElementById("textArea").innerHTML += texto;
            break;
        default:
            alert("Error");
    }
}
function añadirElemento() {
    var semana = prompt("Por favor introduce 1 si desea introducir un elemento en esta semana y 2 si desea insertar un elemento en la semana pasada", "1");
    switch (semana) {
        case "1":
            var elemento = document.getElementById("textArea").text;
            var estaSemana = document.getElementById("estaSemana");
            var array = estaSemana.getElementsByTagName("option");
            var option = document.createElement("option");
            option.value = array.length+1;
            option.innerHTML = elemento;
            var estaSemana = document.getElementById("estaSemana");
            estaSemana.appendChild(option);
            break;
        case "2":
            var elemento = document.getElementById("textArea").text;
            var semanaPasada = document.getElementById("semanaPasada");
            var array = semanaPasada.getElementsByTagName("option");
            var option = document.createElement("option");
            option.value = array.length+1;
            option.innerHTML = elemento;
            var semanaPasada = document.getElementById("semanaPasada");
            semanaPasada.appendChild(option);
            break;
        default:
            alert("Error");
    }
}
function tamanoLista() {
    var semana = prompt("Por favor introduce 1 si desea ver el tamaño de la lisde de esta semana y 2 si desea ver el tamaño de la lisde de la semana pasada", "1");
    switch (semana) {
        case "1":
            var estaSemana = document.getElementById("estaSemana");
            var array = estaSemana.getElementsByTagName("option");
            document.getElementById("textArea").innerHTML += array.length;
            break;
        case "2":
            var semanaPasada = document.getElementById("semanaPasada");
            var array = semanaPasada.getElementsByTagName("option");
            document.getElementById("textArea").innerHTML += array.length;
            break;
        default:
            alert("Error");
    }
}
function borrarElemento() {
    var semana = prompt("Por favor introduce 1 si desea borrar un elemento de la lista de de esta semana y 2 si desea borrar una elemento  de la lista de la semana pasada", "1");
    switch (semana) {
        case "1":
            var estaSemana = document.getElementById("estaSemana");
            var cancion = estaSemana.options[estaSemana.selectedIndex];
            cancion.parentNode.removeChild(cancion);
            break;
        case "2":
            var semanaPasada = document.getElementById("semanaPasada");
            var cancion = semanaPasada.options[semanaPasada.selectedIndex];
            cancion.parentNode.removeChild(cancion);
            break;
        default:
            alert("Error");
    }
}
function borrarTodo() {
    var semana = prompt("Por favor introduce 1 si desea borrar los elementos de la lista de de esta semana y 2 si desea borrar los elementos  de la lista de la semana pasada", "1");
    switch (semana) {
        case "1":
            var estaSemana = document.getElementById("estaSemana");
            var array = estaSemana.getElementsByTagName("option");
            for (var i = 0; i <= array.length;i) {
                var cancion = array[i];
                cancion.parentNode.removeChild(cancion);
                
            }
            break;
        case "2":
            var semanaPasada = document.getElementById("semanaPasada");
            var array = semanaPasada.getElementsByTagName("option");
             for (var i = 0; i <= array.length;i) {
                var cancion = array[i];
                cancion.parentNode.removeChild(cancion);
            }
            break;
        default:
            alert("Error");
    }
}
function sumarMaxYMin() {
    var semana = prompt("Por favor introduce 1 si desea borrar un elemento de la lista de de esta semana y 2 si desea borrar una elemento  de la lista de la semana pasada", "1");
    switch (semana) {
        case "1":
            var estaSemana = document.getElementById("estaSemana");
            var array = estaSemana.getElementsByTagName("option");
            var primero=array[0];
            var valuep=primero.value;
            var length= array.length;
            var ultimo=array[length];
            var valueu=ultimo.value;
            var suma = valuep+valueu;
             document.getElementById("textArea").innerHTML += suma; 
            
            break;
        case "2":
            var semanaPasada = document.getElementById("semanaPasada");
            var array = semanaPasada.getElementsByTagName("option");
        
            break;
        default:
            alert("Error");
    }
}