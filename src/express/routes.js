const express = require('express')
const router = express.Router()
const { listUsers, getUserById, createUser, removeUser} = require('./controllers')

router.get('/users', (req, res) => {
    listUsers()
        .then(response => res.json(response))
        .catch(err => {
            console.log('Error in /users route:', err)
            res.sendStatus(500)
        })
})

router.post('/users', (req, res) => {
    console.log('REQ', req.body)
    createUser(req.body)
        .then(result => {
            res.json(result)
        });
})

router.get('/users/:id', (req, res) => {
    // const user = users.find( u => u.id === req.params.id)
    // req.json(user)
        getUserById(req.params.id)
            .then(result => {
                console.log('RESULT', result)
                res.json(result)
            })
            .catch(err => {
                console.log('ERROR', err)
                res.sendStatus(500)
            })
})

router.delete('/users/:id'), (req, res) => {
    res.json(removeUser(req.params.id))
}

module.exports = router;

// res.json(users[req.params.index])