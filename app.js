const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

// setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main' , extname: '.hbs'}))
app.set('view engine', 'hbs' )

// setting static files
app.use(express.static('public'))


// setting routing
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req,res) => {
  res.render('about.hbs')
})

app.get('/contact', (req, res) => {
  res.render('contact.hbs')
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio.hbs')
})

// routing listent
app.listen(port, () => {
  console.log(`express on http://localhost:${port}`)
})