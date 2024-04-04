import { Request, Response } from 'express'

import express from 'express'
const router = express.Router()

router.put('/test-update', (req: Request, res: Response) => {
    console.log(req.body)
    const params = req.body as { hello: string }
    res.json({
        data: `Test update successful:  ${params.hello}`
    })
})

module.exports = router
