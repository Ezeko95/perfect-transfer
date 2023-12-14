import React, { useEffect } from "react";
import { ProductCategory } from "../../assets/products";

interface ProductDetailProps {
  product: ProductCategory;
  closeModal: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  closeModal,
}) => {
  const handleCloseModal = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".modal-content")) {
      closeModal();
    }
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseModal);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleCloseModal, handleKeyDown]);
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg p-8 font-garamond">
        <div className="flex flex-row justify-between">
          <h2 className="text-4xl font-bold">{product.name}</h2>
          <button
            onClick={closeModal}
            className="flex items-center justify-center w-8 h-8 bg-green-600 hover:bg-gray-300 rounded-full text-gray-900 focus:outline-none transform transition-transform hover:scale-110"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="h-80 w-fit mt-4 rounded-md"
        />
        <p className="mt-4">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
