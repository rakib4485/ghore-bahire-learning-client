import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/BLC logo.png'
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

    const menuItems = <React.Fragment>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/properties">Properties</Link></li>
    <li><Link to="/about">About</Link></li>
    {/* <li><Link to="/blog">Blog</Link></li> */}
    <li><Link to="/contact">Contacts</Link></li>
    {
      user?.uid ? (<>
        <li><Link to="/wishlist">Wishlist</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </>) : (<>

      </>)
    }
  </React.Fragment>
    return (
        <div className="navbar justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
            <div className="lg:hidden ">
              {
                user?.uid ? (<>
                  <p className='font-semibold my-5'>{user?.displayName}</p>
                  <button onClick={handleLogOut} className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-lg font-semibold px-5 py-3 rounded-md">Log Out</button>
                </>) : (<>
                  <Link to='/login' className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-lg font-semibold px-5 py-3 rounded-md">Log in</Link>
                </>)
              }
            </div>
            <Link to='/login' className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-lg font-semibold px-5 py-3 rounded-md">Log in</Link>
          </ul>

        </div>
        <Link to='/my' className=" normal-case text-xl "><img src={logo} alt="" className='h-20 w-40' /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-3 px-1 font-bold text-md uppercase">
          {menuItems}
        </ul>

      </div>
      <div className="navbar-end hidden lg:flex">
        {
          user?.uid ? (<>
            <p className='mr-3 font-semibold'>{user?.displayName}</p>
            <button onClick={handleLogOut} className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-lg font-semibold px-5 py-3 rounded-md">Log Out</button>
          </>) : (<>
            <Link to='/login' className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-lg font-semibold px-5 py-3 rounded-md">Log in</Link>
          </>)
        }
        {/* <Link to='/login' className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-lg font-semibold px-5 py-3 rounded-md">Log in</Link> */}
      </div>
      <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>

    </div>
    );
};

export default Navbar;