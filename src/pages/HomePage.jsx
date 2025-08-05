import React from "react";
import { FaArrowRight } from "react-icons/fa";
import pasta from '../../src/assets/pasta.png';
import steak from '../../src/assets/steak.jpg';
import salad from '../../src/assets/salad.jpg';
import rice from '../../src/assets/rice.jpg';
import pizza from '../../src/assets/pizza.jpg';
import chickenkabab from '../../src/assets/chickenkabab.jpg';
export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-[url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')] bg-cover bg-center mt-5 h-[90vh] flex items-center justify-center">
        <div className="bg-zinc-800 bg-opacity-60 p-10 rounded-xl text-center text-white max-w-xl">
          <h1 className="text-5xl font-bold mb-4">קเєςє ๏ภ קlคtє</h1>
          <p className="text-lg mb-6">
            Where every piece tells a story of flavor, freshness, and love.
          </p>
          <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold flex items-center justify-center mx-auto">
            Explore Menu <FaArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Customer Favorites</h2>
        <p className="text-gray-600 mb-10">
          A taste of what keeps our guests coming back for more
        </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg hover:shadow-2xl transition">
            <img
              src={pasta}
              alt="Pasta"
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Creamy Garlic Pasta</h3>
            <p className="text-gray-500 text-sm">
              Rich, creamy, and full of flavor — the perfect comfort food.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg hover:shadow-xl transition">
            <img
              src={steak}
              alt="Steak"
              className="rounded-md mb-4 w-full h-55 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">
              Grilled Peppercorn Steak
            </h3>
            <p className="text-gray-500 text-sm">
              Juicy cuts grilled to perfection, with bold pepper flavors.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg hover:shadow-xl transition">
            <img
              src={salad}
              alt="Salad"
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">
              Seasonal Garden Salad
            </h3>
            <p className="text-gray-500 text-sm">
              Crisp greens, vibrant veggies, and homemade dressing.
            </p>
          </div>
            <div className="bg-gray-100 p-6 rounded-lg hover:shadow-xl transition">
            <img
              src={rice}
              alt="rice"
              className="rounded-md mb-4 w-full h-85 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">
              Delicious Chicken Rice with juicy Kabab
            </h3>
            <p className="text-gray-500 text-sm">
              Crisp greens, vibrant veggies, and homemade dressing.
            </p>
          </div>
            <div className="bg-gray-100 p-6 rounded-lg hover:shadow-xl transition">
            <img
              src={chickenkabab}
              alt="kabab"
              className="rounded-md mb-4 w-full h-60 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">
              Crispy Chicken Kabab
            </h3>
            <p className="text-gray-500 text-sm">
              Crisp greens, vibrant veggies, and homemade dressing.
            </p>
          </div>
            <div className="bg-gray-100 p-6 rounded-lg hover:shadow-xl transition">
            <img
              src={pizza}
              alt="pizza"
              className="rounded-md mb-4 w-full h-65 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">
              chicken supreme chese crsut stuff Pizza
            </h3>
            <p className="text-gray-500 text-sm">
              Crisp greens, vibrant veggies, and homemade dressing.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-orange-50 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At <strong>Piece on Plate</strong>, we believe dining is more than
          eating — it's an experience. With locally sourced ingredients,
          handcrafted dishes, and heartfelt service, we bring you meals worth
          remembering.
        </p>
      </section>

      {/* Contact Call to Action */}
      <section className="py-20 px-6 bg-orange-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Hungry Yet?</h2>
        <p className="mb-6">
          Reserve your table now and savor the flavors of "Piece on Plate"
        </p>
        <button className="bg-white cursor-pointer text-orange-500 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
          Book a Table
        </button>
      </section>
    </div>
  );
}
