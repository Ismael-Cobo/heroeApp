import { heroes } from '../fixtures/data'


export const getHeroByPublisher = (publisher = '') => {
    const validPublishers = ['DC Comics', 'Marvel Comics']
    if(!validPublishers.includes(publisher)) {
        throw new Error('El públisher no es válido o no existe')
    }

    return heroes.filter( hero => hero.publisher === publisher)
}