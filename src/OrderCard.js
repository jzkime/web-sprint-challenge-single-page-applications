import React from 'react'

export default function OrderCard(props) {
    const { order } = props;
    return (
        <div className='orderCard'>
            <h3>{order.name}</h3>
            <p>Pizza size: <strong>{order.size}</strong></p>
            <div className='toppings'>
                { !order.cheese && <h4>Toppings:</h4> }
                { order.cheese && <p>Cheese</p> }
                { order.pepperoni && <p>Pepperoni</p> }
                { order.veggie && <p>Veggie Massacre</p> }
                { order.meat && <p>Meat Extravaganza</p> }
                { order.pineapple && <p>Pineapple</p> }
            </div>
            { order.gf && <p>Gluten Free</p> }
            {!!order.special && <p>Special Request:
             <br/> {order.special}</p>}
        </div>
    )
}