import express from 'express'
import cors from 'cors'
import { getPets, createPet } from './src/pets.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get("/pets", async (req, res) => {
    try {
        const pets = await getPets()
        res.status(200).send(pets)
        
    } catch (error) {
        res.status(500).send(error)
    }
})

app.post("/pets", async (req, res) => {
  try {
    const newPet = req.body

    // const {name, age, gender } = req.body
    // const newPet = {name, age, gender}
    const result = await createPet(newPet)

    res.status(201).send(result);

  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

const PORT = 3000

app.listen(PORT, () =>{
    console.log(`We be listening on port http://localhost:${PORT}`)
})