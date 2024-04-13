import React, { useRef } from 'react';
import { Element } from 'react-scroll';
import './Customer.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.jpg';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.jpg';
import user_4 from '../../assets/user-4.jpg';

const Customer = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <Element name="customer-review"> {/* Add an ID to your section */}
      <div className='customer'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Ken Akpabio</h3>
                    <span>Eket, Akwa ibom</span>
                  </div>
                </div>
                <p>The rind and all, you know that smell when you are chopping green peppers that makes your salivary glands act up? That is in this scent, smells exactly like chopped green peppers</p>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Endurance Okon</h3>
                    <span>Uyo, Akwa ibom</span>
                  </div>
                </div>
                <p>One of the best place to buy fresh fruits and vegetables. All varieties of fruits or vegetables are available here.</p>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Emmanuel Akaninyene</h3>
                    <span>Etinan, Akwa ibom</span>
                  </div>
                </div>
                <p>I always tell my mum to get me corn whenever she goes to the market. Yummy corn, love that it doesn't have salt added.</p>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Jackson Ndubuisi</h3>
                    <span>Essien Udim, Akwa ibom</span>
                  </div>
                </div>
                <p>Always fresh and delivered on time. AND taste like tomatoes should!!</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Element>
  );
}

export default Customer;
