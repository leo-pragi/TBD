const express = require(`express`)
const PORT = process.env.PORT || 8080;
const app = express()

app.all(`*`, (req, res) => res.send(`Hello World 2.0!`))

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))