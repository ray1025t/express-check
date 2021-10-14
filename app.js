const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

// 使用handlebars
app.engine('hbs', exphbs({ defaultLayout: 'main' , extname: '.hbs'}))
app.set('view engine', 'hbs' )

// 路由設置
app.get('/', (req, res) => {
  res.render('index')
})

// 路由監聽
app.listen(port, () => {
  console.log(`express on http://localhost:${port}`)
})