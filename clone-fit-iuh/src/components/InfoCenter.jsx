import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function InfoCenter({ title, imageUrl }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="mt-6"
    >
      <h2 className="text-2xl font-bold text-red-800 mb-4">{title}</h2>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative overflow-hidden rounded-lg shadow-md"
      >
        <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-auto" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-blue-800 bg-opacity-70 flex items-center justify-center"
        >
          <span className="text-white font-bold text-lg">Xem chi tiết</span>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
