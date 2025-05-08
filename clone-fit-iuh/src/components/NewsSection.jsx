import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function NewsSection({ title, news }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-white rounded-lg shadow-md overflow-hidden">
      <h2 className="text-xl font-bold text-blue-800 p-4 border-b border-gray-200">{title}</h2>
      <div className="p-4">
        <motion.ul
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          className="space-y-4"
        >
          {news.map((item, index) => (
            <motion.li
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex gap-3"
            >
              <div className="flex-shrink-0">
                <img
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.title}
                  className="rounded object-cover w-20 h-15"
                />
              </div>
              <div>
                <a href={item.url} className="text-sm font-medium hover:text-blue-600 transition-colors">
                  {item.title}
                </a>
                <p className="text-xs text-gray-500 mt-1">{item.date}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
