import { useMemo } from 'react'
import { Link } from 'react-router-dom'

import { useForm } from '../../hooks/useForm'
import { getHeroByName } from '../../selectors/getHeroByName'

import './search.css'

export const SearchScreen = () => {

    const [formValues, handleInputChange, reset] = useForm({
        search: ''
    })

    const { search } = formValues

    const heroes = useMemo(() => getHeroByName(search), [search])

    const handleSubmit = (e) => {
        e.preventDefault()
        reset()
    }

    return (
        <>
            <h1>Busquedas</h1>
            <hr />

            <div className='search__container'>
                <h2>Buscar</h2>
                <hr />
                <div className='search__grid'>
                    <div className='seacrh__box'>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                autoComplete='false'
                                className='form-control mb-2'
                                placeholder='buscar heroe'
                                name='search'
                                value={search}
                                onChange={handleInputChange}
                            />
                            <button className='btn btn-outline-primary '>Buscar...</button>
                        </form>
                    </div>
                    <div className='hero__list__search'>
                        {
                            heroes.map(hero => (
                                <div className='heroe__card' key={hero.id}>
                                    <img className='hero__card__img' src={`../assets/${hero.id}.jpg`} alt='marvel-spider' />
                                    <div className='hero__card__text'>
                                        <h5 className='hero__card__title'>
                                            {hero.superhero}
                                        </h5>
                                        <p className='hero__card__alter_ego'>
                                            {hero.alter_ego}
                                        </p>
                                        <p className='hero__card__alter_ego'>
                                            {hero.first_appearance}
                                        </p>

                                        <Link to={`/hero/${hero.id}`} >
                                            Mas...
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }

                    </div>


                </div>
            </div>
        </>

    )
}
