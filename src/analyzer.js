const analyzer = {
  getWordCount: (text) => {

    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    //crear una constante para que me arroje el resultado con trim()
    const stringTrim = text.trim();
    console.log(stringTrim.length, "textoTrim")

    //contare las palabras del texto usare .split() 

    const getWordCount = stringTrim.split(/\s+/).length;
    //(/\s+/) expresiones regulares, las expresiones regulares buscan patrones

    return getWordCount;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },


  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.

    //primero elimino todos los espacios y signos de text
    const character = text.replace(/[^\w]/g, "")

    // Retornar el recuento de caracteres sin espacios ni signos de puntuación
    return character.length;
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

    // Dividir el texto en palabras individuales usando espacios como delimitador
    const words = text.split(' ');
    console.log(words)

    // Calcular la suma de las longitudes de todas las palabras
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);

    // Calcular la longitud media dividiendo la suma por el número total de palabras
    const averageLength = totalLength / words.length;

    //parseFloat recibe una cadena creada con toFixed con solo dos decimales, y toda esta cadena la pasa a numeros flotantes 

    return parseFloat(averageLength.toFixed(2))    

  },

  getNumberCount: (text) => {
    //buscar otra forma que un numero decimal me lo cuente como uno entero y no cad uno por separado en el conteo final
    //"Esto no es un número: 41u0003jot" que no me lo tome como numero porque tiene letras
    const numberCoincidencia = /\b[0-9]+(?:\.[0-9]+)?\b/g;
    const numbers = text.match(numberCoincidencia);
    //devuelve un array con todo lo encontrado o coincidencia

    return numbers ? numbers.length : 0;
    //operador ternario if/else que nos regrese algo = ?
  },


  getNumberSum: (text) => {
    const numberRegex = /\b[0-9]+(?:\.[0-9]+)?\b/g;
    // la expresion regular es para encontrar los numeros en el texto 
    const numbers = text.match(numberRegex);
    //metodo match para encontrar todas las ocurrencias o coincidencias en el texto

    if (!numbers) {
      //si no se encuentran numeros en el textro retorna 0
      return 0;
    }

    const sum = numbers.reduce((accumulator, currentValue) => {
      return accumulator + parseFloat(currentValue);
    }, 0);

    return sum;
  },
};

export default analyzer;
