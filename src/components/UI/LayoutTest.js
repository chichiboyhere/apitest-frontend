import { Fragment } from 'react';
import Navbar from '../../navbarfolder/NavBar';
//import NavigationTest from './NavigationTest';

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
