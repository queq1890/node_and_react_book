const fs = require('fs')

//promiseを返す関数を定義
function readFile_pr (fname) {
  return new Promise((resolve) => {
    fs.readFile(fname, 'utf-8', (err, s) => {
      resolve(s)
    })
  })
}

//順にファイルを読み込む
readFile_pr('texts/a.txt')
.then((text) => {
  console.log('a.txtを読み込みました', text)
  return readFile_pr('texts/b.txt')
})
.then((text) => {
  console.log('b.txtを読み込みました', text)
  return readFile_pr('texts/c.txt')
})
.then((text) => {
  console.log('c.txtを読み込みました', text)
})
