import React from "react";

const About = () => {
  return (
    <>
      <div id="about" className="about-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <div className="section-heading relative overflow-hidden pb-14 text-center">
            <h2 className="relative z-10 mb-2 uppercase text-[36px] text-white font-bold">
              About Me
            </h2>
            <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary !bg-opacity-20">
              <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"></span>
            </span>
            <span
              className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5"
              style={{ "will-change": "transform" }}
            >
              About
            </span>
          </div>
          <div className="grid grid-cols-2 items-center gap-7">
            <div className="col-span-2 lg:col-span-1">
              <div
                className="about-image overflow-hidden rounded-lg"
                style={{ opacity: "1", transform: "none" }}
              >
                <div className="about-image-inner fiximage relative border-10 border-primary !border-opacity-20">
                  <span className="absolute -top-2.5 left-0 z-10 h-2.5 w-10 animate-ledgerleftright rounded-full bg-gradient-to-r from-transparent to-primary"></span>
                  <span className="absolute top-auto -bottom-2.5 left-auto z-10 h-2.5 w-10 animate-ledgerrightleft rounded-full bg-gradient-to-r from-primary to-transparent"></span>
                  <span className="absolute -left-2.5 top-auto z-10 h-10 w-2.5 animate-ledgerbottomtop rounded-full bg-gradient-to-t from-transparent to-primary"></span>
                  <span className="absolute left-auto -right-2.5 z-10 h-10 w-2.5 animate-ledgertopbottom rounded-full bg-gradient-to-b from-transparent to-primary"></span>
                  <span
                    style={{
                      "box-sizing": "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: "1",
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        "box-sizing": "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0px",
                        margin: "0px",
                        padding: "63.9394% 0px 0px",
                      }}
                    >
                    </span>
                    {/* Change about image here in src */}
                    <img
                      alt="Kunal Sharma"
                      src="/assets/img/ab.avif"
                      decoding="async"
                      data-nimg="responsive"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        "box-sizing": "border-box",
                        padding: "0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0px",
                        height: "0px",
                        "min-width": "100%",
                        "max-width": "100%",
                        "min-height": "100%",
                        "max-height": "100%",
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              {/* About Content */}
              <div
                className="about-content"
                style={{ opacity: "1", transform: "none" }}
              >
                <h3 className="text-[26px] font-bold text-white">
                  Hi, I am <span className="text-primary">Kunal Sharma</span>
                </h3>
                <ul className="styledlist">
                  <li className="text-lg">
                    <strong className="inline-block min-w-[120px] font-medium">
                      First Name{" "}
                    </strong>
                    : Kunal
                  </li>
                  <li className="text-lg">
                    <strong className="inline-block min-w-[120px] font-medium">
                      Last Name{" "}
                    </strong>
                    : Sharma
                  </li>
                  <li className="text-lg">
                    <strong className="inline-block min-w-[120px] font-medium">
                      Age{" "}
                    </strong>
                    : 24 years
                  </li>
                  <li className="text-lg">
                    <strong className="inline-block min-w-[120px] font-medium">
                      Nationality{" "}
                    </strong>
                    : Indian
                  </li>
                  <li className="text-lg">
                    <strong className="inline-block min-w-[120px] font-medium">
                      Languages{" "}
                    </strong>
                    : English, Hindi
                  </li>
                  <li className="text-lg">
                    <strong className="inline-block min-w-[120px] font-medium">
                      Address{" "}
                    </strong>
                    : 752, Pocket D, Durga Colony, Sector 39, Gurugram
                  </li>
                  <li className="text-lg">
                    <strong className="inline-block min-w-[120px] font-medium">
                      Freelance{" "}
                    </strong>
                    : Available
                  </li>
                </ul>
                {/* Resume Location */}
                <a
                  href="/assets/Kunal Sharma CV Data Engineer.pdf"
                  className="btn mt-3"
                  download={""}
                >
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
