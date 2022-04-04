import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroScreen = () => {

    const { heroId } = useParams()
    const hero = useMemo( () => getHeroById(heroId), [heroId])
    const navigation = useNavigate()
    

    if (!hero) {
        return <Navigate to='/' />
    }

    const {
        alter_ego,
        first_appearance,
        id,
        publisher,
        superhero,
        characters
    } = hero

    const imgSrc = `../assets/${id}.jpg`

    const handleClick = () => {
        navigation(-1)
    }


    return (
        <div className='hero__container'>
            <div className='hero__grid'>
                <img className='hero__img' src={imgSrc} alt={superhero} />
                <div>
                    <h2>{superhero}</h2>
                    <ul className='hero__text'>
                        <li className='hero__alter_ego'><strong>Alter ego: </strong>{alter_ego} </li>
                        <hr />
                        <li className='hero__publisher'><strong>Publisher: </strong>{publisher} </li>
                        <hr />
                        <li className='hero__first_appearance'><strong>First appearance: </strong>{first_appearance} </li>
                        <hr />
                    </ul>
                    <h5>Characters</h5>
                    <p className='hero__character'>{characters}</p>
                    <button className='btn btn-info' onClick={handleClick}>Regresar</button>
                </div>
            </div>
        </div>
    )
}
