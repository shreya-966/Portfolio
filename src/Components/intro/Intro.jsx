import './intro.scss'

const Intro = () => {

  return (
    <>
      <div className="intro" id='intro'>
          <div className="left">
            <div className="imgContainer">
              <img src="/assets/1.png" alt="alternate" />
            </div>
          </div>
          <div className="right">
            <div className="wrapper">
              <h2>Hello There , I'm </h2>
              <h1>Shreya Sharma</h1>
              <h3>FRONTEND <span> DEVELOPER </span></h3>
            </div>
            <a href="#portfolio"><img src="/assets/down.png" alt="down arrow" /></a>
          </div>
      </div>
    </>
  )
}

export default Intro;
