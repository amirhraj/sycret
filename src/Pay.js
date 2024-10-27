// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Header from './header';
import './stules/middle_contnet.css'
import { Link } from 'react-router-dom';
// import Card  from './media/card.png'
// import { Link } from 'react-router-dom';
// import {  Route, Routes } from 'react-router-dom';
// import CheckoutPage from './CheckoutPage'; 
// import { useProduct } from './ProductContext';
import Footer from './Footer'
import './stules/pay.css'

const ApiComponent = () => {


  return (
    <div>
      <Header/>



  
      <div className='middle_pay_content'>
        Оплата
            <div className="loading-text">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
        
      </div>
        <div className='link_contain'>
                <Link className='link_button' to='/'>
                    <button className='button'>
                            Назад
                    </button>
                
                </Link>
        </div>

     <Footer/>
    </div>
  );
};

export default ApiComponent;


