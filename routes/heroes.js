const express=require('express');

const router=express.Router();

const heroesControllers=require('../controllers/heroesController')

router.get('/',heroesControllers.heroe);
router.get('/detalles/:id',heroesControllers.detalle)
router.get('/bio/:id/:ok?',heroesControllers.bio)

module.exports=router