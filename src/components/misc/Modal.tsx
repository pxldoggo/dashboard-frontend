import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const close = () => {
    setIsVisible(false);
    closeModal();
  };

  return (
    <>
      {isVisible && <h1>oi</h1>}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/20">
          <div
            className="relative overflow-y-auto rounded-lg shadow-lg bg-white dark:bg-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
            <button className="absolute top-0 right-0 p-6" onClick={close}>
              <svg
                className="w-6 h-6 dark:text-gray-100 text-gray-600"
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
        </div>
      )}
    </>
  );
};

export default Modal;
