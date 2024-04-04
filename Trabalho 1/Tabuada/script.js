function multiplicar(){
    let num = document.getElementById('tabuada')
    let res = document.getElementById('res')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        res.innerHTML = ('ERRO!, digite um numero')
    }else{
        let n1 = Number(num.value)
        tab.innerHTML = " "
        for(let c = 1; c<= 10; c++){
            let item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    
    }
    }