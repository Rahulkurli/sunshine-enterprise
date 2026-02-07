import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/products" className="text-orange-400 underline">
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-slate-700 rounded-lg p-8 border-l-4 border-orange-500">
        <h1 className="text-4xl font-bold text-white mb-3">{product.title}</h1>
        <p className="text-orange-300 mb-6">{product.tagline}</p>
        <p className="text-gray-200 mb-6">{product.description}</p>

        <h3 className="text-2xl font-semibold text-white mb-3">Key features</h3>
        <ul className="list-disc ml-5 text-gray-300 space-y-2 mb-6">
          {product.features.map((f, idx) => (
            <li key={idx}>{f}</li>
          ))}
        </ul>

        <div className="flex gap-4">
          <Link
            to="/products"
            className="text-slate-900 bg-orange-400 px-4 py-2 rounded font-semibold hover:opacity-90"
          >
            Back to products
          </Link>
          <a
            href="#contact"
            className="border border-orange-500 text-orange-400 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
