const gulp = require('gulp')
const { exec } = require('child_process')

//  上传文件
gulp.task('ftp', done => {
  exec(
    `scp -r dist/* ftpuser@101.132.188.185:/data/static/script/wxpublic-notify-static`
    // (err, stdout, stderr) => {
    //   console.log(
    //     `文件上传成功：https://www.confucius.mobi/script/wxpublic-notify-static/${fileName}`
    //   )
    // }
  )
  done()
})
