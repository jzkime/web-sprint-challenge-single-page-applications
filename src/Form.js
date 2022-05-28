import React from 'react'

export default function Form(props) {
    return (
        <form id='pizza-form'>
            <label>Your name 
                <input id='name-input'/>
            </label>

            <label>Pick size
                <select id='size-dropdown'>
                    <option>small</option>
                    <option>medium</option>
                    <option>large</option>
                    <option>super</option>
                </select> 
            </label> 

        <label>Toppings
            <section id='toppings'>
                <label>
                    <input name='pepperoni' type='checkbox' />
                    Pepperoni
                </label>
                <label>
                    <input name='veggie' type='checkbox' />
                    Veggie Massacre
                </label>
                <label>
                    <input name='meat' type='checkbox' />
                    Meat Extravaganza
                </label>
                <label>
                    <input name='pineapple' type='checkbox' />
                    Pineapple
                </label>
            </section>
        </label>

            <label htmlFor='special-text'>Special Instructions</label>
                <input name='special-text' id='special-text' />

            <input type='button' id='order-button' value='check out'/>
        </form>
    )
}