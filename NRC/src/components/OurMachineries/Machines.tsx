import { useState, useEffect } from 'react';
import twopiece from "../../assets/machines/2pieceAutomatic.jpg"
import fiveply from "../../assets/machines/5plyautomated.jpg"
import eightcolor from "../../assets/machines/8colorcoating.jpg"
import automaticFlute from "../../assets/machines/automaticFluteLamination.jpg"
import automaticGluer from "../../assets/machines/automaticgluermachine.jpg"
import semiautomatic from "../../assets/machines/Semi Automatic folder gluer.jpg"
import manualFolder from "../../assets/machines/manualFolderGluer2machine.jpg"



type Machine = {
  icon: string;
  title: string;
  description: string;
};

const MachineCard = ({ icon, title, description }: Machine) => {
  return (
    <div
      className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 group"
      style={{
        backgroundImage: `url(${icon})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "260px",
        color: "white",
      }}
    >
      {/* 🌚 Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-black/90 transition-all duration-300" />

      {/* Text content */}
      <div className="relative z-10 h-full w-full flex flex-col justify-end p-5 text-white text-center">
        <h3 className="text-xl font-bold drop-shadow-sm mb-1">{title}</h3>
        <p className="text-sm opacity-90 drop-shadow-md">{description}</p>
      </div>
    </div>
  );
};



const MachineList = ({ machines }: { machines: Machine[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  function getVisibleCount(): number {
    const width = window.innerWidth;
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return 3;
  }

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, machines.length - visibleCount);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  return (
    <div className="w-full py-12 px-4">
      <div className="relative max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 ${visibleCount >= 2 ? 'md:grid-cols-2' : ''} ${visibleCount >= 3 ? 'lg:grid-cols-3' : ''} gap-6 justify-items-center`}>
          {machines.slice(currentIndex, currentIndex + visibleCount).map((machine, index) => (
            <MachineCard key={index} {...machine} />
          ))}
          {Array.from({ length: Math.max(0, visibleCount - machines.slice(currentIndex, currentIndex + visibleCount).length) }).map((_, i) => (
            <div key={`placeholder-${i}`} className="h-[280px] w-full max-w-[320px] opacity-0 pointer-events-none"></div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
              currentIndex === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
              currentIndex >= maxIndex
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Machine() {
  const machineList: Machine[] = [
    {
      icon: twopiece,
      title: "Two Piece Automatic Folder Gluer",
      description: "Imported automatic folder-gluer machine for efficient box folding and gluing."
    },
    {
      icon: eightcolor,
      title: "8 Color + Coating Heidelberg Offset Press",
      description: "Advanced 8-color offset press with coating for high-end packaging prints."
    },
    {
      icon: fiveply,
      title: "5 Ply Automated Corrugation Plant",
      description: "Automated plant with B, K, C flute capability for master carton production."
    },
    {
      icon: automaticFlute,
      title: "Automatic Flute Laminator Machine",
      description: "High-speed laminator for precise flute-to-board pasting applications."
    },
    {
      icon: automaticGluer,
      title: "Automatic Folder Gluer Machine",
      description: "Automated gluer for streamlined folder assembly and packaging."
    },
    {
      icon: semiautomatic,
      title: "Semi-Automatic Flute Laminator Machine",
      description: "Cost-effective laminator for medium-scale flute lamination jobs."
    },
    {
      icon: manualFolder,
      title: "Manual Folder Gluer Machines",
      description: "Manually operated gluing machines for short-run or custom jobs."
    }
  ];
  


  return (
    <div className="bg-[#00AEEF] min-h-[500px] rounded-xl sm:rounded-2xl mx-2 sm:mx-4 mt-10 px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 lg:px-10 lg:py-8 shadow-xl">
      <div className="max-w-7xl mx-auto w-full">
        <MachineList machines={machineList} />
      </div>
    </div>
  );
}
