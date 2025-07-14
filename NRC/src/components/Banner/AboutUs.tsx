//import { ArrowRight } from "lucide-react";
import NRC from "../../assets/comman/NRC.jpg";

export default function AboutUs() {
//   const handleCompanyProfileClick = () => {
//     window.open(
      
//     );
//   };

  return (
    <div className="bg-[#00AEEF] rounded-3xl mx-4 mt-10 px-6 py-14 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-14">
        
        {/* Left Text Content */}
        <div className="flex-1 text-white text-center lg:text-left space-y-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Packaging Excellence Since 1993
            </h2>
            <p className="text-2xl sm:text-3xl font-semibold mt-2">
              Trusted. Certified. <span className="block">Nationwide.</span>
            </p>
          </div>

          <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
          NRContainers Pvt. Ltd. is an ISO 9001:2015 certified company and a trusted manufacturer of printed corrugated boxes, folding box boards, and microflute mono cartons. With decades of industry expertise and advanced machinery, we provide reliable, flexible, and high-quality packaging solutions to clients across India and overseas, delivering packaging that meets international standards.
          </p>

          <div>
            {/* <button
              onClick={handleCompanyProfileClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#00AEEF] hover:bg-gray-100 font-semibold rounded-full text-base lg:text-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
            >
              <span>View Company Profile</span>
              <ArrowRight className="w-5 h-5" />
            </button> */}
          </div>
        </div>

        {/* Right Image Content */}
        <div className="flex-1 flex justify-center lg:justify-end">
          
            <img
              src={NRC}
              alt="NRContainers Factory"
              className="rounded-4xl object-cover w-full h-auto"
            />
          
        </div>
      </div>
    </div>
  );
}
