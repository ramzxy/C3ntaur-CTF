interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'white' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div 
        className={`animate-spin rounded-full border-t-2 border-b-2 ${sizeClasses[size]}`}
        style={{ borderColor: color }}
      />
    </div>
  );
} 