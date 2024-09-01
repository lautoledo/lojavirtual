import React from 'react';
import Products from './components/Products';
import Pagination from './components/Pagination';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Products />
            <Pagination />
            <Footer />
        </div>
    );
}

export default App;
