import React from "react";
import Header from "./components/Header.jsx";
import NewsSection from "./components/NewsSection.jsx";
import FeaturedNews from "./components/FeaturedNews.jsx";
import InfoCenter from "./components/InfoCenter.jsx";
import BannerSlider from "./components/BannerSlide.jsx";
import { newsData, featuredNewsData, bannerImages } from "./data/newsData";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <BannerSlider images={bannerImages} />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <NewsSection title="TIN TỨC - SỰ KIỆN" news={newsData.events} />
              <NewsSection title="THÔNG BÁO SINH VIÊN" news={newsData.announcements} />
            </div>
          </div>

          <div className="lg:col-span-1">
            <FeaturedNews title="TIN NỔI BẬT" news={featuredNewsData} />

            <InfoCenter title="TRUNG TÂM TIN HỌC" imageUrl="/images/info-center.jpg" />

            <div className="mt-6">
              <h2 className="text-2xl font-bold text-red-800 mb-4">VIDEO GIỚI THIỆU</h2>
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <p className="text-gray-500">Video player sẽ hiển thị ở đây</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
