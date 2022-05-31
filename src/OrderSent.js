import React from 'react'
import OrderCard from './OrderCard'

export default function OrderSent(props) {
    const { order } = props

    return(
        <section id='confirmation-page'>
            {order.length === 0 ? 
            <h2>Please send your order request through the order online button!</h2>
            :
            order.map(order => <OrderCard order={order} key={order.id} />)}
        </section>
    )
}