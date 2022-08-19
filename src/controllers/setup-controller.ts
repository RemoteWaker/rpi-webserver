import { Router } from "express";
import utils from "~/utils/utils";
import fs from 'fs'

const router = Router()

router.post('/', (req, res) => {
    const body = req.body as SetupPostBody
    fs.writeFileSync(utils.config_path, JSON.stringify(body))
    res.status(201).json({
        "message": "config set !",
        "options": body
    })
})

interface SetupPostBody {
    computer_ip: string
}

export default router