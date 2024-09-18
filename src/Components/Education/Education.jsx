import "./Education.scss"

const Education = () => {
  return (
    <>
      <div className="education" id="education">
       <h1>Education</h1>
       <br />
       <div className="info">
       <div className="card">
          <h2>2021-2025</h2>
          <h3>Btech in Computer Science And Engineering</h3>
          <p>University Institute of Engineering and Technology , Mararshi Dayanand University </p>
          <p>CGPA : 8.9 </p>
       </div>
       <div className="card">
          <h2>2020-2021</h2>
          <h3>Class 12th </h3>
          <p>Modern Vidya Niketan , Faridabad</p>
          <p className="cgpa">Percentage : 96%</p>
       </div>
       <div className="card">
          <h2>2019-2020</h2>
          <h3>Class 10th </h3>
          <p>Modern Vidya Niketan , Faridabad</p>
          <p>Percentage : 94%</p>
       </div>
       </div>
      </div>
    </>
  )
}

export default Education
