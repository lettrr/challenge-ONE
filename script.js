const textArea = document.querySelector(".texto-area");
const mensagem = document.querySelector(".mensagem");



function btnEncriptar() {
     document.getElementById('img').style.display='none';
     document.getElementById('btn').style.paddingTop='500px';
     document.getElementById('texto-area').style.display='none';
     document.getElementById('msg-img').style.paddingTop='10px';
     document.getElementById('criptar').style.paddingTop='2%';
     const textoEncriptado = encriptar(textArea.value);
     mensagem.value = textoEncriptado;
     textArea = "";

     
}

function encriptar(stringDesencriptada) {
     let matrizCodigo = [
          ["e", "enter"],
          ["i", "imes"],
          ["a", "ai"],
          ["o", "ober"],
          ["u", "ufat"]
     ];
     stringDesencriptada = stringDesencriptada.toLowerCase();

     for (let i = 0; i < matrizCodigo.length; i++) {
          if (stringDesencriptada.includes(matrizCodigo[i][0])) {
               stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
          }
     }

     return stringDesencriptada;
}

function btnDesencriptar() {
     const textoDesencriptado = desencriptar(textArea.value);
     mensagem.value = textoDesencriptado;
     textArea = "";
}

function desencriptar(stringDesencriptada) {
     let matrizCodigo = [
          ["e", "enter"],
          ["i", "imes"],
          ["a", "ai"],
          ["o", "ober"],
          ["u", "ufat"]
     ];
     stringDesencriptada = stringDesencriptada.toLowerCase();

     for (let i = 0; i < matrizCodigo.length; i++) {
          if (stringDesencriptada.includes(matrizCodigo[i][1])) {
               stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
          }
     }

     return stringDesencriptada;
}

const copiar = document.querySelector(".btn-copiar");
const textAreaMensg = document.querySelector(".mensagem");

copiar.addEventListener('click', (e) => {
     navigator.clipboard.writeText(textAreaMensg.value);
});

