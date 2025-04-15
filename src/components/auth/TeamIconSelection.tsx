import { useMemo, useState, useCallback } from 'react';
import * as GiIcons from 'react-icons/gi';
import { AiOutlineDoubleLeft } from 'react-icons/ai';

interface TeamIconSelectionProps {
  selectedIcon: string;
  selectedColor: string;
  onIconSelect: (iconName: string) => void;
}

export default function TeamIconSelection({ selectedIcon, selectedColor, onIconSelect }: TeamIconSelectionProps) {
  // Get all icon names once
  const iconNames = useMemo(() => Object.keys(GiIcons), []);
  
  // Find current icon index
  const [currentIndex, setCurrentIndex] = useState(() => {
    const index = iconNames.findIndex(name => name === selectedIcon);
    return index >= 0 ? index : Math.floor(Math.random() * iconNames.length);
  });

  // Calculate visible icons
  const visibleIcons = useMemo(() => {
    const start = Math.max(0, currentIndex - 2);
    const end = Math.min(iconNames.length, start + 5);
    return iconNames.slice(start, end);
  }, [currentIndex, iconNames]);

  // Handle navigation
  const handlePrevious = useCallback(() => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => Math.min(iconNames.length - 1, prev + 1));
  }, [iconNames.length]);

  // Render individual icon
  const renderIcon = useCallback((iconName: string) => {
    const Icon = GiIcons[iconName as keyof typeof GiIcons];
    const isSelected = iconName === selectedIcon;
    return Icon ? (
      <Icon 
        className="w-9 h-9" 
        style={{ color: isSelected ? selectedColor : '#6B7280' }} 
      />
    ) : null;
  }, [selectedIcon, selectedColor]);

  return (
    <div className="w-full">
      <label className="block text-white mb-2">Team Icon</label>
      <div className="flex items-center justify-between w-full">
        <button 
          type="button"
          className="p-2 text-white hover:bg-gray-700 rounded-full disabled:opacity-50"
          onClick={handlePrevious}
          disabled={currentIndex <= 0}
        >
          <AiOutlineDoubleLeft className="w-5 h-5" />
        </button>
        
        <div className="flex items-center space-x-4">
          {visibleIcons.map((iconName) => (
            <div
              key={iconName}
              className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
              onClick={() => onIconSelect(iconName)}
            >
              {renderIcon(iconName)}
            </div>
          ))}
        </div>

        <button
          type="button"
          className="p-2 text-white hover:bg-gray-700 rounded-full disabled:opacity-50"
          onClick={handleNext}
          disabled={currentIndex >= iconNames.length - 1}
        >
          <AiOutlineDoubleLeft className="w-5 h-5 transform rotate-180" />
        </button>
      </div>
    </div>
  );
}