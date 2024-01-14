import React from 'react'

const Works = () => {
  return (
    <div id="works" className="portfolios-section pt-24 lg:pt-28 xl:pt-32">
      <div className="container mx-auto">
        <div className="section-heading relative overflow-hidden pb-14 text-center">
          <h2 className="relative z-10 mb-2 uppercase text-[36px] text-white font-bold">My Works</h2>
          <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary !bg-opacity-20">
            <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"></span>
          </span>
          <span className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5" style={{ "will-change": "transform" }}>Works</span>
        </div>

        <div className="mt-12 grid grid-cols-6 gap-7" style={{"transform": "none", "transform-origin": "50% 50% 0px"}}>

          {/* Add project card */}
          {/* 1 */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2" data-projection-id="1" style={{ "transform": "none", "transform-origin": "50% 50% 0px" }}>
            <div className="portfolio card hovercard group p-4 md:p-5">
              <div className="portfolio-top relative overflow-hidden">
                <div className="portfolio-image fiximage blur-0 filter transition-all duration-500 group-hover:blur">
                  <span style={{ "box-sizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative" }}>
                    <span style={{ "box-sizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0p", "margin": "0px", "padding": "69.8182% 0px 0px" }}></span>
                    <img alt="Candle" src="assets/img/1.png" decoding="async" data-nimg="responsive" style={{ "position": "absolute", "inset": "0px", "box-sizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "min-width": "100%", "max-width": "100%", "min-height": "100%", "max-height": "100%", "object-fit": "cover" }} />
                  </span>
                </div>
                <div className="portfolio-hovercontent absolute left-0 top-0 z-20 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-hover bg-opacity-80 transition-all duration-500 group-hover:translate-x-0">
           
                  <a target="_blank" className="inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey" href="https://dribbble.com">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="portfolio-content mt-4">
                <h5 className="mb-0 text-white font-[600] text-[20px]">Candle</h5>
                <p>Creative Candle Light</p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2" data-projection-id="2" style={{"transform": "none", "transform-origin": "50% 50% 0px"}}>
            <div className="portfolio card hovercard group p-4 md:p-5">
              <div className="portfolio-top relative overflow-hidden">
                <div className="portfolio-image fiximage blur-0 filter transition-all duration-500 group-hover:blur">
                  <span style={{ "box-sizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative" }}>
                    <span style={{ "box-sizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0p", "margin": "0px", "padding": "69.8182% 0px 0px" }}></span>
                    <img alt="Paint" src="assets/img/2.png" decoding="async" data-nimg="responsive" style={{ "position": "absolute", "inset": "0px", "box-sizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "min-width": "100%", "max-width": "100%", "min-height": "100%", "max-height": "100%", "object-fit": "cover" }} />
                    <noscript></noscript>
                  </span>
                </div>
                <div className="portfolio-hovercontent absolute left-0 top-0 z-20 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-hover bg-opacity-80 transition-all duration-500 group-hover:translate-x-0">
                  <a target="_blank" className="inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey" href="https://dribbble.com">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="portfolio-content mt-4">
                <h5 className="mb-0 text-white font-[600] text-[20px]">Paint</h5>
                <p>Creative wall painting</p>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2" data-projection-id="3" style={{ "transform": "none", "transform-origin": "50% 50% 0px" }}>
            <div className="portfolio card hovercard group p-4 md:p-5">
              <div className="portfolio-top relative overflow-hidden">
                <div className="portfolio-image fiximage blur-0 filter transition-all duration-500 group-hover:blur">
                  <span style={{ "box-sizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative" }}>
                    <span style={{ "box-sizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0p", "margin": "0px", "padding": "69.8182% 0px 0px" }}></span>
                    <img alt="UI/UX Sample" src="assets/img/6.png" decoding="async" data-nimg="responsive" style={{ "position": "absolute", "inset": "0px", "box-sizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "min-width": "100%", "max-width": "100%", "min-height": "100%", "max-height": "100%" }} />
             
                  </span>
                </div>
                <div className="portfolio-hovercontent absolute left-0 top-0 z-20 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-hover bg-opacity-80 transition-all duration-500 group-hover:translate-x-0">
                  <a target="_blank" className="inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey" href="https://dribbble.com">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="portfolio-content mt-4">
                <h5 className="mb-0 text-white font-[600] text-[20px]">UI/UX Sample</h5>
                <p>UI/UX Sample design mockup</p>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2" data-projection-id="4" style={{ "transform": "none", "transform-origin": "50% 50% 0px" }}>
            <div className="portfolio card hovercard group p-4 md:p-5">
              <div className="portfolio-top relative overflow-hidden">
                <div className="portfolio-image fiximage blur-0 filter transition-all duration-500 group-hover:blur">
                  <span style={{ "box-sizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative" }}>
                    <span style={{ "box-sizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0p", "margin": "0px", "padding": "69.8182% 0px 0px" }}></span>
                    <img alt="Packet" src="assets/img/3.png" decoding="async" data-nimg="responsive" style={{ "position": "absolute", "inset": "0px", "box-sizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "min-width": "100%", "max-width": "100%", "min-height": "100%", "max-height": "100%" }} />
                  </span>
                </div>
                <div className="portfolio-hovercontent absolute left-0 top-0 z-20 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-hover bg-opacity-80 transition-all duration-500 group-hover:translate-x-0">
                  <a target="_blank" className="inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey" href="https://dribbble.com">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="portfolio-content mt-4">
                <h5 className="mb-0 text-white font-[600] text-[20px]">Packet</h5>
                <p>Packet design mockup</p>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2" data-projection-id="5" style={{ "transform": "none", "transform-origin": "50% 50% 0px" }}>
            <div className="portfolio card hovercard group p-4 md:p-5">
              <div className="portfolio-top relative overflow-hidden">
                <div className="portfolio-image fiximage blur-0 filter transition-all duration-500 group-hover:blur">
                  <span style={{ "box-sizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative" }}>
                    <span style={{ "box-sizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0p", "margin": "0px", "padding": "69.8182% 0px 0px" }}></span>
                    <img alt="Packet" src="assets/img/4.png" decoding="async" data-nimg="responsive" style={{ "position": "absolute", "inset": "0px", "box-sizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "min-width": "100%", "max-width": "100%", "min-height": "100%", "max-height": "100%" }} />
                  </span>
                </div>
                <div className="portfolio-hovercontent absolute left-0 top-0 z-20 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-hover bg-opacity-80 transition-all duration-500 group-hover:translate-x-0">
                  <a target="_blank" className="inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey" href="https://dribbble.com">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="portfolio-content mt-4">
                <h5 className="mb-0 text-white font-[600] text-[20px]">Packet</h5>
                <p>Another packet design mockup</p>
              </div>
            </div>
          </div>

          {/* 6 */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2" data-projection-id="6" style={{ "transform": "none", "transform-origin": "50% 50% 0px" }}>
            <div className="portfolio card hovercard group p-4 md:p-5">
              <div className="portfolio-top relative overflow-hidden">
                <div className="portfolio-image fiximage blur-0 filter transition-all duration-500 group-hover:blur">
                  <span style={{ "box-sizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative" }}>
                    <span style={{ "box-sizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0p", "margin": "0px", "padding": "69.8182% 0px 0px" }}></span>
                    <img alt="Cream" src="assets/img/5.png" decoding="async" data-nimg="responsive" style={{ "position": "absolute", "inset": "0px", "box-sizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "min-width": "100%", "max-width": "100%", "min-height": "100%", "max-height": "100%" }} />
                  </span>
                </div>
                <div className="portfolio-hovercontent absolute left-0 top-0 z-20 flex h-full w-full -translate-x-full transform items-center justify-center gap-4 overflow-hidden bg-hover bg-opacity-80 transition-all duration-500 group-hover:translate-x-0">
                  <a target="_blank" className="inline-flex h-10 min-h-0 w-10 items-center justify-center rounded-full bg-primary p-0 text-center text-lg text-grey" href="https://dribbble.com">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="portfolio-content mt-4">
                <h5 className="mb-0 text-white font-[600] text-[20px]">Cream</h5>
                <p>Creative cream box design</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <button className="btn btn-small">
            <span>Load More</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Works
