const gulp = require('gulp')
const series = gulp.series

const antes1 = cb => {


    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2')
    return cb()
}

function copiar(cb){
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB'))
        // .pipe(imagePelaMetade())
        // .pipe(imagemEmPretoEBranco())
        // .pipe(transformacaoA()) 
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim!')
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)