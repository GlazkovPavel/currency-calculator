import React from "react";
import './Main.css';
//import {Card} from "../Card/Card";

export function Main(props) {


  return(
    <section className="container">
      {/*{props.isLoading && <Preloader />}*/}
      <div className="container__item">
        <img alt="Флаг России"/>
        <p>Цена за один Евро</p>
        <input className='container__item' value={props.currency.rates.RUB}/>
      </div>
      <div className="container__item">
        <img alt="Флаг USA"/>
        <p>Цена за один Доллар</p>
        <input className='container__item' value={1 /props.currency.rates.USD * props.currency.rates.RUB}/>
      </div>
      <p className='container__data'>Актуальный курс валют на {props.currency.date}</p>
    </section>
  )
}
