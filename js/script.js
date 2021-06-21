/* let num7 = $("#digito7");
num7.on("click",function(){
    console.log("clicado");
});
 */
/* 
let variavelLocal = $(".botao-calculadora").val();
variavelLocal.on("click",function(){
    console.log(variavelLocal);
}); */

$('button').click(function(){
    var valor = $(this).val();
    var nome = $(this).attr('name');
    console.log(valor+nome);
  });