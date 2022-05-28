import React from 'react'

export default function Form(props) {
    const { values, change, submit, errors, disabled } = props

    const changeHandler = (evt) => {
        const { name, checkbox, value, type } = evt.target
        const wantValue = type === checkbox ? checkbox : value;
        change(name, wantValue);
    }

    const submitHandler = (evt) => {
        evt.preventDefault();
        submit();
    }

    return (
        <form id='pizza-form' onSubmit={submitHandler}>
            <label>Your name&nbsp;
                <input type='text' id='name-input' name='name' onChange={changeHandler} value={values.name} placeholder='Pepper Pots' />
            </label>
                <h5>{errors.name}</h5>

            <select id='size-dropdown' name='size' onChange={changeHandler} value={values.size} >
                <option>Pick your size</option>
                <option name='small'>small</option>
                <option name='medium'>medium</option>
                <option name='large'>large</option>
                <option name='super'>super</option>
            </select> 
            <h5>{errors.size}</h5>


        <label>Toppings
            <section id='toppings'>
                <label>
                    <input name='pepperoni' type='checkbox' onChange={changeHandler} checked={values.pepperoni} />
                    &nbsp;Pepperoni
                </label>
                <label>
                    <input name='veggie' type='checkbox' onChange={changeHandler} checked={values.veggie} />
                    &nbsp;Veggie Massacre
                </label>
                <label>
                    <input name='meat' type='checkbox' onChange={changeHandler} checked={values.meat} />
                    &nbsp;Meat Extravaganza
                </label>
                <label>
                    <input name='pineapple' type='checkbox' onChange={changeHandler} checked={values.pineapple} />
                    &nbsp;Pineapple
                </label>
            </section>
        </label>

            <label htmlFor='special-text'>Special Instructions</label>
                <input name='special' id='special-text' onChange={changeHandler} value={values.special} />

            <input type='submit' id='order-button' value='check out' disabled={disabled}/>
        </form>
    )
}