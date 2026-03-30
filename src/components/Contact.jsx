import { useState } from "react";
import { sendContact } from "../api/contactApi";
import { motion } from "framer-motion";
import { useToast } from "../components/Toaster";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { showToast } = useToast();

  // ✅ Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = "Invalid email address";
      }
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ✅ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    document.activeElement.blur(); // mobile fix

    if (!validateForm()) {
      showToast("Please fix the errors", "error");
      return;
    }

    setIsLoading(true);

    try {
      await sendContact(form);

      showToast(
        "Message sent successfully! I'll get back to you soon.",
        "success"
      );

      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      showToast("Something went wrong. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Handle change
  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });

    // remove error when user types
    setErrors({ ...errors, [field]: "" });
  };

  return (
    <div className="pt-10 pb-20 px-6 md:px-20 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-500">
            Have a project or opportunity? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border"
        >

          {/* Name */}
          <div className="mt-2">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={`w-full p-4 rounded-xl border ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mt-4">
            <input
              type="email"
              placeholder="your.email@example.com"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`w-full p-4 rounded-xl border ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="mt-4">
            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className={`w-full p-4 rounded-xl border ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl hover:opacity-90 transition"
          >
            {isLoading ? "Sending..." : "Send Message 🚀"}
          </button>
        </motion.form>

        {/* Email fallback */}
        <p className="text-center mt-10 text-sm text-gray-500">
          Or email me directly at{" "}
          <a
            href="mailto:jaymaradiya3225@gmail.com"
            className="text-blue-600 font-semibold"
          >
            jaymaradiya3225@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
