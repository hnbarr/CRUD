const express = require('express')
const router = express.Router()
const UsersController = require('./controllers')

// Create a route for getting all users from the db
router.get('/', (request, response)=> {
    UsersController.getAll()
        .then(users => {
            response.json(users)
        })
})

// Create a route for creating a user
router.post('/', (request, response)=> {
    UsersController.createUser(request.body)
        .then(user => response.json(user))
})

// Create a route for deleting ONE user 
router.delete('/:id', (request, response)=> {
    UsersController.deleteUser(request.params.id)
        .then(()=> response.json({}))
})

// Create a route for getting ONE user by it's id

// router.get('/:id', (request, response)=> {
//     UsersController.getById(request.params.id)
//         .then((user)=> response.json(user))
// })

module.exports = router