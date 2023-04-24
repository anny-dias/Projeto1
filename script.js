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
    msg.innerHTML = `<h2>Processando o resultado</h2>`

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

const usuarios =[
    {nome:"Anny",idade:17},
    {nome:"Victor",idade:18},
    {nome:"Luana",idade:19},
]

let msg = document.getElementById('msg1')

const nomeUsers = usuarios.length;

for(let i = 0; i <nomeUsers;i++){
    msg.innerHTML += `<p>${usuarios[i].nome} ${usuarios[i].idade}</p>`
}

var imagens =[
    'img/img1.png',
    'img/img2.png',
    'img/img3.png',
];

var Index = 0;
var time = 2000;

function slideShow(){
    document.getElementById('image').src=imagens[Index];
    Index++;
    if (Index == imagens.length) {Index = 0;}
        setTimeout("slideShow()", time);
}
slideShow();

