import React from 'react';

const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className}>
    <svg
      className={className}
      fill="none"
      viewBox="0 0 240 40"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <g clipPath="url(#clip0_16_6)">
        <rect fill="white" />
        <path
          d="M25.4609 27H15.4062V26.0859H18.2188V6.82031H15.4062V5.90625H31.6133L31.7891 12.2344H31.0859L30.5938 10.582C30.5703 10.4883 30.5352 10.3711 30.4883 10.2305C29.7617 7.95703 28.5547 6.82031 26.8672 6.82031H21.2422V15.6094H28.4844V16.6289H21.2422V26.0859H25.4609V27ZM50.2461 26.1211C50.3867 26.1211 50.5039 26.1328 50.5977 26.1562C50.9492 26.2031 51.125 26.4844 51.125 27H46.168L45.9219 23.4141C45.6641 24.0703 45.3242 24.668 44.9023 25.207C43.7773 26.6367 42.3359 27.3516 40.5781 27.3516C37.25 27.3281 35.5742 25.3125 35.5508 21.3047V12.9375H32.8438V12.0586H38.1875V21.832C38.1875 22.207 38.2109 22.5586 38.2578 22.8867C38.5625 24.8555 39.6758 25.8398 41.5977 25.8398C42.3008 25.8398 42.9805 25.6172 43.6367 25.1719C45.1133 24.1875 45.8516 22.6406 45.8516 20.5312V12.9375H42.9688V12.0586H48.4883V26.1211H50.2461ZM61.0039 26.1211C61.1445 26.1211 61.2617 26.1328 61.3555 26.1562C61.707 26.2031 61.8828 26.4844 61.8828 27H53.1992V26.1211C53.9961 26.1211 54.5703 26.0625 54.9219 25.9453C55.5312 25.7344 55.8359 25.0898 55.8359 24.0117V12.9375H53.1992V12.0586H58.2969L58.4375 15.5391C58.7422 14.8359 59.1523 14.2031 59.668 13.6406C60.7695 12.4453 62.0234 11.8477 63.4297 11.8477C63.6406 11.8477 63.8633 11.8711 64.0977 11.918C65.1758 12.1523 65.7148 12.7969 65.7148 13.8516C65.7148 13.9922 65.6914 14.1328 65.6445 14.2734C65.457 14.9531 65.0117 15.293 64.3086 15.293C64.168 15.293 64.0273 15.2695 63.8867 15.2227C63.5586 15.1289 63.207 14.7539 62.832 14.0977C62.5039 13.5117 62.1406 13.2188 61.7422 13.2188C61.3906 13.2422 60.957 13.5 60.4414 13.9922C59.1289 15.2812 58.4727 16.9922 58.4727 19.125V26.1211H61.0039ZM73.8008 26.1211C73.9414 26.1211 74.0586 26.1328 74.1523 26.1562C74.5039 26.2031 74.6797 26.4844 74.6797 27H66.9453V26.1211C67.7422 26.1211 68.3164 26.0625 68.668 25.9453C69.2773 25.7344 69.582 25.0898 69.582 24.0117V12.9375H66.9453V12.0586H72.043L72.1836 15.5742C72.4414 14.918 72.7812 14.3203 73.2031 13.7812C74.3281 12.3984 75.7578 11.707 77.4922 11.707C78.3594 11.707 79.168 11.9297 79.918 12.375C81.5352 13.3828 82.3438 15.0586 82.3438 17.4023V26.1211H84.1016C84.2422 26.1211 84.3594 26.1328 84.4531 26.1562C84.8047 26.2031 84.9805 26.4844 84.9805 27H77.0703V26.1211C77.8672 26.1211 78.4414 26.0625 78.793 25.9453C79.4023 25.7344 79.707 25.0898 79.707 24.0117V17.0508C79.707 16.3711 79.6016 15.7617 79.3906 15.2227C78.875 13.8867 77.9023 13.2188 76.4727 13.2188C75.8164 13.2188 75.1719 13.418 74.5391 13.8164C73.0625 14.7773 72.2891 16.3477 72.2188 18.5273V26.1211H73.8008ZM94.1211 26.1211C94.2383 26.1211 94.3555 26.1328 94.4727 26.1562C94.8242 26.2031 95 26.4844 95 27H86.9141V26.1211C87.7109 26.1211 88.2852 26.0742 88.6367 25.9805C89.3633 25.7461 89.7266 25.0898 89.7266 24.0117V12.9375H86.9141V12.0586H92.3633V26.1211H94.1211ZM92.7852 6.92578C92.7852 7.20703 92.7266 7.47656 92.6094 7.73438C92.2812 8.48438 91.707 8.85938 90.8867 8.85938C90.6289 8.85938 90.3711 8.8125 90.1133 8.71875C89.3398 8.39062 88.9531 7.79297 88.9531 6.92578C88.9531 6.64453 89.0117 6.375 89.1289 6.11719C89.4805 5.36719 90.0664 4.99219 90.8867 4.99219C91.1445 4.99219 91.4141 5.05078 91.6953 5.16797C92.4219 5.51953 92.7852 6.10547 92.7852 6.92578ZM104 9.28125C104 10.2422 104.398 11.5195 105.195 13.1133C106.062 12.8789 106.824 12.5156 107.48 12.0234C108.629 11.1562 109.203 10.1719 109.203 9.07031C109.203 8.71875 109.145 8.36719 109.027 8.01562C108.652 6.96094 107.844 6.43359 106.602 6.43359C106.297 6.43359 106.004 6.48047 105.723 6.57422C104.574 6.94922 104 7.85156 104 9.28125ZM105.512 26.2969C107.246 26.2969 108.793 25.7344 110.152 24.6094C107.152 21.0703 104.867 17.8242 103.297 14.8711C102.945 14.9883 102.594 15.1641 102.242 15.3984C100.93 16.3359 100.273 17.8359 100.273 19.8984C100.273 20.7891 100.367 21.6094 100.555 22.3594C101.234 24.9844 102.887 26.2969 105.512 26.2969ZM114.547 15.7852C114.547 18.7383 113.879 21.2461 112.543 23.3086C113.645 24.5508 114.477 25.4766 115.039 26.0859H116.34C116.457 26.0859 116.562 26.0977 116.656 26.1211C117.031 26.168 117.219 26.4609 117.219 27H112.262C111.582 26.2734 111.066 25.6992 110.715 25.2773C109.074 26.6367 106.965 27.3281 104.387 27.3516C102.559 27.3516 101 26.8594 99.7109 25.875C98.0938 24.6328 97.2852 22.9453 97.2852 20.8125C97.2852 20.0156 97.4023 19.2656 97.6367 18.5625C98.4102 16.3359 100.168 14.8477 102.91 14.0977C102.09 12.3633 101.668 10.957 101.645 9.87891C101.645 9.15234 101.797 8.47266 102.102 7.83984C102.852 6.31641 104.328 5.55469 106.531 5.55469C107.117 5.55469 107.668 5.67188 108.184 5.90625C109.52 6.49219 110.188 7.54687 110.188 9.07031C110.188 9.65625 110.035 10.2422 109.73 10.8281C108.934 12.3281 107.562 13.3477 105.617 13.8867C107 16.3711 109.086 19.2539 111.875 22.5352C113 20.5898 113.562 18.3164 113.562 15.7148H111.629V14.8008H116.691C116.691 14.9883 116.668 15.1641 116.621 15.3281C116.551 15.6094 116.246 15.75 115.707 15.75L114.617 15.7852H114.512H114.547ZM133.953 21.4805C133.953 22.9102 133.449 24.1406 132.441 25.1719C130.965 26.625 128.879 27.3516 126.184 27.3516C123.887 27.3516 121.836 26.7539 120.031 25.5586C120.031 26.0508 120.008 26.3906 119.961 26.5781C119.867 26.9062 119.539 27.0703 118.977 27.0703V19.793H120.031C120.43 24.1289 122.422 26.3203 126.008 26.3672C126.922 26.3672 127.754 26.2031 128.504 25.875C130.098 25.1484 130.895 23.9648 130.895 22.3242C130.895 21.6914 130.742 21.1055 130.438 20.5664C129.875 19.6055 128.539 18.6562 126.43 17.7188C124.156 16.7344 122.82 16.1367 122.422 15.9258C120.219 14.6836 119.117 13.0781 119.117 11.1094C119.117 9.79688 119.586 8.64844 120.523 7.66406C121.93 6.25781 123.898 5.55469 126.43 5.55469C128.516 5.55469 130.391 6.01172 132.055 6.92578C132.055 6.64453 132.078 6.42187 132.125 6.25781C132.219 5.90625 132.547 5.73047 133.109 5.73047V11.8828H132.055C132.078 10.5703 131.75 9.45703 131.07 8.54297C130.039 7.20703 128.539 6.53906 126.57 6.53906C125.773 6.53906 125.047 6.66797 124.391 6.92578C122.867 7.53516 122.105 8.625 122.105 10.1953C122.105 10.7812 122.246 11.332 122.527 11.8477C123.066 12.7852 124.379 13.6992 126.465 14.5898C128.762 15.5977 130.133 16.2188 130.578 16.4531C132.828 17.7188 133.953 19.3945 133.953 21.4805ZM141.898 32.8008H144.359C144.5 32.8008 144.617 32.8125 144.711 32.8359C145.062 32.8828 145.238 33.1641 145.238 33.6797H136.625V32.8008C137.422 32.8008 137.996 32.7422 138.348 32.625C138.957 32.4141 139.262 31.7695 139.262 30.6914V12.9375H136.625V12.0586H141.688L141.863 15.8906C142.051 15.375 142.285 14.8828 142.566 14.4141C143.691 12.6094 145.391 11.707 147.664 11.707C149.141 11.707 150.395 12.1758 151.426 13.1133C152.902 14.4961 153.641 16.5234 153.641 19.1953C153.641 21.5391 152.961 23.4727 151.602 24.9961C150.195 26.5664 148.449 27.3516 146.363 27.3516C144.676 27.2578 143.188 26.6484 141.898 25.5234V32.8008ZM146.539 13.1133C145.695 13.1133 144.922 13.3711 144.219 13.8867C142.648 15.0586 141.863 17.168 141.863 20.2148C141.863 21.5273 142.039 22.6641 142.391 23.625C143.07 25.5234 144.312 26.4727 146.117 26.4727C146.75 26.4727 147.336 26.3438 147.875 26.0859C149.727 25.1719 150.652 22.9922 150.652 19.5469C150.652 18.5859 150.57 17.7188 150.406 16.9453C149.867 14.3906 148.578 13.1133 146.539 13.1133ZM163.203 26.1211C163.344 26.1211 163.461 26.1328 163.555 26.1562C163.906 26.2031 164.082 26.4844 164.082 27H156.172V26.1211C156.969 26.1211 157.543 26.0625 157.895 25.9453C158.504 25.7344 158.809 25.0898 158.809 24.0117V5.02734H156.172V4.14844H161.445V15.4336C161.703 14.7539 162.078 14.1445 162.57 13.6055C163.742 12.3398 165.195 11.707 166.93 11.707C167.68 11.707 168.383 11.8711 169.039 12.1992C170.727 13.1133 171.57 14.8477 171.57 17.4023V26.1211H173.328C173.469 26.1211 173.586 26.1328 173.68 26.1562C174.031 26.2031 174.207 26.4844 174.207 27H166.473V26.1211C167.27 26.1211 167.832 26.0625 168.16 25.9453C168.676 25.7344 168.934 25.0898 168.934 24.0117V17.4023C168.934 16.6289 168.805 15.9258 168.547 15.293C167.984 13.957 166.988 13.2891 165.559 13.2891C164.902 13.2891 164.27 13.4883 163.66 13.8867C162.184 14.8477 161.445 16.3945 161.445 18.5273V26.1211H163.203ZM183.875 12.5859C183.266 12.5859 182.691 12.7266 182.152 13.0078C180.512 13.8281 179.633 15.5859 179.516 18.2812L183.242 18.3867C184.32 18.4102 185.152 18.3633 185.738 18.2461C186.863 17.9883 187.426 17.2734 187.426 16.1016C187.426 15.5859 187.332 15.1055 187.145 14.6602C186.605 13.2773 185.516 12.5859 183.875 12.5859ZM189.992 23.625C189.852 23.9531 189.688 24.2812 189.5 24.6094C188.305 26.4375 186.441 27.3516 183.91 27.3516C182.316 27.3516 180.898 26.9414 179.656 26.1211C177.57 24.7148 176.527 22.5586 176.527 19.6523C176.527 18.0586 176.855 16.6289 177.512 15.3633C178.777 12.9258 180.875 11.707 183.805 11.707C185.305 11.707 186.629 12.0469 187.777 12.7266C189.395 13.6641 190.203 14.9297 190.203 16.5234C190.203 17.3906 189.887 18.0586 189.254 18.5273C188.434 19.1133 186.594 19.3828 183.734 19.3359L179.516 19.2656C179.539 20.25 179.645 21.1523 179.832 21.9727C180.465 24.9023 182.012 26.3672 184.473 26.3672C184.684 26.3672 184.906 26.3555 185.141 26.332C186.969 26.0977 188.293 25.0898 189.113 23.3086L189.992 23.625ZM200.363 26.1211C200.504 26.1211 200.621 26.1328 200.715 26.1562C201.066 26.2031 201.242 26.4844 201.242 27H192.559V26.1211C193.355 26.1211 193.93 26.0625 194.281 25.9453C194.891 25.7344 195.195 25.0898 195.195 24.0117V12.9375H192.559V12.0586H197.656L197.797 15.5391C198.102 14.8359 198.512 14.2031 199.027 13.6406C200.129 12.4453 201.383 11.8477 202.789 11.8477C203 11.8477 203.223 11.8711 203.457 11.918C204.535 12.1523 205.074 12.7969 205.074 13.8516C205.074 13.9922 205.051 14.1328 205.004 14.2734C204.816 14.9531 204.371 15.293 203.668 15.293C203.527 15.293 203.387 15.2695 203.246 15.2227C202.918 15.1289 202.566 14.7539 202.191 14.0977C201.863 13.5117 201.5 13.2188 201.102 13.2188C200.75 13.2422 200.316 13.5 199.801 13.9922C198.488 15.2812 197.832 16.9922 197.832 19.125V26.1211H200.363ZM214.004 12.5859C213.395 12.5859 212.82 12.7266 212.281 13.0078C210.641 13.8281 209.762 15.5859 209.645 18.2812L213.371 18.3867C214.449 18.4102 215.281 18.3633 215.867 18.2461C216.992 17.9883 217.555 17.2734 217.555 16.1016C217.555 15.5859 217.461 15.1055 217.273 14.6602C216.734 13.2773 215.645 12.5859 214.004 12.5859ZM220.121 23.625C219.98 23.9531 219.816 24.2812 219.629 24.6094C218.434 26.4375 216.57 27.3516 214.039 27.3516C212.445 27.3516 211.027 26.9414 209.785 26.1211C207.699 24.7148 206.656 22.5586 206.656 19.6523C206.656 18.0586 206.984 16.6289 207.641 15.3633C208.906 12.9258 211.004 11.707 213.934 11.707C215.434 11.707 216.758 12.0469 217.906 12.7266C219.523 13.6641 220.332 14.9297 220.332 16.5234C220.332 17.3906 220.016 18.0586 219.383 18.5273C218.562 19.1133 216.723 19.3828 213.863 19.3359L209.645 19.2656C209.668 20.25 209.773 21.1523 209.961 21.9727C210.594 24.9023 212.141 26.3672 214.602 26.3672C214.812 26.3672 215.035 26.3555 215.27 26.332C217.098 26.0977 218.422 25.0898 219.242 23.3086L220.121 23.625Z"
          fill="#181818"
        />
      </g>
      <defs>
        <clipPath id="clip0_16_6">
          <rect width="240" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </svg>
);

export default LogoIcon;
