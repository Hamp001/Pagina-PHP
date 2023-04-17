
$(document).ready(function() {
    // Cuando se hace clic en el botón "buscar"
    $('input[name="boton"][value="buscar"]').click(function(event) {
      // Evitamos que el formulario se envíe de forma convencional
      event.preventDefault();
      // Obtenemos los valores de los campos de búsqueda
      var usuario = $('#usuario').val();
      var fechaInicio = $('#fechaInicio').val();
      var fechaFin = $('#fechaFin').val();
      // Enviamos la petición Ajax
      $.ajax({
        url: 'registros.php',
        method: 'GET',
        dataType: 'json',
        data: {
          boton: 'buscar',
          usuario: usuario,
          fechaInicio: fechaInicio,
          fechaFin: fechaFin
        },
        success: function(data) {
          // Si se recibió correctamente la respuesta del servidor
          if (data.tabla) {
            // Insertamos la tabla en el div correspondiente
            $('#tabla').html(data.tabla);
          }
        }
      });
    });

    $('input[name="boton"][value="MostrarTodos"]').click(function(event) {
        // Evitamos que el formulario se envíe de forma convencional
        event.preventDefault();
        // Obtenemos los valores de los campos de búsqueda
        var usuario = $('#usuario').val();
        var fechaInicio = $('#fechaInicio').val();
        var fechaFin = $('#fechaFin').val();
        // Enviamos la petición Ajax
        $.ajax({
          url: 'registros.php',
          method: 'GET',
          dataType: 'json',
          data: {
            boton: 'MostrarTodos',
            usuario: usuario,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin
          },
          success: function(data) {
            // Si se recibió correctamente la respuesta del servidor
            if (data.tabla) {
              // Insertamos la tabla en el div correspondiente
              $('#tabla').html(data.tabla);
            }
          }
        });
      });
  });

/*$(document).ready(function() {
    // Se agrega un evento de escucha para cuando se envíe el formulario
    $('#formulario').submit(function(event) {
        // Se previene el comportamiento por defecto del formulario
        event.preventDefault();
        // Se realiza una petición AJAX con los datos del formulario
        $.ajax({
            // URL del archivo PHP que procesará la petición
            url: 'registros.php',
            // Método HTTP a utilizar
            type: 'GET',
            // Tipo de dato que se espera recibir como respuesta
            dataType: 'json',
            // Datos que se enviarán al servidor
            data: $('#formulario').serialize(),
            // Función que se ejecutará en caso de que la petición sea exitosa
            success: function(response) {
                // Se actualiza el contenido del div con id "tabla" con el contenido recibido desde el servidor
                $('#tabla').html(response.tabla);
            },
            // Función que se ejecutará en caso de que ocurra algún error en la petición
            error: function() {
                alert('Ha ocurrido un error');
            }
        });
    });
});*/