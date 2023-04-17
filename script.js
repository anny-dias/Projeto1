function validar(){
    let usuario = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value

    if(usuario ==""&& senha ==""){
        alert("PREENCHA TODOS OS CAMPOS")
    }else{
        alert("Acesso Permitido")
        window.open('menu.html')
    }
}

function calc(){
    let n1 = Number(prompt("Digite o primeiro valor:"))
    let n2 = Number(prompt("Digite o segundo valor:"))
    let op = Number(prompt(`DADOS INFORMADOS: ${n1} e ${n2} \n Escolha uma opção: \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir` ))
    let msg = document.getElementById('msg')
    msg.innerHTML = `<h2>Processando o resutado</h2>`

    switch(op){
        case 1:
            msg.innerHTML += `<p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>` 
            break;
        case 2:
            msg.innerHTML += `<p>${n1} - ${n2} = <strong>${n1-n2}</strong></p>` 
            break;
        case 3:
            msg.innerHTML += `<p>${n1} * ${n2} = <strong>${n1*n2}</strong></p>` 
            break;
        case 4:
            msg.innerHTML += `<p>${n1} / ${n2} = <strong>${n1/n2}</strong></p>` 
            break;
        case 5:
            msg.innerHTML += `<p> Opção Inválida</p>` 
            break;
    }
}