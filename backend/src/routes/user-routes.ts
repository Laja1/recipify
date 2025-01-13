import * as usercontroller from '../controllers/user-controller'
import express from 'express'

const router = express.Router()

router.post('/register', usercontroller.register)
router.post('/login', usercontroller.login)

export default router
