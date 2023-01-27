import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from '../Pages/Home';
import Admin from '../Pages/Admin';
import Restaurant from '../Pages/Restaurant';
import Summary from '../Components/Summary';

function Routing(props) {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/restaurant' element={<Restaurant />} />
                    <Route path='/admin' element={<Admin />} />
                </Routes>
                <Summary />
                <Footer />
            </Router>
            
        </div>
    );
}

export default Routing;