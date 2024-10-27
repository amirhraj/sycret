import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import Header from './header';
import './stules/CheckoutPage.css'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useProduct } from './ProductContext';
import Footer from './Footer';

const CheckoutPage = () => {
    
        const { register, handleSubmit, formState: { errors } } = useForm();
        const navigate = useNavigate();
        const { product } = useProduct();
       
   
      
        console.log(product)

      
        const onSubmit = data => {
          console.log(data);
          navigate('/pay');
          // Здесь можно вызвать метод OSSale для сохранения данных
        }
  return (
    <div>
        <Header/>
        <div className='checkoutPage'>
            <h1>Оформление</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                            <div className="form-group">
                                <label htmlFor="name">Имя</label>
                                <input
                                id="name"
                                {...register('name', { required: true })}
                                className={errors.name ? 'input-error' : ''}
                                 placeholder='Ваше имя'
                                />
                                {errors.name && <p className="error-message">Это поле обязательно</p>}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="phone">Телефон</label>
                                <InputMask
                                mask="+7 (999) 999-99-99"
                                id="phone"
                                {...register('phone', { required: true, 
                                    pattern:{
                                        value:/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
                                        message: "Некорректный номер"
                                    }

                                })}
                                className={errors.phone ? 'input-error' : ''}
                                placeholder='+7 (___) ___-__-__'
                                />
                                {errors.phone && <p className="error-message">Это поле обязательно</p>}
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Почта</label>
                                <input
                                id="email"
                                type="email"
                                {...register('email', { required: true })}
                                className={errors.email ? 'input-error' : ''}
                                 placeholder='Ваш email'
                                />
                                {errors.email && <p className="error-message">Это поле обязательно</p>}
                            </div>
                            <div className='price'>
                                    <p>Покупка сертификата на сумму {product.PRICE.split(".")[0]}</p>
                                    <p>Цена:  {product.REC_SUM.split(".")[0]}</p>
                            </div>
                            
                            <div className="button-group">
                                <button type="button" onClick={() => navigate(-1)} className="button">Назад</button>
                              
                                 <button type="submit" className="button primary">
                                 {/* <Link to='/pay'> */}
                                    Оплатить
                                {/* </Link> */}
                                </button>
                              
                                
                            </div>
    
                 </form>
        </div>
    <Footer/>
    </div>
  );
};

export default CheckoutPage