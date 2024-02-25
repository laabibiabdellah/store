import { NavLink } from "react-router-dom";
import "boxicons";
import logo from "../../../public/logo.png";
import { useSelector } from "react-redux";

export default function Nav() {
  const qty = useSelector((state) => state.product[0].qty);
  return (
    <div className="w-100 bg-light position-fixed z-1">
      <nav className=" container navbar navbar-expand-lg navbar-light d-flex align-content-center justify-content-between">
        <NavLink className="navbar-brand" to={"/"}>
          <img src={logo} style={{ width: 3.7 + "rem" }} alt="..." />
        </NavLink>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="w-100 navbar-nav d-flex justify-content-between">
            <div className="d-flex align-items-center justify-content-center">
              <li className="nav-item active">
                <NavLink className="nav-link" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"search"}>
                  Search
                </NavLink>
              </li>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <li className="nav-item d-flex align-content-center justify-content-center">
                <div className="position-relative d-flex align-items-center justify-content-center">
                  <box-icon
                    id="shopping-bag"
                    name="shopping-bag"
                    size="md"
                  ></box-icon>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">
                    {qty}
                  </span>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
