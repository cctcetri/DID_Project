// 기본 프로젝트인 경우 이걸 그냥 갖다 쓰면 된다. 폴더 이름 바꿔도 되지만 이 코드를 보는 다른 사람을 위해 왠만하면 이걸로.
let express = require('express')
const ChromeLauncher = require('chrome-launcher')
let app = express()
let router = require('./router/main')(app)
let port = 8545

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile) // views 폴더 안에 .html 파일이 있습니다.
app.use(express.static('public')) // public 이라는 폴더가 있습니다.

let server = app.listen(port, function() {
    console.log('Express server has started on port ' + port)
})
