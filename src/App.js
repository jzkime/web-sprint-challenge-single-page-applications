import React, { useState } from "react";
import './App.css'
import { Link, Route } from 'react-router-dom'
import Form from './Form'
import HomePage from './HomePage'

const initialValues = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: "",
}

const App = () => {
  const [ orderValues, setOrderValues ] = useState(initialValues)


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
        <Form />
      </Route>
    </>
  );
};
export default App;
