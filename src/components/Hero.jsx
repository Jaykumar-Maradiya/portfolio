import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center text-center relative">
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-500 to-purple-500 dark:from-gray-100 via-blue-400 to-purple-400 bg-clip-text text-transparent">
        Jay Maradiya
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-gray-400 dark:text-gray-300 text-lg"
      >
        Full Stack Developer
      </motion.p>

      <motion.a
        href="/resume.pdf"
        whileHover={{ scale: 1.1 }}
        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-500 dark:bg-purple-600 dark:hover:bg-purple-500 text-white rounded-lg shadow-lg dark:shadow-purple-500/25 transition-all"
      >
        Download Resume
      </motion.a>
    </div>
  );
}

