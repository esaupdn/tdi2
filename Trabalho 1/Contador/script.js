function contar(){

    let inicio = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res =document.getElementById('res');
    if (inicio.value ==='' || fim.value === '' || passo.value === ''){

        window.alert('ERRO! Preencha dos dados');

    } else{

   res.innerHTML = `  <br/>  `
   let i = Number(inicio.value)
   let f = Number(fim.value)
   let p =Number(passo.value)

   if(i == 0 || f == 0 || p == 0){
    window.alert('ERRO! Valores zero são considerados  VALOR 1')

    i = i !== 0 ? i : 1;
    f = f !== 0 ? f : 1;
    p = p !== 0 ? p : 1;
   }

    if(i < f){

        for(let contador = i; contador <=f ; contador += p){
        res.innerHTML += `<strong>  ${contador}  \u{1F44D} </strong/>` 
        } 
     
}   else{

        for(let contador = 1; contador >= f; contator -= p){
        res.innerHTML += `<strong>  ${contador}  \u{1F44D} </strong/>` 
        }
        } res.innerHTML += `\u{1F6A9}`
    }

}