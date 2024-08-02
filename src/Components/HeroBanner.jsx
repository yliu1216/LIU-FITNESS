import React from "react";

export default function HeroBanner() {
  return (
    <div className="relative flex flex-col lg:flex-row isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:gap-x-20 lg:pt-0">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset="1" stopColor="#f87171" />
          </radialGradient>
        </defs>
      </svg>
      <div className="relative z-10 pl-8 lg:w-1/2">
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="font-bold text-primary text-4xl sm:text-5xl lg:text-6xl tracking-tight pt-5">Love Who You Are</h2>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl pt-3 text-black font-semibold">
            Live for a <br /> Better Self
          </h1>
          <h1 className="opacity-5 text-6xl sm:text-7xl lg:text-8xl pt-5 block absolute bottom-15 right-5 left-0 text-center text-primary">
            EXERCISE
          </h1>
          <img src={require("../assets/images/workout.jpg")} alt="banner" className="w-40 h-40 sm:w-50 sm:h-50 rounded-full mt-5 shadow-md mx-auto pb-2" />
        </div>
      </div>
      <div className="relative lg:w-1/2 pl-4">
        <img src={require("../assets/images/banner.png")} alt="banner" className="px-2 py-4" />
        <div className="absolute top-5 left-2 w-full p-8">
          <h2 className="font-bold text-primary text-3xl sm:text-4xl tracking-tight lg:text-left">Fitness Club</h2>
          <h1 className="text-xl sm:text-2xl pt-5 lg:text-left text-cream font-bold">
            Sweat, Smile <br /> and Repeat
          </h1>
          <div className="mt-5 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="/login"
              className="text-white rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white relative z-20"
            >
              Explore Exercise
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
