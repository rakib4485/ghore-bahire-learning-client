import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/BLC logo.png'
import { AuthContext } from '../../contexts/AuthProvider';
import useTeacher from '../../hooks/useTeacher';
import { FaSignOutAlt, FaTachometerAlt, FaUser, FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [isTeacher] = useTeacher(user?.email);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

  const menuItems = <React.Fragment>
    <li><Link to="/">Home</Link></li>
    {/* <li><Link to="/properties">Properties</Link></li> */}
    <li><Link to="/about">About</Link></li>
    {/* <li><Link to="/blog">Blog</Link></li> */}
    {/* <li><Link to="/contact">Contacts</Link></li> */}
    {
      user?.uid ? (<>
        <li><Link to="/my">Dashboard</Link></li>
        {
          isTeacher &&
          <li><Link to="/my-teacher">My Courses</Link></li>
        }
      </>) : (<>

      </>)
    }
  </React.Fragment>
  return (
    <div className="navbar justify-between bg-[#62A8EA] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
            <div className="lg:hidden ">
              <details className="dropdown">
                <summary className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>
              </details>
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
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="flex items-center gap-2 cursor-pointer hover:bg-[#5897D2] h-20 rounded-md p-2">
              {
                  user?.photoURL ? (
                    <>

                      <div className="avatar">
                        <div className="w-8 rounded-full">
                          <img src={user.photoURL} alt='' />
                        </div>
                      </div>
                    </>
                  ) :
                    (
                      <FaUserAlt className='w-8 h-8 border rounded-full'/>
                    )
                }
              <p className='mr-3 font-semibold'>{user?.displayName}</p>
              </div>
              <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow text-black">
                <li><Link to='/my'><FaTachometerAlt /> Dashboard</Link></li>
                <li><Link to='/admin-dashboard'><FaTachometerAlt />Admin Dashboard</Link></li>
                <li><Link to='/profile'><FaUser /> Profile</Link></li>
                <li onClick={handleLogOut}><Link><FaSignOutAlt /> Sign Out</Link></li>
              </ul>
            </div>
            
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