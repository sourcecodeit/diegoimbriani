import { ReactNode } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

export default function FadeIn({ children }: { children: ReactNode }) {
  const { ref, isVisible } = useFadeIn();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
}
