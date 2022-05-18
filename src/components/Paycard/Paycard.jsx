import React from 'react'
import "./paycard.css"
export const Paycard = (props) => {
  return (
    <div className='container' style={{ backgroundColor: `${props.backgroundColor}`}}>
        <div className="left">
            <div className="date"><p>{props.date}</p></div>
            <div className='btn'>{props.buttonText}</div>
            <div className="title"><p>{props.title}</p></div>
            <div className="category">{props.category}</div>
        </div>
        <div className="right">
            <div className="logo">
                <img src={props.logoSrc} alt="" />
            </div>
            <div className="icon">
                <img src="https://cdn-icons-png.flaticon.com/512/545/545682.png" alt="" />
            </div>
        </div>
    </div>
  )
}
// FOR AMAZON : 
// BG =  backgroundColor: "rgb(225, 169, 29)"
// LOGO = "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
