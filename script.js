
function criptografar(){
    let text= document.getElementsByClassName('input_text').item(0).value;
    if((/[a-z]/).test(text)){
        let output="";
        for(let i=0;i<text.length;i++){
            switch(ch = text[i]){
                case 'a':
                 output+="ai";
                 break;   
                case 'e':
                    output+='enter';
                    break;
                case 'i':
                    output+='imes';
                    break;
                case 'o':
                    output+='ober';
                    break;
                case 'u':
                    output+='ufat';
                    break;
                default:
                    output+=ch;
                    break;            
            }
        }
        document.getElementsByClassName('menu_texto_resultado').item(0).innerHTML=output;
        document.getElementsByClassName('menu_info').item(0).style.display="none";
        document.getElementsByClassName('botao_copiar').item(0).style.visibility= 'visible';
    }
}
function descriptografar() {
    let text= document.getElementsByClassName('input_text').item(0).value;
    if((/[a-z]/).test(text)){
        let output=verifcar(text);
        document.getElementsByClassName('menu_texto_resultado').item(0).innerHTML=output;
        document.getElementsByClassName('menu_info').item(0).style.display="none";
        document.getElementsByClassName('botao_copiar').item(0).style.visibility= 'visible';
    }
}
function verifcar(text){   
        output= text.replace(/ai/g,"a");
        output= output.replace(/enter/g,"e");
        output= output.replace(/imes/g,"i");
        output= output.replace(/ober/g,"o");
        output= output.replace(/ufat/g,"u");
        return output;
}
function limpar(){
    let text= document.getElementsByClassName('input_text').item(0).value;
    if(text===''){
        document.getElementsByClassName('menu_texto_resultado').item(0).innerHTML ='';
        document.getElementsByClassName('menu_info').item(0).style.display="block";
        document.getElementsByClassName('botao_copiar').item(0).style.visibility= 'hidden';
    }
}
function copyToClipBoard() {
    let text= document.getElementsByClassName('menu_texto_resultado').item(0).textContent;
    navigator.clipboard.writeText(text).then(function() {
        alert('Copiado para area de transferencia');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
  }