import React, { useEffect, useRef, useState } from 'react';
import './Style.css';
import C1 from './ae2.png';
import C2 from './card2.jpg';
import C3 from './americanexpress.webp';
import C4 from './blue1.jpg'
import C5 from './card5.jpg'
import C6 from './mastercard.jpg'
import Travel from './travel.png'
import Shop from './shopping.png'
import Gold from './goldcard.png'
import Platinum from './platinum card.png'
import C7 from './cc1.png'
import C8 from './cc5.png'
import { useNavigate } from 'react-router-dom';
import details from './details.js';



function CreditCard() {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const handlerClick = (imgName,infoName) =>
  {  
    navigate('/application', {
    state: {
    img:imgName,
    info2:infoName
},
});


// useEffect(()=>{
//   window.scrollTo(0, 0);
// },[])  
};


const scroll = useRef(null);



  const [image , setImage] = useState({})
  // console.log("🚀 ~ file: creditcard.js:33 ~ CreditCard ~ Imḁge:", image)
  
  const cardSlot1 = (path,title2,details2) => {
          if (image?.cardslot2?.path !== path && image?.cardslot1?.path !== path) {
            // console.log("🚀 ~ file: creditcard.js:33 ~ CreditCard ~ Image:", image)
            // console.log("🚀 ~ file: creditcard.js:33 ~ CreditCard ~ details:", details2)
            setImage({...image,cardslot1:{path,title2,details2}})
          }
  }

 const cardSlot2 = (path,title2,details2) => {
      if(image?.cardslot1?.path !== path && image?.cardslot2?.path !== path ){
      //  console.log("🚀 ~ file: creditcard.js:33 ~ CreditCard ~ Imḁge2:", image)
      //  console.log("🚀 ~ file: creditcard.js:33 ~ CreditCard ~ details2:", details2)
        setImage({...image,cardslot2:{path,title2,details2}})
      }
      // console.log("🚀 ~ file: creditcard.js:33 ~ CreditCard ~ path2:", path)
  }





  useEffect(() => {
    const containerElement = containerRef.current;
    const Cards = containerElement.querySelectorAll('.creditcard2');

    const totalHeight = Cards[0].offsetHeight * 3.5;
    // containerElement.style.height = `${totalHeight}px`;

    const spreadAngle = -10; //degrees
    const spreadDistance = 25; //pixels

    Cards.forEach((card, index) => {
      const rotationAngle = spreadAngle * (index - (Cards.length - 1) / 2);
      const translationY = -index * spreadDistance;
      card.style.transform = `rotate(${rotationAngle}deg) translateY(${translationY}px)`;
    });
  }, []);

  return (

  <>
    <div className="container2" ref={containerRef} >
     <div className='collection'>
      <div className="creditcard2">
        <img src={C6} alt="Credit Card 1" />
      </div>
      <div className="creditcard2">
        <img src={C2} alt="Credit Card 2" />
      </div>
      <div className="creditcard2">
        <img src={C3} alt="Credit Card 3" />
      </div>
      <div className="creditcard2">
        <img src={C4} alt="Credit Card 4" />
      </div>
      <div className="creditcard2">
        <img src={C1} alt="Credit Card 5" />
      </div>
      <div className="creditcard2">
        <img src={C5} alt="Credit Card 6" />
      </div>
     </div>
     <div className='title2'>
        <div className='intitle'>
        <div id='first'>
            <b><i>Incredible Cards For</i></b>
         </div>
         <div id='second'>
            <b><i>Incredible Journey</i></b>
         </div>
        </div>

     </div>

    </div>
    <div className='applycredit'>
       <div className='your'>
         <i>Your Journey Starts From Here....</i>
       </div>
       <div className='cardsbox'>
          <div className='cardsboxin'>
            <div className='c1'>
              <div className='creditcard'>
                <img src={Travel} alt="" />
              </div>
              <div className='textbox'>
                 <b>{details.title1}</b>
              </div>
              <div className='text2'>
                <ul>
                {details.traveldetails.map((d)=> <li>{d}</li>)}
                </ul>
                <div onClick={()=>handlerClick(Travel,"RAL Bank Travel Credit card")} className='Apply'><b>Apply</b></div>
                <div className='Slots'>
                  <div><b>COMPARE:</b></div>
                  <button onClick={()=>{cardSlot1(Travel,details.title1,(details.traveldetails).map((d)=> <li>{d}</li>))
                    scroll.current.scrollIntoView({behaviour:'smooth'})
                    }}>Slot1</button>
                  <button onClick={()=>{cardSlot2(Travel,details.title1,(details.traveldetails).map((d)=> <li>{d}</li>))
                    scroll.current.scrollIntoView({behaviour:'smooth'})
                    }}>Slot2</button>
                </div>
 
              </div>
            </div>
            <div className='c1'>
               <div className='creditcard'>
                <img src={Shop} alt="" />
               </div>
               <div className='textbox'>
                 <b>{details.title2}</b>
               </div>
               <div className='text2'>
                <ul>
                {details.shopdetails.map((d)=> <li>{d}</li>)}
                </ul>
                <div onClick={()=>handlerClick(Shop, "RAL Bank Shopping Credit Card")} className='Apply'><b>Apply</b></div>
                <div className='Slots'>
                  <div><b>COMPARE:</b></div>
                  <button onClick={()=>{cardSlot1(Shop,details.title2,(details.shopdetails).map((d)=> <li>{d}</li>))
                    scroll.current.scrollIntoView({behaviour:'smooth'})
                }}>Slot1</button>
                  <button onClick={()=>{cardSlot2(Shop,details.title2,(details.shopdetails).map((d)=> <li>{d}</li>))
                    scroll.current.scrollIntoView({behaviour:'smooth'})
                }}>Slot2</button>
                </div>
               </div>
            </div>
            <div className="c1" >
              <div className='creditcard'>
                <img src={C7} alt="" />
               </div>
               <div className='textbox'>
                 <b>{details.title5}</b>
               </div>
               <div className='text2'>
                <ul>
                {details.mastercard.map((d)=> <li>{d}</li>)}
                </ul>
                <div onClick={()=>handlerClick(C7, "RAL Bank Shopping Credit Card")} className='Apply'><b>Apply</b></div>
                <div className='Slots'>
                  <div><b>COMPARE:</b></div>
                  <button onClick={()=>{cardSlot1(C7,details.title5,(details.mastercard).map((d)=> <li>{d}</li>))
                    scroll.current.scrollIntoView({behaviour:'smooth'})
                     }}>Slot1</button>
                  <button onClick={()=>{cardSlot2(C7,details.title5,(details.mastercard).map((d)=> <li>{d}</li>))
                    scroll.current.scrollIntoView({behaviour:'smooth'})
                     }}>Slot2</button>
                </div>
               </div>
            </div>
          </div>
       </div>
       <div className='cardsbox'>
        <div className='cardsboxin'>
          <div className='c1'>
            <div className='creditcard'>
              <img src={Gold} alt="" />
            </div>
            <div className='textbox'>
              <b>{details.title3}</b>
            </div>
            <div className='text2'>
              <ul>
              {details.golddetails.map((d)=> <li>{d}</li>)}
              </ul>
              <div onClick={()=>handlerClick(Gold,"RAL Bank Premium Gold card")} className='Apply'><b>Apply</b></div>
              <div className='Slots'>
                  <div><b>COMPARE:</b></div>
                  <button onClick={()=>{cardSlot1(Gold,details.title3,(details.golddetails).map((d)=> <li>{d}</li>))
                    scroll.current.scrollIntoView({behaviour:'smooth'})
                  }}>Slot1</button>
                  <button onClick={()=>{cardSlot2(Gold,details.title3,(details.golddetails).map((d)=> <li>{d}</li>))
                    scroll.current.scrollIntoView({behaviour:'smooth'})
                  }}>Slot2</button>
              </div>

            </div>
          </div>
        <div className='c1'>
            <div className='creditcard'>
             <img src={Platinum} alt="" />
            </div>
            <div className='textbox'>
              <b>{details.title4}</b>
            </div>
            <div className='text2'>
              <ul>
                  {details.platinumdetails.map((d)=> <li>{d}</li>)}
              </ul>
              <div onClick={()=>handlerClick(Platinum,"RAL Bank Platinum Credit Card")} className='Apply'><b>Apply</b></div>
              <div className='Slots'>
                  <div><b>COMPARE:</b></div>
                  <button onClick={()=>{
                    cardSlot1(Platinum,details.title4,(details.platinumdetails).map((d)=> <li>{d}</li>))
                    scroll.current.scrollIntoView({behaviour:'smooth'})
                    }}>Slot1</button>
                  <button onClick={()=>{
                    cardSlot2(Platinum,details.title4,(details.platinumdetails).map((d)=> <li>{d}</li>))
                    scroll.current.scrollIntoView({behaviour:'smooth'})
                    }}>Slot2</button>
              </div>
 
            </div>
          </div>
          <div className="c1">
          <div className='creditcard'>
              <img src={C8} alt="" />
            </div>
            <div className='textbox'>
              <b>{details.title6}</b>
            </div>
            <div className='text2'>
              <ul>
                  {details.Diner.map((d)=> <li>{d}</li>)}
              </ul>
              <div onClick={()=>handlerClick(C8,"RAL Bank Diners Club Credit Card")} className='Apply'><b>Apply</b></div>
              <div className='Slots'>
                  <div><b>COMPARE:</b></div>
                  <button onClick={()=>{
                    cardSlot1(C8,details.title6,(details.Diner).map((d)=> <li>{d}</li>))
                    scroll.current.scrollIntoView({behaviour:'smooth'})
                    }}>Slot1</button>
                  <button onClick={()=>{cardSlot2(C8,details.title6,(details.Diner).map((d)=> <li>{d}</li>))
                    scroll.current.scrollIntoView({behaviour:'smooth'})               
                    }}>Slot2</button>
              </div>
 
            </div>
          </div>
        </div>
       </div>
    </div>
    <div className="compare" ref={scroll}>
      <div className='comparetitle'>Compare Credit Cards for Best Choice!!</div>
      <div className='comparecards'>
        <div>
          <div className="comparein"><img src={image?.cardslot1?.path} alt="" /></div>
          <div className='cinfo'>
             {image?.cardslot1?.title2}
             {image?.cardslot1?.details2}
             <br />
             {image?.cardslot1?.title2 && <div onClick={()=>handlerClick(image?.cardslot1?.path, image?.cardslot1?.title2)} className='Apply'><b>Apply</b></div>}

          </div>
        </div>

        <div className="plus">VS</div>
      <div className='totalcompare'>
        <div className="comparein"><img className='cimg' src={image?.cardslot2?.path} alt="" /></div>
        <div className='cinfo'>
          {image?.cardslot2?.title2}
          {image?.cardslot2?.details2}
          <br />
          {image?.cardslot2?.title2 && <div onClick={()=>handlerClick(image?.cardslot2?.path, image?.cardslot2?.title2)} className='Apply'><b>Apply</b></div>}
        </div>
      </div>
      </div>
    </div>


    </>

  );
}

export default CreditCard;
