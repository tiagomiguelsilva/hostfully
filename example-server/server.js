const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.json())

const computers = JSON.parse(
  fs.readFileSync(`${__dirname}/computers/computers-data.json`),
)

const port = process.env.PORT || 3001

app.get('/computers', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: computers.length,
    data: {
      computers,
    },
  })
})

app.post('/computers', (req, res) => {
  const newId = computers.length + 1
  const newComputer = Object.assign(
    {
      id: newId,
      url: `https://computer-database.gatling.io/computers/${newId}`,
    },
    req.body,
  )

  computers.push(newComputer)

  fs.writeFile(
    `${__dirname}/computers/computers-data.json`,
    JSON.stringify(computers, null, 2),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          newComputer,
        },
      })
    },
  )
})

app.delete('/computers/:id', (req, res) => {
  if (req.params.id * 1 > computers.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    })
  }

  res.status(204).json({
    status: 'success',
    data: null,
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
