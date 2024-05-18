import React from 'react'
import "./campus.css"
import gallery_1 from '../../assets/gallery_1.jpeg'
import gallery_2 from '../../assets/gallery_2.jpeg'
import gallery_3 from '../../assets/gallery_3.jpeg'
import gallery_4 from '../../assets/gallery_4.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
        <img src={gallery_2} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus