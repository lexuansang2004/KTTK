import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function FeaturedNews({ title, news }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <h2 className="text-2xl font-bold text-red-800 p-4 border-b border-gray-200">{title}</h2>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        className="p-4 space-y-4"
      >
        {news.map((item, index) => (
          <motion.li
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative pl-6 pb-2 border-b border-gray-100"
          >
            <span className="absolute left-0 top-1.5">
              <svg className="w-4 h-4 text-red-800 fill-current" viewBox="0 0 20 20">
                <path d="M7.7,17.3l-0.7-0.7L13.3,10L7,3.7l0.7-0.7L14.7,10L7.7,17.3z" />
              </svg>
            </span>
            <a href={item.url} className="text-sm font-medium hover:text-blue-600 transition-colors block">
              {item.title}
              {item.isNew && (
                <span className="inline-block ml-2">
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    className="inline-flex items-center justify-center bg-red-600 text-white text-[10px] px-1 rounded-sm"
                  >
                    NEW
                  </motion.span>
                </span>
              )}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
