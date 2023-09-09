# Bool contiene los valores de True y False
# Los tipo numéricos ,es dalse para el 0(cero), true para los demás valores

valor = 0
resultado = bool(valor)
print(f'valor: {valor}, resultado: {resultado}')

valor = 15
resultado = bool(valor)
print(f'valor: {valor}, resultado: {resultado}')

# Tipo String -> False ''cadena vacía, True demás valores.
valor = ''
resultado = bool(valor)
print(f'valor: {valor}, resultado: {resultado}')

valor = 'hola'
resultado = bool(valor)
print(f'valor: {valor}, resultado: {resultado}')

# Tipo colecciones -> False para colecciones vacias,
# Tipo colecciones -> True para todas las demás.
# Lista
valor = []
resultado = bool(valor)
print(f'valor de una lista vacia: {valor}, resultado: {resultado}')

valor = [2, 3, 4]
resultado = bool(valor)
print(f'valor de una lista con elementos: {valor}, resultado: {resultado}')

# Tupla
valor = ()
resultado = bool(valor)
print(f'valor de una tupla vacía: {valor}, resultado: {resultado}')

valor = (5,)
resultado = bool(valor)
print(f'valor de una tupla con elementos: {valor}, resultado: {resultado}')

# Diccionario
valor = {}
resultado = bool(valor)
print(f'valor de un diccionario vacío: {valor}, resultado: {resultado}')


valor = {'Nombre' : 'Juan', 'Apellido' : 'Perez'}
resultado = bool(valor)
print(f'valor de un diccionario vacío: {valor}, resultado: {resultado}')


# Sentencias de control con bool
if '':
    print('Regresa verdadero')
else:
    print('Regresa falso')    

# Ciclos
variable = 0
while variable:
    print('Regresa verdadero')
    break
else:
    print('Regresa falso')    
