class Jogo{
 constructor(){

 }

 obterEstado(){
var estadoJogoRef = bancoDeDados.ref('estadoDeJogo');
estadoJogoRef.on('value', function(data){
    estadoJogo = data.val();
})
 }
 atualizarEstado(estado){
bancoDeDados.ref('/').update({
    estadoDeJogo : estado
})
}

}