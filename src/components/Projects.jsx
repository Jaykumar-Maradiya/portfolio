import { motion } from "framer-motion";

const projects = [
  {
    title: "World eSIM",
    desc: "Global eSIM platform with multi-language, multi-currency and secure payments",
    tech: ["React", "GraphQL", "Strapi", "Payments"],
    link: "https://newsite.worldsim.com/",
  },
  {
    title: "B2B Portal (Advait)",
    desc: "Enterprise system for procurement, sales, inventory & reporting",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Book My Turf",
    desc: "Booking platform with real-time slots, offers & dashboard",
    tech: ["React Native", "Firebase"],
  },
];

export default function Projects() {
  return (
    <div className="pt-10 pb-32 px-6 md:px-20 sm:pt-[78px] lg:pt-[120px] text-gray-900 dark:text-white">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group bg-white/80 dark:bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl shadow-xl dark:shadow-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl dark:hover:shadow-gray-900/50 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 overflow-hidden relative"
          >

            {/* Badge */}
            {project.link && (
              <span className="absolute top-4 right-4 px-3 py-1 bg-blue-500 dark:bg-purple-500 text-white text-xs font-bold rounded-full shadow-lg">
                LIVE
              </span>
            )}

            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-base mb-6 leading-relaxed">
              {project.desc}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-2 text-sm bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-500/20 dark:to-purple-500/20 text-blue-700 dark:text-blue-200 font-medium rounded-lg border border-blue-200 dark:border-blue-400 shadow-sm hover:shadow-md transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>

            {/* Link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-lg group-hover:translate-x-2 transition-all duration-300 border-b-2 border-transparent hover:border-blue-500 dark:hover:border-blue-400"
              >
                View Project 
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

          </motion.div>
        ))}

      </div>
    </div>
  );
}

