import React, { Component } from 'react'

export default class NewModel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            needyButton: 'Touch Me, Plz'
        }
    }
    

    handleClick = (e) => {
        console.log(e.target.value, this.state.needyButton)
    }
    render() {
        return (
            <div>
                <form>
                    <button onClick={this.handleClick}>
                        {this.state.needyButton}
                        {/* for each modal, this will be mapped and rendered so */}
                    </button>
                </form>
            </div>
        )
    }
}
