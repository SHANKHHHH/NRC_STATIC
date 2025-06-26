import { useState, type ChangeEvent, type FormEvent } from "react";
import contactus from "../../assets/comman/contactus.avif"
interface FormData {
  name: string;
  email: string;
  number: string;
  message: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const requiredFields = ["name", "email", "number", "message"];
      const missingFields = requiredFields.filter(
        (field) => !formData[field as keyof FormData]?.trim()
      );

      if (missingFields.length > 0) {
        throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
      }

      // Replace with your actual API endpoint
      const response = await fetch("https://staging.transitco.in/api/auth/shankh-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", number: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* h1 Heading */}
      <h1 className="text-lg md:text-4xl font-bold text-white leading-tight mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-[#00AEEF] via-[#0099d9] to-[#007ba3] text-center w-fit mx-auto">
        Contact Us
      </h1>

      {/* White Card Container */}
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Form Section */}
          <div className="w-full lg:w-3/5 p-6 sm:p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="tel"
                name="number"
                placeholder="Phone Number"
                value={formData.number}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                required
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00AEEF] hover:bg-[#0099d9] text-white font-semibold py-3 rounded-lg transition duration-300 hover:cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="bg-green-100 text-green-700 px-4 py-3 rounded">
                  Message sent successfully!
                </div>
              )}
              {submitStatus === "error" && (
                <div className="bg-red-100 text-red-700 px-4 py-3 rounded">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-2/5 flex items-center justify-center p-6">
            <img
              src={contactus}
              alt="Contact Illustration"
              className="max-h-80 object-contain rounded-4xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
