import { Route, Routes } from "react-router-dom"

import { DcScreen } from "../components/dc/DcScreen"
import { HeroScreen } from "../components/hero/HeroScreen"
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { Navbar } from "../components/navbar/Navbar"
import { SearchScreen } from "../components/search/SearchScreen"

export const DashboarRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="heroes__container">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroId" element={<HeroScreen />} />

                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            </div>
        </>

    )
}
