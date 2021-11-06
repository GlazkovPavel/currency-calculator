import React from "react";
import './Main.css';
import dollar from '../../vendor/images/dollar.jpeg';
import euro from '../../vendor/images/logotip-euro.jpeg'
import {Link} from "react-router-dom";


export function Main(props) {

  return(
    <section className="container">
      <h2>Курс валют</h2>
      <div className="container__item">
        <img className="container__image" alt="dollar" src={euro}/>
        <p className="container__text">Цена за один Евро</p>
        <p className='container__num'>{(props.currency?.rates.RUB)?.toFixed(3)} ₽</p>
      </div>
      <div className="container__item">
        <img className="container__image" alt="Флаг USA" src={dollar}/>
        <p className="container__text">Цена за один Доллар</p>
        <p className='container__num'>
          {(1 /props.currency?.rates.USD * props.currency?.rates.RUB)?.toFixed(3)} ₽</p>
      </div>
      <Link to='/converter' className='converter__link'>Перейти в конвертер</Link>
      <p className='container__data'>Актуальный курс валют на {props.currency?.date}</p>
    </section>
  )
}
