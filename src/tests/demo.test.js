
describe('Pruebas del archivo demo.test', () => {

  test('los strings deben ser iguales', () => {
  
    // 1, Inicializacion 
     const mensaje = 'Hola'
  
     // 2 Estimulo 
  
     const mensaje2 = "Hola"
  
     // Observar el comportamiento de
     expect(mensaje).toBe(mensaje2)
  })

})

