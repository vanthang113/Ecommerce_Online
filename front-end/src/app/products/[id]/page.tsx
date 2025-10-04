"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProductById } from "@/lib/products";
import { addToCart } from "@/lib/cart";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProductById(id as string);
        setProduct(data);
      } catch (error) {
        console.error("Lỗi tải sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Đang tải...</p>;
  if (!product) return <p className="text-center mt-10">Không tìm thấy sản phẩm</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.images?.[0] || "/placeholder.png"}
          alt={product.name}
          className="w-full h-96 object-cover rounded"
        />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-blue-600 text-xl font-semibold mt-2">{product.price} ₫</p>
          <p className="mt-4 text-gray-700">{product.description}</p>

          <button 
            onClick={() =>
                addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                qty: 1,
                image: product.images?.[0],
                })
            }
            className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}
