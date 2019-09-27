import React, { useState } from 'react'
import Card from '../components/Cards'
import './Container.css'

export default function Container({deaths, updateSelected}) {
    const [activeCard, setActiveCard] = useState(null)

    const createCards = () => {
        console.log(deaths)
        return deaths.map(death => {
            return <Card death={death} updateSelected={updateSelected} setActiveCard={setActiveCard} />
        })
    }

        return (
            <div className='container'>
                {activeCard ?  <Card death={activeCard}  activeCard={true} setActiveCard={setActiveCard} /> : null }
                {createCards()}
            </div>
        )
}
