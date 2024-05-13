import express from 'express';
import Jimp from 'jimp';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const router = express.Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

router.post('/enviar', async (req, res) => {
    const url = req.body
    const id = uuidv4().slice(0, 6)
    const img = await Jimp.read(url)
    await img
    .resize(350, Jimp.AUTO)
    .grayscale()
    .writeAsync(__dirname + `/uploads/${id}.jpg`)
    res.sendFile(__dirname + `/uploads/${id}.jpg`)
})

export default router