import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItem = <>
        <li className='hover:bg-accent hover:text-white rounded-lg'><Link to="/">Home</Link></li>
        <li className='hover:bg-accent hover:text-white rounded-lg'><Link to="/about">About</Link></li>
        <li className='hover:bg-accent hover:text-white rounded-lg'><Link to="/appointment">Appointment</Link></li>
        <li className='hover:bg-accent hover:text-white rounded-lg '><Link to="/reviews">Reviews</Link></li>
        <li className='hover:bg-accent hover:text-white rounded-lg '><Link to="/contact">Contact us</Link></li>
        <li className='hover:bg-accent hover:text-white rounded-lg '><Link to="/reviews">Reviews</Link></li>
        <li className='hover:bg-accent hover:text-white rounded-lg '><Link to="/login">Login</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <a href='/' className="normal-case text-xl font-bold hover:text-primary px-14">Doctors Portal</a>
            </div>
            <div className="navbar-end pr-4 hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;