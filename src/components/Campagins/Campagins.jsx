import React from 'react'
import './Campagins.css'
import CampaginItem from './CampaginItem'

const Campagins = () => {
    return (
        <section class="campaigns">
            <div class="container">
                <div class="campaigns-wrapper">
                    <CampaginItem />
                    <CampaginItem />
                </div>
                <div class="campaigns-wrapper">
                    <CampaginItem />
                    <CampaginItem />
                </div>
            </div>
        </section>
    )
}

export default Campagins