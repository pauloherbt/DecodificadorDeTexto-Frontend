
function criptografar(){
    let text= document.getElementsByClassName('input_text').item(0).value;
    let output= text.replace(/a/g,"ai");
    output= output.replace(/e/g,"enter");
    output= output.replace(/i/g,"imes");
    output= output.replace(/o/g,"ober");
    output= output.replace(/u/g,"ufat");
    document.getElementsByClassName('menu_texto_resultado').item(0).innerHTML=output;
    document.getElementsByClassName('menu_info').item(0).style.display="none";
    document.getElementsByClassName('botao_copiar').item(0).removeAttribute("hidden");

}
function descriptografar() {
    let text= document.getElementsByClassName('input_text').item(0).value;
    let output= text.replace(/ai/g,"a");
    output= output.replace(/enter/g,"e");
    output= output.replace(/imes/g,"i");
    output= output.replace(/ober/g,"o");
    output= output.replace(/ufat/g,"u");
    document.getElementsByClassName('menu_texto_resultado').item(0).innerHTML=output;
}