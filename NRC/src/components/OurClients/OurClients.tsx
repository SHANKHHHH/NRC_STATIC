import { useEffect, useRef } from "react";

import bata from "../../assets/clients/bataa.avif";
import jockey from "../../assets/clients/jockey.avif";
import scholl from "../../assets/clients/scholl.avif";
import vip from "../../assets/clients/vip.avif";
import hush from "../../assets/clients/hsuh .avif";
import speedo from "../../assets/clients/speedo.avif";
import daisy from "../../assets/clients/daisy.avif";
import sakata from "../../assets/clients/sakata .avif";
import acs from "../../assets/clients/acs_new.avif";
import hyveg from "../../assets/clients/hyveg.avif";
import kanti from "../../assets/clients/kanti.avif"
import raymond from "../../assets/clients/raymond.avif";
import nongwoo from "../../assets/clients/nongwood.avif";
import origami from "../../assets/clients/origami.avif";
import tokita from "../../assets/clients/tokita.avif";
import seeding from "../../assets/clients/seeding.avif";



const clientLogos: string[] = [
  bata,
  jockey,
  scholl,
  vip,
  hush,
  speedo,
  daisy,
  sakata,
  acs,
  hyveg,
  kanti,
  raymond,
  nongwoo,
  origami,
  tokita,
  seeding
];

export default function OurClients() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!slider) return;

      scrollPosition += scrollSpeed;

      const singleSetWidth = slider.scrollWidth / 2;

      if (scrollPosition >= singleSetWidth) {
        scrollPosition = 0;
      }

      slider.style.transform = `translateX(-${scrollPosition}px)`;
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };

    const handleMouseLeave = () => {
      if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(scroll);
      }
    };

    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full px-4 py-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-lg md:text-4xl font-bold text-white leading-tight mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-[#00AEEF] via-[#0099d9] to-[#007ba3] text-center w-fit mx-auto">
          Our Clients
        </h1>

        <div className="overflow-hidden mt-20">
          <div
            ref={sliderRef}
            className="flex gap-10 items-center whitespace-nowrap"
            style={{ width: "max-content" }}
          >
            {clientLogos.map((logo, index) => (
              <img
                key={`first-${index}`}
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105 flex-shrink-0"
              />
            ))}
            {clientLogos.map((logo, index) => (
              <img
                key={`second-${index}`}
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
