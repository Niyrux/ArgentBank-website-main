import React from 'react'
import Banner from '../../components/banner/banner'
import Card from '../../components/card/card'
import Chat from '../../assets/icon-chat.webp'
import Money from '../../assets/icon-money.webp'
import Security from '../../assets/icon-security.webp'
import './accueil.css'

function accueil() {
  return (
    <div>
      <div>
        <Banner
          Firsth={"No fees."}
          Secondh={"No minimum deposit."}
          Thirdh={"High interest rates."}
          text={"Open a savings account with Argent Bank today!"}
        />
      </div>
      <div className="features">
        <Card
          img={Chat}
          title={"You are our #1 priority"}
          text={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."}
          alt={"icon chat"}
        />
        <Card
          img={Money}
          title={"More savings means higher rates"}
          text={" The more you save with us, the higher your interest rate will be!"}
          alt={"icon-money"} />
        <Card
          img={Security}
          title={"Security you can trust"}
          text={"We use top of the line encryption to make sure your data and money is always safe."}
          alt={"icon-security"} />
      </div>
    </div>

  )
}

export default accueil