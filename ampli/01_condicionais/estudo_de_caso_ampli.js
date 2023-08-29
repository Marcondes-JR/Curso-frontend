var hora = 9
var minutos = 15
var total_entrevistas = 0

var saida = 17

//horas
for (i = hora; i < saida; i++) {

  if ((i == 12) || (i == 13)) {
    continue
  }

  //minutos
  for (j = 0; j < 60; j = j + minutos) {
    total_entrevistas++;
    if (j == 0) {
      console.log(`Entrevista #${total_entrevistas} => ${i}:${j}0`)
    } else {
      console.log(`Entrevista #${total_entrevistas} => ${i}:${j}`)

    }
  }

}

function keyEvent (event){
  var key = event.keyCode;
  if (key == 105) {
    alert("Voce apertou a tecla 9")
  }
}