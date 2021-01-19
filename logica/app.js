const fileSystem = require('fs')
const color = require('colors');



let multiplicarBase = (base, limite) => {

    return new Promise((resolve, reject) => {
        data = '';
        console.log(`================`.green);
        console.log(`Tabla del ${base}`.green.bold);
        console.log(`================`.green);
        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;
        }
        //resolve(data);
        fileSystem.writeFile(`./tablas/tabla${base}To${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla${base}To${limite}.txt`)
        });
    })

}

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`
        }
        resolve(data);
    })
}


module.exports = {
    multiplicarBase: multiplicarBase,
    listarTabla: listarTabla
}