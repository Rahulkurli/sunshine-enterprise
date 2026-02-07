import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWhatsAppMessage = ({ name, email, subject, message }) => {
    const phoneNumber = "917404148893"; // WhatsApp format (no +)
    const text = `
New Contact Inquiry - Sunlix

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappURL, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name.trim()) {
      toast.error("Please enter your name", { theme: "dark" });
      return;
    }

    if (!email.trim()) {
      toast.error("Please enter your email address", { theme: "dark" });
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address", { theme: "dark" });
      return;
    }

    if (!subject.trim()) {
      toast.error("Please enter a subject", { theme: "dark" });
      return;
    }

    if (!message.trim()) {
      toast.error("Please enter your message", { theme: "dark" });
      return;
    }

    // WhatsApp Send
    sendWhatsAppMessage(formData);

    toast.success("Thank you! Our team will contact you shortly.", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Get in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            Touch
          </span>
        </h2>

        <p className="text-center text-gray-300 mb-14">
          Reach out to Sunlix for medical & scientific product inquiries
        </p>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            { icon: "📧", label: "Email", value: "sunlix1710@gmail.com" },
            { icon: "📞", label: "Phone", value: "+91-7404148893" },
            {
              icon: "📍",
              label: "Address",
              value:
                "#517, Vishwakarma Nagar, Ambala Cantt, Haryana 133001, India",
            },
          ].map((contact, idx) => (
            <div
              key={idx}
              className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700 hover:border-orange-500 transition"
            >
              <div className="text-4xl mb-3">{contact.icon}</div>
              <p className="text-gray-400 text-sm mb-1">{contact.label}</p>
              <p className="text-white font-semibold">{contact.value}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-slate-700 rounded-lg p-8 border border-slate-600">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-slate-600 text-white px-4 py-3 rounded-lg border border-slate-500 focus:border-orange-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-slate-600 text-white px-4 py-3 rounded-lg border border-slate-500 focus:border-orange-500 focus:outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Product / Bulk Order / Inquiry"
                className="w-full bg-slate-600 text-white px-4 py-3 rounded-lg border border-slate-500 focus:border-orange-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us your requirements..."
                className="w-full bg-slate-600 text-white px-4 py-3 rounded-lg border border-slate-500 focus:border-orange-500 focus:outline-none transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-3 rounded-lg transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
