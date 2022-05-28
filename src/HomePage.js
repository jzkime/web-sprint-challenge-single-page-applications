import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage(props) {
    return (
        <section id='homepage'>
            <div id='homepage-div'>
                <img src='https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg'/>
            </div>
            <Link to='/pizza' id='order-pizza'>Order!</Link>
        </section>
    )
}