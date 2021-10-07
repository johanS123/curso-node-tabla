const { crearArchivo } = require('./helpers/multiplicar')
require('colors')
const argv = require('./config/yargs')

// const base = 4

console.clear()
  
crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err))