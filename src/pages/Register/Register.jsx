import React from 'react'
import './Register.scss'
import {useDispatch, useSelector} from 'react-redux'
import {useForm} from "react-hook-form";
import HoverRating from "../../Rating";
import AccordionUsage from "../../accordion";
import {Navigate} from "react-router-dom";

const Register = () => {

    const {user, status, error} = useSelector(s => s.user)

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({mode: 'onBlur'})

    const submitForm = (data) => {
        const {confirmPassword, ...other} = data
        console.log(other)

    }

    if (status === 'success'){
       return <Navigate to="/"/>
    }

    return (
        <section className='register'>
            <div className="container">
                <form className="register__form" onSubmit={handleSubmit(submitForm)}>
                    <h1 className='register__title'>Регистрация</h1>
                    <input {...register('email')} placeholder='Эл.почта' type="email"/>
                    <input {...register('name')} placeholder='Имя' type="text"/>
                    <input {...register('age')} placeholder='Ваш возраст' type="number"/>
                    <button type="button" className='register__btn' >Сгенерировать пароль</button>
                    <div className='register__block'>
                        <input {...register('password')} placeholder='Придумайте пароль' type='password'/>
                    </div>
                    <div className='register__block'>
                        <input {...register('confirmPassword')} placeholder='Повторите пароль' type='password'/>
                    </div>
                    <button type="submit">Зарегистрироваться</button>
                    {/*<HoverRating/>*/}
                    {/*<AccordionUsage/>*/}
                </form>
            </div>
        </section>
    );
};

export default Register;