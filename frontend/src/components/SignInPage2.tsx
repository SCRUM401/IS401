'use client';
import React from 'react';
import Header from './HeaderLogin';
import SignInForm2 from './SignInForm2';
import FooterLogin from './FooterLogin';

const SignInPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-0 mx-auto w-full min-h-screen bg-white max-w-[393px] max-md:p-0 max-md:max-w-full max-sm:p-0 max-sm:max-w-full">
      <Header />
      <SignInForm2 />
      <FooterLogin />
    </div>
  );
};

export default SignInPage;
