import { heroes } from '../fixtures/data'


export const getHeroById = (id = '') => {
    
    const heroesValid = heroes.find(hero => hero.id === id)

    return heroesValid
}