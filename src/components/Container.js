import React, { Component } from 'react'
import Card from '../components/Cards'

export default class Container extends Component {

    createCards = () => {
        console.log(this.props.deaths)
        return this.props.deaths.map(death => {
            return <Card death={death} />
        })
    }


    render() {
        return (
            <div>
                {this.createCards()}
            </div>
        )
    }
}
