// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  Matriz = []
  for (var elemento in objeto) {
    var Fila = [elemento, objeto[elemento]]
    Matriz.push(Fila)
  }
  return Matriz 

  //Otra solucion
  // var ObjectToArray = Object.entries(objeto)
  // return ObjectToArray
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  Caracteres = {}

  //Esto genera un array con todas las letras del abecedario
  abecedario = []
  for (var i = 97; i <= 122 ; i++) {
    abecedario.push(String.fromCharCode(i));
  }

  abecedario.forEach(function(elemento){
   var conteo = 0
   for (var j=0 ; j < string.length ; j++) {
     if (elemento === string[j]){
       conteo++
       Caracteres[elemento] = conteo
    } 
  }
}) 
return Caracteres 
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aqui:

  var Mayus = ''
  var Minus = ''
  
  for (i = 0 ; i < s.length ; i++){
    if (s[i] === s[i].toUpperCase()){
      Mayus  += s[i];
    } else {
      Minus += s[i];
    }
  }
  return Mayus + Minus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
 var DarVueltaPalabras = str.split(' ').reverse().join(' ')

 var Espejo = DarVueltaPalabras.split('').reverse().join('')

 return Espejo
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
 var x = numero.toString().split('').reverse().join('')

 if (numero.toString() === x){
  return "Es capicua"
 } else return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadenaModificada = []; //array que despues voy a pasar a String

  var array = cadena.split(''); //paso la cadena a un arreglo de caracteres 
  
  for (var i = 0 ; i < array.length ; i++){
    if (array[i] !== 'a' && array[i] !== 'b' && array[i] !== 'c'){
      cadenaModificada.push(array[i]);
    }
  }
  
  return cadenaModificada.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a, b) {
    return a.length - b.length
  });
  return arr 
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var Interseccion = []

  arreglo1.forEach(function(elemento){
   for (var i = 0 ; i < arreglo2.length ; i++){
     if (elemento === arreglo2[i]){
      Interseccion.push(elemento);
     }
   }
  })
  return Interseccion
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

