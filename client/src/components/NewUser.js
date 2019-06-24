import React, { Component } from 'react'
import './components.css'
import PropTypes from 'prop-types'



export default class NewUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstName: '',
            lastName: '',
            city: '',
            state: '',
            email: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
          });
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
                
                <label>city: </label>
                    <input className='field' type='text 'placeholder='Boston'></input>

                <label>state: </label>
                    <input className='field' type='text 'placeholder='Massachusetts'></input>

                <label>email: </label>
                    <input className='field' type='text 'placeholder='janedoe@gmail.com'></input> 
                
                <button id='registerBtn' onClick={this.handleClick}> submit </button>   
            </form>
        )
    }
}


NewUser.propTypes = {
    users: PropTypes.array
  };
// I think someting is wrong with my prop types