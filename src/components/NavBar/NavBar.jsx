import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar__akindoju moveInUp">Akindoju</div>
      <div>
        <ul className="navBar__items">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
