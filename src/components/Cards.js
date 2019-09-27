import React from 'react'
import './Cards.css'

export default function Cards({death, updateSelected}) {

    return (
        <div>
            <img className='death-image'
                // onClick={updateSelected(death)}
                src={death.image}
                alt='death'
            />
        </div>
    )
}
