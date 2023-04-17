function generarPDF() {
    // Obtener el elemento que se va a convertir en PDF
    var elemento = document.getElementById("tabla");
  
    // Usar html2canvas para crear una imagen de la tabla
    html2canvas(elemento).then(function(canvas) {
      // Convertir la imagen a un objeto PDF con jsPDF
      var doc = new jsPDF();
      doc.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 10, 180, 0);
      
      // Descargar el archivo PDF generado
      doc.save("tabla_registros.pdf");
    });
  }
  


/*function generarPDF() {
    // Crear un objeto jsPDF
    var doc = new jsPDF();
  
    // Obtener la tabla HTML
    var tabla = document.getElementById('tabla');
  
    // Convertir la tabla en una imagen base64
    var imagen = tabla.toDataURL("image/png");
  
    // Agregar la imagen al documento PDF
    doc.addImage(imagen, 'PNG', 10, 10, 180, 0);
  
    // Guardar el archivo PDF
    doc.save('tabla.pdf');
}*/
  