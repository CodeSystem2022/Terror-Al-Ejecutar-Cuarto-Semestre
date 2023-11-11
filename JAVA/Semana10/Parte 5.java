 
            //Llenamos el objeto libro a actualizar
            int idLibro= Integer.parseInt(idTexto.getText());
            var nombreLibro = libroTexto.getText();
            var autor = autorTexto.getText();
            var precio = Double.parseDouble(precioTexto.getText());
            var existencias = Integer.parseInt(existenciasTexto.getText());
            var libro = new Libro(idLibro, nombreLibro, autor, precio, existencias);
            libroServicio.guardarLibro(libro);
            mostrarMensaje("Se modifico el libro...");
            limpiarFormulario();
            listarLibros();
        }
    }
