# Memory Match Game

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Preámbulo

El juego [_Memory Match_](https://en.wikipedia.org/wiki/Concentration_(card_game)),
también conocido como _Concentration_, _Match Match_, _Match Up_, _Memory_,
entre otros, es un juego de cartas en el que todas las cartas se ponen cara
abajo sobre una superficie y se le dan la vuelta a dos cartas en cada turno. El
objetivo del juego es destapar parejas de cartas que coincidan.

## 2. Resumen del proyecto

En este proyecto se construyo un juego de memorama con tematica de diseño web que 
permite visualizar el contenido de las cartas  durante 10 segundos y luego 
## 3. Objetivos de aprendizaje


### HTML

- [ ] **Uso de HTML semántico**

### CSS

- [ ] **Uso de selectores de CSS**


- [ ] **Modelo de caja (box model): borde, margen, padding**

 

- [ ] **Uso de flexbox en CSS**

 

### Web APIs

- [ ] **Uso de selectores del DOM**

 

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

 

- [ ] **Manipulación dinámica del DOM**

### JavaScript

- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [ ] **Arrays (arreglos)**

 

- [ ] **Objetos (key, value)**

 

- [ ] **Variables (declaración, asignación, ámbito)**

 

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

 



- [ ] **Funciones (params, args, return)**

 

- [ ] **Pruebas unitarias (unit tests)**

  

- [ ] **Módulos de ECMAScript (ES Modules)**

 
- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

 


### user-centricity

- [ ] **Diseñar un producto o servicio poniendo a la usuaria en el centro**

### product-design

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] **Seguir los principios básicos de diseño visual**


### Historias de usuario

Una vez que entiendas las necesidades de tus usuarios, escribe las [Historias
de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que el usuario necesita hacer/ver. Las **Historias de Usuario** deben
ser el resultado de tu proceso de investigación o _research_ de tus usuarios.

Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

En la medida de lo posible, termina una historia de usuario antes de pasar
a la siguiente (Cumple con Definición de Terminado + Criterios de Aceptación).

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad
 Realize sketch del flujo de la pagina en papel


![prototipo](./src/img/img_20220425_110559236(boceto).jpg)

#### Prototipo de alta fidelidad
Realize prototipade de alta fidelidad en Figma e inclui un flujo 
sencillo de la pagina y su funcionamiento.
![prototipo](./src/img/figmaMM)

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para trabajar. Además, tu
diseño debe seguir los fundamentos de _visual design_.



### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
Tu tiempo de hacking es escaso, así que deberás priorizar

Como mínimo, tu implementación debe:

1. Dado un set de cartas, barajar las cartas y mostrarlas en la interfaz.
2. Permitir al usuario _destapar_ las cartas de 2 en 2.
3. Dejar destapadas las cartas que coincidan al destaparlas.
4. Indicar al usuario que ganó cuando haya destapado todas las cartas.
5. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
6. Que la interfaz siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto incluye
[pruebas unitarias (_unit tests_) de un componente como ejemplo](./src/components/App.spec.js).
A medida que vayas agregando componentes tendrás que ir agregando pruebas para
mantener buena _cobertura_.

Tus _pruebas unitarias_ deben tener una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) de tus componentes.



## 7. Consideraciones técnicas


### `src/index.html`


### `src/main.js`


### `src/components/App.js`


### `src/components/App.spec.js`


### `src/data`

## 8. Pistas, tips y lecturas complementarias

### Primeros pasos

Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
 personas que buscan ejercitar su memoria de forma divertida,facil y desde cualquier lugar
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
 tiene una aplicacion terapeutica al permitir ejercisios de memoria rapidos y que se pueden reproducir indefinidamente
* ¿Cuáles son los componentes principales de la interfaz y por qué?
1 Lo pricipal son las tarjetas
2 un instructivo

* ¿Cuándo utilizan o utilizarían el producto?
la pagina debe poder desplegarse en una amplia gama de dispositivos,
permitir que el usuario seleccione  y voltee las tarjetas (dos por turno) y 
que las tarjetas en caso de que sean iguales se queden visibles durante toda la partida 


## 9. Checklist

* [ ] Usa VanillaJS.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra cartas _barajadas_ correctamente.
* [ ] UI: Permite al usuario _destapar_ las cartas de 2 en 2.
* [ ] UI: Deja destapadas las cartas que coincidan al destaparlas.
* [ ] UI: Indica al usuario que ganó cuando sea relevante.
* [ ] UI: Es _responsive_.
* [ ] UI: La interfaz sigue los fundamentos de _visual design_.
