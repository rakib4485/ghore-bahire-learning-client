import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../contexts/AuthProvider';
import useTeacher from '../../hooks/useTeacher';
import { FaSignOutAlt, FaTachometerAlt, FaUser, FaUserAlt } from 'react-icons/fa';
import useAdmin from '../../hooks/useAdmin';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [isTeacher] = useTeacher(user?.email);
  const [isAdmin] = useAdmin(user?.email);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

  const menuItems = <React.Fragment>
    <li><Link to="/" className='hover:text-orange-600'>Home</Link></li>
    <li><Link to="/about" className='hover:text-orange-600'>About</Link></li>
    {
      user?.uid ? (<>
        <li><Link to="/my" className='hover:text-orange-600'>Dashboard</Link></li>
        {
          isTeacher &&
          <li><Link to="/my-teacher" className='hover:text-orange-600'>My Courses</Link></li>
        }
      </>) : (<>

      </>)
    }
  </React.Fragment>
  return (
    <div className="navbar justify-between bg-slate-800 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
            {menuItems}
            <div className="lg:hidden ">
              {
                user?.uid ? (<>
                  <div className="dropdown dropdown-end">
                    <div tabIndex={1} className="flex items-center gap-2 cursor-pointer hover:bg-[#5897D2] h-20 rounded-md p-2">
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
                            <FaUserAlt className='w-8 h-8 border rounded-full' />
                          )
                      }
                      <p className='mr-3 font-semibold'>{user?.displayName}</p>
                    </div>
                    <ul tabIndex={1} className="menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow text-black">
                      <li><Link to='/my'><FaTachometerAlt /> Dashboard</Link></li>
                      {
                        isAdmin &&
                        <li><Link to='/admin-dashboard'><FaTachometerAlt />Admin Dashboard</Link></li>
                      }
                      <li><Link to='/profile'><FaUser /> Profile</Link></li>
                      <li onClick={handleLogOut}><Link><FaSignOutAlt /> Sign Out</Link></li>
                    </ul>
                  </div>

                </>) : (<div className='my-5'>
                  <Link to='/login' className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-lg font-semibold px-5 py-3 rounded-md">Log in</Link>
                </div>)
              }
            </div>
          </ul>

        </div>
        <Link to='/' className="flex items-center"><img src={logo} alt="" className='h-20 w-40 rounded-full' /> <span className='-ml-10'>COU E-Academic Platform</span></Link>
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
                      <FaUserAlt className='w-8 h-8 border rounded-full' />
                    )
                }
                <p className='mr-3 font-semibold'>{user?.displayName}</p>
              </div>
              <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow text-black">
                <li><Link to='/my'><FaTachometerAlt /> Dashboard</Link></li>
                {
                  isAdmin &&
                  <li><Link to='/admin-dashboard'><FaTachometerAlt />Admin Dashboard</Link></li>
                }
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
      {
        isAdmin &&
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
      }

    </div>
  );
};

export default Navbar;