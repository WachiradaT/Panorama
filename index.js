const express = require('express')
const cors = require('cors')

const assets = require('./assets') //router pic ดึงมา

const app = express()
const client_path = `${__dirname}/sale_house/dist` //vue address

app.use(cors())
app.use(express.static(client_path)) //vue server
app.use('/assets', assets) //path

app.listen(3000, () => { //run port
    console.log('server running on port 3000')
}) //เก็บไฟล์ใน asset เก็บตำแหน่งของรูปภาพในโค้ดของเว็บ 