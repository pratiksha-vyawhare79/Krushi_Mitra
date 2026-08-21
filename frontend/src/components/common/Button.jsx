import React from 'react';

export default function Button({ children, onClick, variant = 'primary', className = '', ...props }) {
  const baseStyle = "px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:scale-95";
  
  const variants = {
    primary: "bg-[#2E7D32] hover:bg-[#256427] text-white",
    secondary: "bg-[#66BB6A] hover:bg-[#529e55] text-white",
    accent: "bg-[#F9A825] hover:bg-[#df941d] text-gray-900",
    outline: "border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-green-50",
    danger: "bg-[#E53935] hover:bg-[#c62828] text-white",
    ghost: "text-[#263238] hover:bg-gray-100 shadow-none hover:shadow-none"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
