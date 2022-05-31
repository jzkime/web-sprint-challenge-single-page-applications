import React, { useState, useEffect } from "react";
import './App.css'
import { Link, Route, useHistory } from 'react-router-dom'
import Form from './Form'
import HomePage from './HomePage'
import OrderSent from "./OrderSent";
import axios from 'axios'
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

  const history = useHistory();

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
      pepperoni: orderValues.pepperoni,
      veggie: orderValues.veggie,
      meat: orderValues.meat,
      pineapple: orderValues.pineapple,
      cheese: (!orderValues.pepperoni && !orderValues.veggie && !orderValues.meat && !orderValues.pineapple) ? true : false,
      special: orderValues.special,
      gf: orderValues.gf,
    }

    axios.post('https://reqres.in/api/orders', newOrder).then(res => {
      setOrders([...orders, res.data])
    }).catch(err => console.error(err))

    history.push('/orders')
    setOrderValues(initialValues)
  }

useEffect(() => {
  schema.isValid(orderValues).then(valid => setDisabled(!valid))
}, [orderValues])


  return (
    <>
    <section id='header'>
      <h1>Lambda Eats</h1>
      <Link to='/' name='headerHome'>Home</Link>
      <Link to='/pizza' id='header-pizza'>Order Online!</Link>
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

      <Route path='/orders'>
        <OrderSent order={orders}/>
      </Route>
    </>
  );
};
export default App;
