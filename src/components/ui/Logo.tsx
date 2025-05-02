import React from 'react';
import { GraduationCap } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <GraduationCap size={28} className="text-amber-500" />
    </div>
  );
};

export default Logo;