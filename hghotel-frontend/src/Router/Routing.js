import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from '../Pages/Home';

function Routing(props) {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
                <Footer />
            </Router>
            
        </div>
    );
}

export default Routing;