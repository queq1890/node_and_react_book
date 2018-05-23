const fs = require('fs')

function read_gfn (g, fname) {
  fs.readFile(fname, 'utf-8', (err, data) => {
    g.next(data)
  })
}

//Generator関数を定義する
const g = (function * () {
  const a = yield read_gfn(g, 'texts/a.txt')
  console.log(a)
  const b = yield read_gfn(g, 'texts/b.txt')
  console.log(b)
  const c = yield read_gfn(g, 'texts/c.txt')
  console.log(c)
}) ()
g.next()
