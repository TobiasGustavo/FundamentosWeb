let nome = document.querySelector('#nome')

function validarnNome(){
    if(nome.value.length < 3 ){
        alert('nome invalido')
    }
}
function enviar(){
    if(nomeOk == true){
        alert("enviado!")
    }else{
        alert('preencha o nome corretamente!')

    }
} 