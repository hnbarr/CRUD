import React, { Component } from 'react'
import './components.css'


export default class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstName: '',
            lastName: '',
            location: ''
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
              <h3>add a new member!</h3>
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
