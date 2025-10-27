interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export default function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-5 py-3 font-medium whitespace-nowrap transition-all duration-200
        border-2 
        ${
          active
            ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500 shadow-lg shadow-cyan-500/50'
            : 'bg-gray-900/50 text-gray-400 border-gray-700 hover:border-cyan-600 hover:text-cyan-400 hover:bg-gray-800/70'
        }
        ${active ? 'scale-105' : 'hover:scale-102'}
      `}
    >
      {active && (
        <div className="absolute inset-0 bg-cyan-500/10 animate-pulse pointer-events-none" />
      )}
      <span className="relative z-10 tracking-wide uppercase text-sm">
        {children}
      </span>
    </button>
  );
} 