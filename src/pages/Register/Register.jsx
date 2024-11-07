import React from 'react'
import './Register.scss'

const Register = () => {



    return (
        <section className='register'>
            <div className="container">
                <form className="register__form" >
                    <h1 className='register__title'>Регистрация</h1>
                    <input placeholder='Эл.почта' type="email"/>
                    <input placeholder='Имя' type="text"/>
                    <input placeholder='Ваш возраст' type="number"/>
                    <button type="button" className='register__btn' >Сгенерировать пароль</button>
                    <div className='register__block'>
                        <input placeholder='Придумайте пароль' type={ 'password'}/>
                    </div>
                    <div className='register__block'>
                        <input placeholder='Повторите пароль' type='password'/>
                    </div>
                    <button type="submit">Зарегистрироваться</button>
                </form>
            </div>
        </section>
    );
};

export default Register;