var express = require('express');
var router = express.Router();


const COMMON_ERROR_MSG = '오류가 발생했습니다!\n관리자에게 문의해주세요! :('

const keyboard = {
  type: 'buttons',
  buttons: ['로그인', '차트출력', '차트입력']
}

router.post('/', (req, res) => {

  let COMMON_HANDLE_SUCCESS = (message) => {
    res.send({
      message: { text: message },
      keyboard: keyboard
    })
  }

  let COMMON_HANDLE_ERROR = (error) => {
    console.error(error)
    res.send({
      message: { text: COMMON_ERROR_MSG },
      keyboard: keyboard
    })
  }

  let content = req.body.content
  let message = ''

  if ( content === '로그인' ) {
    new Promise((onFurfilled, onRejected) => { onFurfilled('안녕하세요!') })
      .then(COMMON_HANDLE_SUCCESS)
      .catch(COMMON_HANDLE_ERROR)
  } else if ( content === '차트출력' ) {
    new Promise((onFurfilled, onRejected) => { onFurfilled('***차트 출력') })
      .then(COMMON_HANDLE_SUCCESS)
      .catch(COMMON_HANDLE_ERROR)
  } else if ( content === '차트입력' ) {
    //get DB
		new Promise((onFurfilled, onRejected) => { onFurfilled('혈압')})
      .then(COMMON_HANDLE_SUCCESS)
      .catch(COMMON_HANDLE_ERROR)
  } else {
    new Promise((onFurfilled, onRejected) => { onFurfilled('혈당') })
      .then(COMMON_HANDLE_SUCCESS)
      .catch(COMMON_HANDLE_ERROR)
  }
})


module.exports = router
