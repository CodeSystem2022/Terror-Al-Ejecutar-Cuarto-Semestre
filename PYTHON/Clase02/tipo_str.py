import math

# Profundizando en el tipo String
# Concatenacion automatica en Python

variable = 'Adios'
mensaje = 'Hola ''Mundo' + variable #podemos o no utilziara un + entre las str, no es necesario
#pero si es necesario si queremos concatenar con un str dentro de una variable
mensaje += 'Terminamos'
#print(mensaje)

#solicitar ayuda mediante el metodo help  con string

#Esta esta incluida dentro de python, para ayuda o documentacion, no se debe importar, viene inluida (es built-in /builtins)
#es decir que viene inlcuida dentro de los paquetes de py

help(str.capitalize()) #podemos pasarle una clase, un metodo, un modulo, un atributo, etc.
#tambien podemos llamar una funcion de una clase, y nos mostrara la explicacion de esa funcion
#sirve para cualquier tipo de dato en python
#tambien podemos usarlo para explicar clases importadas
help(math)


