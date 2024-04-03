import React, { useState } from 'react'
import Bank from './cardwallpaper.jpg'
import Secure from './secure.png'
import Fraud from './fraud.png'
import Reward from './gift.png'
import Wifi from './wifi.png'
import Lowinterest from './low.png'
import Fee from './nofee.png'

// import Bank1 from './bankworkwallpaper.png'
// import Bank2 from './b3.jpg'
// import Bank3 from './b4.jpg'

 
const Home=()=>{

  const [selected,setSelected] = useState(null);
  const Toggle= (e) => {
     if (selected == e){
      return setSelected(null);
     }
     setSelected(e);
  }



  return(
  <>
    <div className="slider">
      <div className='walltext'>The Bank For <br /> Changing a World</div>
      <img className='walltextimg' src={Bank} alt="" />
    </div>
    <div className="benefits">
      <div className='benefitstitle'>Benefits</div>
      <div className="benefitsinfo">
        <div className='left'>
          <img src={Secure} alt="" />
          <div className='caption1'>Purchase Protection For Credit Cards...  </div>
        </div>
        <div className='right'>
          <img src={Fraud} alt="" />
          <div className='caption2'>Fraud Protection from Third-Party Users</div>
        
        </div>
        <div className='left'>
          <img src={Reward} alt="" />
          <div className='caption1'>Rewards and Services for every Card purchase</div>
        
        </div>
        <div className='right'>
          <img src={Wifi} alt="" />
          <div className='caption2'>Contactless Payments using Wifi cards</div>
        
        </div>
        <div className='left'>
          <img src={Lowinterest} alt="" />
          <div className='caption1'>Provide Cards at very Low Interest Rates</div>
        
        </div>
        <div className='right'>
          <img src={Fee} alt="" />
          <div className='caption2'>No Joining or Annual Fees while Applying </div>
        </div>
      </div>
    </div>
    <div className='faqtitle'>FAQ'S</div>
    <div className="FAQ">
      <div className="accordian">
        {data.map((item,e)=>(
          <div className="item">
            <div className="titleacc" onClick={()=>Toggle(e)}>
              <h2>{item.question}</h2>
              <span>{selected === e ? '⮙' : '⮛'}</span>
            </div>
            <div className={selected === e? 'content show' : 'content' }>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>


    
  </>  
  )

}

const data = [
  {
    question: "What is Credit Card ?",
    answer: " A credit card is a type of credit facility, provided by banks that allow customers to borrow funds within a pre-approved credit limit. It enables customers to make purchase transactions on goods and services.The credit card limit is determined by the credit card issuer based on factors such as income and credit score, which also decides the credit limit. The credit card information includes credit card number, cardholder’s name, expiration date, signature, CVC code, etc.",
  },
  {
    question: "Why is Credit Card Necessary ?",
    answer: "Using a credit card can provide more security than carrying cash or using a debit card, it can provide a financial cushion to help you handle emergencies and Paying with a credit card can help protect you in other ways. For instance, credit cards that offer extended warranties, or purchase protection for lost or stolen items you purchase with the card, can save you money and headaches. ",
  },
  {
    question: "What are the reward points and how can I use them ?",
    answer: " Reward Points are basically used to encourage you to make greater use of Credit Cards and Debit Cards. Once you accumulate specific points, you are given a reward or certain benefits. These benefits are often in the form of discounts or cash backs.Once you win specific Reward Points, it is important to redeem them. Usually, Reward Points are easy to redeem. They can be redeemed online, following an easy procedure.",
  },
  {
    question: "What does my Credit Card score need to be ?",
    answer: "A score of 750 and above is considered a good score. This helps you get quicker approvals for your Credit Card. It signifies that you have maintained a healthy credit history and you can manage your credit well by repaying the balance on time, proving that you are a trustworthy individual who can pay off your debt in time.",
  },
  {
    question: "Do credit cards charge interest rates for non-payment ?",
    answer: "Yes, credit card providers do charge cardholders with penalties if they are unable to pay the due amount on time. Cardholders are usually charged with an interest of 3-4% on their outstanding amount. The amount to be paid is calculated based on the formula:  (Number of days counted from the date of transaction made X  Entire outstanding amount X Interest rate per month X  12 months)/365." ,   
  }
]





export default Home;




