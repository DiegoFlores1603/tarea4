meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function mostrar() {
  for (i = 0; i < meses.length; i++) {
    var text = document.createTextNode(meses[i]+'\n');
    document.getElementById("c1").appendChild(text);
  }
  setTimeout(() => {
    // Eliminando todos los hijos de un elemento
    var ele = document.getElementById("c1");
    while (ele.firstChild) {
      ele.removeChild(ele.firstChild);
    }
  }, 4000);
}