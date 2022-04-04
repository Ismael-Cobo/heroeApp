import { useMemo } from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard'

import './heroes.css'


export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () =>  getHeroByPublisher(publisher), [publisher])

    return (
        <div className='heroes__list__container'>
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero} />
                ))
            }
        </div>
    )
}
