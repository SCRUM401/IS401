import React from 'react';
import styles from './HomeInputDesign.module.css';

interface HeaderProps {
  logoSrc: string;
}

const HomeHeader: React.FC<HeaderProps> = ({ logoSrc }) => {
  return (
    <header className={styles.div2}>
      <img src={logoSrc} alt="Logo" className={styles.logo} />
      <h1 className={styles.div3}>YSA</h1>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id=&quot;2261:830&quot; width=&quot;398&quot; height=&quot;2&quot; viewBox=&quot;0 0 398 2&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;divider&quot; style=&quot;width: 100%; height: 1px; position: absolute; top: 4px&quot;> <path d=&quot;M0 1L398 1&quot; stroke=&quot;black&quot;></path> </svg>',
          }}
        />
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id=&quot;2261:831&quot; layer-name=&quot;Circle&quot; width=&quot;42&quot; height=&quot;42&quot; viewBox=&quot;0 0 42 42&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; class=&quot;profile-circle&quot; style=&quot;width: 42px; height: 42px; position: absolute; right: 3px; top: -2px&quot;> <path d=&quot;M21 38.5C30.665 38.5 38.5 30.665 38.5 21C38.5 11.335 30.665 3.5 21 3.5C11.335 3.5 3.5 11.335 3.5 21C3.5 30.665 11.335 38.5 21 38.5Z&quot; fill=&quot;url(#pattern0_2261_831)&quot; stroke=&quot;black&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> <defs> <pattern id=&quot;pattern0_2261_831&quot; patternContentUnits=&quot;objectBoundingBox&quot; width=&quot;1&quot; height=&quot;1&quot;> <use xlink:href=&quot;#image0_2261_831&quot; transform=&quot;translate(0 -0.25) scale(0.00104167)&quot;></use> </pattern>  </defs> </svg>',
          }}
        />
      </div>
    </header>
  );
};

export default HomeHeader;
