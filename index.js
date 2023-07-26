///// CORS 파일에서 오는 요청을 해제시켜준다.
const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

module.exports = router;

app.use(cors())

app.get('/dog', function (req, res) {
  res.send("<a href='https://www.google.com'>구글</a>")
})

app.get('/cat', function (req, res) {
  res.send("<a href='https://www.naver.com'>네이버</a>")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

/// 주소창에서 파라미터를 이용해서 파라미터를 보낼 때
//// 동물소리 API 서버
app.get('/user/:name', (req, res) => {
    const p = req.params
    console.log(p)
    console.log(p.name)  //q중에 name만 받아오는 방법
    if (p.name == 'dog'){
        res.json({'sound': '나는 멍멍이다', 'img':'https://www.flamingo.be/media/91/8b/72/1681293698/iStock-838308750-2.jpg'})
    }else if (p.name == 'cat'){
        res.json({'sound': '나는 야옹이다', 'img':'https://purr.objects-us-east-1.dream.io/i/yudBm.jpg'})
    }else if (p.name == 'pig'){
        res.json({'sound': '나는 꿀꿀이다', 'img':'https://t1.daumcdn.net/cfile/tistory/2503554856355F2719'})
    }else{
        res.json({'sound': '모르는 동물입니다','img':'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/455/81f5309c7e36e5acdb3fc41adb5c0cb7_res.jpeg'})
    }
    
})

