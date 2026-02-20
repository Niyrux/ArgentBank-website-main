import React from 'react'
import './card.css'

export default function card({img,title,text,alt}) {
  return (
    <div className="feature-item">
    <img src={img} alt={alt} className="feature-icon" />
    <h3 className="feature-item-title">{title}</h3>
    <p>
     {text}
    </p>
  </div>
  )
}
