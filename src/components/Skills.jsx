import { motion } from "framer-motion";

const skillData = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    items: [
      "React.js",
      "React Native",
      "Node.js",
      "Express.js",
      "Next.js",
      "Electron.js",
      "Django",
      "Bootstrap",
    ],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MongoDB", "Realm DB", "Firebase"],
  },
  {
    title: "Dev Tools",
    items: ["Git", "Jira", "React Query"],
  },
];

export default function Skills() {
  return (
    <div className="pt-10 pb-32 px-6 md:px-20 sm:pt-[78px] lg:pt-[120px] text-gray-900 dark:text-white">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
        My Skills
      </h2>

      {/* Categories */}
      <div className="grid md:grid-cols-2 gap-10 px-6 md:px-20">

        {skillData.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-md p-6 rounded-2xl shadow-xl dark:shadow-2xl border border-gray-200 dark:border-gray-600"
          >
            
            {/* Category Title */}
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-blue-300">
              {category.title}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 justify-center">
              {category.items.map((skill, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-2 text-sm bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 to-gray-700 text-gray-800 dark:text-white rounded-full border border-gray-300 dark:border-gray-600 hover:scale-110 hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}

