"use client ";

import React from "react";
import { cn } from "@/utils/cn";
import { useIntersectionObserver } from "@/components/Hooks/useIntersectionObserver ";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  const { ref, isVisible } = useIntersectionObserver({
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.1, // Start the animation when 10% of the component is visible
  });

  return (
    <div ref={ref} className="spotlight-container">
      <svg
        className={cn(
          "pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%]",
          isVisible ? "animate-spotlight opacity-100" : "opacity-0",
          className
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3787 2842"
        fill="none"
      >
        <g filter="url(#filter)">
          <ellipse
            cx="1924.71"
            cy="273.501"
            rx="1924.71"
            ry="273.501"
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
            fill={fill || "white"}
            fillOpacity="0.21"
          ></ellipse>
        </g>
        <defs>
          <filter
            id="filter"
            x="0.860352"
            y="0.838989"
            width="3785.16"
            height="2840.26"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="151"
              result="effect1_foregroundBlur_1065_8"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>

      <style jsx>{`
        @keyframes spotlight {
          0% {
            opacity: 0;
            transform: scale(1);
          }
          100% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        .animate-spotlight {
          animation: spotlight 1s ease-out forwards;
        }

        .spotlight-container svg {
          opacity: 0;
          transition: opacity 1s ease-out;
        }

        .spotlight-container svg.animate-spotlight {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};
