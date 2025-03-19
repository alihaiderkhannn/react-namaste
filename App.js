import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './images/logo.png'


const HeaderComponent = () => {
    return (
    <div className='header'>
        <div className='logo'>
            <img src='https://th.bing.com/th/id/OIP.9hl54qFeHA_2o_PIo3JhswAAAA?rs=1&pid=ImgDetMain' />
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
}
const BodyComponent = () => {
    return (
        <div className='body-container'>
            <div className='search'>
                Search
            </div>
            <div className='res-container'>
                <RestaurantCard />
            </div>

        </div>
    )
}
const RestaurantCard = () => {
    return (
        <div className='res-card'>
            <h3>Meghana Foods</h3>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <HeaderComponent />
            <BodyComponent />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);

