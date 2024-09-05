import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { Cover } from "./ui/cover";

import { FlipWords } from "./ui/flip-words";
const words = [
  "How to open directory in Vs Code using Command Prompt?",
  "How to add VS Code Plugins?",
  "How to add VS Code extensions?",
  "Tips and Tricks - Pyhton , Javascript and more!",
  // "Vrinda You'll not find any difficulties in programming as i Promised!",
];

const HomePage = () => {
  return (
    <div className="min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden py-10">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Purpose of this website ?
        </h1>
        <span className="p-10"></span>

        <h1 className="text-3xl md:text-4xl lg:text-4xl  font-semibold max-w-7xl mx-auto text-center  relative z-20 py-0 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          A Legacy of Coding Wisdom,<Cover>Just For You</Cover>
        </h1>
        <p className="mt-4 font-normal text-lg text-neutral-300 max-w-2xl text-center mx-auto">
          Remember those days when we used to sit together and dive into coding?
          I shared everything with you—my settings, tools, and all the little
          tips and tricks I&apos;ve learned along the way. Those moments were
          priceless, and teaching you was always a joy. Now, even though
          we&apos;re not together, I wanted to make sure that you still have
          access to all the knowledge we used to share. That&apos;s why I
          created this website—my very own digital cheat sheet for you. Here,
          you&apos;ll find a collection of videos capturing my coding sessions,
          just as I used to show you in person. It&apos;s all here: the tools,
          techniques, and tips, neatly organized and available whenever you need
          them.
        </p>
        <p className="mt-4 font-normal text-lg text-neutral-300 max-w-2xl text-center mx-auto">
          I know you forget things easily thats&apos; s why creating this cheat
          sheet. <br />
          You&apos; ll find everything here, Right from{" "}
          <span className="text-lg text-purple-400">
            How to Install Vs Code Editor
          </span>{" "}
          to{" "}
          <span className="text-lg text-purple-400">
            Data Structure and Algorithms and whatnot
          </span>
          <br /> <br />
          This is just a Landing page. I&apos; ll start uploading actual videos
          of the content as soon as possible after creating another website like
          Udemy, where you&apos; ll find all courses.
        </p>
        <p className="mt-4 font-normal text-lg text-neutral-300 max-w-2xl text-center mx-auto">
          You&apos; ll encounter{" "}
          <span className="text-lg  underline decoration-purple-400">
            {" "}
            refrence videos{" "}
          </span>
          as well. Like <br />
        </p>
        <br />
        <div className="text-2xl max-w-3xl font-semibold text-neutral-600 dark:text-neutral-400 text-center mx-auto">
          <FlipWords words={words} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
