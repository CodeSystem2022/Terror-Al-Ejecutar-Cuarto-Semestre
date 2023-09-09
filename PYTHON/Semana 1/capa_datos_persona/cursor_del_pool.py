from logger_base import log
from conexion import Conexion
class CursorDelPool:
    def __init__(self):
        self._conexion = None
        self._cursor = None


    def __enter__ (self):
        log.debug('Inicio del método with y __enter__')
        self._conexion = Conexion.obtenerConexion()
        self._cursor = self._conexion.cursor()
        return self._cursor
    
    def __exit__(self, tipo_exception, valor_exception, detalle_exception):
        log.debug(f'Se ejecuta el método exit.')
        if valor_exception:
            self._conexion.rollback()
            log.debug(f'ocurrió una excepción: {valor_exception}')
        else:
            self._conexion.commit()
            log.debug('commit de la transacción')
        self._cursor.close()
        Conexion.liberarConexion(self._conexion)



if __name__ == '__main__':
    with CursorDelPool() as cursor:
        log.debug('Dentrod el bloque with')
        cursor.execut('SELECT * FROM persona')
        log.debug(cursor.fetchall())