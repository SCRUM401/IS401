'use client';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import

const SignInForm2: React.FC = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate(); // Add this line

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Verification Successful');
    navigate('/home'); // Home route (since it's the index in App.tsx)
  };

  return (
    <main className="flex flex-col items-center mt-10 w-full max-w-[302px] max-sm:px-4 max-sm:py-0">
      <section className="flex flex-col items-center w-full">
        <br></br>
        <img
          src="/user.png"
          alt="Profile"
          style={{
            width: '55px',
            height: '55px',
            display: 'block',
            margin: '0 auto',
            borderRadius: '50%',
          }}
        />
        <br></br>
        <br></br>
        <form onSubmit={handleSubmit} className="w-full">
          <label
            htmlFor="username"
            className="mb-4 text-base leading-6 text-black"
          >
            Password
          </label>

          <div className="flex flex-col gap-4 px-1.5 py-0 w-full max-sm:p-0">
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-white border border-black border-solid h-[43px] px-2"
              aria-required="true"
            />
            <br></br>
            <br></br>
            <button
              type="submit"
              className="p-2 text-base leading-4 bg-cyan-700 cursor-pointer border-[none] text-neutral-100 w-[70px]"
              aria-label="Continue to next step"
            >
              Verify
            </button>
          </div>
        </form>
        <br></br>
        <div className="flex flex-col gap-1.5 px-1.5 py-0 mt-9 w-full max-sm:p-0">
          <a
            href="#"
            className="gap-1.5 text-xs leading-3 cursor-pointer text-slate-400"
          >
            I forgot my username or password
          </a>
          <br></br>
          <a
            href="#"
            className="text-xs leading-3 cursor-pointer text-slate-400"
          >
            Back to sign in
          </a>
        </div>
      </section>
    </main>
  );
};

export default SignInForm2;
