import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [loginUserEmail, setLoginUserEmail] = useState('');
  // const [token] = useToken(loginUserEmail);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log(from);

  // if(token){
  //   navigate(from, {replace: true});
  // }

  const handleLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        // setLoginUserEmail(email);
        navigate(form, { replace: true })
      })
      .then(err => {
        console.error(err);
      })
    form.reset();
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        saveUser(user.displayName, user.email, user.photoURL);
      })
      .then(error => console.error(error))
  }

  const saveUser = (name, email, role, id = '') => {
    const user = { name, email, role, id };
    fetch('https://ghore-baire-learning-server.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        navigate(from, { replace: true })
      })
  }
  return (
    // <div className='min-h-screen' style={{ backgroundImage: "url(https://i.ibb.co/PMY2k56/login.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
    //   <div className="py-20">
    //     <form onSubmit={handleLogin} className="card-body bg-white md:w-[70%] lg:w-[40%] mx-auto rounded-md">
    //       <div className="flex justify-between items-center">
    //         <div className="text-center md:w-1/2">
    //           <h1 className="text-xl font-bold md:text-3xl uppercase">
    //             Log In
    //           </h1>
    //         </div>
    //         <div>
    //           <Link>
    //             <button className="btn btn-neutral mr-2">Login</button>
    //           </Link>
    //           <Link to="/signup">
    //             <button className="btn btn-dark btn-outline mr-2">
    //               Sign Up
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="form-control">
    //         <label className="label">
    //           <span className="label-text">Email</span>
    //         </label>
    //         <input
    //           type="email"
    //           name="email"
    //           placeholder="email"
    //           className="input input-bordered"
    //         />
    //       </div>
    //       <div className="form-control">
    //         <label className="label">
    //           <span className="label-text">Password</span>
    //         </label>
    //         <input
    //           type="password"
    //           name="password"
    //           placeholder="password"
    //           className="input input-bordered"
    //         />
    //         {/* <label className="label">
    //           <Link className="label-text-alt link link-hover">
    //             Forgot password?
    //           </Link>
    //         </label> */}
    //       </div>

    //       <div className="form-control mt-6">
    //         <button className="btn btn-primary">Login</button>
    //       </div>
    //       <div className="divider">OR</div>
    //       <div className="form-control mt-6 ">
    //         <button onClick={handleGoogleSignIn} className="flex items-center justify-center btn btn-secondary btn-outline">
    //           <FaGoogle className="mr-2"></FaGoogle> Login With Google
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div className='grid grid-cols-2 gap-5'>
      <div className='auth-right'>
        <div className='text-white my-16 ml-16 mt-48'>
          <h1 className='text-3xl font-bold'>COU E-Learning</h1>
          <p className='mt-1 mb-3'>Learn, grow, and succeed with our interactive learning system</p>
          <Link to='/' className='learn-btn px-3 py-2 rounded-full'>Learn More</Link>
        </div>
      </div>
      <div className='py-40'>
        <div className='w-3/4 mx-auto'>
          <div className='my-9'>
          <h1 className='text-2xl font-bold'>Hello Again!</h1>
          <p>Welcome Back</p>
          </div>
          <form onSubmit={handleLogin}>
            <input type="email" className="input input-bordered rounded-full border-blue-300 w-full max-w-xs" name="email" placeholder='Email Address' id="" />
            <br />
            <input type="password" className="input input-bordered rounded-full border-blue-300 my-4 w-full max-w-xs" name="password" placeholder='Password' id="" />
            <br />
            <input type="submit" className='submit-btn w-full max-w-xs text-white py-3 rounded-full' value="Login" />
          </form>
          <p className='mt-1'>New here? <Link className='text-blue-400' to='/signup'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;