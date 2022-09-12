import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { logout } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/UI/Button";
import "../StyleNavDropDown.css";
import assets from "../../assets";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const logoutHandler = () => {
    dispatch(logout());
  };
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={assets.apitestLogo} className="logoImg"/>
        </NavLink>
        <Bars
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        />
        {userInfo ? (
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
            onClick={() => {
              setIsNavExpanded(false);
            }}
          >
            <ul>
              <li>
                <Link to="/my-app">Mental Game</Link>
              </li>
              <li>
                <Link to="/verbal">Verbal</Link>
              </li>
              <li>
                <Link to="/quantitative">Quantitative</Link>
              </li>
              <li>
                <Button onClick={logoutHandler}>Logout</Button>
              </li>
            </ul>
          </div>
        ) : (
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
            onClick={() => {
              setIsNavExpanded(false);
            }}
          >
            <ul>
              <li>
                <Link to="/auth">Sign In</Link>
              </li>
            </ul>
          </div>
        )}

        {userInfo ? (
          <>
            <NavMenu>
              <NavLink
                to="/my-app"
                activeStyle={{
                  fontWeight: "bold",
                  color: "blue",
                }}
              >
                Mental
              </NavLink>
              <NavLink
                to="/verbal"
                activeStyle={{
                  fontWeight: "bold",
                  color: "blue",
                }}
              >
                Verbal
              </NavLink>
              <NavLink
                to="/quantitative"
                activeStyle={{
                  fontWeight: "bold",
                  color: "blue",
                }}
              >
                Quantitative
              </NavLink>
              <Button onClick={logoutHandler}>Logout</Button>
            </NavMenu>
          </>
        ) : (
          <>
            <NavBtn>
              <NavBtnLink to="/auth">Sign In</NavBtnLink>
            </NavBtn>
          </>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
