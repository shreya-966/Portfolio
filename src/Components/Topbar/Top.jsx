import "./top.scss";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";

const Top = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <div className={"top " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">
              💡codev.
            </a>
            <div className="itemcontainer">
              <PersonIcon className="icon" />
              <span>+91 5489456895</span>
            </div>
            <div className="itemcontainer">
              <EmailIcon className="icon" />
              <span> @shreyasharma120303@gmail.com </span>
            </div>
          </div>

          <div className="right">
            <div className="rightside" onClick={()=>{setMenuOpen(!menuOpen)}}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
