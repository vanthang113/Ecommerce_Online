"use client";

import Image from "next/image";

const categories = [
  { name: "Thời trang", icon: "/categories/thoitrang.webp" },
  { name: "Điện thoại", icon: "/categories/dienthoai.webp" },
  { name: "Laptop", icon: "/categories/laptop.webp" },
  { name: "Đồng hồ", icon: "/categories/dongho.webp" },
  { name: "Giày dép", icon: "/categories/giaydep.webp" },
  { name: "Mỹ phẩm", icon: "/categories/mypham.webp" },
  { name: "Máy ảnh", icon: "/categories/mayanh.webp" },
  { name: "Sách", icon: "/categories/sach.webp" },
];

export default function CategoryGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-6 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 text-center">
      {categories.map((cat, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition"
        >
          <div className="w-16 h-16 relative">
            <Image
              src={cat.icon}
              alt={cat.name}
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-2 text-sm font-medium">{cat.name}</p>
        </div>
      ))}
    </div>
  );
}
