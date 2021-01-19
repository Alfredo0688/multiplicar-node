const argv = require('./config/yargs').argv;
//const colors = require('colors');
const colors = require('colors/safe'); //otra manera de usar colors, no se pueden requerir ambos en el mismo archivo
//esta segunda manera es mejor porque podemos usarlo de dos maneras, un colo como metodo(linea 17)
//o como metodo de la variable encerrando la cadena(linea 26)

const { multiplicarBase, listarTabla } = require('./logica/app');

let comando = argv._[0];
console.log(`Comando : ${comando} | Base introducida =  ${argv.base} | Limite introducido ${argv.limite} `);


switch (comando) {

    case 'crear':
        console.log(`crear`);
        multiplicarBase(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado : ${archivo}`.yellow));
        break;

    case 'listarTabla':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla))
        break;
    default:
        console.log(colors.bgRed(`No hay comandos validos`));
}