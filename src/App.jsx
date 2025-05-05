import { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";

const stickers = [
  { id: 1, title: "Cute Cat", price: 5, image: "/stickers/cute-cat.png" },
  { id: 2, title: "Coffee Lover", price: 4, image: "/stickers/coffee-lover.png" },
  { id: 3, title: "Space Adventure", price: 6, image: "/stickers/space-adventure.png" },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (sticker) => {
    setCart((prev) => [...prev, sticker]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-black text-white font-sans p-6">
      <header className="flex justify-between items-center mb-10">
      <h1 className="text-3xl font-bold text-pink-500">Stickers Shop</h1>
        <div>
          Cart: {cart.length} items (${total})
        </div>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {stickers.map((sticker) => (
          <motion.div
            key={sticker.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-black p-4 rounded-lg shadow-lg"
          >
            <img
              src={sticker.image}
              alt={sticker.title}
              className="w-full h-40 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold">{sticker.title}</h2>
            <p className="text-gray-700">${sticker.price}</p>
            <button
              onClick={() => addToCart(sticker)}
              className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </main>
    </div>
  );
}
