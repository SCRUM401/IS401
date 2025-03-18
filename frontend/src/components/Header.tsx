import React from 'react';

const Header: React.FC = () => {
  return (
    <div aria-label="YSA Logo">
      <svg
        width="398"
        height="50"
        viewBox="0 0 398 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="logo"
        style={{ width: '398px', height: '50px' }}
      >
        <g clipPath="url(#clip0_2088_951)">
          <image
            x="10"
            y="4"
            width="40"
            height="40"
            href="frontend/src/assets/logopurple.jpg"
            // alt="Church symbol"
          />
          <text
            fill="#6947A3"
            xmlSpace="preserve"
            style={{ whiteSpace: 'pre' }}
            fontFamily="Jost"
            fontSize="40"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="158" y="42.9">
              YSA
            </tspan>
          </text>
          <path d="M0 4L398 4" stroke="black"></path>
          <path
            d="M374 44.5C383.665 44.5 391.5 36.665 391.5 27C391.5 17.335 383.665 9.5 374 9.5C364.335 9.5 356.5 17.335 356.5 27C356.5 36.665 364.335 44.5 374 44.5Z"
            fill="url(#pattern1_2088_951)"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
        <defs>
          <pattern
            id="pattern1_2088_951"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_2088_951"
              transform="translate(0 -0.25) scale(0.00104167)"
            ></use>
          </pattern>
          <clipPath id="clip0_2088_951">
            <rect width="398" height="50" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Header;
