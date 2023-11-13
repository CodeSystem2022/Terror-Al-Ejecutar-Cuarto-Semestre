import math
from decimal import Decimal

# NAN (Not a number)
a = float('nan')
print(f'a: {a}')

# Modulo math
a = float('nan')
print(f'Es de tipo NaN(Not a number)?: {math.isnan(a)}')

# Modulo decimal
a = Decimal('nan')
print(f'Es de tipo NaN(Not a number)?: {math.isnan(a)}')

