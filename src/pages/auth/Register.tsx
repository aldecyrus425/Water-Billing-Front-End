import React from 'react'
import { Button } from '../../components/Button'
import { InputGroup } from '../../components/InputGroup'

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Create Account
        </h2>
        <p className="text-gray-500 text-sm text-center mt-1">
          Join us today!
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4">

          {/* Full Name */}
          

          <InputGroup label='Full Name' type='text' placeholder='Enter Full Name' />

          {/* Email */}
          <div>
            <label className="text-gray-700 text-sm font-medium">Email</label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-700 text-sm font-medium">Password</label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-gray-700 text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          {/* Register Button */}
          <Button label='Create Account' type='submit' />
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <a href="/" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>

      </div>
    </div>
  )
}

export default Register
