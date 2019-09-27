import React, { Component } from 'react'
import './Cards.css'

export default function Cards({death, activeCard, setActiveCard}) {

    // const handleClick = (death) => {
    //     this.props.updateSelected(death)
    // }
    
        return (
            <div className={ activeCard ? 'active-card' : 'card'} onClick={() => setActiveCard(death)} >
            {activeCard
                ? ( <section className='details'>
                        <h1>{death.cause}</h1>
                        <h2>{death.location}</h2>
                        <h3>{death.date}</h3>
                        <h3>{death.name}</h3>
                    </section>
            )
            : <img className='death-image'
                onClick={() => setActiveCard(death)}
                src={death.image}
                alt='death'
                />
        }
                
            </div>
        )
}
