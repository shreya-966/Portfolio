import './menu.scss'

const Menu = ({menuOpen , setMenuOpen}) => {
  return (
    <>
     <div className={"menu " + (menuOpen && "active ")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}><a href="#intro">Home</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#education">Education</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#works">Works</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#testimonials">Testimonials</a></li>
            <li onClick={()=>setMenuOpen(false)}><a href="#contact">Contact</a></li>
        </ul>
     </div> 
    </>
  )
}

export default Menu;
