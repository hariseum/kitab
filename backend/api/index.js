const express = require('express')
const router = express.Router()

require('./routes/book')(router)
require('./routes/allbook')(router)

module.exports = router