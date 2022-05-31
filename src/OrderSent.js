import React from 'react'
import OrderCard from './OrderCard'

export default function OrderSent(props) {
    const { order } = props

    return(
        <section id='confirmation-page'>
           {!!order.length && <h2>Congrats! Pizza is on it's way!</h2>}
            
            { !order.length ? 
            <h2>Loading...</h2>
            :
            order.map(order => <OrderCard order={order} key={order.id} />)}
        </section>
    )
}