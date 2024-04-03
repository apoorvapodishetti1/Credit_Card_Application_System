import React from 'react';
import Logo from './logo.png';
import './Popup.css';
import Account from './bank.png'
import Card from './atmcard.png'
import Insurance from './family.png'
import Deposit from './purse.png'
import Loan from './moneybag.png'


function Navbar() {



  return (
  <>
    <div className='logobox'>
      <img className='logo' src={Logo} alt="" />
      <div className='menu'>
      <a href="/"><button>Home</button></a>
      <a href=""><button>Support</button></a>
      <a href=""><button>About Us</button></a>
      </div>
    </div>
    <div className="menu2">
      <div className='menu2in'> 
      <div className='fullbutton'>
        <div><img className='buttonimg' src={Account} alt="" /></div>
        <button className='accbutton'>
          Accounts
          <div className="acc">
              <li>Savings Account </li>
              <li>Current Account</li>
              <li>NGO Savings Account</li>
              <li>Safe Deposit Locker</li>
          </div>
        </button>
      </div>
      <div className='fullbutton'>
        <div><img className='buttonimg' src={Card} alt="" /></div>
        <button className='accbutton'>Cards
          <div className="acc">
               <li className='creditsub'>Credit Cards ▸
                  <ul className='inside'>
                    <a className='link' href="/credit"><li>Apply</li></a>
                    <a className='link' href="/HT"><li>Tracking</li></a>
                  </ul>                  
               </li>
              <li>Debit Cards </li>             
              <li>Prepaid Cards </li>
              <li>Transit Cards </li>
              <li>Commercial Credit</li>
              <li>Commercial Debit</li> 
             
          </div>
        </button>
      </div>
      <div className='fullbutton'>
        <div><img className='buttonimg' src={Insurance} alt="" /></div>
        <button className='accbutton'>Insurance
          <div className="acc">
              <li>Life Insurance</li>
              <li>Health  Insurance</li>
              <li>Vehicle Insurance</li>
              <li>General Insurance</li>
              
          </div>
        </button>
      </div>
      <div className='fullbutton'>
        <div><img className='buttonimg' src={Deposit} alt="" /></div>
        <button className='accbutton'>Deposits
          <div className="acc">
              <li>Digital fund deposites </li>
              <li>Fixed deposits </li>
              <li>Recurring deposits</li>
              <li>Tax Save fixed deposits</li>
              <li>Auto fixed deposits</li>
          </div>
        </button>
      </div>
      <div className='fullbutton'>
        <div><img className='buttonimg' src={Loan} alt="" /></div>
        <button className='accbutton'>
        Loans
      <br />
           <div className="acc" id='Cards'>
            <li>24 X 7 Loans </li>
            <li>Home Loans </li>
            <li>Personal Loans </li>
            <li>Car Loans </li>
            <li>Education Loan </li>
           </div>
        </button>

      </div>
      </div>
    </div>
 
  </>
  )
}

export default Navbar;