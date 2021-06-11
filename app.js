const express = require('express')
const path = require('path')
const app = express()
spathh =  path.join(__dirname,'/hotel.html')
app.use(express.static(__dirname))

app.get('/',(req,res)=>{
    res.sendFile(spathh)
})

app.listen(8080,() =>{
    
    console.log('running on port 8080')

})