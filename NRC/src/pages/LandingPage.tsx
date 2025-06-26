import AboutUs from "../components/Banner/AboutUs"
import ContactUs from "../components/Contactus/Contactus"
import OurClients from "../components/OurClients/OurClients"
import OurMachines from "../components/OurMachineries/Ourmachines"
import OurProducts from "../components/OurProducts/OurProducts"
function LandingPage() {
  return (
    <div>

 <section id="about" className=" mt-0 sm:mt-10 "> 
        <AboutUs />
      </section>

  {/* Products section */}
  <section id="products" className='mt-20'>
        <OurProducts />
      </section>

{/* Machine section */}
<section id="machine" className='mt-20'>
        <OurMachines />
      </section>
  
{/* Client section */}
<section id="client" className='mt-20'>
        <OurClients/>
      </section>

{/* contact section */}
<section id="contact" className='mt-12'>
        <ContactUs/>
      </section>
  

  
    </div>

    
  )
}

export default LandingPage