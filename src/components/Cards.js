import React from 'react'

export default function Cards({death}) {
    
    return (
        <div>
            <img className='death-image'
                src={death.image}
                alt='death'
            />
        </div>
    )
}
