import { Request, Response } from 'express'

const express = require('express')
const router = express.Router()

router.post('/login', (req: Request, res: Response) => {
  res.send('Login successful')
})

module.exports = router
