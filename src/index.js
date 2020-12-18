//import cipher from './cipher.js';
//console.log(cipher);

//funcio de encriptado

document.getElementById("notehelp").addEventListener("keyup", function () {
    notehelp.value= notehelp.value.toUpperCase();
});
    document.getElementById("cifrar").addEventListener("click", function() {
      
            let texto = document.getElementById("notehelp").value;
            let offset = document.getElementById("nip").value;
            document.getElementById("cifrado").value = cifrar(texto, offset);
        });


function cifrar(texto, offset) {
    let cipher ="";
    let char ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    offset = (offset % 26 + 26) % 26;

    if(texto) {
    for(let i=0; i<texto.length; i++) {
        if(char.indexOf(texto[i])!=-1) {
        let located = ((char.indexOf(texto[i])+ offset)%26);
        cipher += char[located];
        } else { 
        cipher += texto[i];
        }
      }
    }
  return cipher;
}

document.getElementById("descifrar").addEventListener("click", function() {
      
    let texto = document.getElementById("answer").value.toUpperCase();
    let offset = document.getElementById("nip").value;
    document.getElementById("descifrado").value = descifrar(texto, offset);
  }
);

function descifrar(texto, offset) {
    let cipher ="";
    let char ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    offset = (offset % 26 - 26) % 26;

    if(texto) {
    for(let i=0; i<texto.length; i++) {
        if(char.indexOf(texto[i])!=-1) {
        let located = ((char.indexOf(texto[i])- offset)%26);
        cipher += char[located];
        } else { 
        cipher += texto[i];
        }
      }
    }
  return cipher;
}




