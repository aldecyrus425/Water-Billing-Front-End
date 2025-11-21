import React from 'react'
import { Button } from '../../components/Button'
import { InputGroup } from '../../components/InputGroup'

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Welcome Back
        </h2>
        <p className="text-gray-500 text-sm text-center mt-1">
          Login to your account
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4">
          {/* Email */}
          <InputGroup label='Email' type='email' placeholder='you@example.com' />

          {/* Password */}
          <InputGroup label='Password' type='password' placeholder='you@example.com' />

          {/* Login Button */}
          <Button label='Login' type='submit' className='w-full font-bold text-white' />
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>

      </div>
    </div>
  )
}

export default Login
