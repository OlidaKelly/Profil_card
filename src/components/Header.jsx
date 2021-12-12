import "./Header.css";
import logo from "./../assets/logo.png";

export const Header = () => {
  return (
    <header className="header-div">
      <img className="header-img" src={logo} alt="logo CiviTime" />
    </header>
  )
}
