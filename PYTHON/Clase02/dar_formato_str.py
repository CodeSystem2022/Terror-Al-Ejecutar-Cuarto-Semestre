
# dar forma a un string

nombre = 'Ariel'
edad = 28
# si presentamos mas variables es necesario el parentesis, una sola no es necesario
# %s apunta a string | %d apunta a decimal
# por defecto se orienta en el mismo sentido en que se le da el orden, es decir apareceran en el oreden que esten las
# variables presentadas a continuacion del mensaje
# si segun el orden, ponemos un %d y la variable que esta ubicada para ese nombre es un string, habra un error
mensaje_con_formato = 'Mi nombre es %s y tengo %d años'%(nombre, edad)
print(mensaje_con_formato)