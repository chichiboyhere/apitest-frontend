import { Route, HashRouter} from "react-router-dom";
import Api from "./Api";
import RegisterForm from "./components/Auth/RegisterForm";
import AuthForm from "./components/Auth/AuthForm";
//import Layout from "./components/UI/Layout";
import HomePage from "./pages/HomePage";
import QuantitativeApi from './components/AptitudeTests/QuantitativeApi';
import VerbalApi from './components/AptitudeTests/VerbalApi';
import LandingPage from "./pages/LandingPage";

/** Navbar link: https://blog.logrocket.com/create-responsive-navbar-react-css/ */
import Layout from "./components/UI/LayoutTest";
function App() {
  return (
    <HashRouter>
    <Layout>
        <Route path='/' component={HomePage} exact/>
        <Route path="/auth" component={AuthForm} />
        <Route path='/my-app' component={Api} />  
        <Route path='/quantitative' component={QuantitativeApi} /> 
        <Route path='/verbal' component={VerbalApi} /> 
        <Route path='/register' component={RegisterForm} />
        <Route path='/landing' component={LandingPage} />
    </Layout>
    </HashRouter>
  );
}

export default App;