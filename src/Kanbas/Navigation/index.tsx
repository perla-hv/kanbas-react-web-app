import { Link, useLocation } from "react-router-dom";
import "./index.css";
import logo from './NEULogo.png'
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaRegClock, FaDesktop, FaExternalLinkSquareAlt, FaQuestionCircle, FaEnvelopeOpenText } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="wd-account fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <FaEnvelopeOpenText className="fs-2" /> },
    { label: "History",  icon: <FaRegClock className="fs-2" /> },
    { label: "Studio",  icon: <FaDesktop className="fs-2" /> },
    { label: "Commons",  icon: <FaExternalLinkSquareAlt className="fs-2" /> },
    { label: "Help",  icon: <FaQuestionCircle className="fs-2" /> },

  ];
  
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li><Link to="http://northeastern.edu"><img src={logo} alt="NEU Logo"/></Link></li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}>
            <div>{link.icon}</div>
            <div>{link.label}</div>
          </Link>
        </li>
      ))}
    </ul> 
  );
}
export default KanbasNavigation;