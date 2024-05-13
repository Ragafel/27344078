async function obtenerDatos(){
    const response = await fetch("http://127.0.0.1:5500/reto5/conf/configES.json");
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
   nombre.value = json.nombre;
   let saludo = document.getElementById("saludo");
   saludo.innerHTML = json.saludo + ", Rafael";
//document.createElement
}
obtenerDatos();

/*function eve(){
    let nombre = document.getElementById("nombre");
   nombre.value = "";
}*/

async function estructuraPerfil(){
    const respuesta = await fetch("http://127.0.0.1:5500/reto5/conf/configES.json");
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
estructuraPerfil();

async function listarEstudiantes(){
    const listado = await fetch("http://127.0.0.1:5500/reto5/datos/index.json");
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
        document.getElementById("estudiantes").appendChild(lis);
    });
}
listarEstudiantes();

async function cargarPerfil(){
    const listado = await fetch("http://127.0.0.1:5500/reto5/datos/index.json");
    const listson = await listado.json();
    const urlObject = new URL(location.href);
    if(urlObject.searchParams.get("ci")){
        var perfil = urlObject.searchParams.get("ci");
        listson.forEach(element => {
            if (element.ci == perfil){
                fetch("http://127.0.0.1:5500/reto5/"+perfil+"/perfil.json")
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
    }
        
    
}
cargarPerfil();