import analyzer from './analyzer.js';

// primero paso traer todos los li
const liTodos = document.querySelectorAll("li")
console.log(liTodos)

//decima prueba
const textarea = document.querySelector('textarea[name="user input"]');
const liPalabras = liTodos[0];

textarea.addEventListener('input', () => {
  const textToAnalyze = textarea.value;
  console.log(textToAnalyze.length, "textoOriginal")
  const numeroPalabras = analyzer.getWordCount(textToAnalyze);
  liPalabras.innerHTML = `Palabras: ${numeroPalabras}`;
});

const liCaracteres = liTodos[1];

textarea.addEventListener('input', () => {
  const textToAnalyze = textarea.value;
  const numeroCaracteres = analyzer.getCharacterCount(textToAnalyze);
  liCaracteres.innerHTML = `Caracteres: ${numeroCaracteres}`;
});

const liCaracteresSinEspacio = liTodos[2];
console.log(liCaracteresSinEspacio)

textarea.addEventListener('input', () => {
  const textToAnalyze = textarea.value;
  const numeroCaracteresSinEspacio = analyzer.getCharacterCountExcludingSpaces(textToAnalyze);
  liCaracteresSinEspacio.innerHTML = `Caracteres sin espacio: ${numeroCaracteresSinEspacio}`
});

const liNumeros = liTodos[3];

textarea.addEventListener('input', () => {
  const textToAnalyze = textarea.value;
  const numeros = analyzer.getNumberCount(textToAnalyze);
  liNumeros.innerHTML = `Numeros: ${numeros}`
});

const liSumaNumeros = liTodos[4];

textarea.addEventListener('input', () => {
  const textToAnalyze = textarea.value;
  const sumaNumeros = analyzer.getNumberSum(textToAnalyze);
  liSumaNumeros.innerHTML = `Suma de numeros: ${sumaNumeros}`
});

const liLongitud = liTodos[5];

textarea.addEventListener('input', () => {
  const textToAnalyze = textarea.value;
  const longitud = analyzer.getAverageWordLength(textToAnalyze);
  liLongitud.innerHTML = `Longitud promedio: ${longitud}`
});

const botonLimpiar = document.getElementById('reset-button');
//limpio todo el contenido de un textarea
botonLimpiar.addEventListener("click", () => {
  textarea.value = '';
  //remplazo los elementos de un li por 0 esto al hacer click en el boton

  liTodos.forEach(li => {
    li.innerHTML = li.innerHTML.replace(/\d+/, '0');
    li.innerHTML = li.innerHTML.replace(/[0-9]*\.[0-9]*/g, '0');
  });
});