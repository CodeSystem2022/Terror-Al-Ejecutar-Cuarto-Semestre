
# Tipo colecciones -> False para colecciones vacias.
#                  -> True para todas las demás.

# Lista
valor = []
resultado = bool(valor)
print(f'valor de una lista vacia: {valor}, Resultado {resultado}')

valor = [1,2,3]
resultado = bool(valor)
print(f'valor de una lista con elementos: {valor}, Resultado {resultado}')

# Tupla
valor = ()
resultado = bool(valor)
print(f'valor de una tupla vacia: {valor}, Resultado {resultado}')

valor = (5,)
resultado = bool(valor)
print(f'valor de una tupla con elementos: {valor}, Resultado {resultado}')

# Diccionario
valor = {}
resultado = bool(valor)
print(f'valor de un diccionario vacio: {valor}, Resultado {resultado}')

valor = {'Nombre':'Juan','Apellido':'Perez'}
resultado = bool(valor)
print(f'valor de un diccionario con elementos: {valor}, Resultado {resultado}')