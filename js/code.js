var vg = document.getElementById("villa");
var papel = vg.getContext("2d");
document.addEventListener("keydown", moverCerdo);

var fondo = {
    url:"img/tile.png",
    cargaOK: false
};

var vaca = {
    url: "img/vaca.png",
    cargaOK: false
};

var cerdo = {
    url: "img/cerdo.png",
    cargaOK: false,
    x: 420,
    y: 420
};


var xVacas = new Array();
var yVacas = new Array();


//utilizaria 'new Image()' pero no funciona en C9
fondo.img = document.createElement("img");
fondo.img.src = fondo.url;
fondo.img.addEventListener("load", cargarFondo);

function cargarFondo(){
    fondo.cargaOK = true;
    mantener();
}


vaca.img = document.createElement("img");
vaca.img.src = vaca.url;
vaca.img.addEventListener("load", cargarVacas);

function cargarVacas(){
    vaca.cargaOK = true;
    mantener();
}

cerdo.img = document.createElement("img");
cerdo.img.src = cerdo.url;
cerdo.img.addEventListener("load", cargarCerdos);

function cargarCerdos(){
    cerdo.cargaOK = true;
    dibujo();
}

// var pollo = document.createElement("img");
// pollo.src = "img/pollo.png";
// pollo.addEventListener("load", cargarPollos);

function mantener(){
    
    if (vaca.cargaOK){
        var cantidad = random(5, 25);
        for (var v = 0; v < cantidad; v++){
            var x = random(0, 7);
            var y = random(0, 7);
            var x = x * 60;
            var y = y * 60;
            xVacas[v] = x;
            yVacas[v] = y;
        }
    }
    dibujo();
}

function dibujo(){
    if(fondo.cargaOK){
        papel.drawImage(fondo.img, 0, 0);
    }
    if(vaca.cargaOK){
        
        for (var v = 0; v < 25; v++){
            papel.drawImage(vaca.img, xVacas[v], yVacas[v]);
        }
    }
    if(cerdo.cargaOK){
        papel.drawImage(cerdo.img, cerdo.x, cerdo.y);
    }    
}

function moverCerdo(w){
    var movimiento = 40;
    
    var teclas = {
        LEFT : 37,
        UP : 38,
        RIGHT : 39,
        DOWN : 40
    };
    
    switch (w.keyCode) {
        case teclas.UP:
            
            cerdo.y = cerdo.y - movimiento;
            
            dibujo(cerdo.x, cerdo.y);

            break;
        case teclas.DOWN:
            
            cerdo.y = cerdo.y + movimiento;
            
            dibujo(cerdo.x, cerdo.y);

            break;
        case teclas.LEFT:
            
            cerdo.x = cerdo.x - movimiento;
            
            dibujo(cerdo.x, cerdo.y);

            break;
        case teclas.RIGHT:
            
            cerdo.x = cerdo.x + movimiento;
            
            dibujo(cerdo.x, cerdo.y);

            break;
    }
}


// Funcion de numeros aleatorios

function random(min, max) {
    var random = Math.random();
    return Math.floor(random * (max - min + 1)) + min;
}
    
    
// Lista de Numeros Aleatorios
    
// for (var i=0; i<10; i++){
//     var z = getRandomInt(10,20);
//     document.write(z + ", ");
// }