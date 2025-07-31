import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = () => {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

}
const slideBackward = () => {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    
}


  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Winnie Odhiambo</h3>
                            <span>California USA</span>
                        </div>
                    </div>
                    <p>Studying at Maple Ridge Academy was one of the best experiences of my early education. 
                        The caring teachers, friendly environment, and engaging learning activities helped me 
                        grow with confidence and curiosity. It’s a place where every child is valued and encouraged 
                        to do their best.
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Donald Asiago</h3>
                            <span>Nairobi, Kenya</span>
                        </div>
                    </div>
                    <p>Maple Ridge Academy gave me a strong foundation both academically and socially. 
                        The teachers were always kind and patient, and they made learning fun every day. 
                        I still carry the confidence and discipline I learned there in everything I do today.
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Hillary Mutwiri</h3>
                            <span>Grade 5 – Maple Ridge Academy</span>
                        </div>
                    </div>
                    <p>Maple Ridge Academy is the best school ever! 
                        I really enjoy our science and computer lessons. 
                        The teachers are very friendly and make learning fun. 
                        I also love the school library and the sports we play. 
                        Every day feels like a new adventure!
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Joy Mwende</h3>
                            <span>Grade 6 – Maple Ridge Academy</span>
                        </div>
                    </div>
                    <p>I’m proud to be a student at Maple Ridge Academy! 
                        We learn so many interesting things, and our teachers make lessons exciting. 
                        I especially enjoy art and reading time. 
                        It’s a fun school where I’ve made great friends and feel happy every day.
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
