const express = require('express')
const bodyParser = require('body-parser')

app = express();
const port = 3000; 

app.set('view engine', 'ejs')
app.set(bodyParser.urlencoded({extended: true}))

let campgrounds = [
  { name: "Camp Nou", image: 'https://pixabay.com/get/54e5dc474355a914f6da8c7dda793f7f1636dfe2564c704c7d2b7bd2944cc65d_340.jpg'},
  { name: "Salmon Crek", image:'https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c7d2b7bd2944cc65d_340.jpg'},
  {name: "Granite Hill", image: 'https://pixabay.com/get/52e8d4444255ae14f6da8c7dda793f7f1636dfe2564c704c7d2b7bd2944cc65d_340.jpg'},
  {name: "Mountain Ghost", image: 'https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c7d2b7bd2944cc65d_340.jpg'}
]

app.get('/', (req, res) => {
res.render("landing")
});

app.get('/campgrounds', (req, res) => {
res.render('campgrounds', {campgrounds: campgrounds})
})

app.listen(port, ()=>{
  console.log(`listening on port ${port}`)
})