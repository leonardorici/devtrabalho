class CartelaClass {

    constructor() {
        this.marcados = new Set()
        this.gerarCartela()
        this.sorteados = new Set()
        this.sorteados['b']= new Set()
        this.sorteados['i']= new Set()
        this.sorteados['n']= new Set()
        this.sorteados['g']= new Set()
        this.sorteados['o']= new Set()

        this.gerados = []
        this.gerados['b']= new Set()
        this.gerados['i']= new Set()
        this.gerados['n']= new Set()
        this.gerados['g']= new Set()
        this.gerados['o']= new Set()
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

    gerarNumeroIntervalo(min, max, coluna) {
        // var verificador = '';
        // do{
        var gerado = Math.floor(Math.random() * (max - min) + min)
        //      if(! this.gerados[coluna].has(gerado)){
        //          this.gerados[coluna].add(gerado)
        //          verificador = 1
        //      }else{
        //          verificador = 0
        //      }
        //  }while(verificador = 0)
    
        return gerado;
    }

    

    gerarCartela(linha) {

        

        for(linha=1;linha<=5;linha++){
        
            var b = this.gerarNumeroIntervalo(1, 15, 'b')
            console.log("b = " + b)
            var element = document.getElementById("b"+linha)
            element.innerHTML = b 
        
            var i = this.gerarNumeroIntervalo(16, 30, 'i')
            console.log("i = " + i)
            var element = document.getElementById("i"+linha)
            element.innerHTML = i
        
            if(linha!=3){
                var n = this.gerarNumeroIntervalo(31, 45, 'n')
                console.log("n = " + n)
                var element = document.getElementById("n"+linha)
                element.innerHTML = n
            }    
        
            var g = this.gerarNumeroIntervalo(46, 60, 'g')
            console.log("g = " + g)
            var element = document.getElementById("g"+linha)
            element.innerHTML = g
        
            var o = this.gerarNumeroIntervalo(61, 75, 'o')
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
        var validador = 0;
        var x = 0;
        sorteado = new Set()
            var sorteado =  Math.floor(Math.random() * (max - min) + min)
                if(! this.sorteados.has(sorteado)){
                    this.sorteados.add(sorteado);
                }else {
                    validador = 0;
                }
        console.log(sorteado);
        return sorteado;
        
    }
        
    
    
    
    
    sortearNumero() {
    
            var sn = this.sortearNum(1,76)
            var sc = '';
            console.log("sn = " + sn)
            if(sn <= 15){
                sc = "B";
                console.log("sc = " + sc)
            }else if(sn >15 && sn <=30){
                sc = "I";
                console.log("sc = " + sc)
            }else if(sn >30 && sn <=45){
                sc = "N";
                console.log("sc = " + sc)
            }else if(sn >45 && sn <=60){
                sc = "G";
                console.log("sc = " + sc)
            }else if(sn >60 && sn <=75){
                sc = "O";
                console.log("sc = " + sc)
            }
            
            var element = document.getElementById("sc"+1)
            element.innerHTML = sc
            element = document.getElementById("sn"+1)
            element.innerHTML = sn
        
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