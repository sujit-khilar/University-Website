import React, { useRef } from 'react'
import './testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user_1.jpg'
import user_2 from '../../assets/user_2.jpg'
import user_3 from '../../assets/user_3.avif'
import user_4 from '../../assets/user_4.jpg'

const Testimonials = () => {

   const slider = useRef();
   let tx=0;

   const slideForward=()=>{
      if(tx > -50){
         tx -= 25
      }
      slider.current.style.transform = `translateX(${tx}%)`;
   }

   const slidebackward=()=>{
      if(tx < 0){
         tx += 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`
   }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slidebackward}/>
      <div className="slider">
         <ul ref={slider}>
            <li>
               <div className="slide">
                  <div className="user-info">
                     <img src={user_1} alt="" />
                     <div>
                        <h3>Gayatri Biswal</h3>
                        <span>Siksha, India</span>
                     </div>
                  </div>
                  <p>Choosing to pursue my degree at Siksha was one of the best decisions  I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
               </div>
            </li>
            <li>
               <div className="slide">
                  <div className="user-info">
                     <img src={user_4} alt="" />
                     <div>
                        <h3>Sujit Khilar</h3>
                        <span>Siksha, India</span>
                     </div>
                  </div>
                  <p>Choosing to pursue my degree at Siksha was one of the best decisions  I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
               </div>
            </li>
            <li>
               <div className="slide">
                  <div className="user-info">
                     <img src={user_2} alt="" />
                     <div>
                        <h3>Subhashree Khuntia</h3>
                        <span>Siksha, India</span>
                     </div>
                  </div>
                  <p>Choosing to pursue my degree at Siksha was one of the best decisions  I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
               </div>
            </li>
            <li>
               <div className="slide">
                  <div className="user-info">
                     <img src={user_3} alt="" />
                     <div>
                        <h3>Sankarshan Dhal</h3>
                        <span>Siksha, India</span>
                     </div>
                  </div>
                  <p>Choosing to pursue my degree at Siksha was one of the best decisions  I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
               </div>
            </li>
         </ul>
      </div>
    </div>
  )
}

export default Testimonials