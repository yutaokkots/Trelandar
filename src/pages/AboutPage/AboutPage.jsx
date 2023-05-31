import React from "react";

export default function AboutPage() {
  return (
    <main>
      <div className="bg-[#FCDEBE]">
        <div className="flex flex-col">
          <h1 className="flex justify-center font-bold text-5xl text-[#5e5768] py-16">
            About Us
          </h1>
          <div className="justify-center rounded-full bg-white border-4 border-[#5e5768] bg-opacity-50 mx-60 px-28 py-10">
            <p className="text-[#5e5768] ">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;At Trelandar, we've built a user-friendly website to help you stay organized and manage your tasks efficiently. Our unique weekly grid system simplifies planning and scheduling, with drag and drop functionality to allocate tasks. Say goodbye to messy to-do lists and forgotten appointments. Trelandar provides a clear visual representation of your week, allowing you to prioritize, reschedule, and track progress easily. Our platform is flexible and customizable, adapting to your workflow and preferences. Start your journey with Trelandar today and embrace efficient task management for a more productive life.
            </p>
          </div>
        <div>
            
        <h1 className="flex justify-center font-bold text-3xl text-[#5e5768] py-14">
            Meet the Team
          </h1>
              <div className="flex  items-center justify-center pb-10">
                
                <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
           
                    <div className="rounded-full group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                      <div className="rounded-full h-96 w-72">
                        <img
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                          src="https://res.cloudinary.com/diw7vmgum/image/upload/v1685493433/yuta_qexcfn.jpg"
                          alt=""
                        />
                      </div>
                      <div className=" absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                      <div className=" absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="text-[#FCDEBE] text-3xl font-bold">
                          Yuta Okkotsu
                        </h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          Lorem yesssipsum dolor sit amet, consectetur
                          adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
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
                 
               
                    <div className="rounded-full group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                      <div className="h-96 w-72">
                        <img
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                          src="https://res.cloudinary.com/diw7vmgum/image/upload/v1685493227/eric_d4sboa.jpg"
                          alt=""
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="text-[#FCDEBE] text-3xl font-bold">
                          Eric Hung
                        </h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          Lorem yesssipsum dolor sit amet, consectetur
                          adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
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
                  
               
                    <div className="rounded-full group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                      <div className="h-96 w-72">
                        <img
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                          src="https://res.cloudinary.com/diw7vmgum/image/upload/v1685493321/me_n0lj84.jpg"
                          alt=""
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="text-[#FCDEBE] text-3xl font-bold">
                          Anthony Khong
                        </h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          Lorem yesssipsum dolor sit amet, consectetur
                          adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
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
                
            
                    <div className="rounded-full group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                      <div className="h-96 w-72">
                        <img
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                          src="https://res.cloudinary.com/diw7vmgum/image/upload/v1685493554/vilemplaceholder_vtvq6t.jpg"
                          alt=""
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="text-[#FCDEBE] text-3xl font-bold">
                          Vilem Mckael
                        </h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          Lorem yesssipsum dolor sit amet, consectetur
                          adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
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
                  

          
                    <div className="rounded-full group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                      <div className="h-96 w-72">
                        <img
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                          src="https://res.cloudinary.com/diw7vmgum/image/upload/v1685493386/sal_gs9isq.png"
                          alt=""
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="text-[#FCDEBE] text-3xl font-bold">
                          Sally Kam
                        </h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          Lorem yesssipsum dolor sit amet, consectetur
                          adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
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
             
          
                    <div className="rounded-full group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                      <div className="h-96 w-72">
                        <img
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                          src="https://res.cloudinary.com/dqdn7rpbn/image/upload/v1685493601/woon_tfse9k.jpg"
                          alt=""
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="text-[#FCDEBE] text-3xl font-bold">
                          Woonchan Jung
                        </h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          Lorem yesssipsum dolor sit amet, consectetur
                          adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
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
      </div>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </main>
  );
}
