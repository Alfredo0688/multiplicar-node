const opciones = {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }
    //objeto opciones, como se usaban las mismas propiedades en dos comandos, se creó un objeto y se utilizó
const argv = require('yargs')
    .command('listarTabla', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Crea un archivo de texto con la tabla de multiplicar acorde a una base y limites dados', opciones)
    .help()
    .argv;


module.exports = {
    argv
}