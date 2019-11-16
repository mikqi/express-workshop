const router = require('express').Router()

let persons = [
  {
    id: 1,
    name: 'Yayu',
    age: 20
  },
  {
    id: 2,
    name: 'Guyu',
    age: 19
  }
]
const dataIdIsEqual = id => data => Number(data.id) === Number(id)

router.get('/users', (req, res) => {
  res.status(200).json(persons)
})

router.post('/users', (req, res) => {
  const { name, age } = req.body
  const id = persons.length + 1
  persons = [...persons, { name, age, id }]

  res.status(200).json({
    data: {
      name,
      id,
      age: Number(age)
    },
    message: `Success add ${name} to storage`
  })
})

router.get('/users/:id', (req, res) => {
  const id = req.params.id
  const filteredPerson = persons.filter(dataIdIsEqual(id))[0]
  if (filteredPerson) {
    res.status(200).json(filteredPerson)
  }

  res.status(404).json({
    message: `user with id ${id} not found`
  })
})

router.delete('/users/:id', (req, res) => {
  const id = req.params.id
  const personIndex = persons.findIndex(dataIdIsEqual(id))
  persons = [...persons.slice(0, personIndex), ...persons.slice(personIndex + 1)]

  res.status(200).json({
    message: `successful delete person with id ${id}`
  })
})

router.put('/users/:id', (req, res) => {
  const id = req.params.id
  const personIndex = persons.findIndex(dataIdIsEqual(id))

  if (personIndex > 0) {
    const { name, age } = req.body
    persons[personIndex] = {
      name: name || persons[personIndex].name,
      age: Number(age) || persons[personIndex].age
    }

    res.json(persons[personIndex])
  }

  res.status(404).json({
    message: `user with id ${id} not found`
  })
})

module.exports = router
