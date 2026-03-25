import { useState } from "react";
import { sendContact } from "../api/contactApi";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await sendContact(form);
      alert("Message sent successfully! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="pt-10 pb-20 px-6 md:px-20 sm:pt-[78px] lg:pt-[120px] min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-blue-400 via-white to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
            Have a project or opportunity? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl dark:shadow-gray-900/50 border border-gray-200/50 dark:border-gray-700/50 max-w-2xl w-full"
        >
          
          {/* Name Field */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-5 text-lg rounded-2xl bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 to-gray-900 border border-gray-200 dark:border-gray-600 focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/30 focus:border-blue-500 dark:focus:border-blue-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm transition-all duration-300 hover:shadow-md"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-5 text-lg rounded-2xl bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 to-gray-900 border border-gray-200 dark:border-gray-600 focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/30 focus:border-blue-500 dark:focus:border-blue-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm transition-all duration-300 hover:shadow-md mt-4"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <textarea
              id="message"
              rows="6"
              placeholder="Tell me about your project..."
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-5 text-lg rounded-2xl bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 to-gray-900 border border-gray-200 dark:border-gray-600 focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/30 focus:border-blue-500 dark:focus:border-blue-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm transition-all duration-300 hover:shadow-md mt-4 resize-vertical"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-purple-600 dark:to-blue-600 hover:from-blue-700 hover:to-purple-700 dark:hover:from-purple-700 dark:hover:to-blue-700 text-white py-5 px-8 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl focus:ring-4 focus:ring-blue-500/50 dark:focus:ring-purple-500/50 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message 🚀"
            )}
          </motion.button>

        </motion.form>

        {/* Alternative Contact */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12 text-sm text-gray-500 dark:text-gray-400"
        >
          Or email me directly at <a href="mailto:hello@jaymaradiya.com" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">hello@jaymaradiya.com</a>
        </motion.p>

      </div>
    </div>
  );
}

