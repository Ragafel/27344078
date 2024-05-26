async function obtenerDatos(){
    const urlObject = new URL(location.href);
    var comprueba = urlObject.searchParams.get("L")
    var comprueba2 = urlObject.searchParams.get("l")
    if( comprueba == "EN" || comprueba == "en" || comprueba2 == "EN" || comprueba2 == "en" ){
        const response = await fetch("http://127.0.0.1:5500/reto5/conf/configEN.json",{method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json'}), 
        mode: 'no-cors'});
        const json = await response.json();

        let ati = document.getElementById("ATI");
        let ucv = document.getElementById("ucv");
        let sem = document.getElementById("semestre");
        ati.innerHTML = json.sitio[0];
        ucv.innerHTML = json.sitio[1];
        sem.innerHTML = json.sitio[2];
        let pie = document.getElementById("pie");
        pie.innerHTML = json.copyRight;
        let nombre = document.getElementById("nombre");
        nombre.setAttribute("placeholder", json.nombre);
        let saludo = document.getElementById("saludo");
        saludo.innerHTML = json.saludo + ", Rafael";

    }else if (comprueba == "PT" || comprueba == "pt" || comprueba2 == "pt" || comprueba2 == "PT"){
        const response = await fetch("http://127.0.0.1:5500/reto5/conf/configPT.json",{method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json'}), 
mode: 'no-cors'});
        const json = await response.json();

        let ati = document.getElementById("ATI");
        let ucv = document.getElementById("ucv");
        let sem = document.getElementById("semestre");
        ati.innerHTML = json.sitio[0];
        ucv.innerHTML = json.sitio[1];
        sem.innerHTML = json.sitio[2];
        let pie = document.getElementById("pie");
        pie.innerHTML = json.copyRight;
        let nombre = document.getElementById("nombre");
        nombre.setAttribute("placeholder", json.nombre);
        let saludo = document.getElementById("saludo");
        saludo.innerHTML = json.saludo + ", Rafael";
    }else {
        const response = await fetch("http://127.0.0.1:5500/reto5/conf/configES.json",{method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json'}), 
mode: 'no-cors'});
        const json = await response.json();

        let ati = document.getElementById("ATI");
        let ucv = document.getElementById("ucv");
        let sem = document.getElementById("semestre");
        ati.innerHTML = json.sitio[0];
        ucv.innerHTML = json.sitio[1];
        sem.innerHTML = json.sitio[2];
        let pie = document.getElementById("pie");
        pie.innerHTML = json.copyRight;
        let nombre = document.getElementById("nombre");
        nombre.setAttribute("placeholder", json.nombre);
        let saludo = document.getElementById("saludo");
        saludo.innerHTML = json.saludo + ", Rafael";
    }
}
obtenerDatos();

/*function eve(){
    let nombre = document.getElementById("nombre");
   nombre.value = "";
}*/

async function estructuraPerfil(){
    const urlObject = new URL(location.href);
    var comprueba = urlObject.searchParams.get("L")
    var comprueba2 = urlObject.searchParams.get("l")
    if( comprueba == "EN" || comprueba == "en" || comprueba2 == "EN" || comprueba2 == "en"){
    const respuesta = await fetch("http://127.0.0.1:5500/reto5/conf/configEN.json",{method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json'}), 
mode: 'no-cors'});
    const index = await respuesta.json();

    let mail = document.getElementById("mail");
    mail.innerHTML = index.email;
    let lenguajes = document.getElementById("lenguajes");
    lenguajes.innerHTML = "<strong>"+ index.lenguajes +"</strong>";
    let video = document.getElementById("videojuegos");
    video.innerHTML = index.video_juego;
    let musica = document.getElementById("musica");
    musica.innerHTML = index.musica;
    let libro = document.getElementById("libro");
    libro.innerHTML = index.libro;
    let color = document.getElementById("color");
    color.innerHTML = index.color;
    let descri = document.getElementById("descripcion");
    descri.innerHTML = "<em>" + index.descripcion + "</em>";
    let nombre = document.getElementById("nombre");
    nombre.innerHTML = index.nombre;
    
    }else if( comprueba == "PT" || comprueba == "pt" || comprueba2 == "pt" || comprueba2 == "PT"){
    const respuesta = await fetch("http://127.0.0.1:5500/reto5/conf/configPT.json",{method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json'}), 
mode: 'no-cors'});
    const index = await respuesta.json();

    let mail = document.getElementById("mail");
    mail.innerHTML = index.email;
    let lenguajes = document.getElementById("lenguajes");
    lenguajes.innerHTML = "<strong>"+ index.lenguajes +"</strong>";
    let video = document.getElementById("videojuegos");
    video.innerHTML = index.video_juego;
    let musica = document.getElementById("musica");
    musica.innerHTML = index.musica;
    let libro = document.getElementById("libro");
    libro.innerHTML = index.libro;
    let color = document.getElementById("color");
    color.innerHTML = index.color;
    let descri = document.getElementById("descripcion");
    descri.innerHTML = "<em>" + index.descripcion + "</em>";
    let nombre = document.getElementById("nombre");
    nombre.innerHTML = index.nombre;
    }else{
    const respuesta = await fetch("http://127.0.0.1:5500/reto5/conf/configES.json",{method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json'}), 
mode: 'no-cors'});
    const index = await respuesta.json();

    let mail = document.getElementById("mail");
    mail.innerHTML = index.email;
    let lenguajes = document.getElementById("lenguajes");
    lenguajes.innerHTML = "<strong>"+ index.lenguajes +"</strong>";
    let video = document.getElementById("videojuegos");
    video.innerHTML = index.video_juego;
    let musica = document.getElementById("musica");
    musica.innerHTML = index.musica;
    let libro = document.getElementById("libro");
    libro.innerHTML = index.libro;
    let color = document.getElementById("color");
    color.innerHTML = index.color;
    let descri = document.getElementById("descripcion");
    descri.innerHTML = "<em>" + index.descripcion + "</em>";
    let nombre = document.getElementById("nombre");
    nombre.innerHTML = index.nombre;
    }
    
}
estructuraPerfil();

