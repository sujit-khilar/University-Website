import React from 'react'
import "./programs.css"
import program_icon_1 from "../../assets/program-icon-1.png"
import program_icon_2 from "../../assets/program-icon-2.png"
import program_icon_3 from "../../assets/program-icon-3.png"

const Programs = () => {
  return (
    <div className='programs' id=''>
      <div className="program">
        <img src="https://st5.depositphotos.com/10539404/66174/i/450/depositphotos_661745664-stock-photo-indian-university-male-student-celebrating.jpg" alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Post Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src="https://www.visualsstock.com/images/Low/4/AK50370.jpg" alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src="https://img.freepik.com/premium-photo/happy-indian-university-student-graduation-gown-cap-holding-diploma-certificate_255667-21400.jpg?size=626&ext=jpg" alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Masters Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Programs