import React from 'react'
import OrderCard from './OrderCard'

export default function OrderSent(props) {
    const { order } = props

    return(
        <section id='confirmation-page'>
            {order.map(order => <OrderCard order={order} key={order.id} />)}
        </section>
    )
}