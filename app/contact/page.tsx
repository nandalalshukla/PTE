"use client";
import LocationMap from "@/components/ui/Map";
import axios from "axios";

import { useState } from "react";

const contactInfo = [
  {
    icon: "📍",
    title: "Location",
    details: ["Kathmandu, Nepal", "Online Classes Worldwide"],
  },
  {
    icon: "📧",
    title: "Email",
    details: ["info@passtheexcellence.com", "support@passtheexcellence.com"],
  },
  {
    icon: "📞",
    title: "Phone",
    details: ["+977 9800000000", "+977 9811111111"],
  },
  {
    icon: "⏰",
    title: "Hours",
    details: ["Sun - Fri: 6AM - 9PM", "Saturday: 8AM - 6PM"],
  },
];

const socialLinks = [
  { name: "Facebook", icon: "📘", href: "#" },
  { name: "Instagram", icon: "📸", href: "#" },
  { name: "YouTube", icon: "▶️", href: "#" },
  { name: "WhatsApp", icon: "💬", href: "#" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await axios.post("/api/send-email", formData);
      console.log(res.data);
      alert("Email sent!");
    } catch (err) {
      console.error(err);
      alert("Failed to send email");
    }
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 text-sm font-medium text-[#5227FF] bg-[#5227FF]/10 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about our courses? Want to enroll? We&apos;re here to
            help you start your German learning journey.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </span>
              <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">
                {info.title}
              </h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-gray-600 dark:text-gray-400 text-sm">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Send us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2 text-[#5227FF] font-semibold hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#5227FF] focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#5227FF] focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#5227FF] focus:border-transparent transition-all duration-300"
                        placeholder="+977 98XXXXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject *
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#5227FF] focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="enrollment">Course Enrollment</option>
                        <option value="inquiry">General Inquiry</option>
                        <option value="support">Collaborate</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#5227FF] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={() => console.log(formData)}
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#5227FF] text-white font-bold rounded-xl hover:bg-[#4520d4] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info Side */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Map Placeholder */}
            <div className="h-64 lg:h-80 rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700">
              <div>
                <LocationMap />
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                Connect With Us
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-md group"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="p-8 rounded-3xl bg-[#5227FF] text-white">
              <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
              <p className="text-white/90 mb-6">
                Need immediate assistance? Reach out to us directly via WhatsApp
                or call.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="flex-1 py-3 px-6 bg-white text-[#5227FF] font-bold rounded-xl text-center hover:bg-gray-100 transition-all duration-300"
                >
                  💬 WhatsApp
                </a>
                <a
                  href="tel:+9779800000000"
                  className="flex-1 py-3 px-6 bg-white/20 text-white font-bold rounded-xl text-center hover:bg-white/30 transition-all duration-300"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
