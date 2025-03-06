import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  rounded?: "rounded" | "rounded-md" | "rounded-lg" | "rounded-xl" | "rounded-2xl";
  children: React.ReactNode;
  showCloseButton?: boolean;
  isFullscreen?: boolean;
  closeOnOverlayClick?: boolean; // Tambahkan opsi ini
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  rounded = "rounded",
  showCloseButton = true,
  isFullscreen = false,
  closeOnOverlayClick = true, // Default: bisa ditutup dengan klik overlay
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Fungsi untuk menutup modal jika klik di luar modal
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center overflow-y-auto modal z-99999">
          {/* Overlay Background */}
          {!isFullscreen && (
            <motion.div
              className="fixed inset-0 h-full w-full bg-gray-400/50 backdrop-blur-[16px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleOverlayClick}
            />
          )}

          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            className={`relative w-full max-w-lg p-6 ${rounded} bg-white dark:bg-gray-900 shadow-lg ${className}`}
            initial={{ opacity: 0, y: 50 }} // Slide up effect
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }} // Slide down when closing
            transition={{ duration: 0.3, ease: "easeOut" }}
            // onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                ✕
              </button>
            )}

            {/* Modal Content */}
            <div>{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
