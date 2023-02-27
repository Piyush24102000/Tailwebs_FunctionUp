const express = require('express')
const router = express.Router()
const {add, createAccount, login, view, viewByFilter, update, deleteData} = require('./controller')

router.post('/add',add)
router.post('/login',login)
router.post('/create',createAccount)

router.get('/view',view)
router.get('/viewFilter',viewByFilter)

router.put('/update',update)
router.delete('/delete',deleteData)
module.exports = router