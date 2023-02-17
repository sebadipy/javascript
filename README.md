# Simulador de CARGA DE NOTAS ALUMNOS -  CODER HOUSE

# INTEGRANTE: 
++ Sebastián Di Pierro

# PROYECTO: 
++ El proyecto “Simulador de Carga notas de alumnos” pretende cumplir con las instancias finales de la entrega del curso de JavaScript en CODERHOUSE. 
El mismo cuenta con una estructura de datos clara, basada en arrays y objetos, utiliza funciones, condicionales e iteradores, manipula los datos de la app y el DOM a partir de vistas de datos, por medio de la utilización de eventos atendiendo a la interacción del usuario y utilizando librerias SWEET ALERT y BootStrap.++

La aplicación cuenta con:
a) Asincronía y fetch para cargar datos estáticos o consumir una API en un servidor provisto por el docente y de manera local.
b) Objetos y Arrays. Métodos de Arrays.
c) Funciones y condicionales.
d) Generación del DOM de forma dinámica. Eventos.
e) Sintaxis avanzada (funciones flechas y operadores avanzados)
f) Librería de uso relevante para el proyecto (SWEET ALERT y BootStrap).
g) Manejo de promesas con fetch. 
h) Carga de datos desde un JSON local o desde una API externa.
i) Session Storage y Local Storage

El proyecto fue diseñado, programado y terminado de acuerdo a los lineamientos de CODER HOUSE.


# CASO DE USO

# CASO DE USO: Ingreso de datos del cursado del alumno por número de legajo.  

Actor Principal: Usuario del sistema	Actor Secundario: S/D
Objetivo: Realizar el registro de los datos de un alumno en el sistema propuesto.

Precondiciones:  Que el alumno no se encuentre registrado previamente en el sistema y que la carga de datos se encuentre ACTIVADA.
Éxito: Se muestra por pantalla el cálculo del promedio de las notas de los paciales obtenidos de la materia ingresada, siendo igual o mayor a 7 punto aprobado.
Fracaso 1: que el alumno ya se encuentre registrado en el sistema.
Fracaso 2: que el sistema DESHABILITADO para el ingreso de datos.

Curso Normal

El CU comienza cuando se ACTIVA la carga de datos de registro desde la vista principal.

El sistema permite el ingreso del nuevo alumno a través de los campos de registro de datos, donde se toma como clave primaria el legajo del alumno.

Luego de ingresar los datos del cursado y las notas del parcial 1 y 2, se procede a calcular la nota final promedio a través del botón CALCULAR, siendo la nota mayor o igual a 7 aprobado.

Si el alumno ya se encuentra registrado en el sistema,  se le informá al usuario de carga al momento de calcular la nota final y no se almacenará.

El sitema contemplará como medida de seguridad el tiempo de carga de datos de 1 minuto, dando aviso a los 30 segundos durante el ingreso de los datos. 

Fin de CU.

Fecha Creación: 17/02/2023
