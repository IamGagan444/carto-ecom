import { useRef, useEffect, useState } from "react";

const LazyImage = ({ src, alt, className }) => {
  const imageRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(imageRef.current);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isVisible || isLoading ? (
        <img
          ref={imageRef}
          src={isVisible ? src : undefined}
          alt={alt}
          className={`${className} lazy-image transition-opacity duration-500 ${isLoading ? "opacity-0 bg-red-100" : "opacity-100"}`}
          onLoad={handleImageLoad}
        />
      ) : null}
    </div>
  );
};

export default LazyImage;
