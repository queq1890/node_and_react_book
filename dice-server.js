// httpモジュールを読み込む
const http = require('http')
const ctype = { 'Content-Type': 'text/html;charset=utf-8' }

//webサーバーを実行
const svr = http.createServer(handler) //サーバーを生成
svr.listen(8081) //ポート8081で待ち受け開始

// サーバーにアクセスがあったときの処理
function handler (req, res) {
  const url = req.url
  if (url === '/' || url === '/index.html') {
    showIndexPage(req, res)
    return
  }
  if (url.substr(0, 6) === '/dice/') {
    showDicePage(req, res)
    return
  }
  res.writeHead(404, ctype)
  res.end('404 not found')
}

function showIndexPage (req, res) {
  res.writeHead(200, ctype)
  const html = '<h1>サイコロページの案内</h1>\n' +
               '<p><a href="/dice/6">6面体サイコロ</a></p>' +
               '<p><a href="/dice/12">12面体サイコロ</a></p>'
  res.end(html)
}

  function showDicePage (req, res) {
    res.writeHead(200, ctype)
    const a = req.url.split('/')
    //文字列を整数に変換
    const num = parseInt(a[2])
    // floorで丸め, Math.random() * numで0からnumまでのランダムな数字を出力
    const rnd = Math.floor(Math.random() * num) + 1
    res.end('<p style="font-size:72px;">' + rnd +'</p>')
}
