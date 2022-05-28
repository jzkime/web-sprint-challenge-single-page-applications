import React, { useState } from "react";
import './App.css'
import { Link, Route } from 'react-router-dom'
import Form from './Form'
import HomePage from './HomePage'
import * as yup from 'yup'
import schema from './formSchema'

const initialValues = {
  name: "",
  size: "",
  pepperoni: false,
  veggie: false,
  meat: false,
  pineapple: false,
  special: "",
}

const App = () => {
  const [ orders, setOrders ] = useState([])
  const [ orderValues, setOrderValues ] = useState(initialValues)

  const changeForm = (name, value) => {
    setOrderValues({...orderValues, [name]: value})
  }

  const submitForm = () => {
    const newOrder = {
      name: orderValues.name,
      size: orderValues.size,
      topping1: orderValues.pepperoni === 'on' ? true : false,
      topping2: orderValues.veggie === 'on' ? true : false,
      topping3: orderValues.meat === 'on' ? true : false,
      topping4: orderValues.pineapple === 'on' ? true : false,
      special: orderValues.special === 'on' ? true : false,
    }

    setOrders(...orders, newOrder )
    console.log(newOrder)
    setOrderValues(initialValues)
  }


  return (
    <>
    <section id='header'>
      <h1>Lambda Eats</h1>
      <Link to='/'>Home</Link>
      <Link to='/pizza' id='order-pizza'>Order Online!</Link>
     </section>


    <Route exact path='/'>
      <HomePage />
    </Route>
      <Route path='/pizza'>
        <Form values={orderValues} change={changeForm} submit={submitForm} />
      </Route>
    </>
  );
};
export default App;
