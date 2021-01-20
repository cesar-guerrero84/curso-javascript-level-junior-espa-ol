//alert("si enlazo el archivo js") // el alert funciona para dar mensajes en la pagina enlazada en este caso lo usamos para dar un mensaje y confirmar que js esta enlazado al archivo html

// las variables son "recipientes" donde podemos almacenar datos por ejemplo

recipiente = "basura"; // aqui la variable tiene como nombre recipiente y su contenido es un texto que dice basura.

document.write(recipiente); // el document.write es una funcion que escribe algo en la pagina html en este caso estamos invocando la variable recipiente y escribira en pantalla el dato de la misma

// las variables pueden cambiar de aqui su nombre variable "varia" por ejemplo.

recipiente = " vacio"; // aqui vemos que la variable haora tiene un texto que dice vacio y se le agrega un espacio para que separe los datos de las variables que van cambiando.

document.write(recipiente);// aqui vemos que la variable invocada sigue siendo recipiente sin embargo el texto escrito sera vacio ya que la cambiamos.

// tipos de datos

string = "esto es un string"; // los strings son textos y se usan con comillas ya sean dobles o simples.
numero = 50;// los numeros o number son datos numericos y se escriben sin comillas.
booleano = true,false,0,1 // los booleanos son datos de 1 o 0 que es igual a verdadero o falso
undefined // este dato nos saldra cuando alguna variable exista pero no tenga ningun tipo de dato o valor por que no se ha definido.
null // este dato es literalmente vacio se usa para variables que aun no sabemos que datos se usaran y de momento lo dejamos vacio no vale nada
NaN // significa not at number (no es un numero) y saldra como un error cuando queremos hacer alguna funcion matematica imposible como por ejemplo multiplicar 25 con un string(texto) que dice juan

// el scope es el alcance de las variables dentro de un bloque de codigo por ejemplo la variable numero dentro de una condicional va ser la misma dentro de la condicional por fuera no existe a exepcion de var que es global

// las variables se pueden definir(crear la variable) inicializar(ingresar el dato de la variable) modificar(cambiar el dato de la variable) a lo largo del tiempo

// para declarar la variable hay 3 formas de declararla con var let y const

var numero = 15; // aqui declaramos una variable con var llamada numero con un dato numerico al ser var es una variable de alcance global.

let nombre = "nombre"; // aqui declaramos una variable con let por lo que solo servira dentro del bloque que se escribio como ya vimos en scope osea que a diferencia de var es una variable regional

const pi = 3.14; // la variable const es una variable que no se puede redefinir osea que siempre tendra el valor con el que se inicializo esta variable se usa para cuando tenemos datos que no van a cambiar tambien hay que tener en cuenta que esta variable se debe inicializar al instante en que se declara de lo contrario el programa tendra un error.

//multiples variables

// puedes crear multiples variables sinplemente separandolas con coma , por ejemplo

var num1 = 25,num2 = 30,num3 =10; //aqui creamos 3 variables distintas separadas con coma


