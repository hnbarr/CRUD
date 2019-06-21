import React, { Component } from 'react'

export default class NewModel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Zoe'
        }
    }
    

    handleClick = (e) => {
        console.log(e.target.value, this.state.name)
    }
    render() {
        return (
            <div>
                <form>
                    <button onClick={this.handleClick}>
                        {this.state.name}
                        {/* for each modal, this will be mapped and rendered so */}
                    </button>
                </form>
            </div>
        )
    }
}
