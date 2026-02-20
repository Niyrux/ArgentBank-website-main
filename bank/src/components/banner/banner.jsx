import React from 'react'
import './banner.css';

export default function banner({ Firsth, Secondh, Thirdh, text }) {
  return (
    <div className="hero">
      <section className="hero-content">
        <p className="subtitle">{Firsth}</p>
        <p className="subtitle">{Secondh}</p>
        <p className="subtitle">{Thirdh}</p>
        <p className="text">{text}</p>
      </section>
    </div>
  )
}
