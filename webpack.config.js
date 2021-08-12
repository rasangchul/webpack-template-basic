
const path = require('path')



//node.js 환경에서 작동함
// 파일을 읽어들이기 시작하는 진입점 설정
module.exports = {
    entry:'./js/main.js',

    //결과물(번들)을 반환하는 설정
    outputs: {
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js'
    }
}