async function listarEstudiantes(){
    const listado = await fetch("http://127.0.0.1:5500/reto5/datos/index.json",{method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json'}), 
mode: 'no-cors'});
    const listson = await listado.json();
    listson.forEach(element => {
        var lis = document.createElement("li");
        var ima = document.createElement("img");
        var contenido = element.nombre;
        var nombre = document.createTextNode(contenido)
        var fuente = element.ci;
        var nomfuente = element.imagen;
        ima.setAttribute("src", "./reto5/"+nomfuente);
        lis.appendChild(ima);
        lis.appendChild(nombre);
        lis.setAttribute("class", "estudiante");
        document.getElementById("estudiantes").appendChild(lis);
    });
}
listarEstudiantes();

async function cargarPerfil(){
    const listado = await fetch("http://127.0.0.1:5500/reto5/datos/index.json",{method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json'}), 
mode: 'no-cors'});
    const listson = await listado.json();
    const urlObject = new URL(location.href);
    if(urlObject.searchParams.get("ci")){
        var perfil = urlObject.searchParams.get("ci");
        listson.forEach(element => {
            if (element.ci == perfil){
                fetch("http://127.0.0.1:5500/reto5/"+perfil+"/perfil.json",{method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json'}), 
mode: 'no-cors'})
                    .then(function(res) {
                        return res.json();
                    })
                    .then(function(data){
                       let nombre = document.getElementById("nombre");
                       nombre.innerHTML = data.nombre
                       let descrip = document.getElementById("descripcion");
                       descrip.innerHTML = data.descripcion;
                       let color = document.getElementById("colorr");
                       color.innerHTML = data.color;
                       let lib = document.getElementById("libror");
                       lib.innerHTML = data.libro;
                       let music = document.getElementById("musicar");
                       music.innerHTML = data.musica
                       let vg = document.getElementById("videojuegosr");
                       vg.innerHTML = data.video_juego;
                       let lengua = document.getElementById("lenguajesr");
                       lengua.innerHTML = "<strong>" + data.lenguajes + "</strong>";
                       let mail = document.getElementById("mail");
                       mail.innerHTML = mail.innerHTML.replace("[email]", "<a id='enlace'>"+data.email+"</a>");
                       let enlace = document.getElementById("enlace");
                       enlace.setAttribute("href", "mailto:"+data.email)
                    })
                let imagen = document.getElementById("fotoPerfil");
                let src = element.imagen;
                imagen.setAttribute("src", "./reto5/"+src);
                }

        }
        )
    }else if(urlObject.searchParams.get("CI")){
        var perfil = urlObject.searchParams.get("CI");
        listson.forEach(element => {
            if (element.ci == perfil){
                fetch("http://127.0.0.1:5500/reto5/"+perfil+"/perfil.json",{method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json'}), 
mode: 'no-cors'})
                    .then(function(res) {
                        return res.json();
                    })
                    .then(function(data){
                       let nombre = document.getElementById("nombre");
                       nombre.innerHTML = data.nombre
                       let descrip = document.getElementById("descripcion");
                       descrip.innerHTML = data.descripcion;
                       let color = document.getElementById("colorr");
                       color.innerHTML = data.color;
                       let lib = document.getElementById("libror");
                       lib.innerHTML = data.libro;
                       let music = document.getElementById("musicar");
                       music.innerHTML = data.musica
                       let vg = document.getElementById("videojuegosr");
                       vg.innerHTML = data.video_juego;
                       let lengua = document.getElementById("lenguajesr");
                       lengua.innerHTML = "<strong>" + data.lenguajes + "</strong>";
                       let mail = document.getElementById("mail");
                       mail.innerHTML = mail.innerHTML.replace("[email]", "<a id='enlace'>"+data.email+"</a>");
                       let enlace = document.getElementById("enlace");
                       enlace.setAttribute("href", "mailto:"+data.email)
                    })
                let imagen = document.getElementById("fotoPerfil");
                let src = element.imagen;
                imagen.setAttribute("src", "./reto5/"+src);
                }

        }
        )
    }else{
        fetch("http://127.0.0.1:5500/reto5/27344078/perfil.json",{method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json'}), 
mode: 'no-cors'})
                    .then(function(res) {
                        return res.json();
                    })
                    .then(function(data){
                       let nombre = document.getElementById("nombre");
                       nombre.innerHTML = data.nombre
                       let descrip = document.getElementById("descripcion");
                       descrip.innerHTML = data.descripcion;
                       let color = document.getElementById("colorr");
                       color.innerHTML = data.color;
                       let lib = document.getElementById("libror");
                       lib.innerHTML = data.libro;
                       let music = document.getElementById("musicar");
                       music.innerHTML = data.musica
                       let vg = document.getElementById("videojuegosr");
                       vg.innerHTML = data.video_juego;
                       let lengua = document.getElementById("lenguajesr");
                       lengua.innerHTML = "<strong>" + data.lenguajes + "</strong>";
                       let mail = document.getElementById("mail");
                       mail.innerHTML = mail.innerHTML.replace("[email]", "<a id='enlace'>"+data.email+"</a>");
                       let enlace = document.getElementById("enlace");
                       enlace.setAttribute("href", "mailto:"+data.email)
                    })
                let imagen = document.getElementById("fotoPerfil");
                imagen.setAttribute("src", "./reto5/27344078/CEDULAGrande.jpg");
    }
        
    
}
cargarPerfil();

