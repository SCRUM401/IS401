import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center mt-24 w-full">
      <div className="flex flex-col gap-1 items-center w-full">
        <div className="w-full h-px bg-black" role="separator" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/36c3e8c58679668bdf45da38d3d4f96f217fb472"
          className="h-[291px] w-[161px]"
          alt="Church Symbol"
        />
      </div>
      <p className="mt-3 mb-2.5 text-xs leading-3 text-black">
        © 2025 by Intellectual Reserve, Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
