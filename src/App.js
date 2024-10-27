import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header';
import './stules/middle_contnet.css'
import Card  from './media/card.png'
import { Link } from 'react-router-dom';
import {  Route, Routes } from 'react-router-dom';
import CheckoutPage from './CheckoutPage'; 
import { useProduct } from './ProductContext';
import Footer from './Footer'

const ApiComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setProduct } = useProduct();

//   const fetchData = async () => {
//     const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//     const targetUrl = 'https://sycret.ru/service/api/api';
//     try {
//       const response = await axios.get(proxyUrl + targetUrl, {
//         methodName: 'OSGetGoodList',
//         ApiKey: '011ba11bdcad4fa396660c2ec447ef14'
//       }, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
  
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  
//   fetchData();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('https://sycret.ru/service/api/api', {}, {
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'ApiKey': '011ba11bdcad4fa396660c2ec447ef14',
        //     'MethodName': 'OSGetGoodList'
        //   }
        // });

        // const response = await axios.get('https://sycret.ru/service/api/api', {
        //   methodName: 'OSGetGoodList',
        //   // CLApiKey: '011ba11bdcad4fa396660c2ec447ef14',
        //   // "MethodName": "TestMethodName",
        //   ApiKey: '011ba11bdcad4fa396660c2ec447ef14'
        // }, {
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // });


        const response = await axios.post('/service/api/api', {
          methodName: 'OSGetGoodList',
          // ClCompanyId:"62032",
          'ismob':0,
          // "Data":'course',
          // CLApiKey: '011ba11bdcad4fa396660c2ec447ef14',
          ApiKey: '011ba11bdcad4fa396660c2ec447ef14'
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        console.log(response.data)

        // const response =  await  axios.post('https://sycret.ru/service?apikey=011ba11bdcad4fa396660c2ec447ef14#/', {
        //    'MethodName': 'OSGetGoodList'
        // })

        if (response.data.result === 0) {
          setData(response.data.data);
        } else {
          setError(response.data.resultdescription);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Header/>


      <div className='middle_body_content'>
            <h1>Подарочные сертификаты</h1>
          <div className='middle_body_conteiner'>
          {data.map((item) => (
          
                        <div key={item.id} className='card_conteiner'>
                                <div className='card'>
                                    <div className='img'>
                                        <img src={Card} alt="Подарочный сертификат" />
                                        <div className='card_sales'>{item.DISCOUNT.split(".")[0]}%</div>         
                                    </div>
                                      <h4>{item.NAME}</h4>
                                     <p><span className='card_price'>{item.REC_SUM}р</span> <span><s>{item.PRICE}р</s></span></p>
                                     <p></p>

                                 </div>
                                 <Link Link to= "/registration"  onClick={() => setProduct(item)} >
                                        <button className='gift_gertificate'>
                                            Оформить
                                        </button>
                                </Link> 

                                {/* https://localhost:3000/%D0%BE%D1%84%D0%BE%D1%80%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5 */}

                                {/* <a href="https://localhost:3000/registration">
                                        <button className='gift_gertificate'>
                                            Оформить
                                        </button>
                                </a> */}
                          </div>
                        
            
                    ))}
          </div>
            
         
      </div>
                  <Footer/>
    </div>
  );
};

export default ApiComponent;



            // <li key={item.Id}>
                //   <h2>{item.Name}</h2>
                //   <p>{item.Description}</p>
                //   <p>Price: {item.Price}</p>
                //   <p>Summa: {item.Summa}</p>
                //   <p>Discount: {item.Discount}</p>
                // </li>