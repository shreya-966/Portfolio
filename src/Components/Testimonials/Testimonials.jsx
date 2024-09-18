import './testimonials.scss'

const Testimonials = () => {
  const data = [
    {
      id: 1,
      duration: "1month",
      heading : "INNOBYTE SERVICES",
      title: "Web Developer Intern",
      desc: "Designed a website for a GuestHouse service provider. Included details in a innovative way with a contact form for feedback from customers  ",
    },
    {
      id: 2,
      duration: "1month",
      title: "Web Developer Intern",
      heading : "IBM ",
      desc:
        " Designed a website as a solution on one of the the 17 sustainalble web development goals and provided our solutions as to what we can do to maintain sustainability",
      featured: true,
    },
    {
      id: 3,
      heading : "INTERNPE",
      duration: "1month",
      title: "Web Developer Intern",
      desc:
        " During my time as an intern there , I accomplished tasks week wise that helped in increasing the knowledge of frontend  technologies and create an expertise in those technologies",
    },
  ];
  return (
    <>
      <div className="testimonials" id='testimonials'>
        <h1>Internship Experience</h1>
        <div className="container">
        {data.map((d)=>{
          return(
            <div className={d.featured ? "card featured " : "card" }>
            <div className="top1">
            <h2>{d.heading}</h2>
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.title}</h3>
              <h4>{d.duration}</h4>
            </div>
          </div>
          )
        })}
        </div>
      </div>
    </>
  )
}

export default Testimonials;
