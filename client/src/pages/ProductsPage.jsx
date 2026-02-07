import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            Products
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link
              to={`/products/${p.slug}`}
              key={p.slug}
              className="block bg-slate-700 rounded-lg p-6 border border-slate-600 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-3xl font-bold text-white">{p.title}</div>
                <div className="text-sm text-orange-400 font-semibold">
                  View
                </div>
              </div>
              <p className="text-gray-300 mb-4">{p.tagline}</p>
              <div className="text-sm text-gray-400">{p.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
