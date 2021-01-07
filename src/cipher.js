const cipher = {
    cifrar: function (texto, offset) {
    let cipherA ="";
    let char ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    offset = (offset % 26 + 26) % 26;

    if(texto) {
    for(let i=0; i<texto.length; i++) {
        if(char.indexOf(texto[i])!=-1) {
        let located = ((char.indexOf(texto[i])+ offset)%26);
        cipherA += char[located];
        } else { 
        cipherA += texto[i];
        }
      }
    }
  return cipherA;  
},
  descifrar: function(texto, offset) {
    let cipherB ="";
    let char ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    offset = (offset % 26 - 26) % 26;

    if(texto) {
    for(let i=0; i<texto.length; i++) {
        if(char.indexOf(texto[i])!=-1) {
        let located = ((char.indexOf(texto[i])- offset)%26);
        cipherB += char[located];
        } else { 
        cipherB += texto[i];
        }
      }
    }
  return cipherB;
}
 
};
export default cipher;