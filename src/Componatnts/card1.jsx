import React from 'react';
import './card1.css'
import Arrow from '../Assets/ArrowContainer.svg'

const Card1 = (props) => {
    return ( 
        <>
        <div className='card1_div'>
        <img className='card1_icon' src={props.img} alt="" />
        <h3 className='card1_h3'>{props.title}</h3>
        <h4 className='card1_h4'>{props.subtitle}</h4>
        </div>
        </>
     );
}
 
export default Card1;