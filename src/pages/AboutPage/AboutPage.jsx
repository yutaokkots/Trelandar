import React from "react";

export default function AboutPage() {
  return (
    <main>
      <div className="bg-[#FCDEBE]">
        <div className="flex flex-col">
          <h1 className="flex justify-center font-bold text-5xl text-[#5e5768] py-16">
            About Us
          </h1>
          <div className="flex justify-center rounded-full bg-slate-300 bg-opacity-50 mx-60 px-28 py-16">
            <p className="text-[#5e5768]">
              At Trelandar, we understand the importance of staying organized
              and on top of your daily tasks. That's why we've created a
              user-friendly website that empowers you to manage your tasks
              efficiently and effectively.
              <br /> <br />
              Our platform revolves around a unique weekly grid system, designed
              to simplify the way you plan and schedule your activities. With a
              simple drag and drop functionality, you can easily allocate tasks
              to specific days and time slots, ensuring that nothing falls
              through the cracks.
              <br /> <br />
              Gone are the days of messy to-do lists and forgotten appointments.
              Trelandar provides you with a clear visual representation of your
              week, allowing you to see your commitments at a glance. Whether
              you're a busy professional, a student, or a homemaker, our
              intuitive interface makes it easy to prioritize, reschedule, and
              track your progress.
              <br /> <br />
              We believe that productivity should be accessible to everyone,
              which is why Trelandar is designed to be flexible and
              customizable. Tailor your grid to match your unique workflow and
              preferences. Whether you prefer a traditional 9-to-5 schedule or a
              more dynamic approach, our platform adapts to your needs.
              <br /> <br />
              Start your journey with Trelandar today and experience the power
              of efficient task management. Say goodbye to chaos and hello to
              productivity!
            </p>
          </div>
        </div>
        <div>
          <h1 className="flex justify-center font-bold text-3xl text-[#5e5768] py-14">
            Meet the Team
          </h1>

            
              <div className="flex  items-center justify-center pb-10">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
           
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
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </main>
  );
}
