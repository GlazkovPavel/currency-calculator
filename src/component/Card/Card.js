import React from "react";
import './Card.css';

export function Card(props){
  return(
    <li className="container__item" >
        <p className="container__item-title">{props.data.RUB}</p>


    </li>
  )
}
