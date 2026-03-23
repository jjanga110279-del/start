import { Link } from "react-router";

export function Button({ variant = "primary", className = "", children, to, ...props }) {
  const baseClass = `btn-${variant} ${className}`;
  if (to) {
    return <Link to={to} className={baseClass} {...props}>{children}</Link>;
  }
  return <button className={baseClass} {...props}>{children}</button>;
}

export function Spinner({ className = "", full = false }) {
  const content = (
    <div className={`flex justify-center items-center py-10 ${className}`}>
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
    </div>
  );

  if (full) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        {content}
      </div>
    );
  }

  return content;
}

export function Container({ className = "", children, ...props }) {
  return (
    <div className={`container mx-auto px-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      <div className="relative bg-zinc-900 rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden border border-white/10">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white z-10 p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-1">
          {children}
        </div>
      </div>
    </div>
  );
}
