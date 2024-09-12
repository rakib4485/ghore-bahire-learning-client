import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const SignUp = () => {
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.form?.pathname || "/";

  const handleSignup = event => {
    event.preventDefault();

      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const id = form.id.value;
      const role =  'user';

      const userInfo = {
        displayName: name
      }

      createUser(email, password)
      .then(result =>{
        const user = result.user;
        console.log(user);
        updateUser(userInfo)
        .then( () =>{
          saveUser(name, email, role, id);
          
        })
        .then(err => console.error(err));
      })
      .catch(err => console.error(err));
      form.reset();
  }

  const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result => {
      const user = result.user;
      const role = 'user'
      saveUser(user.displayName, user.email, role);
    })
    .then(error => console.error(error))
}

  const saveUser = (name, email, role, id = '') => {
      const user = {name, email, role, id};
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
          navigate(from, {replace: true })
        })
  }


  return (
    <div className='grid md:grid-cols-2 gap-5'>
      <div className='auth-right'>
        <div className='text-white my-16 ml-16 mt-48'>
          <h1 className='text-3xl font-bold'>COU E-Academic platform</h1>
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
          <form onSubmit={handleSignup}>
            <input type="text" name="name" className='input input-bordered border-blue-300 rounded-full w-full max-w-xs' placeholder='Full Name' id="" />
            <br />
            <input type="text" name="id" className='input input-bordered border-blue-300 rounded-full w-full max-w-xs my-4' placeholder='Student ID' id="" />
            <br />
            <input type="email" className="input input-bordered rounded-full border-blue-300 w-full max-w-xs" name="email" placeholder='Email Address' id="" />
            <br />
            <input type="password" className="input input-bordered rounded-full border-blue-300 my-4 w-full max-w-xs" name="password" placeholder='Password' id="" />
            <br />
            <input type="submit" className='submit-btn w-full max-w-xs text-white py-3 rounded-full' value="Sign Up" />
          </form>
          <p className='mt-1'>Already have an account? <Link className='text-blue-400' to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;