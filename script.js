function verificar(){
    var res = window.document.querySelector('div#res')
        var dinheiro = window.document.getElementById('txtdinheiro').value 
        var debito = window.document.getElementById('txtdebito').value 
        var credito = window.document.getElementById('txtcredito').value 
        var alimentacao = window.document.getElementById('txtalimen').value 
        var pix = window.document.getElementById('txtpix').value 
    
        var soma = (parseInt(debito)+ parseInt(dinheiro)+ parseInt(credito)+ parseInt(alimentacao)+ parseInt(pix))
    var lucroDodia = (40*soma)/100
    
        
    
        res.innerHTML = `o total das vendas é ${soma} o lucro liquido é ${lucroDodia}`
        
    }
    function verificarRecarga() {
        var resre = window.document.querySelector('div#resre')
        var recarga = window.document.getElementById('txtrecarga').value
        var somaRecarga = parseFloat(recarga)
    resre.innerHTML = `o valor da recarga é ${somaRecarga}`
    
    }
    
    
    
    function retiradas(){
        var retirada = window.document.querySelector('div#retirada')
        var retiradas = window.document.getElementById('txtretiradas').value
        var dinheiro = window.document.getElementById('txtdinheiro').value
        var recarga = window.document.getElementById('txtrecarga').value
        var somadr = parseFloat(dinheiro)+parseFloat(recarga)
        var valorEmcofre = somadr-retiradas
    
        retirada.innerHTML = `o valor em cofre é ${valorEmcofre}`
    
    }