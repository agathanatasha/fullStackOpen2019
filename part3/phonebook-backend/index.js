const express = require("express")
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    },
    {
      "name": "Poppy Denny",
      "number": "278379-122",
      "id": 5
    }
  ]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id == id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

const generateId = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

app.post('/api/persons', (req,res) => {
  const body = req.body

  if(!body.number || !body.name){
    return res.status(400).json({
      error: 'missing name or number'
    })
  } 

  const newPerson = {
    name: body.name,
    number: body.number,
    id: generateId(9999)
  }

  persons = persons.concat(newPerson)

  res.json(newPerson)
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons.filter(person => person.id !== id)

  res.status(204).end()
})

app.get('/info', (req, res) => {
  let date = new Date()
  res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${date.toString()}</p>`)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})