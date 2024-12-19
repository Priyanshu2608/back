require('dotenv').config()
const express = require('express')
const app = express()
const githubData= "priyanshu vasudev, city: Amritsar"

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram', (req,res)=>{
    res.send('priyanshu.vasudev')
})
app.get('/login', (req,res) =>{
    res.send('<h1>Try To Login</h1>')
})
app.get('/github', (req,res)=>{
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})