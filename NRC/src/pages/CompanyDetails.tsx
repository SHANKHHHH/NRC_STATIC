import  { useEffect } from "react";

function CompanyDetails() {
  // ✅ Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-[#00AEEF] mb-8 mt-32">
        About Us
      </h1>

      <div className="max-w-5xl mx-auto flex flex-col gap-10 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-gray-800">
        {/* Company Overview */}
        <section>
          
          <p className="text-lg leading-relaxed">
            <strong>NRContainers Pvt. Ltd.</strong> is an ISO 9001:2015 certified company and a leading manufacturer and supplier of printed corrugated boxes, multi-color folding box boards, micro flute mono cartons, and other customized packaging solutions.
            <br /><br />
            Originally established in 1993 as a proprietorship under the name <strong>N. R. Containers</strong>, the company was converted into a private limited entity in 2017.
            <br /><br />
            <strong>Promoters:</strong> Mrs. Renu Kohli and Mr. Darshan Lal Kohli
          </p>
        </section>

        {/* Facilities */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Facilities & Locations</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li><strong>Unit 1:</strong> Hariraju Layout, Doddabettahalli, Vidyaranyapura Post, Bangalore – 53,000 sq. ft.</li>
            <li><strong>Unit 2:</strong> KIADB Industrial Area, Doddaballapura – 70,000 sq. ft.</li>
          </ul>
        </section>

        {/* Product Range */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Product Range</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Primary Packaging (IP boxes)</li>
            <li>Secondary Packaging (E-flute corrugated boxes)</li>
            <li>Tertiary Packaging (Master cartons)</li>
            <li>Micro flute cartons, mono cartons, printed folders, tags, and other printed materials</li>
          </ul>
        </section>

        {/* Industries Served */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Industries Served</h2>
          <p className="text-lg">
            Textiles, Garments, Seeds, Footwear, Pharma, Electronics, and related industries.
          </p>
        </section>

        {/* Capabilities */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Capabilities & Strengths</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Advanced die-cutting and printing machines (Heidelberg, Lithrone, Mitsubishi)</li>
            <li>In-house design, consulting, and graphics team</li>
            <li>Research lab for material testing and optimization</li>
            <li>Flexible production for small and large orders with short turnaround time</li>
          </ul>
        </section>

        {/* Machinery */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Main Machinery</h2>
          <p className="text-lg">
            Heidelberg and Mitsubishi Offset Printers, FujiFilm CTP machines, Bobst & Aashi punching machines, RUK Sample Cutter, Automatic Folder Gluers, Flute Laminators (Automatic & Semi), 5-ply automated plant, and UV coating systems.
          </p>
        </section>

        {/* Clients */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Client Base</h2>
          <p className="text-lg">
            Serving customers across India with a strong focus on customization, flexibility, and high-quality standards.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
          <p className="text-lg space-y-2">
            <strong>Website:</strong>{" "}
            <a href="https://www.nrcontainers.com" className="text-blue-600" target="_blank" rel="noopener noreferrer">
              www.nrcontainers.com
            </a>
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:info@nrcontainers.com" className="text-blue-600">
              info@nrcontainers.com
            </a>
            <br /><br />
            
            <br />
          
          </p>
        </section>
      </div>
    </div>
  );
}

export default CompanyDetails;
