const express=require('express')
const router=express.Router()
const controlador=require('../controllers/mailController')

router.get('/',controlador.index)
router.get('/creditos',controlador.creditos)
router.get('*',controlador.error)

module.exports=router