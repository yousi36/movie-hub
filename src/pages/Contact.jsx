import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
     e.preventDefault();
     navigate("/")
  }
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-10">
        Have questions, suggestions, or just want to say hi?  
        We’d love to hear from you! Fill out the form below or reach us directly.
      </p>
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="bg-white p-8 rounded-2xl shadow-md space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">📍 Address</h2>
            <p className="text-gray-600">123 Movie Street, Film City, Hollywood</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">📧 Email</h2>
            <p className="text-gray-600">support@movieverse.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">📞 Phone</h2>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
}
