import React from 'react'
import "./view.css"

export default function view({ Argent, money, current }) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{Argent}</h3>
                <p className="account-amount">{money}</p>
                <p className="account-amount-description">{current}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )
}
