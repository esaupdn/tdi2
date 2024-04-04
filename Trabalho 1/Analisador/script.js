
let num = document.getElementById('analisador')
let res = document.getElementById('res')
let lista = document.getElementById('lista')
let valores = []
function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (isnumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado `
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
function analisar() {

    if (valores.length == 0) {
        alert('adicione valores antes de  analisar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados </p>`
        res.innerHTML += `<p>O maior número é ${maior} </p>`
        res.innerHTML += `<p>O menor número é ${menor} </p>`
        res.innerHTML += `<p>A soma é ${soma} </p>`
        res.innerHTML += `<p>A media é ${media}</p>`
    }

}