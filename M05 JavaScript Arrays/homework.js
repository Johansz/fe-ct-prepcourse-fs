/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.shift();
}
devolverPrimerElemento([1, 2, 3, 4, 5, 6]);

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.pop();
}
devolverUltimoElemento([1, 2, 3, 4, 5, 6])

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}
obtenerLargoDelArray([1, 2, 3, 4, 5, 6]);


function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
    var MasUno = array.map((num)=> {return num + 1})
   return MasUno;
}
incrementarPorUno([1, 2, 3, 4, 5]);

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}
agregarItemAlFinalDelArray([1, 2, 3, 4, 5], 6)

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}
agregarItemAlComienzoDelArray([2, 3, 4, 5, 6], 1);

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
   // Tu código:
   var arrString = palabras.join(' ')
   return arrString;
}
dePalabrasAFrase(['Hola', 'Mi', 'Nombres', 'es', 'Yoiker']);

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var arr = array.includes(elemento);
   return arr;
}
arrayContiene([1, 2, 3, 4], 4);

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var resultado = 0;
   for(var i = 0; i < arrayOfNums.length; i++){
      resultado = resultado + arrayOfNums[i];
   }return resultado;
}
agregarNumeros([1, 2, 3, 4]);

function promedioResultadosTest(resultadosTest){
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var contador = 0;
  var resultado = 0;
  for(var i = 0; i < resultadosTest.length; i++){
   contador = contador + resultadosTest[i];
   resultado = contador / resultadosTest.length; 
  }return resultado;
}
promedioResultadosTest([4, 6, 8, 2,]);

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
  return Math.max(...arrayOfNums);
}
numeroMasGrande([5, 8, 12, 31]);

function multiplicarArgumentos(){
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length <= 0){
      return 0;
   }else{
      var contador = 1;
      for(var i = 0; i < arguments.length; i++){
         contador = contador * arguments[i];
      } return contador;
   }
}
multiplicarArgumentos();

function cuentoElementos(array) {   
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   if( array.length > 17){
      return array.length;
   }
}
cuentoElementos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   let DiaLaboral = [2, 3, 4, 5, 6];
   let FinesDeSemana = [7, 1];
   for(var i = 0; i < 7; i++){
      if(DiaLaboral[i] === numeroDeDia){
         return 'Es dia laboral';
      }else if(FinesDeSemana[i] === numeroDeDia){
         return 'Es fin de semana';
      }
   }
}
diaDeLaSemana(7);

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numStr = num.toString();
   if(numStr.charAt(0) === '9'){
      return true;
   } else{ return false};
}
empiezaConNueve(19);

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
      for(var i = 0; i < array.length - 1; i++){
         if(array[i] !== array[i + 1]){
            return false;
         }
      }
      return true; // Si el bucle termina sin encontrar elementos diferentes, todos son iguales.
   
   }
todosIguales([5, 5, 5, 5, 5]);

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var ArrayMonths = [];
   for(var i = 0; i < array.length; i++){
      if(array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre'){
         ArrayMonths.push(array[i]);
      }
      if(ArrayMonths.length === 3){
         return ArrayMonths;
      }
   }
    return 'No se encontraron los meses pedidos';
}
mesesDelAño(['Abril', 'Octubre', 'Julio','Mayo', 'Septiembre', 'Marzo', 'Agosto', 'Junio', 'Febrero', 'Noviembre', 'Marzo']);

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
