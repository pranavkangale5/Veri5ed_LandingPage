import React from "react";
import me from "@/assets/me.jpg";
import cool from "@/assets/cool.jpg";
import hehe from "@/assets/hehe.jpg";
import laptop from "@/assets/laptop.jpg";
import git from "@/assets/git.jpg";
import casecobra from "@/assets/casecobra.png";

import { HeroParallax } from "./ui/hero-parallax";
export const products = [
  {
    title: "Footballer Turned Coder",

    thumbnail: hehe,
  },
  {
    title: "Lenovo Legion 5",

    thumbnail: laptop,
  },
  {
    title: "Pranav",

    thumbnail: me,
  },

  {
    title: "Editorially",

    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",

    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",

    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",

    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "github.com/Pranavkangale5",

    thumbnail: git,
  },
  {
    title: "Case Cobra E-commerce",

    thumbnail: casecobra,
  },
  {
    title: "SmartBridge",

    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",

    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",

    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",

    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

const HeroSection = () => {
  return <HeroParallax products={products} />;
};

export default HeroSection;
