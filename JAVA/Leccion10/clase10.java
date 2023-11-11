private void createUIComponents(){
    idTexto = new JTextField("");
    idTexto.setVisible(false);
    this.tablaModeloLibros = new DefaultTableModel(0, 5);
    String[] cabecera = {"Id", "Libro", "Autor", "Precio", "Existencias"};
    this.tablaModeloLibros.setColumnIdentifiers(cabecera);
    //Instanciar el objeto de JTable
    this.tablaLibros = new JTable(tablaMoeloLibros);
    listarLibros();
}