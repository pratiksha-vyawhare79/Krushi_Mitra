import React from 'react';

export default function Card({ children, className = '', title, action, icon, ...props }) {
  return (
    <div 
      className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100/80 hover:shadow-md transition-shadow duration-300 ${className}`}
      {...props}
    >
      {(title || action || icon) && (
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            {icon && <span className="text-xl">{icon}</span>}
            {title && <h3 className="text-lg font-bold text-[#263238]">{title}</h3>}
          </div>
          {action && <div className="text-sm font-medium text-[#2E7D32] cursor-pointer hover:underline">{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
}
