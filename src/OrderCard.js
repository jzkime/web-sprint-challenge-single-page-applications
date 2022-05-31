import React from 'react'

export default function OrderCard(props) {
    const { order } = props;

        /*
    {
    name: "",
    size: "",
    pepperoni: false,
    veggie: false,
    meat: false,
    pineapple: false,
    gf: false,
    special: "",
    }
        */

    return (
        <div className='orderCard'>
            <h3>{order.name}</h3>
            <p>Size: {order.size}</p>
            <div className='toppings'>
                { !order.cheese && <h4>Toppings:</h4> }
                { order.cheese && <p>Cheese</p> }
                { order.pepperoni && <p>Pepperoni</p> }
                { order.veggie && <p>Veggie Massacre</p> }
                { order.meat && <p>Meat Extravaganza</p> }
                { order.pineapple && <p>Pineapple</p> }
            </div>
            { order.gf && <p>Gluten Free</p> }
            {!!order.special && <p>Special Request: {order.special} </p>}
        </div>
    )
}