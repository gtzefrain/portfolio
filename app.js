const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('build', { dotfiles: 'allow' } ))

app.get('/', (req, res) => res.sendFile('build/index.html'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))