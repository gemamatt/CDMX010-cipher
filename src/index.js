import cipher from './cipher.js';

//funcion de encriptado

document.getElementById("notehelp").addEventListener("keyup", function () {
    // eslint-disable-next-line no-undef
    notehelp.value= notehelp.value.toUpperCase();
});
    document.getElementById("cifrar").addEventListener("click", function() {
      
            let texto = document.getElementById("notehelp").value;
            let offset = document.getElementById("nip").value;
            const resultado = cipher.cifrar(texto, offset);
            let cifrado = document.getElementById("cifrado");
            cifrado.innerHTML= resultado;
        });


document.getElementById("descifrar").addEventListener("click", function() {
      
    let texto = document.getElementById("answer").value.toUpperCase();
    let offset = document.getElementById("nip").value;
    const resultado = cipher.descifrar(texto, offset);
    let descifrado =document.getElementById("descifrado");
    descifrado.innerHTML = resultado;
  }
);