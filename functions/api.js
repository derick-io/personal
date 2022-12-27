const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const serverless = require('serverless-http')
const app = express()
const router = express.Router()
const index = require('./index');

app.use('/dist', express.static('dist'))


router.get('/', (req, res) => res.send(index))
router.get('/json', (req, res) => res.json({ path: "json"}))

app.use('/', router)

module.exports.handler = serverless(app)

