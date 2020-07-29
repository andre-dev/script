    let qntCurtidas = 0; //Mostra o total de fotos curtidas pelo programa.
    let qntJaCurtidas = 0; //Mostra quantidade de fotos que já estavam curtidas e o programa pulou.
    let antiBloqueador = 0; //Guarda quantas fotos foram curtidas na sequência para pular algumas e assim evitar o bloqueio pelo insta.

    var tempoVizualizacaoStories;
    

    function nA (){

        let aleatorio = Math.floor(Math.random() * (8000 - 4000) + 4000); // Captura e retorna um número aleatorio entre o máximo de 8000 e o mínimo de 3000 que sera utilizado para controlar o tempo de cada click.

        return aleatorio;
    
    }

    function nAParaAntiBloqueador (){

        let aleatorio = Math.floor(Math.random() * (3 - 1) + 1); // Pula de uma a três fotos sem curtir para evitar o bloqueio. Altere o valor 3 para quantidade máxima e o valor 1 para quantidade mínima.

        return aleatorio;
    
    }

    function nAParaQuantidadeDeFotosDoAntiBloqueador (){

        let aleatorio = Math.floor(Math.random() * (4 - 1) + 1); // Depois de uma a quatro fotos curtidas ele aciona o bloqueador.

        return aleatorio;
    
    }


    /*INÍCIO das funções que saem das curtidas e vão para visualização dos stories */

        /* Início Visualizador de Stories */
            var contadorStories = 0;

            function nAVisualizador (){

                let aleatorio = Math.floor(Math.random() * (3000 - 2000) + 2000); // Captura e retorna um número aleatorio entre o máximo de 3000 e o mínimo de 2000 que sera utilizado para controlar o tempo de cada click.

                return aleatorio;
            };

            /*function visualizaStorie(){

                let v = document.querySelectorAll('.coreSpriteRightChevron')[0];

                if(v != null && v != undefined){

                        v.click();

                        contadorStories = contadorStories + 1;
                    
                        console.log(contadorStories);

                        console.log("Passou por aqui !!!");

                }else{

                    pararVisualizaStorie();
                    console.log("Parou de visualizar !!!");

                }

            };*/

              const visualizaStorie = () =>{
                const callbackVisualizaStorie = (resolve,reject) =>{
                    setInterval(()=>{

                        if(v != null && v != undefined){

                            v.click();
    
                            contadorStories = contadorStories + 1;
                        
                            console.log(contadorStories);
    
                            console.log("Passou por aqui !!!");
    
                        }else{
    
                            pararVisualizaStorie();
                            console.log("Parou de visualizar !!!");
    
                        }

                    },20000);
                };
                
                return new Promise (callbackVisualizaStorie);
            };


            /*function pararVisualizaStorie() {
                clearInterval(tempoVizualizacaoStories);
              };*/


        /* Fim Visualizador de Stories */


        /* Início Funções Assincronas */

           /* const capturaBotaoFechar = () =>{
                const callbackBtnFechar = (resolve,reject) =>{
                    setTimeout(()=>{
                        let botaoFechar = document.querySelectorAll('.QBdPU')[5];
                        resolve(botaoFechar.click());
                    },5000);
                };
                
                return new Promise (callbackBtnFechar);
            };*/
            
            const capturaBotaoPaginaInicial = () =>{
                const callbackBtnPaginaInicial = (resolve,reject) =>{
                    setTimeout(()=>{
                        let botaoPaginaInicial = document.querySelectorAll('.s4Iyt')[0];
                        resolve(botaoPaginaInicial.click());
                    },3000);
                };
                
                return new Promise (callbackBtnPaginaInicial);
            };
            
            const capturaPrimeiroStorie = () =>{
                const callbackPrimeiroStorie = (resolve,reject) =>{
                    setTimeout(()=>{
                        let primeiroStorie = document.querySelectorAll('.CfWVH')[2];
                        resolve(primeiroStorie.click());
                    },5000);
                };
                
                return new Promise (callbackPrimeiroStorie);
            };
            
            const iniciaVisualizacaoStories = () =>{
                const callbackIniciaVisualizacaoStories = (resolve,reject) =>{
                    setTimeout(()=>{
                        resolve(visualizaStorie());
                    },7000);
                };
                
                return new Promise (callbackIniciaVisualizacaoStories);
            };

        /* Fim Funções Assincronas */

    /*FIM das funções que saem das curtidas e vão para cisualização dos stories */

    function x (){

        let palavraCurtir = document.querySelectorAll('.QBdPU')[1].innerHTML.substr(32,6);

        let curtirDeFato = document.querySelectorAll('.QBdPU')[1];

        let seguir = document.querySelector('._65Bje', '.coreSpriteRightPaginationArrow');

        let v = nAParaAntiBloqueador();

        let qntFotos = nAParaQuantidadeDeFotosDoAntiBloqueador();

        if(qntCurtidas >= 800){

            console.log("Atingiu o número de curtidas esperado e parou o programa!")

            pararPrograma();

            const runAsyncMethods = async () =>{
                try{
                    /*await capturaBotaoFechar();*/
                    await capturaBotaoPaginaInicial();
                    await capturaPrimeiroStorie();
                    await iniciaVisualizacaoStories();
                                }catch(error){
                                    console.error(error);
                                };
            };
            
            runAsyncMethods();
            /*tempoVizualizacaoStories = setInterval(visualizaStorie,nAVisualizador());*/
            /* Teste bhjkfhkjgfjaaa */

        }else{

        if(antiBloqueador > qntFotos){

            antiBloqueador = 0;

            let n = 0;

            while (n < v) {
              n++;
              setTimeout(seguir.click(),3000);
              console.log("Usou anti bloqueador para pular: " + v + " fotos. Com um intervalo de: " + qntFotos + " fotos curtidas.");
            }
            
        }else{

        if(palavraCurtir == "Curtir"){

            curtirDeFato.click();
            seguir.click();
            console.log("Curtiu!");
            qntCurtidas = qntCurtidas + 1;
            antiBloqueador = antiBloqueador + 1;
            console.log("Total de curtidas até agora: %c" + qntCurtidas, "color: green;");
        }else{

            seguir.click();
            console.log("Já estava curtida e passou para próxima foto.")
            qntJaCurtidas = qntJaCurtidas + 1;
            console.log("Total de fodos ignoradas por já estarem curtidas: %c" + qntJaCurtidas, "color: yellow;");

        }
      }
     }
    }

    let tempo = setInterval(x, nA());

    function pararPrograma() {
      clearInterval(tempo);
    }