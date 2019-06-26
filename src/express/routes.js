const express = require('express')
const router = express.Router()
const { listUsers, getUserById, createUser, removeUser} = require('./controllers')

router.get('/users', (req, res) => {
    res.json(listUsers())
})

router.get('/users/:id', (req, res) => {
    res.json(getUserById(req.params.id));
})

router.post('/users', (req, res) => {
    res.json(createUser(req.body));
})

router.delete('/users/:id'), (req, res) => {
    res.json(removeUser(req.params.id))
}

module.exports = router;