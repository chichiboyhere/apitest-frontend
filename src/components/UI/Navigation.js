import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Navigation.module.css";
import { logout } from "../../actions/userActions";
import React, { useState } from "react";

const Navigation = () => {
  const dispatch = useDispatch();
  
  const logoutHandler = () => {
    dispatch(logout());
  };
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Api-Test</div>
      </Link>
      <nav>
        <ul>
          <li>
            {userInfo ? (
              <div>
              
                <Link to="/my-app">Mental Game</Link>&nbsp;&nbsp;
                <Link to ="/verbal">Verbal</Link>&nbsp;&nbsp;
                
                <Link to ="/quantitative">Quantitative</Link>&nbsp;&nbsp;
                <button onClick={logoutHandler}>Logout</button>&nbsp;&nbsp;
                
              </div>
            ) : (
              <>
              <Link to="/auth">Log in</Link>&nbsp;&nbsp;
              <Link to="/landing">Welcome</Link>
              </>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;


// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import "./Navigation.css";
// import { logout } from "../../actions/userActions";
// import React, { useState } from "react";

// const Navigation = () => {
//   const [isNavExpanded, setIsNavExpanded] = useState(false);
//   const dispatch = useDispatch();
  
//   const logoutHandler = () => {
//     dispatch(logout());
//   };
//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;
//   return (
//     <div>
//     <nav className="header">
//       <Link to="/">
//         <div className="logo">Api-Test</div>
//       </Link>
//       <button
//           className="hamburger"
//           onClick={() => {
//             setIsNavExpanded(!isNavExpanded);
//           }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             viewBox="0 0 20 20"
//             fill="white"
//           >
//             <path
//               fillRule="evenodd"
//               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>
      
//       <div
//           className={
//             isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
//           }
//         >

//            <ul>
//             {userInfo ? (
//               <>
              
          
              
//                <li> <Link to="/my-app">Mental Game</Link>&nbsp;&nbsp;</li>
//                <li><Link to ="/verbal">Verbal</Link>&nbsp;&nbsp;</li> 
                
//                 <li><Link to ="/quantitative">Quantitative</Link>&nbsp;&nbsp;</li>
//                 <li><button onClick={logoutHandler}>Logout</button>&nbsp;&nbsp;</li>
                
//               </>
//             ) : (
//               <>
//               <li><Link to="/auth">Log in</Link></li>
//               <li><Link to="/landing">Welcome</Link></li>
//               </>
//             )}
          
//         </ul>
//         </div>
        
      
//     </nav>
//     </div>
//   );
// };

// export default Navigation;
