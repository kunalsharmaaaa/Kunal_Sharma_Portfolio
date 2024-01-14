import React, { useEffect, useState } from "react";

const Header = () => {
  const [header, setHeader] = useState('');

  useEffect(() => {
    const headerChange = () => {
      if (window.scrollY > 300) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    window.addEventListener('scroll', headerChange);
  }, []);
  return (
    <>
      <div className={header ? "header top-0 left-0 z-50 h-auto w-full fixed animate-slidedown border-b border-white border-opacity-20 bg-grey !bg-opacity-80 backdrop-blur backdrop-filter" : "header top-0 left-0 z-50 h-auto w-full absolute"}>
        <div className="container mx-auto">
          <div className="header-inner flex items-center justify-between">
            <a className="sitelogo py-2 uppercase text-4xl font-bold text-[var(--contrast-color)]" href="/">
              Kunal <span className="text-5xl text-white">.</span>
            </a>
            <div className="header-mobilenav block lg:hidden">
              <button className="btn btn-small btn-transparent px-3 text-3xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
                  </g>
                </svg>
              </button>
            </div>
            <div className="header-nav hidden lg:block">
              <div className="flex-grow px-5 text-center">
                <ul className="mb-0 inline-flex list-none gap-7 pl-0">
                  <li className="inline-block align-middle">
                    <a href="#home" className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary !text-primary" count="01">
                      Home
                      <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </a>
                  </li>
                  <li className="inline-block align-middle">
                    <a href="#about" className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary" count="02">
                      About
                      <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </a>
                  </li>
                  <li className="inline-block align-middle">
                    <a href="#resume" className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary" count="03">
                      Resume
                      <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </a>
                  </li>
                  <li className="inline-block align-middle">
                    <a href="#works" className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary" count="04">
                      Works
                      <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </a>
                  </li>
                  <li className="inline-block align-middle">
                    <a href="#contact" className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary" count="05">
                      Contact
                      <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-button hidden lg:block">
              <a className="btn" href="#contact">
                <span>Hire Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
