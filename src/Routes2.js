import {Routes, BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './Home';
import ContactDetails from './ContactDetails';
import UserInfo from './UserInfo';

function Routes2(){

    return<>
    <BrowserRouter>

    <nav>
        <Link to="/">Home</Link> ||
        <Link to="/contact">Contact</Link> ||
        <Link to="/userInfo">UserInfo</Link>
    </nav>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<ContactDetails/>}/>
        <Route path="/userInfo" element={<UserInfo/>}/>
    </Routes>
    </BrowserRouter>

    </>
}

export default Routes2;