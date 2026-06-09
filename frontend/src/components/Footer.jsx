import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-black text-white px-5 sm:px-10 lg:px-20 py-12 lg:py-16 border-t border-[#1f1f1f]"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold">
            FounderOS
          </h2>

          <p className="text-[#b3b3b3] mt-5 max-w-sm leading-7 mx-auto lg:mx-0 text-sm sm:text-base">
            AI-powered startup workspace built
            for founders, teams, and modern
            businesses.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <h3 className="font-semibold mb-5">
              Product
            </h3>

            <div className="space-y-3 text-[#b3b3b3]">
              <a
                href="#features"
                className="block hover:text-white cursor-pointer transition-all duration-300"
              >
                Features
              </a>

              <a
                href="#pricing"
                className="block hover:text-white cursor-pointer transition-all duration-300"
              >
                Pricing
              </a>

              <a
                href="#dashboard"
                className="block hover:text-white cursor-pointer transition-all duration-300"
              >
                Workspace
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-5">
              Company
            </h3>

            <div className="space-y-3 text-[#b3b3b3]">
              <p className="hover:text-white cursor-pointer transition-all duration-300">
                About
              </p>

              <p className="hover:text-white cursor-pointer transition-all duration-300">
                Careers
              </p>

              <p className="hover:text-white cursor-pointer transition-all duration-300">
                Contact
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-5">
              Social
            </h3>

            <div className="space-y-3 text-[#b3b3b3]">
              <p className="hover:text-white cursor-pointer transition-all duration-300">
                Twitter
              </p>

              <p className="hover:text-white cursor-pointer transition-all duration-300">
                LinkedIn
              </p>

              <p className="hover:text-white cursor-pointer transition-all duration-300">
                GitHub
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1f1f1f] mt-12 lg:mt-14 pt-8 text-center text-[#777] text-xs sm:text-sm">
        © 2026 FounderOS. All rights reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;