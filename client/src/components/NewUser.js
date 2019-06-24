import React, { Component } from 'react'
import './components.css'


export default class NewUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstName: '',
            lastName: '',
            location: '',
            userName: '',
            id: 0
        }
    }

    handleChange = (e) => {
        console.log(e.target.value)
    }
    

    handleClick = (e) => {
        console.log(e.target.value)
    }
    render() {
        return (
            <form className='card'>
              <h3>add a new user!</h3>
                <label>first name: </label>
                    <input className='field' type='text 'placeholder='Jane'></input>
                
                <label>last name: </label>
                    <input className='field' type='text 'placeholder='Doe'></input>
                
                <label>location: </label>
                    <input className='field' type='text 'placeholder='Boston'></input> 
                
                <button id='registerBtn' onClick={this.handleClick}> click yo </button>   
            </form>
        )
    }
}
