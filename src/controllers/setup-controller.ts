import { Router } from "express";
import axios from "axios";

const baseUrl = "https://remotewaker.vicart.dev/api"

const router = Router()

router.post('/', (req, res) => {
    const body = req.body as SetupPostBody
    axios.post(baseUrl + "/user/device", {
        "": ""
    })
    res.status(201).json({
        "message": "device registered",
        "options": body
    })
})

interface SetupPostBody {
    computer_ip: string
}

export default router