function busqueda(){
    var padre = document.getElementsByClassName("index")[0];
    if(document.getElementById("borrame")){
        var referencia = document.getElementById("borrame");
        padre.removeChild(referencia);
    }
       
    
    

    var x =  document.getElementById("nombre").value;
    var ele2 = x.toUpperCase();
    const arrEstudiantes = document.getElementsByClassName("estudiante");
    var contador = 0
    var limite = arrEstudiantes.length;
    Array.from(arrEstudiantes).forEach( estudiante => {
        var str = estudiante.textContent;
        var ele1 = str.toUpperCase();
        var palabra = removeAccents(ele1);
        if(palabra.includes(ele2) == false){
            estudiante.style.display = "none";
            contador++;
        }else{
            estudiante.style.display = "flex";
        }
    }
    )
    if(contador === limite){
    
        const urlObject = new URL(location.href);
        var comprueba = urlObject.searchParams.get("L");
        var mensaje;
        var contenido;
        var senal = document.createElement("h2");
        if( comprueba == "EN"){
            fetch("http://127.0.0.1:5500/reto5/conf/configEN.json",{method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json'}), 
mode: 'no-cors'})
                    .then(function(res) {
                        return res.json();
                    })
                    .then(function(data){
                       mensaje = data.busqueda;
                       mensaje = mensaje.replace("[query]", x);
                       contenido = document.createTextNode(mensaje);
                       senal.appendChild(contenido);
                       senal.setAttribute("style", "color: rgb(41, 200, 199)")
                       senal.setAttribute("id", "borrame")
                       document.body.insertBefore(senal, document.getElementById("existencia"));
                    })
        } else if (comprueba == "PT"){
            fetch("http://127.0.0.1:5500/reto5/conf/configPT.json",{method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json'}), 
mode: 'no-cors'})
                    .then(function(res) {
                        return res.json();
                    })
                    .then(function(data){
                       mensaje = data.busqueda;
                       mensaje = mensaje.replace("[query]", x);
                       contenido = document.createTextNode(mensaje);
                       senal.appendChild(contenido);
                       senal.setAttribute("style", "color: rgb(41, 200, 199)")
                       senal.setAttribute("id", "borrame")
                       document.body.insertBefore(senal, document.getElementById("existencia"));
                    })
        }else {
            fetch("http://127.0.0.1:5500/reto5/conf/configES.json",{method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json'}), 
mode: 'no-cors'})
                    .then(function(res) {
                        return res.json();
                    })
                    .then(function(data){
                       mensaje = data.busqueda;
                       mensaje = mensaje.replace("[query]", x);
                       contenido = document.createTextNode(mensaje);
                       senal.appendChild(contenido);
                       senal.setAttribute("style", "color: rgb(41, 200, 199)")
                       senal.setAttribute("id", "borrame")
                       document.body.insertBefore(senal, document.getElementById("existencia"));
                    })
        }
        
        /*var senal = document.createElement("h2");
        var mensaje = "No hay alumnos que tengan en su nombre: "
         contenido = element.nombre;
        var nombre = document.createTextNode(contenido)
        var fuente = element.ci;
        var nomfuente = element.imagen;
        ima.setAttribute("src", "./reto5/"+nomfuente);
        lis.appendChild(ima);
        lis.appendChild(nombre);
        lis.setAttribute("class", "estudiante");
        document.getElementById("estudiantes").appendChild(lis);
    }); */
    }
}
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 
