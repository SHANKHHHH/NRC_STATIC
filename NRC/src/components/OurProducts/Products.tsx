import { useState, useEffect } from 'react';

// ✅ Import images
import folder from "../../assets/products/folder.jpeg";
import mono from "../../assets/products/mono.webp";
import secondary from "../../assets/products/secondary.webp";
import teritary from "../../assets/products/teritary.webp";
import primpack from "../../assets/products/primary packaging .webp";
import microflute from "../../assets/products/microflute.webp";
import printing from "../../assets/products/printing.webp";

// ✅ Product type
type Product = {
  icon: string;
  title: string;
  description: string;
};

// ✅ Card with background image and light overlay
const ProductCard = ({ icon, title, description }: Product) => {
    return (
      <div
        className="relative rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-blue-300 hover:shadow-lg transform hover:scale-105"
        style={{
          backgroundImage: `url(${icon})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
          color: "white",
        }}
      >
        {/* 🌚 Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
  
        {/* Text content */}
        <div className="relative z-10 flex flex-col justify-end text-center p-4 h-full">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    );
  };
  
// ✅ List renderer with responsive controls
const ProductList = ({ products }: { products: Product[] }) => {
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

  const maxIndex = Math.max(0, products.length - visibleCount);
  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  return (
    <div className="w-full py-12 px-4">
      <div className="relative max-w-6xl mx-auto">
        <div
          className={`grid grid-cols-1 ${
            visibleCount >= 2 ? "md:grid-cols-2" : ""
          } ${visibleCount >= 3 ? "lg:grid-cols-3" : ""} gap-6`}
        >
          {products
            .slice(currentIndex, currentIndex + visibleCount)
            .map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
        </div>

        {/* Navigation buttons */}
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
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
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
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// ✅ Main component
export default function Product() {
  const productList: Product[] = [
    {
      icon: folder,
      title: "Folder Packaging",
      description: "Secure and compact packaging solution.",
    },
    {
      icon: mono,
      title: "Mono Cartons",
      description: "Lightweight cartons for primary packaging.",
    },
    {
      icon: secondary,
      title: "Secondary Packaging",
      description: "Robust protection for grouped items.",
    },
    {
      icon: teritary,
      title: "Tertiary Packaging",
      description: "Bulk packaging for transport and storage.",
    },
    {
      icon: primpack,
      title: "Primary Packaging",
      description: "Direct contact packaging for products.",
    },
    {
      icon: microflute,
      title: "Microflute Boxes",
      description: "Compact and durable corrugated boxes.",
    },
    {
      icon: printing,
      title: "Custom Printing",
      description: "High-quality printing for branding.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-lg md:text-4xl font-bold text-white leading-tight mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-[#00AEEF] via-[#0099d9] to-[#007ba3] text-center">
       Our Products
      </h1>
      <ProductList products={productList} />
    </div>
  );
}
