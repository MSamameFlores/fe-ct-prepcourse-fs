/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

const { nuevoUsuario } = require("../M06 JavaScript Objetos/homework");

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   // var otro= [];
   // for (let prop in objeto){
   //    let otro1= [];
   //      otro1.push(prop),
   //      otro1.push(objeto[prop]);
   //      otro.push(otro1);
   //    } return otro;
   let nuevoarreglo= [];
   for (let key in objeto) {
      nuevoarreglo.push([key,objeto[key]]) 
      }; return nuevoarreglo;
   } 
   


function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
let objeto= {};
let nuevostring = string.split('');
nuevostring.forEach(element => {
   if(objeto.hasOwnProperty(element))
   objeto[element]+=1;
else objeto[element]=1;
}); return objeto;
    
}


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arreglomayuscula= [];
   var arreglominuscula= [];
   var array= string.split('');
   for (let i=0; i<array.length; i++){
   if(array[i]===array[i].toUpperCase()) {arreglomayuscula.push(array[i])}
   else {arreglominuscula.push(array[i])}
   } var nuevapalabra= arreglomayuscula.join('')+arreglominuscula.join('')
return nuevapalabra;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
var palabras= frase.split(' ');
var nuevo=[];
//['the','henry'.....]
 for(let i=0; i<palabras.length; i++){
   nuevo.push((palabras[i].split('')).reverse('').join(''))
 }return nuevo.join(' ')
 }
   

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   var nuevo= String(numero).split('');
   let a=1;
   for(let i=0; i<nuevo.length; i++){
      if(i>=(nuevo.length/2)) {break;}
      else if(nuevo[i]==nuevo[nuevo.length-a]) a+=1;
      else return  "No es capicua"
   } return "Es capicua"
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código: acfghbde

   let arreglo= string.split('');
   return arreglo.filter( element=> {return element!=='a'&& element!=='b'&& element!=='c'}).join('')
   
//    let nuevo= [];
//   for (letra of arreglo){
//    if(letra !== 'a' && letra !== 'b' && letra !== 'c')
//    {
//    nuevo.push(letra)
// }

//   } return nuevo.join('');

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a,b)=>{return a.length-b.length})
   

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevo=[];
   //return nuevo.sort((a,b)=>{return array1[a]===array2[b]})
      for(let a=0; a<array1.length; a++){
         for(let i=0; i<array2.length; i++){if(array1[a]===array2[i]) nuevo.push(array1[a])}
      }
    return nuevo;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
