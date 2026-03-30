import { useState } from "react";
import { sendContact } from "../api/contactApi";
import { motion } from "framer-motion";
import { useToast } from "../components/Toaster"; // ✅ add this

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { showToast } = useToast(); // ✅ use toast

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await sendContact(form);

      // ✅ success toast
      showToast("Message sent successfully! I'll get back to you soon.", "success");

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      // ❌ error toast
      showToast("Something went wrong. Please try again.", "error");
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

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
        >
          
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-5 rounded-2xl mt-2"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="your.email@example.com"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-5 rounded-2xl mt-4"
          />

          {/* Message */}
          <textarea
            rows="6"
            placeholder="Tell me about your project..."
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-5 rounded-2xl mt-4"
          />

          {/* Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 rounded-2xl"
          >
            {isLoading ? "Sending..." : "Send Message 🚀"}
          </motion.button>
        </motion.form>

        {/* Email */}
        <p className="text-center mt-12 text-sm text-gray-500">
          Or email me directly at{" "}
          <a href="mailto:jaymaradiya3225@gmail.com" className="font-semibold text-blue-600 hover:underline">
            jaymaradiya3225@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
