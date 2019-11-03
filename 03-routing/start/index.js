const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// GET api/user/ -> GET ALL
// GET api/user/:id -> GET BY ID
// POST api/user/ -> ADD NEW DATA
// DELETE api/user/:id -> DELETE DATA BY ID
// PUT/PATCH api/user/:id -> UPDATE PARTIAL BY ID

app.listen(1234, () => {
  console.log(`app listen on http://localhost:1234`)
})
