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
