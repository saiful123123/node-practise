const express = require('express')
const router = express.Router()


// app.use('/', (req, res, next) => {
//     console.log('zero')
//     next();

// })

router.get('/add-product', (req, res, next) => {
    console.log('first')
    res.send('<form action ="/admin/add-product" method="POST"><input type="text" name="test"><button type="submit">Add Product</button></form>')

})

router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})


module.exports = router;