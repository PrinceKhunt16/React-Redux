import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css"
import Header from './Containers/Header'
import ProductDetails from './Containers/ProductDetails'
import ProductListing from './Containers/ProductListing'

const App = () => {
    return (
        <div className='app'>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' index element={<ProductListing />} />
                    <Route path='/product/:productId' element={<ProductDetails />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App