import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
    FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock
} from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import { IoHelpCircleOutline, IoExitOutline } from "react-icons/io5";
function KanbasNavigation() {
    const links = [
        { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
        { label: "Courses", icon: <FaBook className="fs-2" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
        { label: "Inbox", icon: <FaInbox className="fs-2" /> },
        { label: "History", icon: <FaRegClock className="fs-2" /> },
        { label: "Studio", icon: <FaDisplay className="fs-2" /> },
        { label: "Commons", icon: <IoExitOutline className="fs-2" /> },
        { label: "Help", icon: <IoHelpCircleOutline className="fs-2" /> }
    ];
    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation">
            <li>
                <a href="http://northeastern.edu">
                    <img className="wd-kanbas-navigation-img" src="/images/neulogo.png" alt="Logo" />
                </a>
            </li>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}>
                        <span style={{ color: index === 0 && pathname.includes(link.label) ? 'grey' : index === 0 ? 'white' : 'red' }}>
                            {link.icon}
                        </span>
                        <br/>
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
export default KanbasNavigation;