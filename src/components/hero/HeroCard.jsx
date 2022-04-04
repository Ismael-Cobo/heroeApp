import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance
}) => {

    const imagePath = `assets/${id}.jpg`

    return (
        <div className='heroe__card'>
            <img className='hero__card__img' src={imagePath} alt={`${id}`} />
            <div className='hero__card__text'>
                <h5 className='hero__card__title'>
                    {superhero} 
                </h5>
                <p className='hero__card__alter_ego'>
                    {alter_ego}
                </p>
                <p className='hero__card__alter_ego'>
                    {first_appearance}  
                </p>

                <Link to={`/hero/${id}`} >
                    Mas...
                </Link>
            </div>
        </div>
    )
}
