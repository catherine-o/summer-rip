import React, { Component } from 'react'
import './Cards.css'

export default class Cards extends Component {

    handleClick = (death) => {
        this.props.updateSelected(death)
    }
    
    render() {
        return (
            <div>
                <img className='death-image'
                    onClick={() => this.handleClick(this.props.death)}
                    src={this.props.death.image}
                    alt='death'
                />
            </div>
        )
    }
}
