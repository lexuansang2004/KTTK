import React from "react";
import logo from '../assets/logo-fit.png';

export default function Header() {
  return (
    <header className="bg-[#003366] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo FIT" className="h-12 w-auto" />
          <div>
            <h1 className="text-xl font-bold uppercase">
              Khoa Công Nghệ Thông Tin
            </h1>
            <p className="text-sm">Trường Đại học Công nghiệp TP.HCM</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-yellow-300">Trang chủ</a>
          <a href="#" className="hover:text-yellow-300">Giới thiệu</a>
          <a href="#" className="hover:text-yellow-300">Đào tạo</a>
          <a href="#" className="hover:text-yellow-300">Nghiên cứu</a>
          <a href="#" className="hover:text-yellow-300">Tuyển sinh</a>
          <a href="#" className="hover:text-yellow-300">Liên hệ</a>
        </nav>
      </div>
    </header>
  );
}
