# Profundizando en el tipo float
a = 3.0

# Constructor de tipo float -> puede recibir int y string
a = float(10)# Le pasamos un tipo entero(int)
a = float('10')
print(f'a: {a:.2f}')

# Notación exponencial (valores positivos o negativos)
a = 3e5# agregamos 5 ceros al 3
print(f'a: {a}')

a = 3e-5
print(f'a: {a:.5f}')


# Cualquier calculo que incluye un float, todo cambia a float

a = 4.0 + 5
print(a)
print(type(a))
