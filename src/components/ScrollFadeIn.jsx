import { useEffect, useRef, useState } from 'react';
export default function ScrollFadeIn({ children, className = '', delay = 0 }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // If the browser doesn't support IntersectionObserver, render normally immediately
    if (typeof IntersectionObserver === 'undefined') {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -100px 0px', // Slightly before reaching the viewport bounds
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        isIntersecting
          ? 'opacity-100 translate-y-0 filter blur-0'
          : 'opacity-0 translate-y-12 filter blur-[2px]'
      } ${className}`}
    >
      {children}
    </div>
  );
}
