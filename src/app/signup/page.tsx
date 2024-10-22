"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Signup = () => {
  const [captcha, setCaptcha] = useState('');

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaptcha(e.target.value);
    console.log("Captcha entered:", captcha);
  };

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      {/* Left Section: Image */}
      <div className='hidden lg:block'>
        <Image src="/image.png" alt='image' width={200} height={200} className='w-full h-[750px] object-cover mt-4'/>
      </div>

      {/* Right Section: Form */}
      <div className="flex justify-center items-center h-screen bg-gray-100 p-5 mt-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-2xl font-bold text-center mb-6">Sign in</h2>
          <p className="text-center mb-4">Choose an account you'd like to continue with</p>

          {/* Social sign in buttons */}
          <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md bg-white text-gray-700 font-medium mb-4 hover:bg-gray-100">
            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google Logo" className="mr-2"/>
            Sign in with Google
          </button>

          <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md bg-white text-gray-700 font-medium mb-6 hover:bg-gray-100">
            <img src="https://img.icons8.com/ios-filled/24/000000/mac-os.png" alt="Apple Logo" className="mr-2"/>
            Sign in with Apple
          </button>

          <div className="flex items-center justify-center mb-4">
            <span className="text-gray-500">or</span>
          </div>

          {/* Email and password form */}
          <form>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute right-3 top-3 text-gray-500">
                <i className="fas fa-eye-slash"></i>
              </span>
            </div>

            {/* CAPTCHA input */}
            <input
              type="text"
              placeholder="Type the code from the image"
              value={captcha}
              onChange={handleCaptchaChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            

            {/* Sign in button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Sign in
            </button>
            <Link href="/">
            <button
              type="submit"
              className="w-full bg-blue-500 mt-3 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Home Page
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
