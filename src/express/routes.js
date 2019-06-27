const express = require('express')
const router = express.Router()
const { listUsers, getUserById, createUser, removeUser} = require('./controllers')

router.get('/users', (req, res) => {
    res.json(listUsers(req.body))
})

router.post('/users', (req, res) => {
    res.json(createUser(req.body));
})

router.get('/users/:id', (req, res) => {
    router.get('/users/:id', (req, res) => {
        getUserById(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.sendStatus(500))
    })
})

router.delete('/users/:id'), (req, res) => {
    res.json(removeUser(req.params.id))
}

module.exports = router;