import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

import express from 'express'
import testUpdate from '../../services/authentication/test-update.service'
const router = express.Router()

router.put('/test-update', async (req: Request, res: Response) => {
    const params = req.body as { hello: string }
    await testUpdate()
    res.json({
        data: `Test update successful:  ${params.hello}`
    })
})

module.exports = router
