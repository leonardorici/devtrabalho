class CartelaClass {

    constructor() {
        this.marcados = new Set()
        this.gerarCartela()
    }

    toggleNumero(numero) {
        if (this.marcados.has(numero)) {
            this.marcados.delete(numero)            
        } else {
            this.marcados.add(numero)
        }
        console.log(this.marcados)
    }

    toggle(coluna, linha) {
        var casa = coluna + linha
        console.log(" casa " + casa)
        var element = document.getElementById(casa)
        element.classList.toggle("marcado")
        var numero = element.innerHTML.trim()
        console.log("numero = " + numero)
        this.toggleNumero(numero)
    }

    gerarNumeroIntervalo(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    

    gerarCartela(linha) {

        

        for(linha=1;linha<=5;linha++){
        
            var b = this.gerarNumeroIntervalo(1, 15)
            console.log("b = " + b)
            var element = document.getElementById("b"+linha)
            element.innerHTML = b 
        
            var i = this.gerarNumeroIntervalo(16, 30)
            console.log("i = " + i)
            var element = document.getElementById("i"+linha)
            element.innerHTML = i
        
            if(linha!=3){
                var n = this.gerarNumeroIntervalo(31, 45)
                console.log("n = " + n)
                var element = document.getElementById("n"+linha)
                element.innerHTML = n
            }    
        
            var g = this.gerarNumeroIntervalo(46, 60)
            console.log("g = " + g)
            var element = document.getElementById("g"+linha)
            element.innerHTML = g
        
            var o = this.gerarNumeroIntervalo(61, 75)
            console.log("o = " + o)
            var element = document.getElementById("o"+linha)
            element.innerHTML = o
        }
    }
    // Exercício 4:
    // Gere um número aleatório para ser apresentado na bola sorteada.
    // Lembre-se de gerar aleatoriamente o número e colocar a letra da coluna
    // correspondente conforme a indicação já conhecida:
    // B - de 1 à 15
    // I - de 16 à 30
    // N - de 31 à 45
    // G - de 46 à 60
    // O - de 61 à 75
    //
    // Utilize a experiência adquirida nos métodos gerarCartela e gerarNumeroIntervalo
    // para programar o método sortearNumero.
    // No cartela.html há um botão para chamar o método e verificar se o número e coluna
    // sorteados aparecem na bola sorteada.
    // Ao concluir vá para o exercício 5 no cartela.html na <div class="sorteados">.
    
    sortearNum(min, max) {

        return Math.floor(Math.random() * (max - min) + min) 
    }
    
    sortearNumero() {
        var sn = this.sortearNum(1,76)
        console.log("sn = " + sn)
        if(sn <= 15){
            var sc = "b";
            console.log("sc = " + sc)
        }else if(sn >15 && sn <=30){
            var sc = "i";
            console.log("sc = " + sc)
        }else if(sn >30 && sn <=45){
            var sc = "n";
            console.log("sc = " + sc)
        }else if(sn >45 && sn <=60){
            var sc = "g";
            console.log("sc = " + sc)
        }else if(sn >60 && sn <=75){
            var sc = "o";
            console.log("sc = " + sc)
        }
        
    }

    confereCartela(numMarcadosCartela, numSorteados) {
        let _intersection = new Set()
        for (let elem of numSorteados) {
            if (numMarcadosCartela.has(elem)) {
                _intersection.add(elem)
            }
        }
        return _intersection
    }
}