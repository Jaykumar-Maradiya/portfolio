import { motion } from "framer-motion";

const experiences = [
  {
    company: "Advait Business Solutions Pvt. Ltd.",
    role: "Full Stack Developer",
    duration: "Sept 2024 - Present",
    points: [
      "Built P2P & B2B portal with React.js, Node.js, PostgreSQL",
      "Implemented procurement, sales, HR, finance workflows",
      "Added vendor management, quotations, inventory tracking",
      "Developed reporting system for invoices and analytics",
      "Built secure B2B portal with OTP login & SAP integration",
    ],
  },
  {
    company: "Freelance (World eSIM)",
    role: "React Developer",
    duration: "May 2024 - Aug 2024",
    points: [
      "Developed multi-language & multi-currency platform",
      "Implemented add-to-cart and country-based plan search",
      "Integrated payments (PayPal, Google Pay, Apple Pay)",
      "Used GraphQL APIs and Strapi CMS",
    ],
  },
  {
    company: "MarckItAnalysts",
    role: "React Native Developer",
    duration: "Sept 2023 - May 2024",
    points: [
      "Developed healthcare platform with chat & video calling",
      "Implemented offline functionality for app usage",
      "Built BookMyTurf admin system with booking dashboard",
      "Added real-time offers and nearby turf search",
    ],
  },
];

export default function Experience() {
  return (
    <div className="pt-10 pb-32 px-6 md:px-20 sm:pt-[78px] lg:pt-[120px] text-gray-900 dark:text-white">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Experience
      </h2>

      <div className="relative border-l-4 border-gray-300 dark:border-blue-400 pl-8">

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >

            {/* Timeline Dot */}
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full shadow-lg ring-4 ring-white dark:ring-gray-900 mr-4"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {exp.company} • {exp.duration}
                </p>
              </div>
            </div>

            {/* Points */}
            <div className="bg-white/70 dark:bg-gray-900/40 backdrop-blur-sm p-6 rounded-2xl shadow-lg dark:shadow-xl border border-gray-200 dark:border-gray-700 ml-8">
              <ul className="space-y-3 text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                {exp.points.map((point, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start pl-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}

