import { heroes } from '../fixtures/data'


export const getHeroByName = (name = '') => {

    name = name.toLocaleLowerCase()
    
    const heroesValid = heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name))

    return heroesValid
}