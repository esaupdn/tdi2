function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora <12 ){
        img.src = "./images/manha.png"
        document.body.style.background = '#ffe610e'
    } else if (hora >=12 && hora < 18){
        img.src = "./images/tarde.jpg"
        document.body.style.background = '#3399ff'
    }else if(hora>= 18 && hora <24){
        img.src = "./images/noite.jpg"
        document.body.style.background = '#00004d'
    }

}
