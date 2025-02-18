// ex1

for (let contador = 1; contador <= 30; contador++) {
    console.log(contador)}

    //ex2
    
    for (let c = 30; c >= 1; c--) {
        console.log(c)}

        //ex3

        for(let cont = 1; cont <= 5; cont ++){
            let num = prompt("Digite 5 números;")
        if (num >=50) {
            console.log("Acima da média")
        }
        else {
     console.log("Abaixo da média")
    }}

    //ex4
    let numero = prompt("Digite um número")
    for(let mult = 1; mult <= 10; mult++){
        let resultado = mult * numero
        console.log(resultado)
    }

   
     //ex5
     let num = prompt("Escolha quantos patinhos vão passear:")
     for (let contad = num ; contad >= 1; contad--){
         subtracao = num -1
         console.log(contad,"patinhos foram passear Além das montanhas Para brincar A mamãe gritou: Quá, quá, quá, quá Mas só ",contad -1," patinhos voltaram de lá.")
         }
         
    //6
    for(let conta = 1 ; conta <=10 ; conta ++ ){
    let idad = prompt("Digite dez idades")
    if (idad  >= 18) {
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }}

    //7
    for (let voto = 1 ; voto <=5; voto ++){
        let v = prompt("Digite o seu voto")
        if (v == 1|| v ==2|| v==3|| v==4) {
            console.log("voto para os respectivos candidatos")
        } else if(v==5) {
                console.log("Voto nulo")
            }
         else if (v== 6 ) {
                console.log("Voto em branco")
            }
    }



