import { Link } from "react-router-dom";
import "../App.css";
const Header = () => {
  return (
    <header className="header">
      <h2>Header</h2>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/signup"}>
          <button>Signup/Login</button>
        </Link>
        {/* <Link to={"/login"}>
          <button>Login</button>
        </Link> */}
      </nav>
    </header>
  );
};

export default Header;
