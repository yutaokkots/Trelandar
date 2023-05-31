import React from "react";

export default function AboutPage() {
  return (
    <main>
      <div className="bg-[#FCDEBE]">
        <div className="flex flex-col">
          <h1 className="flex justify-center font-bold text-5xl text-[#5e5768] py-16">
            About Us
          </h1>
          <div className="flex justify-center rounded-full bg-slate-300 bg-opacity-50 mx-60 px-6 py-10">
            <p className="text-[#5e5768]">
              Lorem yesssipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div>
          <h1 className="flex justify-center font-bold text-3xl text-[#5e5768] py-14">
            Meet the Team
          </h1> 
          <div id="default-carousel" class="relative w-full" data-carousel="slide">
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="flex  items-center justify-center pb-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://res.cloudinary.com/diw7vmgum/image/upload/v1685493433/yuta_qexcfn.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="text-[#5e5768] text-3xl font-bold">
                Yuta Okkotsu
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Lorem yesssipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <div className="flex">
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white hover:text-purple-500 shadow shadow-black/60">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/yutaokkots"
                  >
                    Github
                  </a>
                </button>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white hover:text-purple-500 shadow shadow-black/60">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/yutaokkotsu/"
                  >
                    LinkedIn
                  </a>
                </button>
              </div>
            </div>
          </div>
          </div>

          <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://res.cloudinary.com/diw7vmgum/image/upload/v1685493227/eric_d4sboa.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="text-[#5e5768] text-3xl font-bold">
                Eric Hung
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Lorem yesssipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <div className="flex justify-even">
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white hover:text-purple-500 shadow shadow-black/60">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/EricHungGA"
                  >
                    Github
                  </a>
                </button>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white hover:text-purple-500 shadow shadow-black/60">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/erichungdev/"
                  >
                    LinkedIn
                  </a>
                </button>
              </div>
            </div>
          </div>
          </div>

          <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://res.cloudinary.com/diw7vmgum/image/upload/v1685493321/me_n0lj84.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="text-[#5e5768] text-3xl font-bold">
                Anthony Khong
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Lorem yesssipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <div className="flex justify-even">
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white hover:text-purple-500 shadow shadow-black/60">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/anthonykhong"
                  >
                    Github
                  </a>
                </button>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white hover:text-purple-500 shadow shadow-black/60">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/anthonykhong956/"
                  >
                    LinkedIn
                  </a>
                </button>
              </div>
            </div>
          </div>
          </div>

          <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://res.cloudinary.com/diw7vmgum/image/upload/v1685493554/vilemplaceholder_vtvq6t.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="text-[#5e5768] text-3xl font-bold">
                Vilem Mckael
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Lorem yesssipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <div className="flex justify-even">
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white hover:text-purple-500 shadow shadow-black/60">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Vilem-McKael"
                  >
                    Github
                  </a>
                </button>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white hover:text-purple-500 shadow shadow-black/60">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/vilem-mckael/"
                  >
                    LinkedIn
                  </a>
                </button>
              </div>
            </div>
          </div>
          </div>

          <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://res.cloudinary.com/diw7vmgum/image/upload/v1685493386/sal_gs9isq.png"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="text-[#5e5768] text-3xl font-bold">
                Sally Kam
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Lorem yesssipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <div className="flex">
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white hover:text-purple-500 shadow shadow-black/60">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sally-kam"
                  >
                    Github
                  </a>
                </button>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white hover:text-purple-500 shadow shadow-black/60">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/sallykam/"
                  >
                    LinkedIn
                  </a>
                </button>
              </div>
            </div>
          </div>
          </div>

          <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://res.cloudinary.com/dqdn7rpbn/image/upload/v1685493601/woon_tfse9k.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="text-[#5e5768] text-3xl font-bold">
                Woonchan Jung
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Lorem yesssipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <div className="flex">
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white hover:text-purple-500 shadow shadow-black/60">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/woonchanjung"
                  >
                    Github
                  </a>
                </button>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white hover:text-purple-500 shadow shadow-black/60">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/woonchanjung/"
                  >
                    LinkedIn
                  </a>
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
      <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>

      </div>

        </div>        
      </div>
      

    </main>
  );
}
