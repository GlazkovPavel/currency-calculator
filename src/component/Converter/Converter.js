import React from "react";
import './Converter.css';
import {Link, useHistory} from "react-router-dom";

export function Converter(props) {

  const [changeEU, setChangeEU] = React.useState('')
  const [resultEU, setResultEU] = React.useState('')

  const [changeDollar, setChangeDollar] = React.useState('')
  const [resultDollar, setResultDollar] = React.useState('')


  const history = useHistory();

  function handleBack(){
    history.goBack()
  }

  function handleChange(e) {
    e.preventDefault();
    setChangeEU(e.target.value)
  }

  const getCurrentCourse = () => {
    setResultEU((changeEU * (props.currency?.rates.RUB))?.toFixed(2))
  }

  function handleChangeDollar(e) {
    e.preventDefault();
    setChangeDollar(e.target.value)
  }

  const getCurrentCourseDollar = () => {
    setResultDollar((changeDollar * (1 /props.currency?.rates.USD * props.currency?.rates.RUB))?.toFixed(2))
  }

  return(
    <section className='container'>
      <h2>Конвертер валют</h2>
      <div className='container__item'>
        <p className='container__text converter__text'>Из евро в рубли</p>
        <input
          type='number'
          placeholder="Введите значение"
          value={changeEU || ''}
          onChange={handleChange}
          className='converter__input'
        />
        <button className='converter__button' onClick={getCurrentCourse}>Конвертировать</button>
        <p className='container__num converter__num'>{resultEU} {resultEU.length !==0 && '₽'}</p>
      </div>
      <div className='container__item'>
        <p className='container__text converter__text'>Из долларов в рубли</p>
        <input
          type='number'
          placeholder="Введите значение"
          value={changeDollar || ''}
          onChange={handleChangeDollar}
          className='converter__input'
        />
        <button className='converter__button' onClick={getCurrentCourseDollar}>Конвертировать</button>
        <p className='container__num converter__num'>{resultDollar} {resultDollar.length !==0 && '₽'}</p>
      </div>


      <Link to="" onClick={handleBack} className="converter__link">Назад</Link>

    </section>
  )
}
