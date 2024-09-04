import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/utils/cn";
import { BackgroundBeams } from "./ui/background-beams";

const Footer = () => {
  return (
    <div className="h-[50rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to Veri5ed. If you really loved this website and my small
          efforts, just join the waitlist by adding your email. I&apos;ll get
          notified automatically. <br />
          I&apos;ll start working on another site as soon as possible and help
          you out indirectly. Don&apos;t worry, I&apos;m right here! Thank you
          <br />
          Yours Truly, <br /> Pranav
        </p>
        <form action="https://formspree.io/f/mwpezbyj" method="POST">
          <input
            type="email"
            name="email" // This is the key part
            placeholder=" --hi@pranavkangale.in"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <button
            type="submit"
            className="mt-4 px-4 py-2 rounded-lg bg-teal-500 text-white font-bold hover:bg-teal-600"
          >
            Join
          </button>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Footer;
