import { useEffect, useState, useRef, RefObject } from 'react';

interface Options extends IntersectionObserverInit {
  threshold?: number | number[];
}

interface UseIntersectionObserverReturn {
  ref: RefObject<Element | null>;
  isIntersecting: boolean;
  hasIntersected: boolean;
}

const useIntersectionObserver = (options: Options = {}): UseIntersectionObserverReturn => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) setHasIntersected(true);
      },
      { threshold: 0.1, ...options },
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [hasIntersected, options]);

  return { ref, isIntersecting, hasIntersected };
};

export default useIntersectionObserver;
