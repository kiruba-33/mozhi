import React, { useEffect } from 'react';
import { FiX, FiInfo, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import Button from './Button';

export default function NotificationModal({
  isOpen,
  onClose,
  title = 'Information',
  message,
  badge = 'System Notice',
  type = 'info', // 'info' | 'success' | 'alert'
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const icons = {
    info: <FiInfo className="w-5 h-5 text-[#7041D8]" />,
    success: <FiCheckCircle className="w-5 h-5 text-emerald-600" />,
    alert: <FiAlertCircle className="w-5 h-5 text-amber-600" />,
  };

  const badgeBg = {
    info: 'bg-[#F0ECF8] text-[#7041D8]',
    success: 'bg-emerald-50 text-emerald-700',
    alert: 'bg-amber-50 text-amber-700',
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#29243A]/40 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white border border-[#E9E5F0] rounded-2xl max-w-md w-full p-5 sm:p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-3.5 right-3.5 text-[#706B7C] hover:text-[#29243A] p-2 rounded-xl hover:bg-[#F7F5FC] transition-colors w-10 h-10 flex items-center justify-center touch-manipulation"
        >
          <FiX className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 sm:p-2 rounded-xl bg-[#F7F5FC]">
            {icons[type]}
          </div>
          <span className={`text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full ${badgeBg[type]}`}>
            {badge}
          </span>
        </div>

        <h3 className="font-heading text-base sm:text-lg font-bold text-[#29243A] mb-2 pr-6">
          {title}
        </h3>

        <div className="text-xs sm:text-sm text-[#706B7C] leading-relaxed mb-5 sm:mb-6 space-y-2 break-words">
          {typeof message === 'string' ? <p>{message}</p> : message}
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="primary" size="sm" onClick={onClose} className="w-full sm:w-auto justify-center min-h-[42px]">
            Got it
          </Button>
        </div>
      </div>
    </div>
  );
}
