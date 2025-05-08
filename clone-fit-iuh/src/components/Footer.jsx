import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Footer() {
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0)
  const partners = [
    { name: "Global CyberSoft", logo: "/images/partners/global-cybersoft.png" },
    { name: "Gameloft", logo: "/images/partners/gameloft.png" },
    { name: "DXC Technology", logo: "/images/partners/dxc.png" },
    { name: "KMS Technology", logo: "/images/partners/kms.png" },
    { name: "Internship", logo: "/images/partners/internship.png" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartnerIndex((prevIndex) => (prevIndex + 1) % partners.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [partners.length])

  const handlePrevPartner = () => {
    setCurrentPartnerIndex((prevIndex) => (prevIndex - 1 + partners.length) % partners.length)
  }

  const handleNextPartner = () => {
    setCurrentPartnerIndex((prevIndex) => (prevIndex + 1) % partners.length)
  }

  const visiblePartners = () => {
    const numVisible = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 3 : 5
    const result = []
    for (let i = 0; i < numVisible; i++) {
      const index = (currentPartnerIndex + i) % partners.length
      result.push(partners[index])
    }
    return result
  }

  return (
    <footer className="bg-white border-t">
      {/* Recruitment Announcements */}
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="mb-3">
            <a href="#" className="flex items-start text-sm hover:text-blue-600">
              <span className="mr-2 mt-1">▶</span>
              <span>
                Thông báo Tuyển sinh đào tạo liên thông từ trình độ Cao đẳng lên trình độ Đại học - đợt 1 năm 2025 (lớp đặt tại Trường Cao đẳng Công Thương Thành phố Hồ Chí Minh)
                <span className="inline-block ml-2 bg-red-600 text-white text-[10px] px-1 rounded-sm">NEW</span>
              </span>
            </a>
          </div>
          <div className="mb-3">
            <a href="#" className="flex items-start text-sm hover:text-blue-600">
              <span className="mr-2 mt-1">▶</span>
              <span>
                Thông báo v/v tuyển sinh đào tạo liên thông từ trình độ Cao đẳng lên trình độ Đại học - đợt 1 năm 2025
              </span>
            </a>
          </div>
          <div className="mb-3">
            <a href="#" className="flex items-start text-sm hover:text-blue-600">
              <span className="mr-2 mt-1">▶</span>
              <span>
                Thông báo tuyển sinh trình độ tiến sĩ năm 2025 - đợt 1
              </span>
            </a>
          </div>
        </div>
        <div>
          <div className="mb-3">
            <a href="#" className="flex items-start text-sm hover:text-blue-600">
              <span className="mr-2 mt-1">▶</span>
              <span>
                [DXC VietNam]: TUYỂN FRESHER/ INTERN TẠI DXC VIỆT NAM
                <span className="inline-block ml-2 bg-red-600 text-white text-[10px] px-1 rounded-sm">NEW</span>
              </span>
            </a>
          </div>
          <div className="mb-3">
            <a href="#" className="flex items-start text-sm hover:text-blue-600">
              <span className="mr-2 mt-1">▶</span>
              <span>
                [DigiTech Solutions]: Tuyển thực tập sinh
                <span className="inline-block ml-2 bg-red-600 text-white text-[10px] px-1 rounded-sm">NEW</span>
              </span>
            </a>
          </div>
          <div className="mb-3">
            <a href="#" className="flex items-start text-sm hover:text-blue-600">
              <span className="mr-2 mt-1">▶</span>
              <span>
                [TMA Industry Internship]: Tuyển thực tập sinh khóa 46
                <span className="inline-block ml-2 bg-red-600 text-white text-[10px] px-1 rounded-sm">NEW</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">Đơn vị liên kết</h2>
          <div className="relative">
            <div className="flex justify-between items-center">
              {visiblePartners().map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-1/5 px-2"
                >
                  <img 
                    src={partner.logo || "/placeholder.svg"} 
                    alt={partner.name} 
                    className="h-12 object-contain mx-auto"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/placeholder.svg?height=48&width=120";
                    }}
                  />
                </motion.div>
              ))}
            </div>
            <button 
              onClick={handlePrevPartner}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNextPartner}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4">Liên hệ</h3>
              <div className="flex items-start mb-3">
                <div className="flex-shrink-0 bg-gray-300 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm">12 Nguyễn Văn Bảo, Q. Gò Vấp, TP. Hồ Chí Minh</p>
                  <p className="text-sm">Khoa Công nghệ Thông tin - Lầu 1 - Nhà H</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gray-300 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm">Điện thoại</p>
                  <p className="text-sm">028. 389.40390 - 167, Email: daotao.fit@iuh.edu.vn</p>
                </div>
              </div>
            </div>

            {/* Students */}
            <div>
              <h3 className="text-lg font-bold mb-4">Sinh viên</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center text-sm hover:text-blue-600">
                    <span className="mr-2">▶</span>
                    <span>Thông báo sinh viên</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-sm hover:text-blue-600">
                    <span className="mr-2">▶</span>
                    <span>Thực tập - Việc làm</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-sm hover:text-blue-600">
                    <span className="mr-2">▶</span>
                    <span>Đăng ký online</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-sm hover:text-blue-600">
                    <span className="mr-2">▶</span>
                    <span>Tài khoản DreamSpark</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Statistics */}
            <div>
              <h3 className="text-lg font-bold mb-4">Thống kê</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center text-sm hover:text-blue-600">
                    <span className="mr-2">▶</span>
                    <span>Thông tin tuyển sinh</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-sm hover:text-blue-600">
                    <span className="mr-2">▶</span>
                    <span>Liên hệ</span>
                  </a>
                </li>
              </ul>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-sm">Số lượt truy cập : 21,191,100</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span className="text-sm">Đang online : 46</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-sm">© 2017 Khoa Công nghệ thông tin - Đại học Công nghiệp Thành phố Hồ Chí Minh</p>
          </div>
          <div className="flex items-center mt-3 md:mt-0">
            <span className="mr-3 text-sm">Chia sẻ</span>
            <div className="flex space-x-2">
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
