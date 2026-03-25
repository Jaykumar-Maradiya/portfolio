import { motion } from "framer-motion";

export default function About() {
  return (
    <div id="about" className="pt-10 pb-32 px-6 md:px-20 sm:pt-[78px] lg:pt-[120px]">

      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          About Me
        </h2>

        {/* Animated Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 dark:bg-black/40 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl dark:shadow-2xl border border-gray-200 dark:border-gray-700"
        >

          <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-sm md:text-lg">
            I am a <span className="text-blue-600 dark:text-blue-400 font-semibold">Full Stack Developer</span> with
            <span className="text-blue-600 dark:text-blue-400 font-semibold"> 2 years of experience</span> building
            responsive and scalable web and mobile applications.
            <br /><br />

            I specialize in modern technologies like
            <span className="text-blue-600 dark:text-blue-400"> JavaScript, TypeScript, Python, React.js, Next.js, and React Native</span>,
            along with strong backend expertise in
            <span className="text-blue-600 dark:text-blue-400"> Node.js, Express.js, and Django</span>.
            <br /><br />

            I have hands-on experience working with databases such as
            <span className="text-blue-600 dark:text-blue-400"> PostgreSQL, MongoDB, and Realm DB</span>,
            and integrating APIs using tools like
            <span className="text-blue-600 dark:text-blue-400"> Firebase, Git, Jira, and React Query</span>.
            <br /><br />

            I am passionate about writing clean, efficient code and delivering
            <span className="text-blue-600 dark:text-blue-400"> high-quality user experiences</span>
            across platforms.
          </p>

        </motion.div>

      </div>
    </div>
  );
}

