const express = require('express')
const router = express.Router() //สร้างเร้าเตอร์

const assets_path = `${__dirname}/assets` //สร้างpath asset pic

router.use(express.static(assets_path)) //สร้าง router path

module.exports = router //ewport

