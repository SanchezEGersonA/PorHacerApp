const descripcion = {
    demand: true,
    alias: 'd'
};

const completado = {
    default: true,
    alias: 'c'
};

// const comandoCrear = {
//     descripcion: {
//         demand: true,
//         alias: 'd'
//     }
// };

// const comandoActualizar = {
//     descripcion: {
//         demand: true,
//         alias: 'd'
//     },
//     completado: {
//         default: true,
//         alias: 'c'
//     }
// };

// const comandoBorrar = {
//     descripcion: {
//         demand: true,
//         alias: 'd'
//     }
// };

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar una tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarear por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}