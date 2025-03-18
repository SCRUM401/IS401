'use client';
import React, { useState } from 'react';

const SignInForm: React.FC = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Username submitted:', username);
  };

  return (
    <main className="flex flex-col items-center mt-10 w-full max-w-[302px] max-sm:px-4 max-sm:py-0">
      <section className="flex flex-col items-center w-full">
        <h1 className="mb-4 text-3xl leading-6 text-black">Sign In</h1>

        <form onSubmit={handleSubmit} className="w-full">
          <label
            htmlFor="username"
            className="mb-4 text-base leading-6 text-black"
          >
            Username
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
              Next
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
            Create a new Account
          </a>
        </div>
      </section>
    </main>
  );
};

export default SignInForm;
