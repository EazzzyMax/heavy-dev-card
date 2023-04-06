import React, { useRef, useEffect } from "react";

const withSmoothDisappear = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P) => {
    const animatedRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          const opacity = Math.min(entry.intersectionRatio * 1.5 - 0.5, 1);

          if (animatedRef.current) {
            animatedRef.current.style.opacity = `${opacity}`;
            // Update other properties here as needed
          }
        },
        { threshold: [...Array(101)].map((_, i) => i / 100) }
      );

      if (animatedRef.current) {
        observer.observe(animatedRef.current);
      }

      return () => {
        if (animatedRef.current) {
          observer.unobserve(animatedRef.current);
        }
      };
    }, []);

    return (
      <div ref={animatedRef}>
        <WrappedComponent {...(props as P)} />
      </div>
    );
  };
};

export default withSmoothDisappear;
