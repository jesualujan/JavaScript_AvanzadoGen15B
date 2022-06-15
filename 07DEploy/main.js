console.log("Juego con canvas")
var canvas = document.getElementById("c")
var ctx = canvas.getContext("2d")


//variables
var interval 
var frames = 0
var obstaculos = []
//json de imagenes
var imagenes = {
    bg: "./images/bg.png",
    pajaro: "./images/flappy.png",
    logo:"./images/logo.png",
    obabajo:"./images/obstacle_bottom.png",
    obarriba:"./images/obstacle_top.png"
}


//hacemos funciones para renderizar todos los elementos del juego (CLASES)

function Tablero(){
    this.x=0
    this.y=0
    this.width = canvas.width
    this.height = canvas.height
    this.image = new Image()
    this.image2 = new Image()
    this.image2.src = imagenes.bg
    this.image.src = imagenes.bg
    this.draw = function(){
        this.x--
        if(this.x < -this.width)this.x=0
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        ctx.drawImage(this.image2,this.x+this.width,this.y,this.width,this.height)
        this.drawScore()

    }
    this.drawScore = function(){
        ctx.font = "bold 24 Avenir"
        ctx.fillText(Math.floor(frames/60),50,50)
    }




}
function Pajaro(){
    Tablero.call(this)
    this.x = 50
    this.y = 300
    this.width= 50
    this.height=50
    this.image = new Image()
    this.image.src= imagenes.pajaro
    this.draw = function(){
        this.limites()
        ctx.drawImage(this.image,this.x,this.y, this.width, this.height)
    }
    this.limites = function(){
        if(this.y+this.height > canvas.height -10){
            this.y = canvas.height -this.height}
            else if (this.y <10){
                this.y = 10

            }
            else this.y*=1.01
        }
        this.estaTocando = function(item){
            return (this.x < item.x+item.width) && (this.x+this.width>item.x)&&(this.y<item.y+item.height)&& (this.y+this.height>item.y)
        }
        this.estaSuelo = function(){
            return (this.y >canvas.height-this.height-10)
        }

    }
function Obstaculo(height,position){
    this.width=40
    this.height = height
    this.x = canvas.width+60
    this.y = position ==="top"?0:canvas.height-this.height
    this.image = new Image()
    this.image.src= position==="top" ?imagenes.obarriba : imagenes.obabajo
    this.draw = function(){
        this.x--
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)




    }



}







//Generamos instancias u objetos de las clases realizadas

var fondo = new Tablero()
var pajaro = new Pajaro()
var obstaculo = new Obstaculo()

// FUNCIONES PRINCIPALES

function start(){
    obstaculos =[]
    frames=0
    pajaro = new Pajaro()
    if(!interval){

        interval = setInterval(update,1000/60)
    }
    

}

function update(){
    frames++
    ctx.clearRect(0,0,canvas.width,canvas.height)

    fondo.draw()
    pajaro.draw()
    obstaculo.draw()
    dibujarObstaculos()
    checarColision()
}

function gameOver(){
    clearInterval(interval)
    interval = null
    ctx.font = "bold 80px Avenir"
    ctx.fillStyle = "red"
    ctx.fillText("Game over",150,200)
}

function dibujarInicio(){

    var img = new Image()
    img.src = imagenes.logo
    img.onload = function(){
        fondo.draw()
        ctx.drawImage(img,50,100,300,100)
        ctx.font= "bold 24px Avenir"
        //ctx.fillText=("Presiona la tecla Enter para iniciar el juego!!!")
    }



}
function dibujarObstaculos(){
    generarObstaculos()
    obstaculos.forEach(function(obst){
        obst.draw()
    })

}
function generarObstaculos(){
    if(frames%100 ===0){
        var height = Math.floor(Math.random()*300)
        obstaculos.push(new Obstaculo(height,"top"))
        obstaculos.push(new Obstaculo(canvas.height-height-80,"abajo"))

    }
}
function checarColision(){
    if (pajaro.estaSuelo()){
        gameOver()
    }
    for(var obs of obstaculos){
        if(pajaro.estaTocando(obs)){
            gameOver()
        }
    }
}

//Agregamos los listeners para los eventos del teclado

addEventListener("keyup",function(e){
    switch(e.keyCode){
        case 13:
            start()
        break
        default:
            return
    }

})
addEventListener("keyup",function(e){
    switch(e.keyCode){
        case 32:
            pajaro.y -=50
            return
        
        default:
            return
    }

})


dibujarInicio()





