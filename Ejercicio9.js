// Crear una función asincrónica
async function esperarMensaje() {
    // Esperar 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Devolver el mensaje
    return "Paciencia mi amorcito, ya llego el mensaje";
  }
  
  // Usar la función y mostrar el resultado
  async function mostrarMensaje() {
    const mensaje = await esperarMensaje();
    console.log(mensaje);
  }
  
  // Llamar a la función
  mostrarMensaje();