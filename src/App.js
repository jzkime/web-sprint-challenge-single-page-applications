import React, { useState, useEffect } from "react";
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
  gf: false,
  special: "",
}

const initialErrors = {
  name: ""
}

const App = () => {
  const [ orders, setOrders ] = useState([]);
  const [ orderValues, setOrderValues ] = useState(initialValues);

  const [ errors, setErrors ] = useState(initialErrors);
  const [ disabled, setDisabled ] = useState(false)

  const validatation = (name, value) => {
    yup.reach(schema, name).validate(value)
    .then(() => setErrors({...errors, [name]: ""}))
    .catch(err => setErrors({...errors, [name]: err.errors[0]}))
  }
 
  const changeForm = (name, value) => {
    validatation(name,value);
    setOrderValues({...orderValues, [name]: value})
  }

  const submitForm = () => {
    const newOrder = {
      name: orderValues.name,
      size: orderValues.size,
      topping1: orderValues.pepperoni,
      topping2: orderValues.veggie,
      topping3: orderValues.meat,
      topping4: orderValues.pineapple,
      special: orderValues.special,
      gf: orderValues.gf,
    }

    setOrders(...orders, newOrder )
    console.log(newOrder)
    setOrderValues(initialValues)
  }

useEffect(() => {
  schema.isValid(orderValues).then(valid => setDisabled(!valid))
}, [orderValues])


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
        <Form 
        values={orderValues} 
        change={changeForm} 
        submit={submitForm} 
        errors={errors} 
        disabled={disabled}
        />
      </Route>
    </>
  );
};
export default App;
